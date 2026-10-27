import Link from "next/link";
import type { Template } from "@/lib/templates";

// Each image in /public/images has -500, -750 and -1000 siblings.
function thumbProps(src: string) {
  const [, base, ext] = src.match(/^(.*)(\.[a-z]+)$/)!;
  return {
    src: `${base}-750${ext}`,
    srcSet: [500, 750, 1000].map((w) => `${base}-${w}${ext} ${w}w`).join(", "),
  };
}

export const fileName = (t: Template) =>
  `${t.slug.replace(/-(notion|clickup|airtable|claude)$/, "")}.${t.tool.toLowerCase()}`;

export default function TemplateCard({ t, n }: { t: Template; n: string }) {
  return (
    <Link href={`/templates/${t.slug}`} className="card">
      <div className="panel">
        <div className="window">
          <div className="window-bar">
            <i />
            <i />
            <span>{fileName(t)}</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...thumbProps(t.image)}
            sizes="(max-width: 700px) 100vw, 360px"
            alt={`${t.name} template in ${t.tool}`}
            loading="lazy"
            className="shot"
          />
        </div>
        <span className="num">{n}</span>
      </div>
      <div className="card-meta mono-label">
        <span>
          {n} / {t.tool}
        </span>
        <span className="free">Free</span>
      </div>
      <h3>{t.name}</h3>
      <p>{t.hook}</p>
    </Link>
  );
}
