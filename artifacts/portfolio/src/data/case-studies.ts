export interface ExternalLink {
  href: string;
  text: string;
  isExternal: boolean;
}

export interface ProductLink {
  text: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  id: string;

  // Homepage card (lightweight)
  title: string;
  category: string;
  summary: string;
  outcomes: string[];
  keyLearning: string;
  externalLinks: ExternalLink[];
  productLinks?: ProductLink[];

  // Detail page
  detailKeyLearning: string;
  challenge: string;
  approach: string;
  action?: string;
  actionBullets?: string[];
  results: string[];
  stats?: Array<{ value: string; label: string }>;
  activationImpact?: string[];
  strategicImpact?: string;
  photo?: "box-ai-launches";
}

export interface CaseStudySection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  slugs: string[];
  gridClass: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "box-ai-explainer-series",
    id: "cs-explainer-series",
    title: "Box AI Explainer Series",
    category: "AI Education & Thought Leadership · Box",
    summary:
      "As AI adoption accelerated, customers and field teams struggled to understand concepts like RAG, AI Agents, governance, and enterprise readiness. I partnered with Box's CTO to create an educational content engine that simplified complex topics while reinforcing Box's AI narrative.",
    outcomes: [
      "500K+ video views",
      "Became a core customer and field education resource",
      "Increased visibility of Box's AI strategy and executive perspective",
    ],
    keyLearning: "The biggest barrier to AI adoption is often understanding, not technology.",
    externalLinks: [
      {
        href: "https://youtube.com/playlist?list=PLCSEWOlbcUyIFeYvgD_1i4-qtaDF8BPix&si=J5MfhvczkhgIhme3",
        text: "Watch the Box AI Explainer Series",
        isExternal: true,
      },
    ],
    detailKeyLearning:
      "Sometimes the biggest barrier to AI adoption is not the technology, rather its understanding.",
    challenge:
      "Enterprise AI was generating significant excitement, but customers, field teams, and even internal stakeholders struggled to understand concepts such as RAG, AI agents, metadata, governance, and enterprise readiness.",
    approach:
      "Partner with CTO Ben Kus to build an educational content engine that simplified complex AI topics while reinforcing Box's enterprise AI narrative.",
    action:
      "Created and hosted the Box AI Explainer Series, developing content strategy, episode topics, positioning, scripts, promotion plans, and field enablement resources.",
    results: [
      "Generated 500K+ views",
      "Became a core customer and field education resource",
      "Increased executive visibility for Box's AI strategy",
    ],
  },
  {
    slug: "ai-narrative-thought-leadership",
    id: "cs-ai-narrative",
    title: "AI Narrative & Thought Leadership",
    category: "Market Creation & Positioning · Box AI",
    summary:
      "In a crowded AI market, feature-centric messaging made differentiation increasingly difficult. I led the shaping of Box's AI narrative around trust, governance, content intelligence, and workflow transformation through thought leadership, webinars, analyst engagement, and industry publications.",
    outcomes: [
      "Expanded Box's AI market presence",
      "Established executive thought leadership",
      "Increased engagement across customers and industry audiences",
    ],
    keyLearning: "Winning narratives focus on customer outcomes, not technical capabilities.",
    externalLinks: [
      { href: "#insights", text: "Explore My Published Work on AI", isExternal: false },
    ],
    detailKeyLearning: "Winning narratives focus on customer outcomes, not technical capabilities.",
    challenge:
      "The AI market was becoming increasingly crowded, with vendors competing on models and features rather than customer outcomes.",
    approach:
      "Position Box around enterprise trust, content intelligence, governance, and workflow transformation.",
    action:
      "Developed executive messaging, customer narratives, webinar programs, analyst briefings, and contributed thought leadership to TechRadar Pro, MarTech Series, IT-Daily, and Versicherungsbote.",
    results: [
      "Expanded Box's AI market presence",
      "Established executive thought leadership",
      "Increased engagement across customers and industry audiences",
    ],
  },
  {
    slug: "ai-certification-program",
    id: "cs-ai-cert",
    title: "AI Certification Program",
    category: "Internal Enablement & AI Fluency · Box",
    summary:
      "As AI innovation accelerated, teams across the company needed a shared understanding of Box AI capabilities, use cases, and messaging. I partnered cross-functionally to create the first ever Box AI certification program to establish company-wide AI fluency.",
    outcomes: [
      "Scaled AI education through a structured certification framework",
      "Enabled more consistent AI messaging across teams",
      "Adopted as a mandatory company-wide certification",
    ],
    keyLearning: "AI adoption starts with AI fluency.",
    externalLinks: [],
    detailKeyLearning:
      "AI adoption starts with AI fluency. Creating a shared understanding across teams enables more consistent customer experiences, stronger messaging, and faster organizational adoption.",
    challenge:
      "As AI innovation accelerated, teams across the company needed a consistent understanding of Box AI capabilities, use cases, and messaging to effectively support customers and drive adoption.",
    approach:
      "Designed a scalable certification program that combined foundational AI education, product knowledge, and real-world application to create a shared baseline of AI expertise.",
    actionBullets: [
      "Developed end-to-end AI certification curriculum and content",
      "Created practical learning modules tied to Box AI use cases",
      "Built assessments and knowledge validation framework",
      "Partnered cross-functionally to align messaging and training objectives",
      "Established a repeatable model for AI onboarding and enablement",
    ],
    results: [
      "Increased AI fluency across the organization",
      "Created a consistent foundation for AI messaging and customer engagement",
      "Enabled teams to more confidently position and discuss Box AI",
      "Scaled AI education through a structured certification framework",
      "Program was adopted as a mandatory company-wide certification",
    ],
  },
  {
    slug: "ai-in-action-series",
    id: "cs-ai-in-action",
    title: "AI in Action Series",
    category: "Customer Education & Product Storytelling · Box AI",
    summary:
      "Customers needed practical examples of how AI could solve real business problems. I built and scaled a demo-driven content engine showcasing real-world Box AI use cases through repeatable, customer-focused storytelling.",
    outcomes: [
      "Increased velocity of AI demo production",
      "Improved consistency of AI product storytelling",
      "Enabled broader cross-functional contribution",
    ],
    keyLearning: "Storytelling scales when the process behind it is systematized.",
    externalLinks: [
      {
        href: "https://youtube.com/playlist?list=PLCSEWOlbcUyLFnppTnftEU251AuwphRFi&si=gmmPFepgC17-38xH",
        text: "Watch Box AI in Action",
        isExternal: true,
      },
    ],
    detailKeyLearning:
      "Product storytelling scales best when it is systematized—consistent structure enables speed without sacrificing narrative clarity or technical accuracy.",
    challenge:
      "AI demos were inconsistent and slow to produce, limiting the ability to rapidly showcase new capabilities in a fast-moving AI landscape.",
    approach:
      "Created a structured demo framework and repeatable content system to accelerate production and improve consistency across use cases.",
    actionBullets: [
      "Defined AI in Action demo structure and narrative format",
      "Partnered with Product teams to identify key use cases",
      "Standardized demo storytelling across verticals",
      "Enabled multiple contributors beyond core PMM team",
      "Operationalized demo publishing cadence",
    ],
    results: [
      "Increased velocity of AI demo content creation",
      "Improved consistency of product storytelling",
      "Enabled broader cross-functional contribution",
      "Strengthened AI narrative across customer touchpoints",
      "Supported faster go-to-market cycles for new features",
    ],
  },
  {
    slug: "build-your-own-agent-workshops",
    id: "cs-agent-workshops",
    title: "Build Your Own Agent Workshops",
    category: "Hands-On Adoption Programs · Box AI Studio",
    summary:
      "Many customers were interested in AI Agents but lacked confidence in how to build and deploy them. I designed interactive workshops that helped customers move from curiosity to implementation.",
    outcomes: [
      "Strong engagement and participation",
      "Increased confidence in agentic workflows",
      "Improved readiness for AI Agent adoption",
    ],
    keyLearning: "The fastest path to adoption is participation.",
    externalLinks: [],
    detailKeyLearning: "The fastest path to adoption is participation.",
    challenge:
      "Customers were curious about AI agents but lacked confidence in how to build and deploy them.",
    approach: "Create hands-on learning experiences rather than one-way presentations.",
    action:
      "Launched intimate Build Your Own Agent workshops focused on practical implementation using Box AI Studio.",
    results: [
      "High engagement and participation",
      "Strong customer feedback",
      "Increased confidence in agentic workflows",
      "Enabled practical agent-building skills",
      "Strengthened customer readiness for agentic AI",
    ],
  },
  {
    slug: "ai-agents-playbook",
    id: "cs-ai-agents-playbook",
    title: "AI Agents Playbook",
    category: "AI Adoption Frameworks · Box AI Studio",
    summary:
      "As interest in AI Agents grew, customers needed practical guidance on where agents fit and how to deploy them effectively. I authored a two-part playbook covering enterprise use cases, governance, implementation, and adoption.",
    outcomes: [
      "Created a foundational resource for AI Agent adoption",
      "Established a common framework for agent discussions",
      "Extended Box's AI education strategy beyond launches",
    ],
    keyLearning:
      "Customers adopt AI Agents faster when they have clear starting points tied to everyday workflows.",
    externalLinks: [
      {
        href: "https://blog.box.com/enterprise-ai-agents-playbook-part-i-learning-how-unlock-agentic-potential",
        text: "Playbook Part I",
        isExternal: true,
      },
      {
        href: "https://blog.box.com/enterprise-ai-agents-playbook-part-ii-designing-maximum-impact-box-ai-studio",
        text: "Playbook Part II",
        isExternal: true,
      },
    ],
    detailKeyLearning:
      "The biggest unlock for AI Agents is helping customers translate capability into actionable starting points within their day-to-day work.",
    challenge:
      "As interest in AI agents accelerated, many customers were struggling to separate hype from practical business value. Questions around what agents were, where they fit, and how to implement them consistently came up in customer conversations, webinars, and events.",
    approach:
      "Create a practical playbook that helped customers understand AI agents from both a strategic and implementation perspective, providing a clear path from learning to building and deploying agents in enterprise workflows.",
    action:
      "Developed and authored a two-part AI Agents Playbook covering what agents are, common enterprise use cases, implementation with Box AI Studio, governance, and long-term adoption.",
    results: [
      "Created a foundational resource for customers exploring AI agents",
      "Established a common framework for agentic AI discussions across audiences",
      "Extended Box's AI education strategy beyond product launches",
      "Supported customer understanding of Box AI Studio and agent-building workflows",
    ],
  },
  {
    slug: "secure-rag",
    id: "cs-secure-rag",
    title: "Secure RAG: Building Trust in Enterprise AI",
    category: "AI Trust & Technical Positioning · Box AI",
    summary:
      "Enterprise buyers needed a clear understanding of how Box AI handled data, permissions, and security. I partnered with Product and technical leadership to create Box's Secure RAG narrative and architecture framework to simplify complex technical concepts and build customer trust.",
    outcomes: [
      "Became a high-demand customer and sales asset",
      "Reduced friction in security and architecture conversations",
      "Supported AI activation and enterprise deal progression",
    ],
    keyLearning: "Enterprise AI adoption is fundamentally a trust challenge.",
    externalLinks: [],
    detailKeyLearning:
      "AI adoption in the enterprise is fundamentally a trust problem—clear, simple architecture storytelling is often as important as the underlying product capabilities.",
    challenge:
      "Enterprise buyers needed clarity on how Box AI handled data, permissions, and security, which created friction in sales cycles and slowed AI activation.",
    approach:
      "Partnered with Product and Architecture to translate Box AI's technical design into a simple, trust-first narrative centered on Secure RAG.",
    actionBullets: [
      "Defined Secure RAG positioning and messaging framework",
      "Authored customer-facing whitepaper and narrative",
      "Created architecture flow in partnership with Product and Lead Architect",
      "Aligned Sales, Product, and Exec teams on unified AI trust story",
      "Enabled field teams with a reusable technical explainer",
    ],
    results: [
      "Became a high-demand internal and customer-facing AI asset",
      "Reduced friction in security and architecture conversations",
      "Increased confidence among admins and enterprise buyers",
      "Supported AI activation and enterprise deal progression",
      "Recognized by executive leadership for driving initiative end-to-end",
    ],
  },
  {
    slug: "ai-discover-page",
    id: "cs-ai-discover-page",
    title: "AI Discover Page",
    category: "Product-Led Growth & Adoption · Box Admin Console",
    summary:
      "Despite strong awareness, many administrators needed a clearer path to understanding and activating Box AI. I helped create an in-product destination that connected education directly to activation.",
    outcomes: [
      "~4× higher weekly AI usage",
      "~750 additional enterprises enabled",
      "2–5× higher AI engagement across customer segments",
    ],
    keyLearning:
      "The highest-performing adoption experiences embed learning directly into the workflow.",
    externalLinks: [],
    detailKeyLearning:
      "The highest-performing adoption experiences happen when learning is embedded directly into the workflow.",
    challenge:
      "With strong market awareness already established, the focus shifted to accelerating adoption. Administrators needed a clearer in-product path to discover Box AI's capabilities, understand its value, and activate it with confidence.",
    approach:
      "Partner with Product and Design to create an in-product destination that connected AI education directly to activation — bringing AI learning into the Admin Console where decision makers already worked, rather than treating content and enablement as separate from the product experience.",
    actionBullets: [
      "Defining the messaging hierarchy",
      "Designing the educational journey",
      "Integrating AI Explainer Series content and AI in Action customer stories",
      "Advocating for keeping videos embedded in-product",
      "Aligning the experience with broader AI education and enablement programs",
      "Influencing content strategy and placement based on expected adoption impact",
    ],
    stats: [
      { value: "~4×", label: "Higher weekly AI usage" },
      { value: "~750", label: "Additional enterprises enabled" },
    ],
    activationImpact: [
      "Activated AI significantly faster",
      "Showed stronger long-term adoption",
      "Demonstrated 2–5× higher AI engagement across customer segments",
    ],
    strategicImpact:
      "Established a scalable in-product channel for AI education, customer adoption, and content distribution.",
    results: [
      "~4× higher weekly AI usage among enabled accounts",
      "~750 additional enterprises enabled",
      "Demonstrated 2–5× higher AI engagement across customer segments",
      "Established a scalable in-product channel for AI education and content distribution",
    ],
  },
  {
    slug: "scaling-demo-creation",
    id: "cs-agent-scaling",
    title: "AI in Action: Scaling Demo Creation with AI Agents",
    category: "AI-Powered Operations & Scale · Box AI Studio",
    summary:
      "As demand for AI demos increased, a manual creation process became a bottleneck. I built an AI Agent and workflow system that transformed demo creation into a scalable, self-serve process.",
    outcomes: [
      "Reduced demo creation time from days to hours",
      "Scaled from single-owner to cross-functional contribution",
      "Established a repeatable AI storytelling system",
    ],
    keyLearning:
      "The best AI workflows improve the quality of inputs, not just the speed of execution.",
    externalLinks: [],
    detailKeyLearning:
      "AI-driven workflows scale best when they don't just automate execution, but actively improve input quality—guiding users toward better briefs creates consistency, speed, and downstream content quality at scale.",
    challenge:
      "AI demo creation was a manual, multi-day process led by a single PMM, limiting speed, consistency, and scalability as demand for AI storytelling increased.",
    approach:
      "Designed an internal system using a Box AI Agent, Slack workflows, and Airtable intake to standardize briefs, streamline requests, and enable self-serve demo creation across teams.",
    actionBullets: [
      "Built a Box AI Studio agent to generate structured demo briefs",
      "Integrated Slack → Airtable workflow for demo requests",
      "Designed guided prompts and follow-up questions to improve input quality",
      "Standardized brief format for consistent AI in Action storytelling",
      "Enabled PMMs and product teams to independently create demos",
    ],
    results: [
      "Reduced demo creation time from days to hours",
      "Scaled demo production from single-owner to cross-functional system",
      "Improved consistency and quality of AI demo narratives",
      "Enabled self-serve contribution from PMMs and product leaders",
      "Established a repeatable system for AI storytelling at scale",
    ],
  },
  {
    slug: "box-ai-product-launches",
    id: "cs-ai-product-launches",
    title: "Box AI Product Launches",
    category: "AI GTM & Product Launches · Box",
    summary:
      "Launching multiple AI products required a unified narrative across customers, sellers, and executives. I led GTM strategy for Box AI Agents, AI Studio, AI Extract Agents, Box Agent, and AI Trust Center.",
    outcomes: [
      "Successful global launches",
      "Company-wide enablement adoption",
      "Consistent AI messaging across teams",
    ],
    keyLearning:
      "Launches succeed when positioning, enablement, and adoption operate as one system.",
    externalLinks: [],
    productLinks: [
      { text: "Box AI Agents", href: "https://www.box.com/agents" },
      { text: "AI Studio", href: "https://www.box.com/ai/ai-studio" },
      { text: "AI Extract Agents", href: "https://www.box.com/extract" },
      { text: "AI Trust Center", href: "https://www.box.com/ai/trust" },
    ],
    detailKeyLearning:
      "Launches succeed when positioning, enablement, and adoption are treated as one system.",
    challenge:
      "Launch multiple AI products while maintaining a clear, unified narrative for customers and sellers.",
    approach:
      "Create a consistent positioning framework spanning launches, enablement, and customer communications.",
    action:
      "Led end-to-end GTM strategy for Box's AI portfolio, including Box AI Agents, AI Studio, Box Agent, AI Extract Agents, and AI Trust Center—defining positioning, messaging, launch strategy, customer education, and enablement to drive enterprise adoption of agentic AI.",
    actionBullets: [
      "Developed differentiated messaging and narratives for IT, business, and executive audiences.",
      "Partnered with Product, Sales, AR, and Customer Success teams to execute launches across owned, earned, and customer-facing channels.",
      "Created adoption-focused content, demos, webinars, and enablement programs to help customers operationalize AI securely and at scale.",
    ],
    results: [
      "Successful global launches",
      "Company-wide enablement adoption",
      "Consistent AI messaging across teams",
    ],
    photo: "box-ai-launches",
  },
  {
    slug: "box-ai-units",
    id: "cs-ai-units",
    title: "Box AI Units",
    category: "AI Monetization & Pricing Strategy · Box",
    summary:
      "Traditional software pricing models struggle to capture AI value. I led GTM strategy for Box AI Units, helping customers understand, measure, and manage AI consumption through a value-based framework.",
    outcomes: [
      "Improved customer understanding of AI value measurement",
      "Reduced friction in pricing conversations",
      "Supported expansion into Enterprise Advanced opportunities",
    ],
    keyLearning:
      "AI monetization succeeds when customers can clearly connect usage to business value.",
    externalLinks: [
      {
        href: "https://siliconangle.com/2025/02/19/box-makes-easier-customers-track-ai-spending-adds-new-agentic-ai-capabilities/",
        text: "Read Coverage of Box AI Units Launch",
        isExternal: true,
      },
    ],
    detailKeyLearning:
      "AI monetization requires translating usage into perceived business value—customers adopt faster when pricing reflects how they experience work, not just system activity.",
    challenge:
      "Customers struggled to understand how to measure and control AI value, especially in enterprise environments where usage didn't map cleanly to traditional pricing models.",
    approach:
      "Developed GTM positioning that connected AI usage to meaningful business outcomes through a structured consumption model.",
    actionBullets: [
      "Led GTM strategy for Box AI Units launch",
      "Defined positioning and messaging across buyer personas",
      "Partnered with Product and Sales on pricing narrative",
      "Built customer education and enablement materials",
      "Supported enterprise deal conversations with usage framing",
    ],
    results: [
      "Improved customer understanding of AI value measurement",
      "Strengthened enterprise adoption conversations",
      "Reduced friction in pricing and packaging discussions",
      "Supported expansion into Enterprise Advanced tier opportunities",
      "Established clearer link between AI usage and business outcomes",
    ],
  },
];

