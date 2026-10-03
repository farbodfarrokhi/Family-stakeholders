import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

const workspace = resolve(process.argv[2] ?? ".");
const vitePath = join(workspace, "vite.config.ts");
const vite = await readFile(vitePath, "utf8");

if (!vite.includes("process.env.SAHMBAN_ANDROID")) {
  const marker = 'export default defineConfig(({ command, isPreview }) => ({';
  const replacement = `const isAndroidBuild = process.env.SAHMBAN_ANDROID === "1";\n\nexport default defineConfig(({ command, isPreview }) => ({`;
  if (!vite.includes(marker)) throw new Error("vite.config.ts marker not found");
  let patched = vite.replace(marker, replacement);
  patched = patched.replace(
    "tanstackStart(),",
    "tanstackStart({ spa: isAndroidBuild ? { enabled: true } : undefined }),",
  );
  patched = patched.replace(
    "...(command === \"build\" || isPreview\n      ? [\n          nitro({",
    "...(isAndroidBuild ? [] : command === \"build\" || isPreview\n      ? [\n          nitro({",
  );
  await writeFile(vitePath, patched);
}

// TanStack Start SPA mode emits a static shell rather than a conventional index.html.
// Capacitor needs an index.html entry point, so copy the generated static tree and rename
// the shell. The search is deliberately recursive because output layout can change between
// TanStack/Nitro versions.
async function findFile(dir, filename) {
  const { readdir } = await import("node:fs/promises");
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const p = join(dir, entry.name);
    if (entry.isFile() && entry.name === filename) return p;
    if (entry.isDirectory()) {
      const found = await findFile(p, filename);
      if (found) return found;
    }
  }
  return null;
}

const shell = await findFile(workspace, "_shell.html");
if (!shell) throw new Error("TanStack Start SPA build did not produce _shell.html");

const staticRoot = resolve(shell, "..");
const webDir = join(workspace, "android-web");
await mkdir(webDir, { recursive: true });
await cp(staticRoot, webDir, { recursive: true, force: true });
await cp(shell, join(webDir, "index.html"));

// Capacitor's config is intentionally generated here so the source workspace remains
// deployable as a normal web app while the Android build is deterministic.
const config = `import type { CapacitorConfig } from "@capacitor/cli";\n\nconst config: CapacitorConfig = {\n  appId: "ir.sahmban.app",\n  appName: "سهم‌بان",\n  webDir: "android-web",\n  bundledWebRuntime: false,\n  server: { cleartext: true },\n};\n\nexport default config;\n`;
await writeFile(join(workspace, "capacitor.config.ts"), config);

console.log(`Android web bundle prepared from ${staticRoot}`);
