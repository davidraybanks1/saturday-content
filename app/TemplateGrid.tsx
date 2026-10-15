"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { tools, type Template, type Tool } from "@/lib/templates";
import TemplateCard from "./TemplateCard";

type Filter = "All" | Tool;

export default function TemplateGrid({
  templates,
  title,
  as: Heading = "h2",
}: {
  templates: Template[];
  title: string;
  as?: "h1" | "h2";
}) {
  // ?tool=Notion etc. (old Squarespace category URLs redirect here with it)
  const param = useSearchParams().get("tool");
  const [filter, setFilter] = useState<Filter>(tools.find((t) => t === param) ?? "All");
  // Numbers stay fixed to each template's position, so filtering doesn't renumber cards.
  const numbered = templates.map((t, i) => ({ t, n: String(i + 1).padStart(2, "0") }));
  const visible = numbered.filter(({ t }) => filter === "All" || t.tool === filter);

  return (
    <>
      <div className="col grid-head">
        <Heading>
          {title} <span className="count">{String(visible.length).padStart(2, "0")}</span>
        </Heading>
        <div className="tabs" role="group" aria-label="Filter by tool">
          {(["All", ...tools] as Filter[]).map((f) => (
            <button key={f} type="button" className="tab" aria-pressed={f === filter} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="rule">
        <div className="col cards">
          {visible.map(({ t, n }) => (
            <TemplateCard key={t.slug} t={t} n={n} />
          ))}
        </div>
      </div>
    </>
  );
}