export const caseStudySections: CaseStudySection[] = [
  {
    id: "market-creation",
    eyebrow: "Top of Funnel",
    title: "Market Creation",
    description:
      "Defining corporate narrative structures, driving initial executive thought leadership, and building early educational market equity.",
    slugs: ["box-ai-explainer-series", "ai-narrative-thought-leadership"],
    gridClass: "md:grid-cols-2",
  },
  {
    id: "customer-education",
    eyebrow: "Middle of Funnel",
    title: "Customer Education & Adoption",
    description:
      "Translating technical complexity into systematic learning and hands-on engagement for sales teams and buyers.",
    slugs: [
      "ai-certification-program",
      "ai-in-action-series",
      "build-your-own-agent-workshops",
      "ai-agents-playbook",
      "secure-rag",
    ],
    gridClass: "md:grid-cols-2 lg:grid-cols-3",
  },
  {
    id: "in-product-growth",
    eyebrow: "Product Adoption",
    title: "In-Product Growth",
    description:
      "Embedding AI education directly into the product experience to accelerate activation and drive measurable adoption lift.",
    slugs: ["ai-discover-page", "scaling-demo-creation"],
    gridClass: "md:grid-cols-2",
  },
  {
    id: "revenue-acceleration",
    eyebrow: "Bottom of Funnel",
    title: "Revenue Acceleration",
    description:
      "Structuring consumption pricing designs, launching pricing tiers, and driving cross-functional revenue scaling paths.",
    slugs: ["box-ai-product-launches", "box-ai-units"],
    gridClass: "md:grid-cols-2",
  },
];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((cs) => [cs.slug, cs])
);
