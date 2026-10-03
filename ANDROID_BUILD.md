# ساخت APK سهم‌بان

این ریپو فعلاً workspace کامل پروژه را در `grok-workspace.zip` نگه می‌دارد. برای جلوگیری از تغییر ناخواسته نسخه وب، workflow اندروید در CI ابتدا workspace را استخراج می‌کند، آن را typecheck/test/lint می‌کند، TanStack Start را در SPA mode می‌سازد و سپس با Capacitor 8 یک پروژه Android موقت تولید می‌کند.

خروجی اصلی workflow:

- `sahmban-debug-apk` → فایل `app-debug.apk`
- `sahmban-android-project` → پروژه Android تولیدشده برای بررسی در Android Studio

برای هر push به `main` یا اجرای دستی workflow، build انجام می‌شود. APK حاصل از GitHub Actions به‌صورت Artifact قابل دریافت است.

## معماری build

`grok-workspace.zip` → استخراج workspace → `npm install` → typecheck/test/lint → TanStack Start SPA shell → Capacitor sync → Gradle → APK

نسخه وب همچنان از همان workspace اصلی و ساختار SSR فعلی استفاده می‌کند؛ SPA mode فقط هنگام build اندروید فعال می‌شود.
