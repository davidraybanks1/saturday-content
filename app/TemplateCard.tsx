import Link from "next/link";
import type { Template } from "@/lib/templates";

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <Link href={`/templates/${t.slug}`} className="card tcard">
      <div className="thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.image} alt={`${t.name} template in ${t.tool}`} loading="lazy" />
      </div>
      <div className="body">
        <span className="eyebrow">{t.tool}</span>
        <h3>{t.name}</h3>
        <p>{t.hook}</p>
        <div className="meta">
          <span className="free">Free</span>
          <span>Get the template →</span>
        </div>
      </div>
    </Link>
  );
}
