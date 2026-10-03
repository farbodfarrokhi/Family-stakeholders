import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const publicDir = join(process.cwd(), ".output", "public");
const shell = join(publicDir, "_shell.html");
const index = join(publicDir, "index.html");
if (!existsSync(shell)) throw new Error(`TanStack Start SPA shell not found: ${shell}`);
mkdirSync(publicDir, { recursive: true });
copyFileSync(shell, index);
console.log(`Prepared Capacitor entrypoint: ${index}`);
