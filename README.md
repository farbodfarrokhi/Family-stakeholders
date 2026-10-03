# سهم‌بان (Sahm-bân)

اپلیکیشن مدیریت دارایی‌ها، تعهدات و حساب‌های مشترک میان چند نفر. این workspace منبع اصلی پروژه است و برای وب و بسته‌بندی Android با Capacitor آماده شده است.

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

فایل APK در `android/app/build/outputs/apk/debug/app-debug.apk` ایجاد می‌شود. GitHub Actions نیز همین مسیر را به‌صورت خودکار build و به‌عنوان artifact منتشر می‌کند.
