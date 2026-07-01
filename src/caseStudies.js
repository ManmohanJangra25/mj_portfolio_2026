export const caseStudies = [
  {
    slug: 'b2b-platform',
    number: '01',
    title: 'B2B Platform',
    eyebrow: 'Multi-tenant procurement',
    summary: 'An operations dashboard that turns a complex, multi-role procurement workflow into a clear path from request to resolution.',
    image: 'https://images.pexels.com/photos/12843342/pexels-photo-12843342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageAlt: 'Modern office architecture representing connected B2B operations',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'WebSockets', 'Tailwind'],
    facts: [
      ['Role', 'Frontend engineering'],
      ['Product', 'Operations dashboard'],
      ['Users', '4 role-based personas'],
      ['Focus', 'Performance + clarity'],
    ],
    metrics: [
      { value: '30%', label: 'faster dashboard load' },
      { value: '42%', label: 'smaller JavaScript bundle' },
      { value: '4', label: 'distinct role-based experiences' },
    ],
    challenge: {
      title: 'One workflow. Four very different views.',
      body: [
        'Procurement software has an information-density problem: every request carries status, ownership, approvals, documents, exceptions, and an audit trail. Showing all of it at once makes the interface technically complete but operationally slow.',
        'The platform also served four personas with different permissions and priorities. The core challenge was to keep one coherent product model while making every screen feel purpose-built for the person using it.',
      ],
    },
    approach: [
      {
        index: '01',
        title: 'Model permissions before pixels',
        text: 'A role-capability matrix defined what each persona could see, edit, approve, and escalate. UI states were derived from capabilities instead of scattered role checks, keeping permissions consistent as workflows evolved.',
      },
      {
        index: '02',
        title: 'Design around decisions',
        text: 'Dashboard modules were ranked by the next decision a user needed to make. Status, blockers, and ownership stayed visible; secondary history and metadata moved into progressive disclosure patterns.',
      },
      {
        index: '03',
        title: 'Make performance structural',
        text: 'Routes and heavy workflow modules were split at natural product boundaries. Dependency pruning, tree-shaking, and an asset audit reduced the amount of JavaScript required before the first useful interaction.',
      },
      {
        index: '04',
        title: 'Keep changes current',
        text: 'WebSocket events updated affected records without forcing full-list refetches. Redux Toolkit provided a normalized state layer so live changes remained predictable across dashboard views.',
      },
    ],
    architecture: [
      ['01', 'Node.js API', 'Returns tenant-scoped workflow data and capability rules.'],
      ['02', 'Redux Toolkit', 'Normalizes entities and coordinates server and live-event updates.'],
      ['03', 'WebSocket layer', 'Pushes focused status changes into the active workspace.'],
      ['04', 'React UI', 'Composes the permitted actions and views for each persona.'],
    ],
    outcome: 'The result was a faster dashboard with a smaller delivery footprint and a UI model that could support four personas without fragmenting into four separate products.',
    lesson: 'Role-based products become easier to scale when permissions are treated as domain data—not component-level conditionals.',
  },
  {
    slug: 'realtime-financial-dashboard',
    number: '02',
    title: 'Real-Time Financial Dashboard',
    eyebrow: 'Low-latency market interface',
    summary: 'A high-density market dashboard that keeps institutional analysts close to live data without sacrificing interaction speed.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3ODI4MDcwODF8MA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Dark analytics dashboard with charts and data visualizations',
    stack: ['React', 'WebSockets', 'D3', 'Web Workers', 'Zustand'],
    facts: [
      ['Role', 'Frontend engineering'],
      ['Product', 'Live market dashboard'],
      ['Audience', 'Institutional analysts'],
      ['Focus', 'Latency + rendering'],
    ],
    metrics: [
      { value: '<200ms', label: 'live-grid update latency' },
      { value: '30', label: 'symbols updating concurrently' },
      { value: '5k+', label: 'rows rendered smoothly' },
    ],
    challenge: {
      title: 'Fresh data is useless if the interface falls behind.',
      body: [
        'A live financial surface has two clocks: the stream producing market changes and the browser trying to display them. When every tick triggers expensive reconciliation, the UI becomes the bottleneck precisely when the market becomes most active.',
        'The dashboard needed to keep a 30-symbol grid below 200ms update latency while still supporting filtering, sorting, inspection, and more than 5,000 visible records without dropped frames.',
      ],
    },
    approach: [
      {
        index: '01',
        title: 'Separate ingestion from rendering',
        text: 'WebSocket messages entered a dedicated data pipeline instead of updating components directly. This kept transport frequency independent from the cadence at which React committed visual changes.',
      },
      {
        index: '02',
        title: 'Move diffing off the main thread',
        text: 'A Web Worker compared incoming snapshots, calculated focused patches, and returned only meaningful changes. The main thread stayed available for pointer, keyboard, and scrolling interactions.',
      },
      {
        index: '03',
        title: 'Render only what exists on screen',
        text: 'Row virtualization constrained DOM work to the visible window. Stable row identities and memoized cells prevented unrelated instruments from re-rendering when a single value moved.',
      },
      {
        index: '04',
        title: 'Use the right tool for each layer',
        text: 'Zustand handled focused interface state, D3 supplied calculation primitives, and React remained responsible for composition. Each layer stayed small enough to reason about under load.',
      },
    ],
    architecture: [
      ['01', 'Market stream', 'Delivers continuous symbol updates over WebSockets.'],
      ['02', 'Worker pipeline', 'Normalizes, diffs, and batches updates away from the main thread.'],
      ['03', 'State boundary', 'Publishes compact patches to the relevant interface subscribers.'],
      ['04', 'Virtualized grid', 'Paints the current viewport and preserves fluid interaction.'],
    ],
    outcome: 'The final pipeline kept a 30-symbol live grid under 200ms while smoothly presenting more than 5,000 rows—without making the interface feel like a passive data feed.',
    lesson: 'Real-time UI performance improves when data frequency, state frequency, and paint frequency are designed as three separate concerns.',
  },
  {
    slug: 'webflow-react-hybrid',
    number: '03',
    title: 'Webflow + React Hybrid',
    eyebrow: 'Composable web architecture',
    summary: 'A hybrid delivery model that gives marketing the speed of Webflow and product teams the depth of React—under one domain and one user journey.',
    image: 'https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3ODI4MDcwODB8MA&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Abstract geometric architecture representing a hybrid web platform',
    stack: ['React', 'Webflow', 'Vite', 'Module Federation', 'Cloudflare'],
    facts: [
      ['Role', 'Frontend architecture'],
      ['Product', 'Marketing + product web'],
      ['Delivery', 'Single-domain hybrid'],
      ['Focus', 'Team autonomy'],
    ],
    metrics: [
      { value: '40%', label: 'faster marketing iteration' },
      { value: 'Hours', label: 'to publish new pages' },
      { value: '1', label: 'shared domain and journey' },
    ],
    challenge: {
      title: 'Two teams needed different kinds of speed.',
      body: [
        'Marketing needed to publish and revise campaign pages without waiting for an engineering cycle. Product needed the state management, testing, and component architecture of React. Forcing either team into the other’s toolchain slowed both down.',
        'The architectural goal was not merely to place two sites beside each other. Authentication, analytics, navigation, performance, and the domain boundary still had to feel like one deliberate product.',
      ],
    },
    approach: [
      {
        index: '01',
        title: 'Draw a clear ownership boundary',
        text: 'Webflow owned editorial and campaign surfaces; React owned authenticated and interaction-heavy product experiences. URL conventions made that boundary legible to teams and infrastructure.',
      },
      {
        index: '02',
        title: 'Share the experience layer',
        text: 'Design tokens, navigation rules, analytics events, and authentication state formed the contract between surfaces. Users encountered one brand and one journey even though teams shipped independently.',
      },
      {
        index: '03',
        title: 'Compose where it adds value',
        text: 'Vite and Module Federation enabled selected React capabilities to appear across boundaries without turning every marketing page into a JavaScript application.',
      },
      {
        index: '04',
        title: 'Route at the edge',
        text: 'Cloudflare handled path-based delivery on a single domain. The routing layer kept deployment ownership separate while preserving shared cookies, analytics continuity, and clean public URLs.',
      },
    ],
    architecture: [
      ['01', 'Cloudflare edge', 'Routes each request to the correct independently deployed surface.'],
      ['02', 'Webflow', 'Owns fast-moving editorial and campaign content.'],
      ['03', 'React application', 'Owns authenticated workflows and complex interaction.'],
      ['04', 'Shared contract', 'Aligns identity, tokens, navigation, and analytics across both.'],
    ],
    outcome: 'Marketing could ship pages in hours and iterate 40% faster without engineering tickets, while product retained a robust React architecture—all on a shared domain with common authentication and analytics.',
    lesson: 'A hybrid platform succeeds when its boundaries are explicit in the architecture but invisible in the customer journey.',
  },
]

export const getCaseStudy = (slug) => caseStudies.find((study) => study.slug === slug)
