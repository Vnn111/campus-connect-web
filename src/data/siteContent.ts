export type IconName =
  | 'camera'
  | 'compass'
  | 'building'
  | 'qr'
  | 'info'
  | 'globe'
  | 'mapPin'
  | 'route'
  | 'phone'
  | 'wifi'
  | 'shield'
  | 'image'
  | 'check'
  | 'alert'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#requirements', label: 'Requirements' },
  { href: '#download', label: 'Download' },
  { href: '#faq', label: 'FAQ' },
  { href: '#about', label: 'About' },
] as const

export const features: Array<{ icon: IconName; title: string; description: string }> = [
  { icon: 'camera', title: 'AR Navigation', description: 'Follow visual directional guidance through the smartphone camera.' },
  { icon: 'compass', title: 'Outdoor Navigation', description: 'Use GPS, device orientation, and configured route waypoints to navigate supported outdoor destinations.' },
  { icon: 'building', title: 'Indoor Navigation', description: 'Continue toward supported rooms using predefined indoor starting points and local route coordinates.' },
  { icon: 'qr', title: 'Plan a Route & QR', description: 'Select a destination, prepare a route, and generate or scan supported Campus Connect QR information.' },
  { icon: 'info', title: 'Building Information', description: 'Explore available details about configured buildings, rooms, offices, and facilities.' },
  { icon: 'globe', title: 'Virtual Guide', description: 'Preview selected campus routes and locations through interactive 360-degree sphere imagery.' },
]

export const processSteps = [
  { title: 'Choose a Destination', description: 'Select a supported building or room.' },
  { title: 'Prepare or Load the Route', description: 'Prepare a route through Plan a Route or scan supported Campus Connect QR information.' },
  { title: 'Start AR Navigation', description: 'Allow the required camera and location permissions and begin navigation.' },
  { title: 'Follow the Guidance', description: 'Follow outdoor AR guidance and, when supported, continue to the configured indoor destination.' },
]

// Change this one filename to 'Outdoor Navigation.jpg' when a clean release
// screenshot is ready for the hero.
export const heroScreenshotFile = 'UserHomeScreen.jpg'

export const screenshots = [
  {
    title: 'Home',
    file: 'UserHomeScreen.jpg',
    caption: 'Access AR Navigation, Virtual Guide, Building Information, and route planning from the main menu.',
    alt: 'Campus Connect home screen showing AR Navigation, Virtual Guide, Building Information, and Plan a Route options.',
  },
  {
    title: 'Plan a Route',
    file: 'Plan a Route.jpg',
    caption: 'Select a supported building and room destination before preparing the navigation route.',
    alt: 'Campus Connect Plan a Route screen with Building B and ITDS Faculty selected.',
  },
  {
    title: 'Route QR Code',
    file: 'QR Code.jpg',
    caption: 'Generate route information that can be saved or loaded through AR Navigation.',
    alt: 'Campus Connect generated route QR code for Building B and ITDS Faculty.',
  },
  {
    title: 'Outdoor AR Navigation',
    file: 'Outdoor Navigation.jpg',
    caption: 'Follow AR directional markers along configured outdoor campus routes.',
    alt: 'Campus Connect outdoor AR navigation showing blue directional chevrons on the campus walkway.',
  },
  {
    title: 'Outdoor-to-Indoor Transition',
    file: 'Building Reach.jpg',
    caption: 'Continue from outdoor navigation to a supported indoor destination after reaching the selected building.',
    alt: 'Campus Connect notification showing the user has reached Building B and can continue indoors.',
  },
  {
    title: 'Indoor AR Navigation',
    file: 'Indoor Navigation.jpg',
    caption: 'Follow predefined indoor route guidance toward the selected room.',
    alt: 'Campus Connect indoor navigation showing a red AR arrow guiding toward Room 203.',
  },
  {
    title: 'Building Information',
    file: 'Building Informaiton.jpg',
    caption: 'View available information about campus buildings, facilities, and supported locations.',
    alt: 'Campus Connect Building Information screen showing Building B details and number of floors.',
  },
  {
    title: 'Virtual Guide',
    file: 'Virtual Guide.jpg',
    caption: 'Preview configured campus route steps through interactive 360-degree location imagery.',
    alt: 'Campus Connect Virtual Guide showing Gate to Building A route step and 360-degree campus imagery.',
  },
  {
    title: 'Login',
    file: 'Login.jpg',
    caption: 'Access Campus Connect using a registered account.',
    alt: 'Campus Connect login screen with email and password fields.',
  },
  {
    title: 'Destination Reached',
    file: 'arrival.jpg',
    caption: 'Confirm arrival at the selected destination and complete the navigation session.',
    alt: 'Campus Connect destination reached screen confirming arrival at the selected destination.',
    optional: true,
  },
] as const

