// ─────────────────────────────────────────────────────────────
// Portfolio content — edit this file to update site copy, links,
// images, and social URLs without touching components.
// ─────────────────────────────────────────────────────────────

import type { SkillIconId } from '../lib/skillIcons';

export const site = {
  name: 'Mar Thayne Lowell Nacionales',
  shortName: 'MTLN',
  title: 'Mar Thayne Lowell Nacionales | Digital Marketing, Automation, Funnels & Web Systems',
  description:
    'Digital marketing and marketing-automation portfolio spanning research, social content, lead generation, funnels, email nurture, CRM workflows, analytics, and the technical web systems behind them.',
  location: 'Pasig, Philippines',
  tagline: 'Digital Marketing · Automation · Funnels · Web Systems',
  heroHeadline: 'Building marketing systems that turn attention into action.',
  shortPitch:
    'I plan and execute digital marketing, social content, lead generation, funnels, email nurture, automation, and conversion-focused web experiences — with the technical skills to build and troubleshoot the systems behind them.',
  availability:
    'Open to digital marketing, marketing automation, funnel, growth, and web-experience opportunities.',
  currentFocus:
    'Marketing automation, content systems, funnels, lead generation, and the web infrastructure behind them.',
  valueProps: [
    'Research audiences and competitors before turning strategy into campaigns and content.',
    'Build connected lead-generation systems across landing pages, email nurture, CRM workflows, and booking paths.',
    'Use development and technical troubleshooting as an execution advantage — not as the only focus of the work.',
  ],
  stats: [
    { label: 'Marketing work', value: 'Full library', context: 'Research, social, email, automation, SOPs, funnels, lead magnets, websites, and analytics.' },
    { label: 'Browse two ways', value: 'Type + brand', context: 'Every work type stays distinct while related work remains connected by brand.' },
    { label: 'Technical edge', value: 'Build + troubleshoot', context: 'Web implementation, responsive QA, deployment, and workflow debugging support the marketing work.' },
    { label: 'Availability', value: 'Open now', context: 'Remote marketing, automation, funnel, growth, and web-system roles.' },
  ],
  resumeUrl: '/resume.pdf',
  resumeTitle: 'Resume — Mar Thayne Lowell Nacionales',
  photoUrl: '/portrait.png',
  email: 'marthnacionales@gmail.com',
  phone: '',
};

