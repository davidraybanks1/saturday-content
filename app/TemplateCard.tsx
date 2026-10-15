import Link from "next/link";
import type { Template } from "@/lib/templates";

// Product images are ~2160px wide but cards show them at ~330px. One-step browser
// downscaling that steep blurs the line art, so ask for pre-sized versions instead.
function thumbProps(src: string) {
  if (src.includes("squarespace-cdn.com")) {
    return {
      src: `${src}?format=750w`,
      srcSet: [500, 750, 1000].map((w) => `${src}?format=${w}w ${w}w`).join(", "),
    };
  }
  const base = src.replace(/\.jpg$/, "");
  return {
    src: `${base}-750.jpg`,
    srcSet: [500, 750, 1000].map((w) => `${base}-${w}.jpg ${w}w`).join(", "),
  };
}

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <Link href={`/templates/${t.slug}`} className="card tcard">
      <div className="thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...thumbProps(t.image)}
          sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 45vw, 340px"
          alt={`${t.name} template in ${t.tool}`}
          loading="lazy"
        />
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
