export type MarketingCategoryId =
  | 'research'
  | 'social'
  | 'calendars'
  | 'email'
  | 'automation'
  | 'sops'
  | 'funnels'
  | 'lead-magnets'
  | 'websites'
  | 'analytics';

export type DeliverableKind = 'document' | 'gallery';

export interface MarketingAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface MarketingDeliverable {
  id: string;
  title: string;
  format: 'PDF' | 'DOCX' | 'Gallery';
  summary: string;
  tags: string[];
  href?: string;
  preview?: string;
  assets?: MarketingAsset[];
  kind: DeliverableKind;
  group?: string;
}

function socialFiles(dir: string, files: string[], brand: string, captionPrefix = ''): MarketingAsset[] {
  return files.map((file) => {
    const stem = file.replace(/\.(png|jpe?g|webp)$/i, '');
    const label = stem.replace(/-/g, ' ').replace(/\bday\b/i, 'Day');
    return {
      src: `${dir}/${file}`,
      alt: `${brand} — ${label}`,
      caption: `${captionPrefix}${label.charAt(0).toUpperCase()}${label.slice(1)}`,
    };
  });
}

const piwSocialDays = socialFiles(
  '/projects/piw/social',
  [
    'day-1.png', 'day-2.png', 'day-3.png', 'day-4.png', 'day-5.png',
    'day-6.png', 'day-6-2.png', 'day-6-3.png', 'day-6-4.png', 'day-6-5.png',
    'day-7.png', 'day-8.png', 'day-9.png', 'day-10.png', 'day-11.png',
    'day-12.png', 'day-13.png', 'day-14.png', 'day-15.png', 'day-16.png',
    'day-17.png', 'day-17-2.png', 'day-17-3.png', 'day-17-4.png', 'day-17-5.png',
    'day-18.png', 'day-19.png', 'day-20.png', 'day-21.png', 'day-22.png',
    'day-23.png', 'day-24.png', 'day-25.png', 'day-26.png', 'day-27.png',
    'day-28.png', 'day-28-2.png', 'day-28-3.png', 'day-28-4.png', 'day-28-5.png',
    'day-29.png', 'day-30.png',
  ],
  'Pristine Image Wellness',
);

const piwMedSpaSocial = socialFiles(
  '/projects/piw/social-medspa',
  ['1.png', '2.png', '3.png', '4.png', '5.png'],
  'Pristine Image Wellness',
  'Med Spa campaign — ',
);

const hcSocial = socialFiles(
  '/projects/healing-corazones/social',
  ['1.png', '2.png', '3.png', '4.png', '5.png'],
  'Healing Corazones Inc',
);

const grSocial = socialFiles(
  '/projects/gig-ready/social',
  ['1.png', '2.png', '3.png', '4.png', '5.png'],
  'Gig Ready',
);

export interface MarketingBrandGroup {
  id: string;
  brand: string;
  deliverables: MarketingDeliverable[];
}

export interface MarketingCategory {
  id: MarketingCategoryId;
  title: string;
  eyebrow: string;
  summary: string;
  explore: string;
  brands: MarketingBrandGroup[];
}

