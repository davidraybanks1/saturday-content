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
  /** walkthrough wording: label (mono label + PDF heading) and lead (page heading before the step count) */
  walkthroughLabel?: string;
  walkthroughLead?: string;
  /** getting-started steps for this template, when they differ from the tool's defaults */
  steps?: { have: string[]; dont: string[] };
  /** setup-guide PDF pro tip; defaults to the desktop-first tip */
  tip?: string;
  /** extra screenshots, shown on the page and in the PDF */
  gallery?: { src: string; alt: string; caption: string }[];
  /** extra setup page (e.g. Notion instructions for the Airtable hub) */
  guideUrl?: string;
  packet: string;
  credit?: string;
  featured?: boolean;
  /** homepage order among featured templates: 1 shows first, then 2, …; unpinned ones follow in list order */
  pinned?: number;
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
    walkthroughLabel: "Build it on your data",
    walkthroughLead: "From demo to your own hub in",
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
    pinned: 2,
  },
  {
    slug: "b2b-content-studio-claude",
    name: "B2B content studio",
    tool: "Claude",
    image: "/images/b2b-content-studio-claude.png",
    hook: "On-message B2B content for every persona, industry and funnel stage, without starting from a blank page.",
    summary:
      "A Claude skill that turns your messaging into a content studio. Pick a format, persona, industry and funnel stage, then draft, remix, critique or brainstorm with Claude, grounded in what you actually say about your product.",
    features: [
      {
        title: "Four ways to work",
        body: "Draft a new piece, remix one you already have, get a scored critique with rewrites, or brainstorm ideas and whitespace.",
      },
      {
        title: "A library that does the briefing",
        body: "Each persona and industry carries its goal, pains, proof points, objections and what to avoid, so every request starts fully briefed.",
      },
      {
        title: "Picks that change the writing",
        body: "Format, persona, industry and funnel stage each bring their own playbook. A top-of-funnel LinkedIn post and a bottom-of-funnel product page come out very differently.",
      },
      {
        title: "No made-up proof",
        body: "The studio only cites proof points from your library. Where evidence is missing, it leaves a clear placeholder instead of inventing a stat.",
      },
      {
        title: "In chat or as a team page",
        body: "Ask Claude directly, or publish a studio page your team can use. On the page, Claude writes on each person’s own account.",
      },
      {
        title: "Built from what you have",
        body: "Claude builds the messaging library from your positioning docs, persona one-pagers and sales decks, or interviews you if there’s nothing written down.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/b2b-content-studio.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/b2b-content-studio-skill.zip" },
    walkthroughLabel: "Build it on your messaging",
    walkthroughLead: "From demo to your own studio in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Pick a mode and targets in the live demo. It builds the full prompt for you to paste into Claude and shows a worked example for each mode.",
      },
      {
        title: "Add the skill to Claude",
        body: "Download the skill and upload the .zip as a custom skill in Claude.",
      },
      {
        title: "Build your messaging library",
        body: "Ask Claude to build your library and attach any positioning, persona or sales docs. No docs? Claude interviews you instead.",
      },
      {
        title: "Publish your studio",
        body: "Ask Claude to publish your studio page, then share it with your team. Each person writes with their own Claude account.",
      },
      {
        title: "Write on message",
        body: "Draft, remix, critique and brainstorm. When your messaging changes, ask Claude to update the library and republish.",
      },
    ],
    steps: {
      have: [
        "Download the skill and upload the .zip as a custom skill in Claude.",
        "Start a chat and ask Claude to build your messaging library. Attach any positioning or persona docs you have.",
        "Ask Claude to publish your studio page, then share it with your team.",
      ],
      dont: [
        "Sign up at claude.ai and check that your plan includes skills.",
        "Try the live demo first. Pick a mode and targets, then paste the prompt it builds into any Claude chat.",
        "When you want your own messaging in it, follow the steps on the left.",
      ],
    },
    gallery: [
      {
        src: "/images/b2b-content-studio-claude-studio.png",
        alt: "The B2B content studio with mode cards and format, persona and industry picks",
        caption: "Studio: pick a mode and targets",
      },
      {
        src: "/images/b2b-content-studio-claude-library.png",
        alt: "The messaging library with one persona expanded",
        caption: "Messaging library: what every draft is written from",
      },
    ],
    tip: "Put real proof points in your library. The studio never invents numbers or customer names, so the proof field is what makes drafts publishable.",
    packet: "/packets/b2b-content-studio-claude.pdf",
    featured: true,
    pinned: 1,
  },
  {
    slug: "thought-leader-profiler-claude",
    name: "Thought leader profiler",
    tool: "Claude",
    image: "/images/thought-leader-profiler-claude.png",
    hook: "Your experts have strong opinions and good stories. Most of their bylines sound like the company wrote them.",
    summary:
      "Builds a Narrative ID for each subject-matter expert (podium, posture and pillars), then pitches topics, drafts bylines in their voice and preps interviews that pull out a story and a strong opinion.",
    features: [
      {
        title: "A Narrative ID for every expert",
        body: "Podium, posture and pillars, plus audience, signature stories, strong opinions, phrases, off-limits topics and proof. One page per person.",
      },
      {
        title: "Profiles from your notes",
        body: "Paste interview answers or a transcript. Claude keeps the expert's own wording and marks anything it had to infer.",
      },
      {
        title: "Eight pitches that fit",
        body: "Each pitch comes with an angle, a hook, a format and the pillar it serves, plus a strongest three and one topic to skip.",
      },
      {
        title: "Bylines in their voice",
        body: "LinkedIn posts, op-eds and blog posts that follow the expert's posture and phrases, with notes on what they need to check.",
      },
      {
        title: "Interviews that get the good stuff",
        body: "Twelve questions grouped by podium, posture and pillars, built to pull out one story and one opinion you can publish. Copy or print them.",
      },
      {
        title: "Honest by default",
        body: "No invented numbers, quotes or credentials. Missing facts become placeholders, and off-limits topics stay off the page.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/thought-leader-profiler.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/thought-leader-profiler-skill.zip" },
    walkthroughLabel: "Build it on your experts",
    walkthroughLead: "From demo to your own expert bench in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the profiler, browse the three Fieldbook expert profiles, and build an interview question set or a prompt for any mode.",
      },
      {
        title: "Add the skill",
        body: "Download the free skill and add it to Claude from your skills settings.",
      },
      {
        title: "Profile your experts",
        body: "Paste interview notes or a transcript, or run the profiling interview. Claude drafts a Narrative ID for each person.",
      },
      {
        title: "Check it with them",
        body: "Send each expert their podium, posture and pillars and ask if it sounds like them. Fold their edits in.",
      },
      {
        title: "Publish and share",
        body: "Ask Claude to publish your profiler page. Your team pitches, drafts and preps interviews from the same profiles.",
      },
    ],
    steps: {
      have: [
        "Download the skill and add it in Claude's skills settings",
        "Paste notes about one expert and ask for a Narrative ID",
        "Ask Claude to publish the profiler page for your team",
      ],
      dont: [
        "Create a free Claude account at claude.ai",
        "Choose a plan that supports skills and artifacts",
        "Add the skill, then start with one expert you know well",
      ],
    },
    gallery: [
      {
        src: "/images/thought-leader-profiler-claude-screen-1.png",
        alt: "The thought leader profiler page with four modes and an expert picker, Pitch topics selected for Maren Okafor",
        caption: "Pick a mode and an expert",
      },
      {
        src: "/images/thought-leader-profiler-claude-screen-2.png",
        alt: "An expert profile showing podium, posture with trait tags and scales, and four numbered pillars",
        caption: "Podium, posture and pillars at a glance",
      },
    ],
    tip: "Ask each expert to edit their own podium sentence; the words they change tell you more about their voice than an hour of interview.",
    packet: "/packets/thought-leader-profiler-claude.pdf",
  },
  {
    slug: "content-brief-writer-claude",
    name: "Content brief writer",
    tool: "Claude",
    image: "/images/content-brief-writer-claude.png",
    hook: "Most review rounds are the brief being written late. Get a complete brief before the writer starts.",
    summary:
      "Turns a rough content request into a complete brief with open questions, or scores an existing brief and gives you the questions to ask the requester.",
    features: [
      {
        title: "Two modes",
        body: "Write a brief from a short form or a chat request, or check a brief someone already wrote.",
      },
      {
        title: "Live brief preview",
        body: "The brief fills in as you type, with placeholders marking what's still missing. It works without Claude.",
      },
      {
        title: "Completeness meter",
        body: "Every section is scored complete, thin or missing. Required sections count double, and a missing objective, audience or key message means not ready.",
      },
      {
        title: "Heading scan",
        body: "Paste any brief and see which sections are present, which are thin, and the question to ask for each gap.",
      },
      {
        title: "Intake interview",
        body: "In chat, Claude asks requesters two or three short rounds of questions, each with a default, instead of a long form.",
      },
      {
        title: "Milestones worked back",
        body: "Give a publish date and the brief gets outline, draft, review and approval dates from the content type's lead times, moved off weekends.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/content-brief-writer.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/content-brief-writer-skill.zip" },
    walkthroughLabel: "Build it on your own template",
    walkthroughLead: "From demo to your own brief writer in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Fill in the Fieldbook example to watch the brief and meter build, then switch to Check and paste the example webinar brief.",
      },
      {
        title: "Add the skill",
        body: "Add the content-brief-writer folder as a skill in Claude and check that it shows in your skills list.",
      },
      {
        title: "Set up your template",
        body: "Ask Claude to set up your brief template, and attach your current template or a few past briefs. Confirm the section table.",
      },
      {
        title: "Publish your page",
        body: "Ask Claude to publish your brief writer page. It adds your sections, content types, lead times and company details.",
      },
      {
        title: "Share it with requesters",
        body: "Share the page from its Share menu. Requesters brief their own work, and writers check what lands before they start.",
      },
    ],
    steps: {
      have: [
        "Add the content-brief-writer skill in Claude",
        "Say: set up our brief template, and attach a past brief",
        "Say: publish our brief writer page",
      ],
      dont: [
        "Sign up for Claude and open Settings",
        "Upload the skill .zip under Skills",
        "Start a chat and say: write a brief for my next blog post",
      ],
    },
    gallery: [
      {
        src: "/images/content-brief-writer-claude-screen-1.png",
        alt: "Content brief writer page in Write mode with the Fieldbook blog post example selected and the form filling in",
        caption: "Write a brief from a short form",
      },
      {
        src: "/images/content-brief-writer-claude-screen-2.png",
        alt: "Check mode heading scan of a webinar brief showing 50% Not ready, with present, thin and missing sections",
        caption: "Check a brief for gaps",
      },
    ],
    tip: "Add the headings your old briefs use to each section's aliases, so the Check scan recognizes them on day one.",
    packet: "/packets/content-brief-writer-claude.pdf",
  },
  {
    slug: "style-guide-checker-claude",
    name: "Style guide checker",
    tool: "Claude",
    image: "/images/style-guide-checker-claude.png",
    hook: "Edits that cite the rule they apply, so writers learn your style guide instead of arguing with it.",
    summary:
      "Paste a draft and get line edits against your team's style guide, each tagged with a rule ID and severity, plus a clean revised version. It also rewrites drafts to style and explains any rule with do and don't examples.",
    features: [
      {
        title: "Line edits with rule IDs",
        body: "Every edit shows the line, the rule it applies and its severity, then the before and after. Writers see why, not just what.",
      },
      {
        title: "Three modes",
        body: "Check a draft for a full edit, rewrite to style for just the clean version, or explain a rule when someone asks why.",
      },
      {
        title: "A quick check in the browser",
        body: "Avoid-list words, exclamation points, Title Case headings, long sentences, likely passive voice and vague link text are highlighted as you type, with no Claude usage.",
      },
      {
        title: "Your guide, imported",
        body: "Paste your style doc and Claude splits it into numbered rules with severity, examples and a word list of terms to use and avoid.",
      },
      {
        title: "Focus and strictness",
        body: "Narrow a pass to one category, such as accessibility, or to must-fix issues only when the deadline is close.",
      },
      {
        title: "A page your team can share",
        body: "Publish the checker as a private page. Each teammate edits with Claude on their own account, and everyone checks against the same guide.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/style-guide-checker.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/style-guide-checker-skill.zip" },
    walkthroughLabel: "Build it on your style guide",
    walkthroughLead: "From demo to your own house style checker in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the checker and look at the sample Fieldbook draft. The quick check highlights its style breaks, and the worked examples show a full edit, a rewrite and a rule explained.",
      },
      {
        title: "Add the skill",
        body: "Download the style-guide-checker skill and add it to Claude from your skills settings.",
      },
      {
        title: "Import your guide",
        body: "Start a chat, say \"Import our style guide\", and paste or attach it. No guide yet? Claude interviews you and drafts one.",
      },
      {
        title: "Check the rules",
        body: "Claude shows every rule with its ID, severity and whether the quick check covers it, plus your word list. Correct anything before you say yes.",
      },
      {
        title: "Publish and share",
        body: "Ask Claude to publish your checker page, then share it with your team. Paste a draft, read the flags, and ask Claude for the full edit.",
      },
    ],
    steps: {
      have: [
        "Download the skill and add it to Claude",
        "Say \"Import our style guide\" and paste it in",
        "Ask Claude to publish your checker page",
      ],
      dont: [
        "Create a free Claude account at claude.ai",
        "Turn on skills in settings, then add this skill",
        "Paste your style guide and ask Claude to import it",
      ],
    },
    gallery: [
      {
        src: "/images/style-guide-checker-claude-screen-1.png",
        alt: "The style guide checker page with three modes and a sample draft pasted in, Check a draft selected",
        caption: "Pick a mode and paste a draft",
      },
      {
        src: "/images/style-guide-checker-claude-screen-2.png",
        alt: "The quick check highlighting a draft inline, with flags listed by rule ID, line and severity",
        caption: "The quick check, flagged by rule",
      },
    ],
    tip: "Give every rule a real don't example from your own drafts; the checker cites rules more accurately when it has seen them broken.",
    packet: "/packets/style-guide-checker-claude.pdf",
  },
  {
    slug: "repurposing-engine-claude",
    name: "Repurposing engine",
    tool: "Claude",
    image: "/images/repurposing-engine-claude.png",
    hook: "One webinar, report or long post becomes a full set of assets, built only from what the source actually says.",
    summary:
      "Paste one long piece and get LinkedIn posts, a newsletter section, a blog summary, a sales email, a video script, pull quotes, a thread and an FAQ in one generation. Quotes stay word for word and attributed, and no number gets invented.",
    features: [
      {
        title: "Atoms before assets",
        body: "The page pulls candidate pull quotes, every sentence with a number, and every question straight from your source, before Claude writes a word.",
      },
      {
        title: "Eight outputs, one click",
        body: "Tick any mix of LinkedIn posts, newsletter section, blog summary, sales email, video script, pull quotes, thread and FAQ. One generation writes them all.",
      },
      {
        title: "Facts stay facts",
        body: "Every stat comes from the source with its meaning intact, quotes are word for word, and anything missing becomes a placeholder instead of a guess.",
      },
      {
        title: "Quotes go to the right person",
        body: "Speaker names and roles are read from the transcript and attached to every quote, so nothing gets credited to the wrong voice.",
      },
      {
        title: "Aimed at a reader",
        body: "Pick a persona and funnel stage to change which atom each asset leads with. The source decides what's true; the picks decide what leads.",
      },
      {
        title: "Know what to ship first",
        body: "The repurposing ladder ranks each output by effort and reach, with a one-week rollout plan for a webinar.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/repurposing-engine.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/repurposing-engine-skill.zip" },
    walkthroughLabel: "Build it on your own sources",
    walkthroughLead: "From demo to your own repurposing engine in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the page with the sample webinar loaded. Look at the atoms it finds, tick a few outputs, and read the example pack.",
      },
      {
        title: "Add the skill",
        body: "Add the repurposing-engine folder as a skill in Claude, then check it appears in your skills list.",
      },
      {
        title: "Run it on a real source",
        body: "Paste a transcript or long post into a chat and ask for the full pack. Check the atom map at the top against your source.",
      },
      {
        title: "Set up your page",
        body: "Ask Claude to set up your engine page. It asks for your company, house voice and personas, shows them back, and publishes a private page.",
      },
      {
        title: "Share it with your team",
        body: "Share the page. Teammates paste a source, tick outputs and generate the pack on their own Claude account.",
      },
    ],
    steps: {
      have: [
        "Add the repurposing-engine skill to Claude",
        "Paste a long source into a chat and ask for the full pack",
        "Ask Claude to publish your team's engine page",
      ],
      dont: [
        "Create a free Claude account at claude.ai",
        "Upgrade to a plan that supports skills and artifacts",
        "Add the skill and paste your first source",
      ],
    },
    gallery: [
      {
        src: "/images/repurposing-engine-claude-screen-1.png",
        alt: "The repurposing engine page with a sample webinar transcript pasted in and the atoms panel showing word count, reading time and speakers",
        caption: "Paste a source, see its atoms",
      },
      {
        src: "/images/repurposing-engine-claude-screen-2.png",
        alt: "The example pack for the sample webinar, with an atom map and a LinkedIn post, each with its own Copy button",
        caption: "The finished pack, one asset per heading",
      },
    ],
    tip: "Keep speaker names at the start of each turn in your transcripts, so every quote in the pack is attributed to the person who said it.",
    packet: "/packets/repurposing-engine-claude.pdf",
  },
  {
    slug: "content-audit-claude",
    name: "Content audit",
    tool: "Claude",
    image: "/images/content-audit-claude.png",
    hook: "Know which pages to keep, refresh, merge or retire, and why, before you touch a single URL.",
    summary:
      "Scores every page in your content inventory as Keep, Refresh, Merge or Retire with transparent rules, suggests a redirect target for each page that goes, and has Claude write the prioritized plan and refresh briefs.",
    features: [
      {
        title: "A verdict for every page",
        body: "Keep, Refresh, Merge or Retire, each with the reason in plain words. No black-box score to argue about.",
      },
      {
        title: "Scores in your browser",
        body: "Upload a CSV, map the columns, and get the full table without Claude. Your data stays on your machine until you choose to generate.",
      },
      {
        title: "Finds near-duplicates",
        body: "Pages with overlapping titles on the same topic get matched, and the weaker one is set to merge into the stronger URL.",
      },
      {
        title: "Redirect targets included",
        body: "Every merged or retired page gets a suggested target that is still live. Copy the whole redirect map in one click.",
      },
      {
        title: "Rules you can tune",
        body: "Thresholds for old, low traffic, declining and duplicate live in one commented block. Change them and the audit reruns.",
      },
      {
        title: "A plan and briefs from Claude",
        body: "Claude reviews the scored table cluster by cluster, writes a prioritized plan, and drafts a refresh brief for each top candidate.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/content-audit.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/content-audit-skill.zip" },
    walkthroughLabel: "Build it on your own inventory",
    walkthroughLead: "From demo to your own audit in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the page with the sample inventory of 62 invented Fieldbook pages. Click a verdict tile, sort the table, and look at the clusters.",
      },
      {
        title: "Add the skill",
        body: "Download the content-audit skill and add it in Claude under your skills settings.",
      },
      {
        title: "Export your inventory",
        body: "Pull the page list from your CMS and sessions and conversions from analytics, then join them into one CSV. The guide in the skill has the steps.",
      },
      {
        title: "Run the audit",
        body: "Attach the CSV and ask Claude to audit it. Check the verdicts, tune any rule that feels off, and ask for the plan or refresh briefs.",
      },
      {
        title: "Share the audit page",
        body: "Ask Claude to publish the audit page for your team. Anyone can upload next quarter's export and get the same scoring.",
      },
    ],
    steps: {
      have: [
        "Download the skill and add it in Claude",
        "Attach your inventory CSV in a new chat",
        "Ask Claude to audit it with the content-audit skill",
      ],
      dont: [
        "Create a free Claude account at claude.ai",
        "Upgrade to a plan that supports skills",
        "Add the skill, then attach your inventory and ask for an audit",
      ],
    },
    gallery: [
      {
        src: "/images/content-audit-claude-screen-1.png",
        alt: "The content audit page with the sample inventory loaded, showing the three source options and the column mapping step",
        caption: "Load a CSV and match its columns",
      },
      {
        src: "/images/content-audit-claude-screen-2.png",
        alt: "The every-page table listing each URL with its verdict, sessions, change, conversions, backlinks and the reason for the verdict",
        caption: "Every page, with its verdict and reason",
      },
    ],
    tip: "Use at least 12 months of data and include last period's sessions, so seasonal pages aren't retired and slipping pages get caught.",
    packet: "/packets/content-audit-claude.pdf",
  },
  {
    slug: "audience-profile-builder-claude",
    name: "Audience profile builder",
    tool: "Claude",
    image: "/images/audience-profile-builder-claude.png",
    hook: "Your personas say what you hoped. Your call notes say what customers actually think.",
    summary:
      "Claude turns sales call notes, reviews, survey answers and support tickets into audience profiles that drop straight into your content studio, with the customer's own words as evidence for every pain and objection.",
    features: [
      {
        title: "Profiles from real research",
        body: "Paste call notes, reviews, survey answers, tickets or transcripts. Claude codes every line into pains, objections, goals and metrics, then writes the profile.",
      },
      {
        title: "Evidence for every claim",
        body: "Each pain and objection comes with short quotes copied from your research. The page checks every quote against what you pasted and flags any that don't match.",
      },
      {
        title: "Compare two segments",
        body: "Paste research for two groups and see where they really differ, what to say to each, and which differences might only be sample size.",
      },
      {
        title: "Find the gaps",
        body: "See which profile fields your research covers and which it doesn't, then get interview and survey questions to close the biggest gaps.",
      },
      {
        title: "An evidence board that works offline",
        body: "Pasted research is split into lines and tagged as pain, objection, goal, tool or metric in your browser, with counts, so you can see what's thin before you start.",
      },
      {
        title: "Ready for your content studio",
        body: "Copy any profile as a library entry in the B2B content studio's exact format. Placeholders mark what your research doesn't say yet.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/audience-profile-builder.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/audience-profile-builder-skill.zip" },
    walkthroughLabel: "Build it on your own research",
    walkthroughLead: "From demo to your own audience profiles in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the page with the sample Fieldbook research loaded. Check the evidence board, then look at the worked example for each mode.",
      },
      {
        title: "Add the skill",
        body: "Download the skill and add it to Claude as a skill. It appears in your skills list as audience-profile-builder.",
      },
      {
        title: "Gather your research",
        body: "Export a few call notes, reviews, survey answers and tickets for one audience. Put one point per line and a # line above each source.",
      },
      {
        title: "Build your first profile",
        body: "Ask Claude to build a profile from it. Check the evidence, fill the placeholders, and run Find the gaps to plan your next interviews.",
      },
      {
        title: "Publish it for your team",
        body: "Ask Claude to publish the builder page with your company and voice. Teammates paste research and generate profiles on their own Claude accounts.",
      },
    ],
    steps: {
      have: [
        "Download the skill and add it to Claude",
        "Start a chat and paste research for one audience",
        "Ask Claude to build a profile, then copy the library entry",
      ],
      dont: [
        "Create a free account at claude.ai",
        "Turn on skills, then add the downloaded skill",
        "Paste some research and ask Claude to build a profile",
      ],
    },
    gallery: [
      {
        src: "/images/audience-profile-builder-claude-screen-1.png",
        alt: "The audience profile builder with Build a profile selected and sample Fieldbook call notes pasted in, showing counts of pains, objections, goals, tools and metrics",
        caption: "Paste research and pick a mode",
      },
      {
        src: "/images/audience-profile-builder-claude-screen-2.png",
        alt: "The evidence board showing tag counts for pain, objection, goal, tool and metric, the tools customers named, and each research line with its tags and source",
        caption: "The evidence board tags every line",
      },
    ],
    tip: "Label each block of research with a # line naming the source and role, so Claude can tell one loud customer from a real pattern.",
    packet: "/packets/audience-profile-builder-claude.pdf",
  },
  {
    slug: "competitive-content-gap-claude",
    name: "Competitive content gap",
    tool: "Claude",
    image: "/images/competitive-content-gap-claude.png",
    hook: "See the topics your competitors own that you don't, and the questions nobody answers yet.",
    summary:
      "Maps your content against up to four competitors' content topic by topic, then finds the gaps, your strengths and the whitespace. Claude ranks the gaps by audience fit and effort, and briefs the top five.",
    features: [
      {
        title: "Paste lists in any shape",
        body: "URLs, paths, titles or a raw sitemap.xml. The page splits slugs, strips filler words and stems what's left into topic terms.",
      },
      {
        title: "A coverage map in your browser",
        body: "Topics × companies with page counts, built as you paste. No Claude needed, and you can copy it as a table.",
      },
      {
        title: "Gaps, strengths and whitespace",
        body: "Topics competitors cover and you don't, topics only you cover, and audience questions no page answers.",
      },
      {
        title: "Clustered by meaning",
        body: "Claude regroups topics by the reader's question, so \"content decay\" and \"refresh old posts\" land together.",
      },
      {
        title: "Ranked with a rubric you can argue with",
        body: "Each gap gets scores for audience fit, competitive pressure, question match and effort, and every score is shown.",
      },
      {
        title: "Briefs for the top five",
        body: "Working title, angle, outline, internal links and what to gather first, with placeholders where evidence is missing.",
      },
    ],
    templateUrl: "https://saturdaycontent.co/demos/competitive-content-gap.html",
    templateLabel: "Try the live demo",
    download: { label: "Download the skill (.zip)", href: "/downloads/competitive-content-gap-skill.zip" },
    walkthroughLabel: "Build it on your competitors",
    walkthroughLead: "From demo to your own gap map in",
    walkthrough: [
      {
        title: "Try the demo",
        body: "Open the page with Fieldbook and three invented competitors loaded. Click a tile to filter the map, then look at the example output.",
      },
      {
        title: "Add the skill",
        body: "Add the competitive-content-gap folder as a skill in Claude and check that it shows in your skills list.",
      },
      {
        title: "Name your competitors",
        body: "Ask Claude to compare your site with up to four others. It reads their sitemaps, blog indexes and resource libraries, and says if any list is partial.",
      },
      {
        title: "Add your audience's questions",
        body: "Paste questions from sales calls, support tickets and search. Any question no page answers becomes whitespace.",
      },
      {
        title: "Prioritize, brief and share",
        body: "Get the ranked gaps and five briefs, then publish the gap map so your team can rerun it with Claude.",
      },
    ],
    steps: {
      have: [
        "Download the skill folder or .zip",
        "Add it as a skill in Claude",
        "Ask Claude to compare your site with up to four competitors",
      ],
      dont: [
        "Create a free Claude account at claude.ai",
        "Upgrade to a plan that supports skills",
        "Add the skill and run your first comparison",
      ],
    },
    gallery: [
      {
        src: "/images/competitive-content-gap-claude-screen-1.png",
        alt: "The gap map page with Fieldbook's page list and three competitor lists pasted in",
        caption: "Paste your list and up to four competitors'",
      },
      {
        src: "/images/competitive-content-gap-claude-screen-2.png",
        alt: "Coverage matrix of topics against four companies, with gap, strength, shared and whitespace counts",
        caption: "The coverage map, built in the browser",
      },
    ],
    tip: "Add your category name to the list of words every page shares, or one giant topic will swallow half the map.",
    packet: "/packets/competitive-content-gap-claude.pdf",
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
