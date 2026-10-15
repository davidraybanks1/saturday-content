export type Tool = "Notion" | "ClickUp" | "Airtable";

export type Template = {
  slug: string;
  name: string;
  tool: Tool;
  /** old Squarespace product slug, for redirects */
  legacySlug: string;
  image: string;
  hook: string;
  summary: string;
  features?: { title: string; body: string }[];
  templateUrl: string;
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
];

export const tools: Tool[] = ["Notion", "ClickUp", "Airtable"];

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
