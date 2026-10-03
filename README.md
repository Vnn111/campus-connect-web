# Campus Connect website

Public-facing website for **Campus Connect: A Mobile Based Augmented Reality Application Campus Navigation for Bulacan State University Sarmiento Campus**.

The site is currently in pre-release mode. It does not provide an APK download until verified release information is added.

## Run locally

```powershell
npm install
npm run dev
```

Open the local address printed by Vite.

## Production build

```powershell
npm run build
npm run preview
```

The deployable files are generated in `dist/`.

## Publish an APK release

Edit `src/data/appInfo.ts` and set:

- `releaseAvailable` to `true`
- `version`
- `releaseDate`
- `apkSize`
- `apkUrl`
- `sha256`
- `downloadQrUrl`

Keep `releaseAvailable` set to `false` until all release values and files have been verified.

## Add screenshots

Place optimized screenshots in `src/assets/screenshots/` using the filenames documented in that folder's `README.md`. The gallery discovers matching files automatically and keeps the labeled fallback for any image that is still missing.

## Before public deployment

Replace `https://campus-connect.example/` with the final public URL in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

The `.example` domain is reserved and cannot become a live public URL.
