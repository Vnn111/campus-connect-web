export const appInfo = {
  appName: 'Campus Connect',
  tagline: 'Navigate. Explore. Connect.',
  releaseAvailable: false,
  version: '',
  releaseDate: '',
  minAndroid: 'Android 10 / API 29',
  apkSize: '',
  apkUrl: '',
  sha256: '',
  downloadQrUrl: '',
} as const

export type AppInfo = typeof appInfo
