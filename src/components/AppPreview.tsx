import { heroScreenshotFile } from '../data/siteContent'

const screenshotAssets = import.meta.glob<string>('../assets/screenshots/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function AppPreview() {
  const heroScreenshot = screenshotAssets[`../assets/screenshots/${heroScreenshotFile}`]

  return (
    <figure className="preview-stage" aria-labelledby="preview-caption">
      <div className="preview-field">
        <div className="phone-frame">
          {heroScreenshot ? (
            <img
              className="hero-screenshot"
              src={heroScreenshot}
              alt="Campus Connect home screen showing AR Navigation, Virtual Guide, Building Information, and Plan a Route options."
              width="1220"
              height="2712"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div className="hero-screenshot-fallback" role="img" aria-label="Campus Connect application screenshot unavailable">
              Application preview unavailable
            </div>
          )}
        </div>
      </div>
      <figcaption id="preview-caption">Campus Connect home screen</figcaption>
    </figure>
  )
}
