"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { templates, tools, type Tool } from "@/lib/templates";
import TemplateCard from "../TemplateCard";

export default function TemplateLibrary() {
  const params = useSearchParams();
  const router = useRouter();
  const raw = params.get("tool");
  const active = tools.find((t) => t === raw) as Tool | undefined;
  const shown = active ? templates.filter((t) => t.tool === active) : templates;

  const pick = (tool?: Tool) =>
    router.replace(tool ? `/templates?tool=${tool}` : "/templates", { scroll: false });

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by tool">
        <button type="button" className="chip" aria-pressed={!active} onClick={() => pick()}>
          All
        </button>
        {tools.map((tool) => (
          <button
            key={tool}
            type="button"
            className="chip"
            aria-pressed={active === tool}
            onClick={() => pick(tool)}
          >
            {tool}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((t) => (
          <TemplateCard key={t.slug} t={t} />
        ))}
      </div>
    </>
  );
}
