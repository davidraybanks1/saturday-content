export type Tool = "Notion" | "ClickUp" | "Airtable" | "Claude";

export type Template = {
  slug: string;
  name: string;
  tool: Tool;
  /** old Squarespace product slug, for redirects (templates added after the move have none; keep those last in the list) */
  legacySlug?: string;
  image: string;
  hook: string;
  summary: string;
  features?: { title: string; body: string }[];
  templateUrl: string;
  /** button label for templateUrl; defaults to "Open in {tool}" */
  templateLabel?: string;
  /** a file to download, e.g. a Claude skill */
  download?: { label: string; href: string };
  /** step-by-step build walkthrough, shown on the page and in the PDF */
  walkthrough?: { title: string; body: string }[];
  /** setup-guide PDF pro tip; defaults to the desktop-first tip */
  tip?: string;
  /** extra screenshots, shown on the page and in the PDF */
  gallery?: { src: string; alt: string; caption: string }[];
  /** extra setup page (e.g. Notion instructions for the Airtable hub) */
  guideUrl?: string;
  packet: string;
  credit?: string;
  featured?: boolean;
};

export const templates: Template[] = [
  {
    slug: "thought-leadership-hub-airtable",
    name: "Thought leadership hub",
    tool: "Airtable",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-nlcl6",
    image: "/images/thought-leadership-hub-airtable.png",
    hook: "Needle-moving thought leadership programs uncover the hottest topics and get the right experts to deliver the message.",
    summary:
      "This template creates a central hub to help any marketing team manage, build, and activate their subject matter expert network.",
    templateUrl: "https://airtable.com/appg3FXDFKf8MSwGI/shrbJTE0S0N6YOjWN",
    guideUrl:
      "https://saturday-content.notion.site/saturday-content/Thought-leadership-development-hub-094baa2bafa0458badcb342baed4b286",
    packet: "/packets/thought-leadership-hub-airtable.pdf",
    featured: true,
  },
  {
    slug: "narrative-id-notion",
    name: "Narrative ID: Thought leadership",
    tool: "Notion",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-3y9k3-dst6g-yzg3f",
    image: "/images/narrative-id-notion.png",
    hook: "Thought leadership is more than slapping an expert’s name on a blog. But there’s usually not enough direction to do more than that.",
    summary:
      "The Narrative ID is a granular messaging and positioning framework that helps make each thought leader multidimensional and quality content easier to create.",
    features: [
      {
        title: "Uncover your secret",
        body: "Guiding prompts help you identify what makes each thought leader unique, essential, and worthy of attention.",
      },
      {
        title: "Consistency and whitespace",
        body: "Clear audience and messaging sections ensure each thought leader’s content is consistent yet differentiated from others in your program.",
      },
      {
        title: "Multiple threads to pull",
        body: "Granular narrative components give marketers a bunch of options to create storylines and tie current events into available expertise.",
      },
      {
        title: "Know why you’re talking",
        body: "The framework pulls from best practices in narrative development to capture what makes each thought leader exceptional and how to translate that into content.",
      },
      {
        title: "Death to platitudes",
        body: "Probing prompts help you get beneath the surface with each thought leader to uncover the juiciest perspectives on the hottest topics.",
      },
    ],
    templateUrl:
      "https://saturday-content.notion.site/Narrative-ID-Thought-leadership-35a3a5812ed44ef4ba85163a2b9d0d1a",
    packet: "/packets/narrative-id-notion.pdf",
    featured: true,
  },
  {
    slug: "b2b-content-library-clickup",
    name: "B2B content library",
    tool: "ClickUp",
    legacySlug: "b2b-content-style-guide-xrsyd",
    image: "/images/b2b-content-library-clickup.png",
    hook: "Good content turns into bad content when it’s not used, connected, or up-to-date.",
    summary:
      "The B2B content library organizes assets into core marketing categories with scannable views so everyone knows what’s available and how to use it.",
    templateUrl: "https://app.clickup.com/template/subcategory/t-901400251270/b7a697d5f7f008b",
    packet: "/packets/b2b-content-library-clickup.pdf",
    featured: true,
  },
  {
    slug: "b2b-content-library-notion",
    name: "B2B content library",
    tool: "Notion",
    legacySlug: "content-brief-notion",
    image: "/images/b2b-content-library-notion.jpg",
    hook: "Good content turns into bad content when it’s not used, connected, or up-to-date.",
    summary:
      "The B2B content library organizes assets into core marketing categories with scannable views so everyone knows what’s available and how to use it.",
    templateUrl:
      "https://saturday-content.notion.site/498ce39acf764b89a3e9806ba005f01c?v=8d43179090e747b58ef6d122270127d8",
    packet: "/packets/b2b-content-library-notion.pdf",
  },
  {
    slug: "audience-profile-builder-notion",
    name: "Audience profile builder",
    tool: "Notion",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-3y9k3-dst6g",
    image: "/images/audience-profile-builder-notion.png",
    hook: "People are complex. Audiences are messy. The profile builder helps marketers make sense of it all.",
    summary:
      "With guiding prompts and building block structure, this template helps uncover what makes your audience tick and then organizes it so it can be applied consistently.",
    templateUrl:
      "https://saturday-content.notion.site/Audience-profile-builder-430cf00d32fb46c2a0aebb48cf1d922c",
    packet: "/packets/audience-profile-builder-notion.pdf",
    featured: true,
  },
  {
    slug: "everything-content-brief-notion",
    name: "Everything content brief",
    tool: "Notion",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-3y9k3",
    image: "/images/everything-content-brief-notion.png",
    hook: "Know what you’re creating, why you’re creating it, and who needs to be involved – always.",
    summary:
      "The Everything content brief consolidates the messy world of content creation into a single document that gets everyone on the same page before any work begins.",
    templateUrl:
      "https://saturday-content.notion.site/Everything-content-brief-template-296d3da093b249e7babeec3cf4402ab6",
    packet: "/packets/everything-content-brief-notion.pdf",
    featured: true,
  },
  {
    slug: "content-style-guide-notion",
    name: "Content style guide",
    tool: "Notion",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-2f8nr",
    image: "/images/content-style-guide-notion.png",
    hook: "As soon as you have more than one person writing, creating, or editing content, you need a style guide.",
    summary:
      "This guide includes everything from basic grammar mechanics to accessibility standards to best practices for common content types. You can use as-is or totally customize to fit your brand’s needs.",
    templateUrl:
      "https://saturday-content.notion.site/Content-Style-Guide-a3bc5334d327408c9178f84db2b8763d",
    packet: "/packets/content-style-guide-notion.pdf",
    credit:
      "Adapted from Mailchimp’s Content Style Guide, which Mailchimp published under a Creative Commons Attribution-NonCommercial 4.0 license.",
    featured: true,
  },
  {
    slug: "content-style-guide-clickup",
    name: "Content style guide",
    tool: "ClickUp",
    legacySlug: "b2b-content-style-guide-xrsyd-4f53w-2f8nr-ax4zp",
    image: "/images/content-style-guide-clickup.jpg",
    hook: "As soon as you have more than one person writing, creating, or editing content, you need a style guide.",
    summary:
      "This guide includes everything from basic grammar mechanics to accessibility standards to best practices for common content types. You can use as-is or totally customize to fit your brand’s needs.",
    templateUrl: "https://app.clickup.com/template/doc/dp2g7-2360/9a19e444113a20d",
    packet: "/packets/content-style-guide-clickup.pdf",
    credit:
      "Adapted from Mailchimp’s Content Style Guide, which Mailchimp published under a Creative Commons Attribution-NonCommercial 4.0 license.",
  },
  {
    slug: "content-performance-hub-claude",
    name: "Content performance hub",
    tool: "Claude",
    image: "/images/content-performance-hub-claude.png",
    hook: "Most content dashboards tell you what got traffic. This one tells you what to do next.",
    summary:
      "A Claude skill that builds a live, filterable dashboard on your own page data. It scores every page, finds the high-traffic pages that leak, credits the content that drives demo requests, and writes the recommendations for you.",
    features: [
      {
        title: "A summary that writes itself",
        body: "What’s working, what’s not, and what to do next, generated from your live numbers every time you change the date range or filters.",
      },
      {
        title: "A verdict for every page",
        body: "Fix, Double down, Sales driver, Activation surface, or Too early. Pages under your minimum sample are never ranked, so small numbers don’t fool you.",
      },
      {
        title: "Credit where it’s earned",
        body: "A page only gets credit for a demo or contact-sales request when the request comes after the reader saw that page, in the same session.",
      },
      {
        title: "Journeys, not just pageviews",
        body: "See the most common paths, the paths that end in a sign-up, and where readers came from and went next for any page.",
      },
      {
        title: "Works with your stack",
        body: "Databricks, BigQuery and the GA4 export, Snowflake, Postgres and Redshift, the GA4 API, or a plain CSV. Tabs that need missing data switch themselves off.",
      },
      {
        title: "Math you can defend",
        body: "Every rate is a ratio of summed counts, never an average of percentages, and the hub flags the recent days where conversions are still coming in.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/content-performance-hub.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/content-performance-hub-skill.zip" },
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the live demo to see every tab on sample data. Upload a CSV from the “Connect your data” panel to see your own numbers with no setup.",
      },
      {
        title: "Add the skill to Claude",
        body: "Download the skill and upload the .zip as a custom skill in Claude. It brings the dashboard, the instructions, and guides for each data source.",
      },
      {
        title: "Connect your data",
        body: "Add the Claude connector for your warehouse and sign in. Using a CSV? Skip this step.",
      },
      {
        title: "Write your build prompt",
        body: "In the demo’s “Connect your data” panel, pick your tools, list your pages, and name your conversion and demo pages. Copy the prompt it writes.",
      },
      {
        title: "Let Claude build it",
        body: "Paste the prompt into a new chat. Claude maps your columns, checks every page has data, and publishes your private hub. Check the column mapping before you say yes.",
      },
    ],
    gallery: [
      {
        src: "/images/content-performance-hub-claude-overview.png",
        alt: "The Content performance hub overview tab with an executive summary, KPIs and a content scorecard",
        caption: "Overview: summary, KPIs and a verdict for every page",
      },
      {
        src: "/images/content-performance-hub-claude-connect.png",
        alt: "The Connect your data panel with data sources to choose from",
        caption: "Connect your data: pick your tools and get a build prompt",
      },
    ],
    tip: "Before you approve the build, check the column mapping Claude proposes. It decides whether every number in the hub is right.",
    packet: "/packets/content-performance-hub-claude.pdf",
    featured: true,
  },
];

