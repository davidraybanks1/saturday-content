import type { Metadata } from "next";
import { Suspense } from "react";
import TemplateLibrary from "./TemplateLibrary";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Free content marketing templates and frameworks for Notion, ClickUp, and Airtable: content briefs, style guides, audience profiles, thought leadership frameworks, and more.",
};

export default function TemplatesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="label">Templates and frameworks</span>
        <Suspense>
          <TemplateLibrary />
        </Suspense>
      </div>
    </section>
  );
}
