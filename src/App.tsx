import { Accordion } from './components/Accordion'
import { AppPreview } from './components/AppPreview'
import { BrandMark } from './components/BrandMark'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { appInfo } from './data/appInfo'
import {
  faqs,
  features,
  installationSteps,
  limitations,
  minimumRequirements,
  navLinks,
  permissions,
  processSteps,
  recommendedRequirements,
  researchers,
  screenshots,
  troubleshooting,
} from './data/siteContent'

const screenshotAssets = import.meta.glob<string>('./assets/screenshots/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const academicDisclaimer = 'Campus Connect was developed as an academic capstone project for Bulacan State University – Sarmiento Campus and should not be presented as an official university-issued mobile application unless official authorization is provided.'

function SectionHeading({ title, description, centered = false }: { title: string; description?: string; centered?: boolean }) {
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => <li key={item}><Icon name="check" /><span>{item}</span></li>)}
    </ul>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="status-row" aria-label="Project status">
            <span>Android</span><span>ARCore</span><span>Academic Capstone Project</span>
          </div>
          <h1 id="hero-title">Campus Connect</h1>
          <p className="tagline">{appInfo.tagline}</p>
          <p className="hero-description">AR-powered campus navigation designed to help users find selected buildings, rooms, offices, facilities, and other destinations within Bulacan State University – Sarmiento Campus.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">Explore Features <Icon name="route" /></a>
            <a className="button button-secondary" href="#download">APK Coming Soon <Icon name="arrowDown" /></a>
          </div>
          <p className="hero-note"><Icon name="info" /> Designed for Android 10+ on compatible ARCore devices.</p>
        </div>
        <AppPreview />
      </div>
    </section>
  )
}