export const tools: Tool[] = ["Notion", "ClickUp", "Airtable", "Claude"];

export const setupSteps: Record<Tool, { have: string[]; dont: string[] }> = {
  Notion: {
    have: [
      "Open the template. It loads in a new tab.",
      "Click “Duplicate” in the upper-right corner. Notion copies the template into your workspace in a few seconds.",
      "Find it at the top of your sidebar, then work through the “How to use” section inside the template.",
    ],
    dont: [
      "Open the template and click “Try Notion” in the upper-right corner. Accounts are free.",
      "Once your account is set up, open the template link again and follow the steps above.",
    ],
  },
  ClickUp: {
    have: [
      "Open the template. ClickUp asks where you want it to live.",
      "Under “Workspace,” pick a destination, then click “Use template.”",
      "Give it a minute to copy in, then work through the “How to use” section inside the template.",
    ],
    dont: [
      "Open the template and create a free ClickUp account when prompted.",
      "Verify your email, name your workspace, then open the template link again and follow the steps above.",
    ],
  },
  Claude: {
    have: [
      "Download the skill and upload the .zip as a custom skill in Claude.",
      "Add the connector for your data warehouse, or keep a CSV export handy.",
      "Open the live demo, click “Connect your data,” copy the build prompt, and paste it into a new Claude chat.",
    ],
    dont: [
      "Sign up at claude.ai and check that your plan includes skills and connectors.",
      "Try the live demo first. Upload a CSV in its “Connect your data” panel to see your own numbers with no setup.",
      "When you want live data, follow the steps on the left.",
    ],
  },
  Airtable: {
    have: [
      "Open the shared base. It loads in a new tab.",
      "Click “Copy base” and choose the workspace to add it to.",
      "Use the setup guide to get your expert network organized.",
    ],
    dont: [
      "Open the shared base and sign up for a free Airtable account when prompted.",
      "Once you’re signed in, open the link again and follow the steps above.",
    ],
  },
};

export const getTemplate = (slug: string) => templates.find((t) => t.slug === slug);
