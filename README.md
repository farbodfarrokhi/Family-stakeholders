# سهم‌بان (Sahm-bân)

اپلیکیشن مدیریت دارایی‌ها، تعهدات و حساب‌های مشترک میان چند نفر. workspace اصلی پروژه در `grok-workspace.zip` نگه‌داری می‌شود و ساختار کلیدی پروژه نیز در ریپو قرار گرفته است.

## اجرای محلی

```bash
npm install
npm run dev
```

## بررسی کیفیت

```bash
npm run typecheck
npm run test
npm run lint
```

## ساخت Android APK

```bash
npm install
npm run build:android
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

فایل APK در `android/app/build/outputs/apk/debug/app-debug.apk` ایجاد می‌شود. GitHub Actions همین مسیر را build و به‌عنوان artifact منتشر می‌کند.

در CI، قبل از تست و build یک اصلاح سازگاری برای `grok-pwa-shared.mjs` اعمال می‌شود تا عنوان واقعی سند بر عنوان پیش‌فرض پلتفرم اولویت داشته باشد؛ این همان خطایی بود که باعث شکست ۶ تست و توقف build APK می‌شد.
