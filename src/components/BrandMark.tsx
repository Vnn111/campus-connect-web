import { Icon } from './Icon'

const logoAssets = import.meta.glob<string>('../assets/branding/campus-connect-logo.{svg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logoUrl = Object.values(logoAssets)[0]

export function BrandMark() {
  return (
    <span className={`brand-mark${logoUrl ? ' brand-mark-custom' : ''}`} aria-hidden="true">
      {logoUrl ? <img src={logoUrl} alt="" width="40" height="40" /> : <Icon name="mapPin" />}
    </span>
  )
}
