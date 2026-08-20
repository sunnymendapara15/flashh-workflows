export const companyLogos = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Airtable', 'Slack'];

export const socialProofStats = [
  { value: '10K+', label: 'Active Users' },
  { value: '1M+', label: 'Workflows Created' },
  { value: '99.9%', label: 'Uptime' },
  { value: '200+', label: 'Integrations' },
];

export const featuresData = [
  {
    icon: 'sparkles',
    title: 'Text-to-Workflow Engine',
    description:
      'Describe what you need in plain language. Our AI engine understands context and intent, building complex multi-step workflows automatically.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'bot',
    title: 'AI Copilot',
    description:
      'Smart suggestions and auto-completion that learns your patterns. Refine every step of your workflow naturally.',
  },
  {
    icon: 'mouse-pointer-click',
    title: 'Visual Editor',
    description:
      'Fine-tune your workflows with our intuitive drag-and-drop interface when you need pixel-perfect control.',
  },
  {
    icon: 'puzzle',
    title: '200+ Integrations',
    description:
      'Connect everything: Slack, Notion, Airtable, Google Sheets, Salesforce, Stripe, and hundreds more.',
  },
  {
    icon: 'zap',
    title: 'Instant Deploy',
    description:
      'Deploy to cloud, set cron schedules, or trigger via webhooks. One click and your workflow goes live.',
  },
  {
    icon: 'users',
    title: 'Team Collaboration',
    description:
      'Share workspaces, review changes together, and iterate faster with built-in collaboration tools.',
  },
];

export const showcaseTabs = [
  { key: 'builder', label: 'Builder View' },
  { key: 'integrations', label: 'Integrations' },
  { key: 'analytics', label: 'Analytics' },
];

export const showcaseContent = {
  builder: {
    heading: 'See your workflow come alive',
    description:
      'Watch as Flashh transforms your descriptions into structured, executable workflows in real-time. Iterate and refine with natural conversation.',
  },
  integrations: {
    heading: 'Connect your entire stack',
    description:
      'With 200+ pre-built integrations, Flashh works with the tools you already use. Connect apps seamlessly without any configuration.',
  },
  analytics: {
    heading: 'Monitor & optimize',
    description:
      'Track performance metrics, identify bottlenecks, and continuously improve your workflows with a beautiful analytics dashboard.',
  },
};

export const benefitsData = [
  {
    icon: 'clock',
    title: 'Save Hours Every Day',
    description:
      'What used to take days of manual setup now takes minutes. Focus on building ideas, not plumbing.',
    stat: '8 hrs/wk',
    statLabel: 'average saved per user',
  },
  {
    icon: 'wand',
    title: 'Zero Code Required',
    description:
      'Natural language is all you need. If you can describe it, Flashh can build it. Truly accessible for everyone.',
    stat: '98%',
    statLabel: 'success rate on first try',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security',
    description:
      'SOC2 compliant, SSO ready, end-to-end encryption. Your data stays safe with enterprise-grade protection.',
    stat: 'SOC2',
    statLabel: 'Type II certified',
  },
];

export const testimonialsData = [
  {
    name: 'Sarah Chen',
    role: 'Co-founder & CEO',
    company: 'Flowbase',
    avatar: 'SC',
    quote:
      "Flashh cut our operations time by 70%. What took our team hours now happens automatically. It feels like magic.",
    rating: 5,
  },
  {
    name: 'Marcus Rivera',
    role: 'Lead Engineer',
    company: 'TechStack',
    avatar: 'MR',
    quote:
      'As a developer, I love that I can prototype workflows in minutes instead of writing integration glue code. Game changer.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director',
    company: 'GrowthLab',
    avatar: 'EW',
    quote:
      'We onboarded non-technical team members who now build their own workflows. No more waiting on engineering tickets.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    company: 'Streamline',
    avatar: 'DK',
    quote:
      'The AI copilot is incredibly smart. It anticipates what I need before I even ask. Absolutely essential tool now.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Lead',
    company: 'Nexus',
    avatar: 'PS',
    quote:
      'From lead routing to CRM updates to Slack notifications\u2014we automated our entire ops pipeline in one afternoon.',
    rating: 5,
  },
  {
    name: "James O'Brien",
    role: 'Indie Hacker',
    company: 'ShipFast',
    avatar: 'JO',
    quote:
      'I launched my MVP 3x faster because I spent zero time on backend glue. Just described what I wanted and went.',
    rating: 5,
  },
];

export const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '5 active workflows',
      '1,000 runs per month',
      '20+ core integrations',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    annualPrice: '$23',
    description: 'For power users and small teams',
    features: [
      'Unlimited workflows',
      '50,000 runs per month',
      '200+ integrations',
      'Priority email support',
      'Advanced analytics',
      'Custom triggers',
      'API access',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Team',
    price: '$79',
    period: '/month',
    annualPrice: '$63',
    description: 'For growing organizations',
    features: [
      'Everything in Pro',
      'Unlimited runs',
      'SSO / SAML',
      'Team workspaces',
      'Role-based permissions',
      'Dedicated account manager',
      'Audit logs',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const faqsData = [
  {
    question: 'How does Flashh AI work?',
    answer:
      'Flashh uses advanced AI to understand natural language descriptions of workflows you want to build. Simply type what you need\u2014like "Send a Slack message when a new form submission comes in"\u2014and our engine automatically creates the connected steps, integrations, and logic required.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'Absolutely not. Flashh is designed for everyone. While developers appreciate the API access and customization options, the core experience is entirely no-code. Just describe what you want in plain English.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We are SOC2 Type II certified, offer SSO/SAML for Teams, encrypt all data in transit and at rest, and never use your data to train our models. Enterprise plans include additional security controls.',
  },
  {
    question: 'What integrations do you support?',
    answer:
      'We support 200+ integrations including Slack, Notion, Airtable, Google Sheets, Salesforce, HubSpot, Stripe, GitHub, Jira, Asana, Trello, Zapier, and many more. New integrations are added weekly.',
  },
  {
    question: 'Can I customize generated workflows?',
    answer:
      'Yes! After AI generates your workflow, you can fine-tune it using our visual editor, add conditional logic, modify triggers, and adjust every parameter to your exact needs.',
  },
  {
    question: 'What happens if I exceed my monthly runs?',
    answer:
      'Your workflows won\'t stop. You\'ll receive a notification when you\'re approaching your limit, and you can upgrade your plan or purchase additional run packs at any time.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Of course. All plans are month-to-month with no long-term commitment. You can upgrade, downgrade, or cancel at any time from your dashboard.',
  },
  {
    question: 'Do you offer a free trial of Pro?',
    answer:
      'Yes! The Pro plan includes a 14-day free trial so you can explore all features. No credit card required to start.',
  },
];