export const navLinks = [
  { label: 'Marketing Work', href: '#marketing' },
  { label: 'Skills', href: '#skills' },
  { label: 'Web Builds', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/thayl0w', icon: 'github' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'email' },
];

// LinkedIn About section — paste your exact LinkedIn About text here
export const about = {
  paragraphs: [
    'My work starts with the business path: who the audience is, what they need to understand, what should move them to act, and what has to happen after they respond.',
    'That can mean research and social content at the top of the funnel, a lead magnet or landing page for capture, email nurture and CRM automation for follow-up, and a booking or consultation path for the next step.',
    'The technical side strengthens that work. I can implement responsive pages, troubleshoot forms and workflows, test routes, work with repositories, and ship web projects instead of stopping at recommendations.',
  ],
};

export const experience = [
  {
    title: 'Marketing Automation, Digital Marketing & Web Development',
    company: 'Independent Contractor · Self-Employed',
    period: '2023 – Present',
    location: 'Remote · Philippines',
    bullets: [
      'Built and optimized lead-generation funnels, landing pages, and responsive web assets across marketing campaigns.',
      'Configured CRM forms, lead-management flows, email/SMS nurture sequences, and automated follow-up in GoHighLevel and Systeme.io.',
      'Produced social content, ad creative, lead magnets, conversion-focused copy, and supporting campaign assets.',
      'Tested forms, links, responsive layouts, funnels, and deployments; documented fixes and repeatable processes through SOPs.',
    ],
  },
  {
    title: 'Software Development Student',
    company: 'Brigham Young University – Idaho',
    period: '2024 – Present',
    location: 'Rexburg, Idaho · Online',
    bullets: [
      'Completed software-development coursework in web development, databases, and software engineering.',
      'Built full-stack applications with HTML, CSS, JavaScript, Node.js, and PostgreSQL.',
      'Worked on team projects with Git, reviews, and iterative delivery.',
    ],
  },
  {
    title: 'Missionary Volunteer',
    company: 'The Church of Jesus Christ of Latter-day Saints',
    period: '2021 – 2023',
    location: 'Philippines',
    bullets: [
      'Served full-time for two years teaching, mentoring, and coordinating daily outreach.',
      'Managed schedules, goals, and reporting in a self-directed environment.',
    ],
  },
  {
    title: 'Budget Office Intern',
    company: 'City Hall of Bato',
    period: 'Jan 2019 – Mar 2019',
    location: 'Philippines',
    bullets: [
      'Prepared and reviewed budget reports, financial documents, and official correspondence for municipal departments.',
      'Reorganized physical and digital filing systems and provided day-to-day administrative support.',
    ],
  },
];

export interface Skill {
  id: SkillIconId;
  name: string;
  url: string;
  iconType: 'brand' | 'asset';
}

export type SkillCategoryId = 'marketing' | 'web' | 'design' | 'productivity';

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'marketing',
    title: 'Digital Marketing & Automation',
    description: 'Campaign, CRM, lead-generation, automation, SEO, and conversion tools.',
    skills: [
      { id: 'meta', name: 'Meta Ads Manager', url: 'https://adsmanager.facebook.com', iconType: 'brand' },
      { id: 'gohighlevel', name: 'GoHighLevel', url: 'https://www.gohighlevel.com', iconType: 'asset' },
      { id: 'systemeio', name: 'Systeme.io', url: 'https://systeme.io', iconType: 'asset' },
      { id: 'clickfunnels', name: 'ClickFunnels', url: 'https://www.clickfunnels.com', iconType: 'asset' },
      { id: 'gorgias', name: 'Gorgias', url: 'https://www.gorgias.com', iconType: 'asset' },
      { id: 'seo', name: 'SEO', url: 'https://developers.google.com/search', iconType: 'brand' },
      { id: 'jotform', name: 'Jotform', url: 'https://www.jotform.com', iconType: 'asset' },
      { id: 'googleforms', name: 'Google Forms', url: 'https://www.google.com/forms/about/', iconType: 'asset' },
      { id: 'zapier', name: 'Zapier', url: 'https://zapier.com', iconType: 'brand' },
      { id: 'mailchimp', name: 'Mailchimp', url: 'https://mailchimp.com', iconType: 'brand' },
      { id: 'klaviyo', name: 'Klaviyo', url: 'https://www.klaviyo.com', iconType: 'asset' },
    ],
  },
  {
    id: 'design',
    title: 'Design & Content Creation',
    description: 'Visual design, carousels, ads, and before/after graphics.',
    skills: [
      { id: 'canva', name: 'Canva', url: 'https://www.canva.com', iconType: 'asset' },
      { id: 'figma', name: 'Figma', url: 'https://www.figma.com', iconType: 'brand' },
      { id: 'capcut', name: 'CapCut', url: 'https://www.capcut.com', iconType: 'asset' },
      { id: 'adobephotoshop', name: 'Adobe Photoshop', url: 'https://www.adobe.com/products/photoshop.html', iconType: 'asset' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development & Programming',
    description: 'Technical execution for responsive pages, integrations, troubleshooting, and deployment.',
    skills: [
      { id: 'html5', name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', iconType: 'brand' },
      { id: 'css3', name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', iconType: 'brand' },
      { id: 'tailwindcss', name: 'Tailwind CSS', url: 'https://tailwindcss.com', iconType: 'brand' },
      { id: 'javascript', name: 'JavaScript (ES6+)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', iconType: 'brand' },
      { id: 'python', name: 'Python', url: 'https://www.python.org', iconType: 'brand' },
      { id: 'astro', name: 'Astro.js', url: 'https://astro.build', iconType: 'brand' },
      { id: 'nodejs', name: 'Node.js', url: 'https://nodejs.org', iconType: 'brand' },
      { id: 'mysqlcolor', name: 'MySQL', url: 'https://www.mysql.com', iconType: 'asset' },
      { id: 'postgresql', name: 'PostgreSQL', url: 'https://www.postgresql.org', iconType: 'brand' },
      { id: 'github', name: 'Git & GitHub', url: 'https://github.com', iconType: 'brand' },
      { id: 'wordpress', name: 'WordPress', url: 'https://wordpress.org', iconType: 'brand' },
      { id: 'elementor', name: 'Elementor', url: 'https://elementor.com', iconType: 'brand' },
      { id: 'shopify', name: 'Shopify', url: 'https://www.shopify.com', iconType: 'brand' },
      { id: 'wix', name: 'Wix', url: 'https://www.wix.com', iconType: 'brand' },
      { id: 'vercel', name: 'Vercel', url: 'https://vercel.com', iconType: 'brand' },
    ],
  },
  {
    id: 'productivity',
    title: 'Productivity & Tools',
    description: 'Office suites, project management, forms, and scripting.',
    skills: [
      { id: 'microsoftoffice', name: 'Microsoft Office', url: 'https://www.microsoft.com/microsoft-365', iconType: 'asset' },
      { id: 'googleworkspace', name: 'Google Suite', url: 'https://workspace.google.com', iconType: 'asset' },
      { id: 'trello', name: 'Trello', url: 'https://trello.com', iconType: 'brand' },
      { id: 'notion', name: 'Notion', url: 'https://www.notion.so', iconType: 'brand' },
      { id: 'powershell', name: 'PowerShell', url: 'https://learn.microsoft.com/powershell/', iconType: 'asset' },
    ],
  }
];

export type ProjectCategory = 'client' | 'research' | 'ops' | 'funnel' | 'app';

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDocument {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  /** Live site URL — also used as the homepage iframe preview on project cards */
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
  /** Use the static image instead of an iframe (sites that block embedding) */
  useImagePreview?: boolean;
  /** object-position for static card images */
  imagePosition?: 'top' | 'center';
  gallery?: ProjectGalleryItem[];
  documents?: ProjectDocument[];
  featured?: boolean;
  role?: string;
  challenge?: string;
  built?: string;
  contribution?: string;
  outcome?: string;
  caseStudyUrl?: string;
  relatedLinks?: { label: string; href: string }[];
}

export const featuredProjectIds = [] as const;

export const projectGroups: {
  id: ProjectCategory;
  label: string;
  description: string;
}[] = [
  { id: 'funnel', label: 'Conversion & funnel builds', description: 'Published landing pages and multi-step conversion experiences that demonstrate the technical execution behind marketing ideas.' },
  { id: 'app', label: 'Web applications', description: 'Application projects that demonstrate frontend, data, responsive UI, and deployment skills as a supporting technical capability.' },
];

export const projects: Project[] = [
  {
    id: 'cafe-expert',
    title: 'The Cafe Expert — Website, Funnel & Content',
    featured: false,
    role: 'Website, funnel, content, and nurture system',
    challenge:
      'A coaching brand needed more than a homepage — the site, lead magnet, social posts, and follow-up had to read as one system.',
    built:
      'Home and about pages, lead-magnet funnel, booking flow, guide mockup, social set, and email nurture screens.',
    contribution:
      'Connected the website, offer pages, and content so a visitor can move from first visit to booked consult.',
    outcome:
      'A 15-piece sample system: site, funnel, social, and automation — not a pile of disconnected assets.',
    relatedLinks: [
      { label: 'Funnel pages', href: '/marketing/funnels#cafe-expert' },
      { label: 'Social content', href: '/marketing/social#cafe-expert' },
      { label: 'Email nurture', href: '/marketing/email#cafe-expert' },
    ],
    description:
      'Sample client system for a cafe-profit coaching brand. Website pages, lead-magnet funnel, booking flow, vertical guide mockup, social posts, and email nurture — one brand system instead of disconnected assets.',
    image: '/projects/cafe-expert/home.png',
    tech: ['Website', 'Funnel Design', 'Social Content', 'Email Nurture'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'client',
    useImagePreview: true,
    gallery: [
      { src: '/projects/cafe-expert/home.png', alt: 'The Cafe Expert home page', caption: 'Home — cafe profit offer and membership' },
      { src: '/projects/cafe-expert/about.png', alt: 'The Cafe Expert about page', caption: 'About — founder and positioning' },
      { src: '/projects/cafe-expert/lead-magnet.png', alt: 'The Cafe Expert lead magnet page', caption: 'Lead magnet — free cafe-profit guide' },
      { src: '/projects/cafe-expert/popup.png', alt: 'The Cafe Expert popup', caption: 'Popup — on-page guide capture' },
      { src: '/projects/cafe-expert/consult.png', alt: 'The Cafe Expert consult page', caption: 'Consult offer — strategy call page' },
      { src: '/projects/cafe-expert/booking.png', alt: 'The Cafe Expert booking page', caption: 'Booking — calendar handoff' },
      { src: '/projects/cafe-expert/thank-you.png', alt: 'The Cafe Expert thank-you page', caption: 'Thank you — confirmation page' },
      { src: '/projects/cafe-expert/lead-magnet-teaser.png', alt: 'The Cafe Expert lead magnet mockup', caption: 'Lead magnet mockup — tablet and phone' },
      { src: '/projects/cafe-expert/social-profit.png', alt: 'Cafe Expert social post on profit', caption: 'Social — more customers ≠ more profit' },
      { src: '/projects/cafe-expert/social-offer.png', alt: 'Cafe Expert offer post', caption: 'Social — business club offer' },
      { src: '/projects/cafe-expert/social-guide.png', alt: 'Cafe Expert free guide post', caption: 'Social — free guide promotion' },
      { src: '/projects/cafe-expert/social-video.png', alt: 'Cafe Expert video promotion post', caption: 'Social — Caffè Insights video' },
      { src: '/projects/cafe-expert/social-testimonial.png', alt: 'Cafe Expert testimonial post', caption: 'Social — client testimonial' },
      { src: '/projects/cafe-expert/nurture-email.png', alt: 'Cafe Expert nurture email', caption: 'Nurture email — first sequence message' },
      { src: '/projects/cafe-expert/nurture-trigger.png', alt: 'Cafe Expert nurture trigger', caption: 'Automation — nurture trigger' },
      { src: '/projects/cafe-expert/nurture-workflow.png', alt: 'Cafe Expert nurture workflow', caption: 'Automation — nurture workflow overview' },
    ],
  },
  {
    id: 'piw-assessment',
    title: 'Pristine Image Wellness — Free Assessment',
    featured: false,
    role: 'Production landing page and supporting lead assets',
    challenge:
      'The client needed a live, mobile-first assessment page that could capture leads on their own domain.',
    built:
      'A conversion-focused free assessment with forms, trust signals, and supporting lead-magnet and performance-review documents.',
    contribution:
      'Shipped the live assessment page and packaged the related lead magnet and social review with it.',
    outcome:
      'Live on pristineimagewellness.com/free-assessment, with the guide and review available from this portfolio.',
    description:
      'Production lead-capture funnel for Pristine Image Wellness. Free personalized Insulin Resistance Assessment with conversion-focused forms, trust signals, and mobile-first UX — live on the client domain. Supporting work includes the insulin-resistance lead magnet and a social performance review.',
    image: '/projects/piw/funnel-home.png',
    useImagePreview: true,
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Lead Magnet'],
    liveUrl: 'https://www.pristineimagewellness.com/free-assessment',
    githubUrl: 'https://github.com/thayl0w/landing',
    category: 'funnel',
    relatedLinks: [
      { label: 'Social media', href: '/marketing/social/piw' },
      { label: 'Lead magnet', href: '/marketing/lead-magnets/piw' },
      { label: 'Funnel', href: '/marketing/funnels/piw' },
      { label: 'Website', href: '/marketing/websites/piw' },
      { label: 'Email', href: '/marketing/email/piw' },
      { label: 'Automation', href: '/marketing/automation/piw' },
      { label: 'Research', href: '/marketing/research/piw' },
    ],
  },
  {
    id: 'lumiere',
    title: 'LUMIÈRE Beauty & Wellness Funnel',
    featured: false,
    role: 'Design implementation and front-end development',
    challenge:
      'Turn a three-page beauty funnel into a working product: landing, multi-step quiz, and booking — not three disconnected pages.',
    built:
      'A Next.js App Router site with a lead-capture home, a multi-question Glow Quiz, and a calendar booking flow.',
    contribution:
      'Implemented the full path in TypeScript and React, including shared header/footer, FAQ accordions, and client-side state.',
    outcome:
      'Three live routes on Vercel: home, quiz, and booking, with email handoff from the landing form into the quiz.',
    caseStudyUrl: '/projects/lumiere',
    description:
      'Three-page feminine beauty funnel: landing → interactive glow quiz → discovery-call booking. Multi-step quiz, opt-in form, calendar UI, FAQ accordion, and responsive design. Built with Next.js and deployed live on Vercel.',
    image: '/projects/lumiere-home.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://lumiere-beauty-wellness-source-v7.vercel.app',
    githubUrl: 'https://github.com/thayl0w/lumiere-beauty-wellness-source-v7',
    category: 'funnel',
  },
  {
    id: 'velora',
    title: 'VELORA Ritual & Wellness Funnel',
    description:
      'Three-page ritual wellness funnel: landing → multi-step Ritual Reset Quiz → discovery-call booking. Sage/porcelain design system, matching before/after results, opt-in form, calendar UI, and conversion-focused layout. Static HTML/CSS/JS deployed on Vercel.',
    image: '/projects/velora.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://velora-funnel.vercel.app',
    githubUrl: 'https://github.com/thayl0w/velora-funnel',
    category: 'funnel',
  },
  {
    id: 'nocturne',
    title: 'NOCTURNE HOUSE — Instrument Showroom',
    description:
      'Premium multi-page instrument house: landing → expanded shop archive (7 families, filters, product detail) → Soundprint quiz → private audition booking. Dark luxury design with local imagery and Web Audio tone cues.',
    image: '/projects/nocturne.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://nocturne-house.vercel.app',
    githubUrl: 'https://github.com/thayl0w/nocturne-house',
    category: 'funnel',
  },
  {
    id: 'ember-salt',
    title: 'EMBER & SALT Food Funnel',
    description:
      'Upgraded premium multi-page food conversion funnel with a global page-turn hero showcase, Craving Compass, plan calculator, delivery check, and FAQ. Flow: landing → 4-step build-your-box (with persistent state) → personalized confirmation menu. Static HTML/CSS/JS on Vercel.',
    image: '/projects/project-1.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://ember-salt-funnel.vercel.app',
    githubUrl: 'https://github.com/thayl0w/ember-salt-funnel',
    category: 'funnel',
  },
  {
    id: 'luminary',
    title: 'Luminary SaaS Landing Page',
    description:
      'Modern B2B SaaS landing page with hero, feature grid, social proof, pricing tiers with billing toggle, email capture, and responsive navigation. Built with semantic HTML, Tailwind CSS, and vanilla JS — deployed on Vercel.',
    image: '/projects/project-3.jpg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://landing-2-rust-eight.vercel.app/',
    githubUrl: 'https://github.com/thayl0w/landing-2',
    category: 'funnel',
  },
  {
    id: 'lifebudget',
    title: 'LifeBudget',
    description:
      'A budgeting web app for planning expenses and tracking financial goals. Focused expense categories, responsive layouts, and MongoDB-backed records — live on Render.',
    image: '/projects/lifebudget.jpg',
    tech: ['React', 'MongoDB', 'Render'],
    liveUrl: 'https://lifebudget-web.onrender.com/',
    githubUrl: '#',
    category: 'app',
  },
  {
    id: 'budgeting-buddy',
    title: 'Budgeting Buddy',
    description:
      'A practical budgeting web app for tracking spending and keeping day-to-day finances organized. Clear expense organization and a straightforward user flow — live on Render.',
    image: '/projects/budgeting-buddy-landing.png',
    tech: ['React', 'Render', 'Budgeting'],
    liveUrl: 'https://budgetingbuddy.onrender.com/',
    githubUrl: '#',
    category: 'app',
  },
  {
    id: 'lunch-mate',
    title: 'Lunch Mate',
    description:
      'A meal planning and discovery web app with browse-and-select flow, dynamic rendering, and MongoDB-backed menu and order data. Published on Render.',
    image: '/projects/lunch-mate-landing.png',
    tech: ['React', 'Express', 'MongoDB'],
    liveUrl: 'https://cse325-visioncoders-ytz0.onrender.com/',
    githubUrl: '#',
    category: 'app',
    useImagePreview: true,
  },
  {
    id: 'sleep-outside',
    title: 'SleepOutside',
    description:
      'Collaborative WDD 330 frontend project from the SleepOutside starter. Practical JavaScript, responsive UI, and team delivery — live on Netlify.',
    image: '/projects/sleep-outside-landing.png',
    tech: ['JavaScript', 'Netlify', 'WDD 330'],
    liveUrl: 'https://wdd330team08.netlify.app/',
    githubUrl: '#',
    category: 'app',
  },
  {
    id: 'todo-list',
    title: 'To-Do List App',
    description:
      'A task management web app for tracking daily work through a simple to-do workflow. Clean interface, straightforward actions, published on Render.',
    image: '/projects/todolist.png',
    tech: ['React', 'Render', 'Productivity'],
    liveUrl: 'https://todolist-f8fc.onrender.com',
    githubUrl: '#',
    category: 'app',
  },
];

export type CredentialKind = 'degree' | 'certificate';

export interface Credential {
  title: string;
  institution: string;
  date: string;
  documentUrl?: string;
  kind: CredentialKind;
}

export const education: Credential[] = [
  {
    title: 'Bachelor of Science in Software Development',
    institution: 'Brigham Young University-Idaho',
    date: 'February 21, 2026',
    documentUrl: '/certificates/bachelor-software-development.pdf',
    kind: 'degree',
  },
  {
    title: 'Associate of Applied Science in Software Development',
    institution: 'Brigham Young University-Idaho',
    date: 'December 13, 2025',
    documentUrl: '/certificates/associate-software-development.pdf',
    kind: 'degree',
  },
];

export const certifications: Credential[] = [
  {
    title: 'Certificate in Software Development',
    institution: 'Brigham Young University-Idaho',
    date: 'December 13, 2025',
    documentUrl: '/certificates/certificate-software-development.pdf',
    kind: 'certificate',
  },
  {
    title: 'Certificate in Web Development',
    institution: 'Brigham Young University-Idaho',
    date: 'October 18, 2025',
    documentUrl: '/certificates/certificate-web-development.pdf',
    kind: 'certificate',
  },
  {
    title: 'Certificate in Web & Computer Programming',
    institution: 'Brigham Young University-Idaho',
    date: 'April 19, 2025',
    documentUrl: '/certificates/certificate-web-computer-programming.pdf',
    kind: 'certificate',
  },
];

export const lumiereCaseStudy = {
  id: 'lumiere',
  title: 'LUMIÈRE Beauty & Wellness Funnel',
  eyebrow: 'Case study',
  summary:
    'A three-page Next.js funnel that takes a visitor from a free-guide offer, through a Glow Quiz, to a discovery-call booking page.',
  liveUrl: 'https://lumiere-beauty-wellness-source-v7.vercel.app',
  githubUrl: 'https://github.com/thayl0w/lumiere-beauty-wellness-source-v7',
  image: '/projects/lumiere-home.png',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  pages: [
    { name: 'Home', href: 'https://lumiere-beauty-wellness-source-v7.vercel.app', note: 'Lead capture, pillars, testimonials, FAQ' },
    { name: 'Quiz', href: 'https://lumiere-beauty-wellness-source-v7.vercel.app/quiz', note: 'Multi-step Glow Quiz' },
    { name: 'Booking', href: 'https://lumiere-beauty-wellness-source-v7.vercel.app/booking', note: 'Calendar, times, confirmation' },
  ],
  overview:
    'LUMIÈRE is a three-page beauty and wellness funnel. The home page captures an email and starts the quiz. The quiz personalizes a free guide. The booking page lets someone pick a date and time for a complimentary 30-minute discovery call.',
  challenge:
    'The work had to feel like one product, not three landing pages. Email from the home form had to carry into the quiz. The quiz needed several questions with selectable options. Booking needed a usable calendar and time list, plus a confirmation state.',
  role: 'Implemented the front-end in Next.js App Router: shared header/footer, home lead card, quiz state, booking calendar, and FAQ accordions.',
  approach:
    'Each route is a client page. Shared pieces — Header, Footer, TrustBar — live in app/components. Home submits email and routes to /quiz?email=…. Quiz steps through questions about skin, goals, time, and routine. Booking tracks month offset, selected day, selected time, and a booked flag.',
  development:
    'Built with Next.js, React 19, TypeScript, Tailwind CSS, and Lucide icons. Home includes a lead form, four pillars, testimonials, and an FAQ accordion. Booking includes month navigation, time slots, FAQ, and a confirmation view. No backend booking API is wired — the calendar is a front-end flow.',
  technical: [
    'App Router pages: /, /quiz, /booking',
    'Client-side quiz and booking state with React hooks',
    'Email passed from home to quiz via query string',
    'Shared layout components for header, footer, and trust bar',
    'Deployed as a Vercel Next.js site',
  ],
  responsive:
    'The pages use a shared shell width and stack the hero, lead card, quiz options, and calendar on smaller screens. Buttons and form fields stay large enough to tap.',
  scope: [
    { label: 'Pages', value: '3' },
    { label: 'Quiz topics', value: 'Skin, goals, time, routine' },
    { label: 'Booking slots', value: '6 times / day' },
    { label: 'Call length', value: '30 minutes' },
  ],
};