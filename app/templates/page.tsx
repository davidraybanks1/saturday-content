import type { Metadata } from "next";
import { Suspense } from "react";
import { templates } from "@/lib/templates";
import TemplateGrid from "../TemplateGrid";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Free content marketing templates and frameworks for Notion, ClickUp, and Airtable: content briefs, style guides, audience profiles, thought leadership frameworks, and more.",
};

export default function TemplatesPage() {
  return (
    <section style={{ paddingBottom: 80 }}>
      <Suspense>
        <TemplateGrid templates={templates} title="All templates" as="h1" />
      </Suspense>
    </section>
  );
}