export const minimumRequirements = [
  'Android 10 / API Level 29 or later',
  'ARCore-compatible Android smartphone',
  '4 GB RAM',
  'Rear-facing camera',
  'GPS/location capability',
  'Supported device orientation sensors',
  'Wi-Fi or mobile data',
  'Sufficient available storage',
]

export const recommendedRequirements = [
  'Android 12 or later',
  '6 GB RAM or higher',
  'Modern ARCore-supported Android device',
  'Reliable GPS reception',
  'Stable Wi-Fi or mobile data',
  'Sufficient available storage',
]

export const installationSteps = [
  'Download the official Campus Connect APK from this website once it becomes available.',
  'Open the downloaded APK file.',
  'If Android requests permission to install apps from the browser or file manager, allow it for the source being used.',
  'Tap Install.',
  'Open Campus Connect after installation.',
  'Grant the required permissions when requested.',
  'Sign in or create an account.',
  'Select a destination, prepare a route, or scan supported Campus Connect QR information.',
  'Follow the application’s navigation instructions.',
]

export const permissions: Array<{ icon: IconName; title: string; description: string }> = [
  { icon: 'camera', title: 'Camera', description: 'Used for augmented reality navigation and QR code scanning.' },
  { icon: 'mapPin', title: 'Location', description: 'Used to determine the device’s outdoor location during GPS-based navigation.' },
  { icon: 'wifi', title: 'Internet', description: 'Used for account authentication and cloud-based application data and content.' },
  { icon: 'image', title: 'Photos / Media', description: 'Certain save, upload, or image-related functions may request access when required by the Android version and feature being used.' },
]

export const limitations = [
  'GPS accuracy can vary near buildings, covered areas, and locations with weak satellite reception.',
  'AR direction alignment can be affected by device sensor accuracy and environmental interference.',
  'Indoor navigation is available only for configured buildings, rooms, routes, and starting points.',
  'Indoor navigation relies on the correct configured starting point and initial orientation.',
  'Campus routes may require updates when the physical campus layout changes.',
  'Campus Connect currently targets compatible Android devices.',
  'Some application content and cloud functions require network connectivity.',
]

export const troubleshooting = [
  { question: 'The APK will not install', answer: 'The APK has not yet been released. Once released, verify the Android version, available storage, and installation permission for the browser or file manager used to download the official APK.' },
  { question: 'AR does not start', answer: 'Check camera permission, ARCore compatibility, and required Google AR components or services on the Android device.' },
  { question: 'Outdoor location seems inaccurate', answer: 'Move to a more open area, ensure location services are enabled, and allow time for GPS accuracy to improve.' },
  { question: 'The AR direction appears misaligned', answer: 'Ensure the device sensors have stabilized and use the Recenter function when appropriate.' },
  { question: 'Indoor guidance does not match my position', answer: 'Confirm that the correct indoor starting point was selected and follow the initial orientation instructions before proceeding.' },
  { question: 'Some destinations are unavailable', answer: 'Only campus buildings, rooms, routes, and destinations configured in the current system are available.' },
]

export const faqs = [
  { question: 'Is Campus Connect available now?', answer: 'The website is in pre-release mode and the final Android APK will be published once the final build is ready.' },
  { question: 'Is Campus Connect available for iPhone?', answer: 'The current project targets compatible Android devices.' },
  { question: 'What Android version is required?', answer: 'Android 10 / API Level 29 or later is the minimum target requirement.' },
  { question: 'Does Campus Connect require ARCore?', answer: 'Yes. The device must support Google ARCore for the AR navigation features.' },
  { question: 'Does Campus Connect need internet access?', answer: 'Some cloud-based functions such as authentication, retrieving application data, and loading supported online content require internet access. Outdoor positioning itself uses the device’s GPS and sensors.' },
  { question: 'Does indoor navigation use GPS?', answer: 'No. Indoor navigation uses configured starting points and predefined local route coordinates.' },
  { question: 'Why might GPS navigation be inaccurate?', answer: 'GPS accuracy may be affected by nearby buildings, covered areas, satellite visibility, the device, and environmental conditions.' },
  { question: 'Is this an official Bulacan State University application?', answer: 'Campus Connect was developed as an academic capstone project for Bulacan State University – Sarmiento Campus. It should not be presented as an official university-issued application unless official authorization is provided.' },
  { question: 'Where will I download the APK?', answer: 'The official download will be provided through this website once the final release is available.' },
]

export const researchers = [
  'Alvin Clyde L. Biong',
  'Christian B. Corpuz',
  'Glen Russell T. Gallano',
  'Renz Morales',
  'Neil Jyve C. Tadlas',
  'Raiven V. Torres',
]