export const marketingCategories: MarketingCategory[] = [
  {
    id: 'research',
    title: 'Research & Strategy',
    eyebrow: 'Marketing work',
    summary: 'Competitor research, market analysis, content strategy, and diagnostic work.',
    explore: 'Explore research',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'tiktok-competitor',
            title: 'TikTok Competitor Research',
            format: 'DOCX',
            summary: 'Competitor review prepared for the PIW TikTok program.',
            tags: ['Competitive research', 'TikTok', 'Strategy'],
            href: '/projects/piw/tiktok-competitor-research.docx',
            kind: 'document',
          },
          {
            id: 'tiktok-market',
            title: 'TikTok Market Research',
            format: 'DOCX',
            summary: 'Market research for PIW on TikTok.',
            tags: ['Market research', 'TikTok'],
            href: '/projects/piw/tiktok-market-research.docx',
            kind: 'document',
          },
          {
            id: 'tiktok-trend',
            title: 'TikTok Trend Research',
            format: 'DOCX',
            summary: 'Trend research supporting PIW content planning on TikTok.',
            tags: ['Trend research', 'TikTok'],
            href: '/projects/piw/tiktok-trend-research.docx',
            kind: 'document',
          },
          {
            id: 'social-competitor',
            title: 'Social Media Competitor Research',
            format: 'DOCX',
            summary: 'Social competitor review for PIW.',
            tags: ['Competitive research', 'Social'],
            href: '/projects/piw/social-competitor-research.docx',
            kind: 'document',
          },
          {
            id: 'competitive-intel',
            title: 'Competitive Intelligence',
            format: 'PDF',
            summary: 'Competitive intelligence brief for PIW against That Metabolic Guy.',
            tags: ['Competitive research', 'Strategy'],
            href: '/projects/piw/competitive-intel.pdf',
            kind: 'document',
          },
          {
            id: 'lead-diagnosis',
            title: 'Lead Generation Root-Cause Analysis',
            format: 'PDF',
            summary: 'Diagnosis of PIW lead-generation issues and where the path breaks.',
            tags: ['Lead generation', 'Diagnosis'],
            href: '/projects/piw/lead-generation-diagnosis.pdf',
            kind: 'document',
          },
          {
            id: 'content-strategy',
            title: 'Metabolic Boss Content Strategy',
            format: 'DOCX',
            summary: 'Content strategy document written for PIW.',
            tags: ['Content strategy'],
            href: '/projects/piw/content-strategy.docx',
            kind: 'document',
          },
          {
            id: 'brand-guide',
            title: 'Brand Style Guide',
            format: 'PDF',
            summary: 'Brand style guide prepared for PIW / Troy Wallace.',
            tags: ['Brand', 'Strategy'],
            href: '/projects/piw/brand-style-guide.pdf',
            kind: 'document',
          },
        ],
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media & Content',
    eyebrow: 'Marketing work',
    summary: 'Campaign creatives and branded social graphics — each brand in its own project window.',
    explore: 'Explore content',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-social-recent',
            title: 'Recent Social Content',
            format: 'Gallery',
            summary: 'Recent PIW feed creative recovered from the available portfolio source library.',
            tags: ['Social graphics', 'Instagram', 'Content'],
            preview: '/projects/piw/social/eating-right-still-stuck.png',
            kind: 'gallery',
            group: 'Recent content',
            assets: [
              { src: '/projects/piw/social/eating-right-still-stuck.png', alt: 'Pristine Image Wellness — Eating Right, Still Stuck?', caption: 'Eating Right, Still Stuck?' },
              { src: '/projects/piw/social/day-18.png', alt: 'Pristine Image Wellness — metabolic health social graphic', caption: 'How Are You Addressing Your Metabolic Health?' },
            ],
          },
          {
            id: 'piw-social',
            title: '30-Day Social Media Content Series',
            format: 'Gallery',
            summary: 'The complete indexed PIW 30-day content series — quotes, education, proof, and CTA graphics.',
            tags: ['Social graphics', '30-day set'],
            preview: '/projects/piw/social/day-18.png',
            kind: 'gallery',
            group: '30-day content series',
            assets: piwSocialDays,
          },
          {
            id: 'piw-social-profiles',
            title: 'Social Profile Optimization',
            format: 'Gallery',
            summary: 'PIW profile setup and optimization work across social platforms.',
            tags: ['Social profile', 'TikTok', 'Facebook'],
            preview: '/projects/piw/social-profiles/tiktok-profile.png',
            kind: 'gallery',
            group: 'Profile optimization',
            assets: [
              { src: '/projects/piw/social-profiles/tiktok-profile.png', alt: 'Pristine Image Wellness TikTok profile optimization', caption: 'TikTok profile optimization' },
              { src: '/projects/piw/social-profiles/facebook-profile.png', alt: 'Pristine Image Wellness Facebook profile setup', caption: 'Facebook profile and assessment CTA' },
            ],
          },
          {
            id: 'piw-social-guide-campaign',
            title: 'Guide Promotion Campaign',
            format: 'Gallery',
            summary: 'Earlier PIW guide-promotion social creative kept as a separate campaign set.',
            tags: ['Social graphics', 'Lead magnet promo'],
            preview: '/projects/piw/social-medspa/1.png',
            kind: 'gallery',
            group: 'Guide promotion campaign',
            assets: piwMedSpaSocial,
          },
        ],
      },
      {
        id: 'healing-corazones',
        brand: 'Healing Corazones Inc',
        deliverables: [
          {
            id: 'hc-social',
            title: 'Social Media Content',
            format: 'Gallery',
            summary: 'Branded Healing Corazones posts on symptoms, attention, and body-as-message themes.',
            tags: ['Social graphics', 'Wellness'],
            preview: '/projects/healing-corazones/social/1.png',
            kind: 'gallery',
            assets: hcSocial,
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-social',
            title: 'Social Media Content',
            format: 'Gallery',
            summary: 'Paid-gig positioning graphics for musicians who need a booking system.',
            tags: ['Social graphics', 'Musicians'],
            preview: '/projects/gig-ready/social/1.png',
            kind: 'gallery',
            assets: grSocial,
          },
        ],
      },
      {
        id: 'modern-haus',
        brand: 'Modern Haus',
        deliverables: [
          {
            id: 'mh-social',
            title: 'Listing Content System',
            format: 'Gallery',
            summary: 'Just listed, just sold, open home, market update, and testimonial graphics for Modern Haus.',
            tags: ['Social graphics', 'Real estate'],
            preview: '/projects/modern-haus/listing.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/modern-haus/listing.png', alt: 'Modern Haus just listed graphic', caption: 'Just listed — 12 Parkside Avenue' },
              { src: '/projects/modern-haus/just-sold.png', alt: 'Modern Haus just sold graphic', caption: 'Just sold highlight' },
              { src: '/projects/modern-haus/open-home.png', alt: 'Modern Haus open home graphic', caption: 'Open home announcement' },
              { src: '/projects/modern-haus/market-update.png', alt: 'Modern Haus market update graphic', caption: 'Market update' },
              { src: '/projects/modern-haus/testimonial.png', alt: 'Modern Haus testimonial graphic', caption: 'Client testimonial' },
              { src: '/projects/modern-haus/parkside-1.jpg', alt: '12 Parkside Avenue listing photo', caption: '12 Parkside Avenue — listing photo' },
              { src: '/projects/modern-haus/springfield-1.jpg', alt: '108 Springfield Street listing photo', caption: '108 Springfield Street' },
              { src: '/projects/modern-haus/springfield-2.jpg', alt: '108 Springfield Street listing photo 2', caption: '108 Springfield Street — detail' },
              { src: '/projects/modern-haus/greenhill-sold.png', alt: '47 Greenhill Road sold photo', caption: '47 Greenhill Road — sold' },
              { src: '/projects/modern-haus/ryan-johnson.jpg', alt: 'Modern Haus agent photo', caption: 'Agent portrait' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-social',
            title: 'Cafe Profit Social Set',
            format: 'Gallery',
            summary: 'Offer, guide, video, and testimonial posts for the cafe-profit brand.',
            tags: ['Social graphics', 'Campaign creative'],
            preview: '/projects/cafe-expert/social-offer.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/social-profit.png', alt: 'Cafe Expert profit post', caption: 'More customers ≠ more profit' },
              { src: '/projects/cafe-expert/social-offer.png', alt: 'Cafe Expert offer post', caption: 'Business club offer' },
              { src: '/projects/cafe-expert/social-guide.png', alt: 'Cafe Expert guide post', caption: 'Free guide promotion' },
              { src: '/projects/cafe-expert/social-video.png', alt: 'Cafe Expert video post', caption: 'Caffè Insights video' },
              { src: '/projects/cafe-expert/social-testimonial.png', alt: 'Cafe Expert testimonial post', caption: 'Client testimonial' },
            ],
          },
        ],
      },
      {
        id: 'anchor-medical',
        brand: 'Anchor Medical',
        deliverables: [
          {
            id: 'am-social',
            title: 'Equipment Service Social Set',
            format: 'Gallery',
            summary: 'Downtime, service, guide, and proof posts for the medical equipment brand.',
            tags: ['Social graphics', 'Healthcare'],
            preview: '/projects/anchor-medical/social-guide.jpg',
            kind: 'gallery',
            assets: [
              { src: '/projects/anchor-medical/social-downtime.jpg', alt: 'Anchor Medical downtime post', caption: 'Prevent costly equipment downtime' },
              { src: '/projects/anchor-medical/social-failures.jpg', alt: 'Anchor Medical failures post', caption: 'Four ways to reduce failures' },
              { src: '/projects/anchor-medical/social-guide.jpg', alt: 'Anchor Medical guide post', caption: 'Free downtime checklist' },
              { src: '/projects/anchor-medical/social-repair.jpg', alt: 'Anchor Medical repair post', caption: 'Fast equipment repair' },
              { src: '/projects/anchor-medical/social-testimonial.jpg', alt: 'Anchor Medical testimonial post', caption: 'Facility director testimonial' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'calendars',
    title: 'Social Calendars & Planning',
    eyebrow: 'Marketing work',
    summary: 'Scheduling, content planning, and calendar execution — separate from the designed graphics.',
    explore: 'Explore calendars',
    brands: [
      {
        id: 'modern-haus',
        brand: 'Modern Haus',
        deliverables: [
          {
            id: 'mh-calendar',
            title: 'Social Calendar & Scheduling',
            format: 'Gallery',
            summary: 'Buffer scheduling and calendar workflow for Modern Haus listing content.',
            tags: ['Content planning', 'Buffer', 'Scheduling'],
            preview: '/projects/modern-haus/calendar/schedule-01.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/modern-haus/calendar/schedule-01.png', alt: 'Modern Haus Buffer compose — just listed', caption: 'Compose — just listed' },
              { src: '/projects/modern-haus/calendar/schedule-02.png', alt: 'Modern Haus Buffer compose — just sold', caption: 'Compose — just sold' },
              { src: '/projects/modern-haus/calendar/schedule-03.png', alt: 'Modern Haus Buffer scheduling queue', caption: 'Scheduling queue' },
              { src: '/projects/modern-haus/calendar/schedule-04.png', alt: 'Modern Haus Buffer planner', caption: 'Content planner' },
              { src: '/projects/modern-haus/calendar/schedule-05.png', alt: 'Modern Haus Buffer channel view', caption: 'Channel view' },
              { src: '/projects/modern-haus/calendar/schedule-06.png', alt: 'Modern Haus Buffer calendar', caption: 'Calendar view' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'email',
    title: 'Email Marketing & Nurture',
    eyebrow: 'Marketing work',
    summary: 'Launch campaigns, nurture sequences, and conversion-focused email messaging.',
    explore: 'Explore email',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-launch-email',
            title: 'Feel Great Launch Email Campaign',
            format: 'DOCX',
            summary: 'Launch email draft for the PIW Feel Great campaign.',
            tags: ['Launch email', 'Campaign'],
            href: '/projects/piw/launch-email.docx',
            kind: 'document',
          },
          {
            id: 'piw-launch-email-short',
            title: 'Feel Great Launch Email — Short Blast',
            format: 'DOCX',
            summary: 'Shorter launch email for the PIW Feel Great campaign.',
            tags: ['Launch email', 'Campaign'],
            href: '/projects/piw/launch-email-short.docx',
            kind: 'document',
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-nurture-email',
            title: 'Paid-Gig Nurture Email',
            format: 'Gallery',
            summary: 'First nurture email in the musician sequence.',
            tags: ['Nurture', 'Email'],
            preview: '/projects/gig-ready/nurture-email.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/gig-ready/nurture-email.png', alt: 'Gig Ready nurture email', caption: 'Nurture email — first message' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-nurture-email',
            title: 'Cafe Profit Nurture Email',
            format: 'Gallery',
            summary: 'First nurture email for the cafe coaching offer.',
            tags: ['Nurture', 'Email'],
            preview: '/projects/cafe-expert/nurture-email.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/nurture-email.png', alt: 'Cafe Expert nurture email', caption: 'Nurture email — first message' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Workflows',
    eyebrow: 'Marketing work',
    summary: 'Workflow builders, triggers, and nurture automation from live CRM systems.',
    explore: 'Explore automation',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-automation',
            title: 'Lead Magnet Nurture Workflow',
            format: 'Gallery',
            summary: 'GoHighLevel nurture: trigger, first email, and full workflow overview.',
            tags: ['GoHighLevel', 'Automation'],
            preview: '/projects/piw/nurture-workflow.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/piw/nurture-trigger.png', alt: 'PIW nurture trigger', caption: 'Trigger' },
              { src: '/projects/piw/nurture-email.png', alt: 'PIW nurture email', caption: 'Email 1' },
              { src: '/projects/piw/nurture-workflow.png', alt: 'PIW nurture workflow', caption: 'Workflow overview' },
            ],
          },
        ],
      },
      {
        id: 'healing-corazones',
        brand: 'Healing Corazones Inc',
        deliverables: [
          {
            id: 'hc-automation',
            title: 'Lead Magnet Nurture Automation',
            format: 'Gallery',
            summary: 'GoHighLevel workflow triggered when the lead-magnet tag is added.',
            tags: ['GoHighLevel', 'Automation'],
            preview: '/projects/healing-corazones/workflow-1.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/healing-corazones/workflow-1.png', alt: 'Healing Corazones workflow trigger', caption: 'Contact-tag trigger' },
              { src: '/projects/healing-corazones/workflow-2.png', alt: 'Healing Corazones workflow builder', caption: 'Workflow builder' },
              { src: '/projects/healing-corazones/workflow-3.png', alt: 'Healing Corazones workflow settings', caption: 'Workflow settings' },
            ],
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-automation',
            title: 'Paid-Gig Nurture Workflow',
            format: 'Gallery',
            summary: 'Trigger and workflow overview for the musician nurture sequence.',
            tags: ['GoHighLevel', 'Automation'],
            preview: '/projects/gig-ready/nurture-workflow.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/gig-ready/nurture-trigger.png', alt: 'Gig Ready nurture trigger', caption: 'Trigger' },
              { src: '/projects/gig-ready/nurture-workflow.png', alt: 'Gig Ready nurture workflow', caption: 'Workflow overview' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-automation',
            title: 'Cafe Profit Nurture Workflow',
            format: 'Gallery',
            summary: 'Trigger and workflow overview for the cafe coaching nurture.',
            tags: ['Automation', 'Nurture'],
            preview: '/projects/cafe-expert/nurture-workflow.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/nurture-trigger.png', alt: 'Cafe Expert nurture trigger', caption: 'Trigger' },
              { src: '/projects/cafe-expert/nurture-workflow.png', alt: 'Cafe Expert nurture workflow', caption: 'Workflow overview' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sops',
    title: 'SOPs & Processes',
    eyebrow: 'Marketing work',
    summary: 'Repeatable workflows and process documentation for consistent marketing execution.',
    explore: 'Explore SOPs',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'sop-domain',
            title: 'Custom Domain & Sender Email',
            format: 'PDF',
            summary: 'Connect and verify a custom domain and sender email in Systeme.io with GoDaddy.',
            tags: ['SOP', 'Domain', 'Email'],
            href: '/projects/sops/domain-email.pdf',
            preview: '/projects/sops/overview-1.png',
            kind: 'document',
          },
          {
            id: 'sop-popup',
            title: 'Add a Popup to a Page',
            format: 'PDF',
            summary: 'How to add a popup on a Systeme.io funnel page.',
            tags: ['SOP', 'Popup'],
            href: '/projects/sops/popup.pdf',
            preview: '/projects/sops/popup-1.png',
            kind: 'document',
          },
          {
            id: 'sop-mobile',
            title: 'Fix Mobile Funnel View',
            format: 'PDF',
            summary: 'Steps for correcting the mobile version of a funnel page.',
            tags: ['SOP', 'Mobile'],
            href: '/projects/sops/mobile-fix.pdf',
            preview: '/projects/sops/mobile-1.png',
            kind: 'document',
          },
        ],
      },
      {
        id: 'operations',
        brand: 'Operations',
        deliverables: [
          {
            id: 'sop-links',
            title: 'Configure Funnel Page Links',
            format: 'PDF',
            summary: 'How to connect links between funnel pages in Systeme.io.',
            tags: ['SOP', 'Funnels'],
            href: '/projects/sops/funnel-links.pdf',
            kind: 'document',
          },
          {
            id: 'sop-rule',
            title: 'Create an Automation Rule',
            format: 'PDF',
            summary: 'How to create an automation rule in Systeme.io.',
            tags: ['SOP', 'Automation'],
            href: '/projects/sops/automation-rule.pdf',
            kind: 'document',
          },
          {
            id: 'sop-assistant',
            title: 'Invite an Assistant',
            format: 'PDF',
            summary: 'How to invite an assistant into a Systeme.io workspace.',
            tags: ['SOP', 'Workspace'],
            href: '/projects/sops/invite-assistant.pdf',
            kind: 'document',
          },
          {
            id: 'sop-workflow',
            title: 'Automation Workflow SOP',
            format: 'DOCX',
            summary: 'Written SOP for building an automation workflow in Systeme.io.',
            tags: ['SOP', 'Automation'],
            href: '/projects/sops/automation-workflow.docx',
            kind: 'document',
          },
          {
            id: 'sop-email-error',
            title: 'Fix “At Least One Email Input Is Required”',
            format: 'DOCX',
            summary: 'SOP for resolving the Systeme.io email-input error on forms.',
            tags: ['SOP', 'Forms'],
            href: '/projects/sops/email-input-error.docx',
            preview: '/projects/sops/email-input-error.png',
            kind: 'document',
          },
          {
            id: 'sop-calendar',
            title: 'Embed a Calendar on a Page',
            format: 'DOCX',
            summary: 'SOP for embedding a calendar in a Systeme.io page.',
            tags: ['SOP', 'Calendar'],
            href: '/projects/sops/embed-calendar.docx',
            preview: '/projects/sops/calendar-1.png',
            kind: 'document',
          },
          {
            id: 'sop-form-field',
            title: 'Add a Custom Form Input Field',
            format: 'DOCX',
            summary: 'SOP for creating and adding a custom form field in Systeme.io.',
            tags: ['SOP', 'Forms'],
            href: '/projects/sops/custom-form-field.docx',
            preview: '/projects/sops/custom-form-field.png',
            kind: 'document',
          },
          {
            id: 'sop-custom-page',
            title: 'Create a Custom Funnel Page',
            format: 'DOCX',
            summary: 'SOP for creating a custom page in Systeme.io.',
            tags: ['SOP', 'Funnels'],
            href: '/projects/sops/custom-page.docx',
            preview: '/projects/sops/custom-page.png',
            kind: 'document',
          },
        ],
      },
    ],
  },
  {
    id: 'funnels',
    title: 'Funnels',
    eyebrow: 'Marketing work',
    summary: 'Conversion paths — opt-in, offer, booking, and thank-you — not the lead magnet or website itself.',
    explore: 'Explore funnels',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-funnel',
            title: 'Wellness Funnel',
            format: 'Gallery',
            summary: 'Opt-in, popup, consult, booking, and thank-you steps for the PIW conversion path.',
            tags: ['Funnel', 'Conversion path'],
            preview: '/projects/piw/funnel-lead-magnet.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/piw/funnel-lead-magnet.png', alt: 'PIW opt-in page', caption: 'Opt-in' },
              { src: '/projects/piw/funnel-popup.png', alt: 'PIW lead magnet popup', caption: 'Popup' },
              { src: '/projects/piw/funnel-consult.png', alt: 'PIW consult offer page', caption: 'Consult offer' },
              { src: '/projects/piw/funnel-booking.png', alt: 'PIW booking page', caption: 'Booking' },
              { src: '/projects/piw/funnel-thank-you.png', alt: 'PIW thank-you page', caption: 'Thank you' },
            ],
          },
        ],
      },
      {
        id: 'healing-corazones',
        brand: 'Healing Corazones Inc',
        deliverables: [
          {
            id: 'hc-funnel',
            title: 'Wellness Funnel',
            format: 'Gallery',
            summary: 'Opt-in, popup, consult, booking, and thank-you for Healing Corazones.',
            tags: ['Funnel', 'GoHighLevel'],
            preview: '/projects/healing-corazones/lead-magnet.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/healing-corazones/lead-magnet.png', alt: 'Healing Corazones opt-in page', caption: 'Opt-in' },
              { src: '/projects/healing-corazones/popup.png', alt: 'Healing Corazones popup', caption: 'Popup' },
              { src: '/projects/healing-corazones/consult.png', alt: 'Healing Corazones consult', caption: 'Consult offer' },
              { src: '/projects/healing-corazones/booking.png', alt: 'Healing Corazones booking', caption: 'Booking' },
              { src: '/projects/healing-corazones/thank-you.png', alt: 'Healing Corazones thank you', caption: 'Thank you' },
            ],
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-funnel',
            title: 'Paid-Gig Funnel',
            format: 'Gallery',
            summary: 'Opt-in through consult, booking, and thank-you for the musician offer.',
            tags: ['Funnel', 'GoHighLevel'],
            preview: '/projects/gig-ready/lead-magnet.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/gig-ready/lead-magnet.png', alt: 'Gig Ready opt-in page', caption: 'Opt-in' },
              { src: '/projects/gig-ready/popup.png', alt: 'Gig Ready popup', caption: 'Popup' },
              { src: '/projects/gig-ready/consult.png', alt: 'Gig Ready consult', caption: 'Consult' },
              { src: '/projects/gig-ready/booking.png', alt: 'Gig Ready booking', caption: 'Booking' },
              { src: '/projects/gig-ready/thank-you.png', alt: 'Gig Ready thank you', caption: 'Thank you' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-funnel',
            title: 'Cafe Profit Funnel',
            format: 'Gallery',
            summary: 'Opt-in, popup, consult, booking, and thank-you for the cafe coaching offer.',
            tags: ['Funnel'],
            preview: '/projects/cafe-expert/lead-magnet.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/lead-magnet.png', alt: 'Cafe Expert opt-in page', caption: 'Opt-in' },
              { src: '/projects/cafe-expert/popup.png', alt: 'Cafe Expert popup', caption: 'Popup' },
              { src: '/projects/cafe-expert/consult.png', alt: 'Cafe Expert consult', caption: 'Consult' },
              { src: '/projects/cafe-expert/booking.png', alt: 'Cafe Expert booking', caption: 'Booking' },
              { src: '/projects/cafe-expert/thank-you.png', alt: 'Cafe Expert thank you', caption: 'Thank you' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lead-magnets',
    title: 'Lead Magnets',
    eyebrow: 'Marketing work',
    summary: 'Guides, teasers, and downloadable conversion assets — their own project windows, not funnel screenshots.',
    explore: 'Explore lead magnets',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-magnet',
            title: 'Insulin Resistance Lead Magnet',
            format: 'PDF',
            summary: 'Free guide on the hidden root cause behind weight gain, fatigue, and chronic disease.',
            tags: ['Lead magnet', 'PDF'],
            href: '/projects/piw/lead-magnet.pdf',
            kind: 'document',
          },
        ],
      },
      {
        id: 'healing-corazones',
        brand: 'Healing Corazones Inc',
        deliverables: [
          {
            id: 'hc-magnet',
            title: 'Body Speaks Method Guide',
            format: 'Gallery',
            summary: 'Lead-magnet teaser and interior pages for the Healing Corazones guide.',
            tags: ['Lead magnet'],
            preview: '/projects/healing-corazones/lead-magnet-teaser.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/healing-corazones/lead-magnet-teaser.png', alt: 'Healing Corazones lead magnet teaser', caption: 'Cover / teaser' },
              { src: '/projects/healing-corazones/magnet-2.png', alt: 'Healing Corazones lead magnet founder page', caption: 'About the founder' },
              { src: '/projects/healing-corazones/magnet-3.png', alt: 'Healing Corazones lead magnet page', caption: 'Interior page' },
              { src: '/projects/healing-corazones/magnet-4.png', alt: 'Healing Corazones lead magnet page', caption: 'Interior page' },
            ],
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-magnet',
            title: 'Paid-Gig Lead Magnet',
            format: 'Gallery',
            summary: 'Teaser mockup for the Gig Ready lead magnet.',
            tags: ['Lead magnet'],
            preview: '/projects/gig-ready/lead-magnet-teaser.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/gig-ready/lead-magnet-teaser.png', alt: 'Gig Ready lead magnet teaser', caption: 'Cover / teaser' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-magnet',
            title: 'Cafe Profit Guide',
            format: 'Gallery',
            summary: 'Guide mockup and interior pages for the cafe-profit lead magnet.',
            tags: ['Lead magnet'],
            preview: '/projects/cafe-expert/lead-magnet-teaser.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/lead-magnet-teaser.png', alt: 'Cafe Expert guide mockup', caption: 'Cover / teaser' },
              { src: '/projects/cafe-expert/magnet-2.png', alt: 'Cafe Expert lead magnet founder page', caption: 'Meet the Cafe Expert' },
              { src: '/projects/cafe-expert/magnet-3.png', alt: 'Cafe Expert lead magnet page', caption: 'Interior page' },
              { src: '/projects/cafe-expert/magnet-4.png', alt: 'Cafe Expert lead magnet page', caption: 'Interior page' },
              { src: '/projects/cafe-expert/magnet-5.png', alt: 'Cafe Expert lead magnet page', caption: 'Interior page' },
            ],
          },
        ],
      },
      {
        id: 'anchor-medical',
        brand: 'Anchor Medical',
        deliverables: [
          {
            id: 'am-magnet',
            title: 'Equipment Downtime Guide',
            format: 'Gallery',
            summary: 'Teaser for a healthcare-facility downtime checklist.',
            tags: ['Lead magnet'],
            preview: '/projects/anchor-medical/lead-magnet-teaser.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/anchor-medical/lead-magnet-teaser.png', alt: 'Anchor Medical lead magnet mockup', caption: 'Cover / teaser' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'websites',
    title: 'Websites',
    eyebrow: 'Marketing work',
    summary: 'Brand website pages — kept separate from funnels when both exist.',
    explore: 'Explore websites',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-website',
            title: 'Wellness Website Pages',
            format: 'Gallery',
            summary: 'Home and about pages for the PIW web experience.',
            tags: ['Website'],
            preview: '/projects/piw/funnel-home.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/piw/funnel-home.png', alt: 'PIW home page', caption: 'Home' },
              { src: '/projects/piw/funnel-about.png', alt: 'PIW about page', caption: 'About' },
            ],
          },
        ],
      },
      {
        id: 'healing-corazones',
        brand: 'Healing Corazones Inc',
        deliverables: [
          {
            id: 'hc-website',
            title: 'Healing Corazones Website',
            format: 'Gallery',
            summary: 'Home and about pages for Healing Corazones.',
            tags: ['Website'],
            preview: '/projects/healing-corazones/home.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/healing-corazones/home.png', alt: 'Healing Corazones home', caption: 'Home' },
              { src: '/projects/healing-corazones/about.png', alt: 'Healing Corazones about', caption: 'About' },
            ],
          },
        ],
      },
      {
        id: 'gig-ready',
        brand: 'Gig Ready',
        deliverables: [
          {
            id: 'gr-website',
            title: 'Gig Ready Website',
            format: 'Gallery',
            summary: 'Home and about pages for the musician brand.',
            tags: ['Website'],
            preview: '/projects/gig-ready/home.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/gig-ready/home.png', alt: 'Gig Ready home', caption: 'Home' },
              { src: '/projects/gig-ready/about.png', alt: 'Gig Ready about', caption: 'About' },
            ],
          },
        ],
      },
      {
        id: 'cafe-expert',
        brand: 'The Cafe Expert',
        deliverables: [
          {
            id: 'ce-website',
            title: 'Cafe Expert Website',
            format: 'Gallery',
            summary: 'Home and about pages from the Cafe Expert website folder.',
            tags: ['Website'],
            preview: '/projects/cafe-expert/home.png',
            kind: 'gallery',
            assets: [
              { src: '/projects/cafe-expert/home.png', alt: 'Cafe Expert home', caption: 'Home' },
              { src: '/projects/cafe-expert/about.png', alt: 'Cafe Expert about', caption: 'About' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Optimization',
    eyebrow: 'Marketing work',
    summary: 'Performance analysis, reporting, diagnostics, and recommendations.',
    explore: 'Explore analytics',
    brands: [
      {
        id: 'piw',
        brand: 'Pristine Image Wellness',
        deliverables: [
          {
            id: 'piw-review',
            title: 'Social Media Performance Review',
            format: 'PDF',
            summary: 'Social performance review prepared for PIW.',
            tags: ['Analytics', 'Reporting'],
            href: '/projects/piw/performance-review.pdf',
            kind: 'document',
          },
        ],
      },
    ],
  },
];

export const marketingGalleries = Object.fromEntries(
  marketingCategories.flatMap((category) =>
    category.brands.flatMap((brand) =>
      brand.deliverables
        .filter((item) => item.kind === 'gallery' && item.assets?.length)
        .map((item) => [
          item.id,
          {
            title: `${item.title} — ${brand.brand}`,
            items: item.assets,
          },
        ]),
    ),
  ),
);

export function getMarketingCategory(id: string) {
  return marketingCategories.find((category) => category.id === id);
}

export function marketingCounts(category: MarketingCategory) {
  const deliverables = category.brands.reduce((sum, brand) => sum + brand.deliverables.length, 0);
  const items = category.brands.reduce(
    (sum, brand) =>
      sum + brand.deliverables.reduce((brandSum, item) => brandSum + (item.assets?.length || (item.href ? 1 : 1)), 0),
    0,
  );
  return { brands: category.brands.length, deliverables, items };
}

export function getMarketingBrands() {
  const map = new Map<
    string,
    {
      id: string;
      brand: string;
      groups: { category: MarketingCategory; deliverables: MarketingDeliverable[] }[];
    }
  >();

  for (const category of marketingCategories) {
    for (const brand of category.brands) {
      const existing = map.get(brand.id) ?? { id: brand.id, brand: brand.brand, groups: [] };
      existing.groups.push({ category, deliverables: brand.deliverables });
      map.set(brand.id, existing);
    }
  }

  return [...map.values()];
}

export function getMarketingBrand(id: string) {
  return getMarketingBrands().find((brand) => brand.id === id);
}

export interface MarketingProjectWindow {
  category: MarketingCategory;
  brandId: string;
  brand: string;
  deliverables: MarketingDeliverable[];
  href: string;
  title: string;
  summary: string;
  preview?: string;
  assetCount: number;
}

export function getMarketingWindows(): MarketingProjectWindow[] {
  return marketingCategories.flatMap((category) =>
    category.brands.map((brand) => {
      const assetCount = brand.deliverables.reduce(
        (sum, item) => sum + (item.assets?.length || (item.href ? 1 : 0)),
        0,
      );
      return {
        category,
        brandId: brand.id,
        brand: brand.brand,
        deliverables: brand.deliverables,
        href: `/marketing/${category.id}/${brand.id}`,
        title: `${brand.brand} — ${category.title}`,
        summary: brand.deliverables[0]?.summary || category.summary,
        preview: brand.deliverables.find((item) => item.preview)?.preview,
        assetCount,
      };
    }),
  );
}

export function getMarketingWindow(categoryId: string, brandId: string) {
  return getMarketingWindows().find(
    (window) => window.category.id === categoryId && window.brandId === brandId,
  );
}

export function relatedWindows(brandId: string, currentCategoryId: string) {
  return getMarketingWindows().filter(
    (window) => window.brandId === brandId && window.category.id !== currentCategoryId,
  );
}