function OverviewAndFeatures() {
  return (
    <>
      <section className="section overview" aria-labelledby="overview-title">
        <div className="shell overview-grid">
          <div>
            <SectionHeading title="Campus Navigation, Enhanced with AR" description="Campus Connect is designed for students, faculty, staff, visitors, and other campus users who may need help finding configured destinations within the BulSU Sarmiento Campus." />
            <p className="body-copy">It brings outdoor GPS navigation and indoor predefined routes into one guided experience, with route preparation, QR support, building information, and interactive virtual guides.</p>
          </div>
          <div className="capability-list" aria-label="Campus Connect capabilities">
            {['AR directional guidance', 'Outdoor GPS navigation', 'Indoor predefined routes', 'QR route support', 'Building information', '360° virtual guides'].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features-section" id="features" aria-labelledby="features-title">
        <div className="shell">
          <SectionHeading title="One Guide for Every Part of the Route" description="Explore supported campus destinations, prepare a route, then use the guidance mode configured for each part of the journey." />
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top"><span className="feature-icon"><Icon name={feature.icon} /></span><span className="feature-number">{String(index + 1).padStart(2, '0')}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works" aria-labelledby="process-title">
      <div className="shell">
        <SectionHeading title="From Destination to Direction" description="Campus Connect turns a selected or prepared destination into a guided route in four clear steps." />
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <div className="step-marker" aria-hidden="true"><span>{index + 1}</span></div>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function NavigationModes() {
  return (
    <section className="section modes-section" aria-labelledby="modes-title">
      <div className="shell">
        <SectionHeading title="Two Navigation Modes, One Connected Journey" description="The app uses different information outdoors and indoors so each supported route matches its environment." />
        <div className="modes-grid">
          <article className="mode-card mode-outdoor">
            <div className="mode-head"><span className="mode-icon"><Icon name="compass" /></span><div><p>Across campus</p><h3>Outdoor Navigation</h3></div></div>
            <p>Outdoor guidance begins from the configured Main Gate starting point and follows saved geographic route waypoints.</p>
            <CheckList items={['GPS', 'Device orientation', 'Saved geographic waypoints', 'AR arrows and chevrons']} />
            <div className="mode-note"><Icon name="info" /><span>GPS accuracy can vary depending on the environment.</span></div>
          </article>
          <article className="mode-card mode-indoor">
            <div className="mode-head"><span className="mode-icon"><Icon name="building" /></span><div><p>Inside supported buildings</p><h3>Indoor Navigation</h3></div></div>
            <p>Indoor guidance starts from a configured point and uses the user’s confirmed initial position and orientation.</p>
            <CheckList items={['Predefined start points', 'Local X/Z coordinates', 'Confirmed starting orientation', 'AR directional guidance']} />
            <div className="mode-note"><Icon name="info" /><span><strong>Indoor navigation does not use GPS</strong> for indoor positioning.</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}

function ScreenshotGallery() {
  const availableScreenshots = screenshots.filter((shot) => (
    !('optional' in shot && shot.optional)
    || Boolean(screenshotAssets[`./assets/screenshots/${shot.file}`])
  ))

  const handleGalleryKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    const direction = event.key === 'ArrowRight' ? 1 : -1
    event.currentTarget.scrollBy({ left: direction * event.currentTarget.clientWidth * 0.72, behavior: 'smooth' })
  }

  return (
    <section className="section screenshots-section" id="screenshots" aria-labelledby="screenshots-title">
      <div className="shell">
        <div className="screenshots-head">
          <SectionHeading title="Explore the App" description="See the main Campus Connect screens from route planning through outdoor and indoor navigation." />
          <p className="screenshot-count">{availableScreenshots.length} application screens</p>
        </div>
        <p className="sr-only" id="screenshot-scroll-help">On small screens, swipe, scroll horizontally, or use the left and right arrow keys to view more application screens.</p>
        <div className="screenshot-scroll" role="list" aria-label="Campus Connect application screenshots" aria-describedby="screenshot-scroll-help" tabIndex={0} onKeyDown={handleGalleryKeyDown}>
          {availableScreenshots.map((shot, index) => (
            <article className="screenshot-item" key={shot.title} role="listitem">
              <div className="screenshot-frame">
                {screenshotAssets[`./assets/screenshots/${shot.file}`] ? (
                  <img
                    className="app-screenshot"
                    src={screenshotAssets[`./assets/screenshots/${shot.file}`]}
                    alt={shot.alt}
                    width="1220"
                    height="2712"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="screenshot-placeholder">
                    <span className="shot-grid" aria-hidden="true" />
                    <Icon name={shot.title.includes('AR') ? 'camera' : shot.title.includes('QR') ? 'qr' : shot.title.includes('Building') ? 'building' : shot.title.includes('Virtual') ? 'globe' : 'phone'} />
                    <strong>Screenshot coming soon</strong>
                    <small>{shot.file}</small>
                  </div>
                )}
              </div>
              <div className="screenshot-copy">
                <p className="screenshot-title"><span>{String(index + 1).padStart(2, '0')}</span>{shot.title}</p>
                <p className="screenshot-caption">{shot.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Requirements() {
  return (
    <section className="section requirements-section" id="requirements" aria-labelledby="requirements-title">
      <div className="shell">
        <SectionHeading title="System Requirements" description="Check that your Android device can support the application before installing the official release." />
        <div className="requirements-grid">
          <article className="requirement-card">
            <div className="requirement-label"><span>Minimum</span><Icon name="phone" /></div>
            <h3>Ready to navigate</h3>
            <CheckList items={minimumRequirements} />
          </article>
          <article className="requirement-card recommended-card">
            <div className="requirement-label"><span>Recommended</span><Icon name="shield" /></div>
            <h3>For a smoother experience</h3>
            <CheckList items={recommendedRequirements} />
          </article>
        </div>
        <p className="requirements-note"><Icon name="info" /> Actual performance may vary depending on device hardware, GPS reception, sensor quality, network availability, and environmental conditions.</p>
      </div>
    </section>
  )
}

function Download() {
  const releaseData = [
    ['Platform', 'Android'],
    ['Minimum Android', appInfo.minAndroid],
    ['AR Requirement', 'Google ARCore-compatible device'],
    ['Release', appInfo.releaseAvailable ? appInfo.releaseDate : 'Coming Soon'],
    ['APK Size', appInfo.releaseAvailable ? appInfo.apkSize : 'To be announced'],
    ['Version', appInfo.releaseAvailable ? appInfo.version : 'To be announced'],
  ]

  return (
    <section className="section download-section" id="download" aria-labelledby="download-title">
      <div className="shell download-shell">
        <div className="download-copy">
          <p className="availability"><span aria-hidden="true" /> Pre-release mode</p>
          <h2 id="download-title">Download Campus Connect</h2>
          <p className="download-status">Android APK — Coming Soon</p>
          <p>The official APK download will be enabled here once the final release build is ready.</p>
          {appInfo.releaseAvailable && appInfo.apkUrl ? (
            <a className="button button-light" href={appInfo.apkUrl} download>Download APK <Icon name="download" /></a>
          ) : (
            <button className="button button-disabled" type="button" disabled aria-describedby="release-message">Download Coming Soon</button>
          )}
          <span className="sr-only" id="release-message">The Android application is not yet available for download.</span>
        </div>
        <div className="release-panel">
          <dl className="release-meta">
            {releaseData.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || 'To be announced'}</dd></div>)}
          </dl>
          <div className="qr-placeholder">
            {appInfo.releaseAvailable && appInfo.downloadQrUrl ? (
              <img src={appInfo.downloadQrUrl} alt="QR code for the official Campus Connect APK download" width="160" height="160" />
            ) : <><Icon name="qr" /><p>Download QR Code will be available when the official release link is published.</p></>}
          </div>
          {appInfo.releaseAvailable && appInfo.sha256 && <p className="checksum"><strong>SHA-256</strong><code>{appInfo.sha256}</code></p>}
        </div>
      </div>
    </section>
  )
}

function Guidance() {
  return (
    <>
      <section className="section install-section" aria-labelledby="install-title">
        <div className="shell install-grid">
          <div className="install-intro">
            <SectionHeading title="How to Install" description="These steps will apply once the official Android APK is available from this website." />
            <div className="security-note"><Icon name="shield" /><div><strong>Install from a trusted source</strong><p>Only install Campus Connect from this project website or another source officially provided by the Campus Connect development team.</p></div></div>
          </div>
          <ol className="install-steps">
            {installationSteps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section permissions-section" aria-labelledby="permissions-title">
        <div className="shell">
          <SectionHeading title="Why Campus Connect Needs Permissions" description="Android requests access only when an app feature needs it. Permission availability and wording may vary depending on the Android version and device." />
          <div className="permissions-grid">
            {permissions.map((permission) => (
              <article key={permission.title}><span><Icon name={permission.icon} /></span><h3>{permission.title}</h3><p>{permission.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section limitations-section" aria-labelledby="limitations-title">
        <div className="shell limitations-grid">
          <div><SectionHeading title="Important Navigation Notes" description="A few practical details can help you understand how the current navigation experience behaves." /><div className="signal-illustration" aria-hidden="true"><span /><span /><span /><Icon name="mapPin" /></div></div>
          <ul>
            {limitations.map((item) => <li key={item}><Icon name="info" /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>
    </>
  )
}

function Support() {
  return (
    <section className="section support-section" id="faq" aria-labelledby="support-title">
      <div className="shell">
        <SectionHeading title="Help Along the Way" description="Find practical fixes for common navigation and installation questions, then review the project’s frequently asked questions." />
        <div className="support-grid">
          <div><h3 id="support-title">Troubleshooting</h3><Accordion items={troubleshooting} label="Troubleshooting topics" /></div>
          <div><h3>Frequently Asked Questions</h3><Accordion items={faqs} label="Frequently asked questions" /></div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="shell about-layout">
        <div className="about-main">
          <SectionHeading title="About the Project" />
          <p className="project-title">Campus Connect: A Mobile Based Augmented Reality Application Campus Navigation for Bulacan State University Sarmiento Campus</p>
          <dl className="project-meta">
            <div><dt>Program</dt><dd>Bachelor of Science in Information Technology</dd></div>
            <div><dt>Institution</dt><dd>Bulacan State University – Sarmiento Campus</dd></div>
            <div><dt>Academic context</dt><dd>2026</dd></div>
            <div><dt>Capstone Adviser</dt><dd>Richard Albert C. Salivio</dd></div>
          </dl>
        </div>
        <aside className="team-panel" aria-labelledby="researchers-title">
          <h3 id="researchers-title">Researchers</h3>
          <ul>{researchers.map((researcher) => <li key={researcher}>{researcher}</li>)}</ul>
        </aside>
        <aside className="changelog" aria-labelledby="changelog-title">
          <div className="changelog-head"><div><span>Release notes</span><h3 id="changelog-title">Pre-release</h3></div></div>
          <ul><li>Official website preparation</li><li>Final Android build pending</li><li>Screenshots and APK download will be added after final release preparation</li></ul>
        </aside>
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = navLinks.filter((link) => link.label !== 'Home' && link.label !== 'Screenshots')
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><a className="brand footer-brand" href="#home"><BrandMark /><span>Campus <strong>Connect</strong></span></a><p>{appInfo.tagline}</p></div>
        <div><h2>Explore</h2><nav aria-label="Footer navigation">{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav></div>
        <div className="footer-project"><h2>Academic Capstone Project</h2><p>Bulacan State University<br />Sarmiento Campus</p><p className="footer-disclaimer">{academicDisclaimer}</p></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Campus Connect</span><span>Built for clearer campus journeys.</span></div>
    </footer>
  )
}

export default function App() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <OverviewAndFeatures />
        <HowItWorks />
        <NavigationModes />
        <ScreenshotGallery />
        <Requirements />
        <Download />
        <Guidance />
        <Support />
        <About />
      </main>
      <Footer />
    </>
  )
}
