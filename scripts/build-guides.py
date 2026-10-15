"""Build the branded setup-guide PDFs in public/packets/ from lib/templates.ts.

Usage (from the repo root):
    python3 scripts/build-guides.py                 # all templates
    python3 scripts/build-guides.py narrative-id-notion --out /tmp/x   # one, elsewhere

Needs: node >= 22 (to read the TS data), Python Playwright with Chromium,
and node_modules installed (fonts come from @fontsource).
"""
import html, json, pathlib, subprocess, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from guide_diagrams import DIAGRAMS

ROOT = pathlib.Path(__file__).resolve().parent.parent
FS = ROOT / "node_modules/@fontsource"
args = [a for a in sys.argv[1:] if not a.startswith("--")]
out_dir = pathlib.Path(sys.argv[sys.argv.index("--out") + 1]) if "--out" in sys.argv else ROOT / "public/packets"
if "--out" in sys.argv:
    args.remove(str(out_dir))

data = json.loads(subprocess.check_output(
    ["node", "--experimental-strip-types", "--no-warnings", "-e",
     "import('./lib/templates.ts').then(m=>console.log(JSON.stringify({t:m.templates,s:m.setupSteps})))"],
    cwd=ROOT, text=True))
templates, steps = data["t"], data["s"]
if args:
    templates = [t for t in templates if t["slug"] in args]

e = html.escape

# Neither Host Grotesk nor Geist Mono has arrow glyphs, so draw them.
NE = ('<svg viewBox="0 0 12 12" width=".95em" height=".95em" style="vertical-align:-.12em;margin-left:.4em" '
      'fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"><path d="M3 9 9 3M4 3h5v5"/></svg>')


def font_faces():
    # Fontsource's per-weight CSS covers every subset (incl. arrows) with unicode-range.
    links = []
    for pkg, ws in [("host-grotesk", [400, 500, 600, 700]), ("geist-mono", [400, 500])]:
        links += [f'@import url("{(FS / pkg / f"{w}.css").as_uri()}");' for w in ws]
    return "\n".join(links) + "\n"


CSS = font_faces() + """
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; }
body { font-family: 'Host Grotesk', sans-serif; color: #141413; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
a { color: inherit; text-decoration: none; }
.page { width: 8.5in; height: 11in; background: #efede8; position: relative; overflow: hidden;
  padding: .55in .6in; display: flex; flex-direction: column; page-break-after: always; }
.page:last-child { page-break-after: auto; }
.mono { font-family: 'Geist Mono', monospace; font-size: 8.5pt; letter-spacing: .12em; text-transform: uppercase; color: #55534d; }
.top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid #d3d0c8; }
.logo { font-weight: 700; font-size: 14pt; letter-spacing: -.03em; }
.logo span { background: #ffb800; padding: 0 4px; }
.hl { background: #ffb800; padding: 0 .14em; border-radius: 3px; }
.box { font-family: 'Geist Mono', monospace; font-weight: 500; font-size: .78em; letter-spacing: -.03em;
  border: 2px solid #141413; border-radius: 9px; padding: 0 .18em; white-space: nowrap; vertical-align: .06em; }
.free { background: #ffb800; color: #141413; padding: 1px 6px; }
h1 { font-size: 40pt; line-height: 1.02; letter-spacing: -.04em; margin: 34px 0 0; font-weight: 700; text-wrap: balance; }
.hook { font-size: 15pt; line-height: 1.3; letter-spacing: -.02em; font-weight: 500; margin: 18px 0 0; max-width: 6.4in; }
.summary { font-size: 11pt; line-height: 1.55; color: #55534d; margin: 12px 0 0; max-width: 6.2in; }
.window { background: #efede8; border: 1.5px solid #141413; border-radius: 6px; overflow: hidden; box-shadow: 6px 6px 0 #141413; }
.bar { display: flex; align-items: center; gap: 6px; padding: 6px 9px; border-bottom: 1.5px solid #141413;
  font-family: 'Geist Mono', monospace; font-size: 7.5pt; letter-spacing: .08em; text-transform: uppercase; }
.bar i { width: 7px; height: 7px; border-radius: 50%; border: 1.5px solid #141413; }
.bar span { margin-left: 4px; }
.shot-wrap { margin: 30px 6px 0 0; }
.shot-wrap img { width: 100%; display: block; }
.cta { margin-top: auto; border-top: 1px solid #d3d0c8; padding-top: 22px; display: grid; grid-template-columns: auto 1fr; gap: 6px 22px; align-items: center; }
.pill { background: #141413; color: #efede8; border-radius: 999px; padding: 12px 20px; font-family: 'Geist Mono', monospace;
  font-size: 9pt; letter-spacing: .1em; text-transform: uppercase; grid-row: span 2; white-space: nowrap; }
.url { font-family: 'Geist Mono', monospace; font-size: 7.5pt; color: #55534d; word-break: break-all; line-height: 1.45; }
h2 { font-size: 24pt; letter-spacing: -.04em; margin: 0; font-weight: 700; line-height: 1.05; }
.section { padding: 26px 0; border-bottom: 1px solid #d3d0c8; }
.section:last-of-type { border-bottom: 0; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; margin-top: 24px; }
.col { display: flex; flex-direction: column; }
.diagram { margin: 4px 6px 20px 0; }
.cols h3 { font-size: 13pt; letter-spacing: -.02em; font-weight: 600; margin: 0 0 12px; }
ol { list-style: none; margin: 0; padding: 0; counter-reset: s; display: grid; gap: 10px; }
li { counter-increment: s; display: grid; grid-template-columns: 26px 1fr; gap: 9px; font-size: 10.5pt; line-height: 1.45; color: #2b2a27; }
li::before { content: counter(s, decimal-leading-zero); font-family: 'Geist Mono', monospace; font-size: 8pt; font-weight: 500;
  background: #ffb800; border-radius: 4px; text-align: center; height: fit-content; padding: 2px 0; margin-top: 1px; }
.chip { font-family: 'Geist Mono', monospace; font-size: 8.5pt; border: 1.5px solid #141413; border-radius: 6px; padding: 2px 7px; display: inline-block; }
.feats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 30px; margin-top: 18px; }
.feat h3 { font-size: 12pt; letter-spacing: -.02em; font-weight: 600; margin: 8px 0 4px; }
.feat p { margin: 0; font-size: 10pt; line-height: 1.45; color: #55534d; }
.tips { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 16px; }
.tip p { margin: 8px 0 0; font-size: 10.5pt; line-height: 1.45; color: #2b2a27; }
.tip a { border-bottom: 1px solid #141413; }
.credit { border-left: 3px solid #ffb800; padding-left: 10px; font-size: 9.5pt; line-height: 1.45; color: #55534d; margin-top: 16px; }
.foot { margin-top: auto; padding-top: 14px; border-top: 1px solid #d3d0c8; display: flex; justify-content: space-between; }
.dots { background-color: #ffb800; background-image: radial-gradient(rgba(20,20,19,.28) 1px, transparent 1px); background-size: 12px 12px; }
"""


def guide_html(t, n):
    tool, s = t["tool"], steps[t["tool"]]
    verb = "Open the base" if tool == "Airtable" else "Open the template"
    fname = t["slug"].rsplit("-", 1)[0] + "." + tool.lower()
    img = (ROOT / "public" / t["image"].lstrip("/")).as_uri()
    feats = ""
    if t.get("features"):
        feats = '<div class="section"><span class="mono">What’s inside</span><div class="feats">' + "".join(
            f'<div class="feat"><span class="chip">{i + 1:02d}</span><h3>{e(f["title"])}</h3><p>{e(f["body"])}</p></div>'
            for i, f in enumerate(t["features"])) + "</div></div>"
    guide = ""
    if t.get("guideUrl"):
        guide = f'<div class="tip"><span class="chip">Setup notes</span><p>Prefer to read instructions online? <a href="{e(t["guideUrl"])}">Open the full setup guide{NE}</a></p></div>'
    else:
        guide = (f'<div class="tip"><span class="chip">Make it yours</span><p>Every template is a starting point. '
                 f'Rename sections, cut what you don’t need, and add what your team does differently.</p></div>')
    credit = f'<p class="credit">{e(t["credit"])}</p>' if t.get("credit") else ""
    lis = lambda xs: "".join(f"<li>{e(x)}</li>" for x in xs)
    have_svg, new_svg = DIAGRAMS[tool]
    top2 = f'<div class="top"><span class="logo">saturday <span>content</span></span><span class="mono">{e(t["name"])} · {e(tool)}</span></div>'
    foot = f'<div class="foot"><span class="mono">saturday content — tools for content teams</span><a class="mono" href="https://saturdaycontent.co/templates/{e(t["slug"])}">saturdaycontent.co</a></div>'
    know = f'''<div class="section">
    <span class="mono">Good to know</span>
    <div class="tips">
      <div class="tip"><span class="chip">Pro tip</span><p>Get familiar with the template on desktop before you use it in the {e(tool)} mobile app.</p></div>
      {guide}
    </div>
    {credit}
  </div>'''
    return f"""
<section class="page">
  <div class="top"><span class="logo">saturday <span>content</span></span><span class="mono">Setup guide · {n} / {e(tool)}</span></div>
  <h1>{e(t["name"])}</h1>
  <p class="hook">{e(t["hook"])}</p>
  <p class="summary">{e(t["summary"])}</p>
  <div class="shot-wrap window"><div class="bar"><i></i><i></i><span>{e(fname)}</span></div><img src="{img}"></div>
  <div class="cta">
    <a class="pill" href="{e(t["templateUrl"])}">{verb} in {e(tool)}{NE}</a>
    <span class="mono" style="color:#141413">Free · Duplicate it into your workspace</span>
    <a class="url" href="{e(t["templateUrl"])}">{e(t["templateUrl"])}</a>
  </div>
</section>
<section class="page">
  {top2}
  <div class="section" style="border-bottom:0">
    <h2>Get started in <span class="hl">a few clicks</span>.</h2>
    <div class="cols">
      <div class="col"><div class="diagram">{have_svg()}</div><h3>Have a {e(tool)} account</h3><ol>{lis(s["have"])}</ol></div>
      <div class="col"><div class="diagram">{new_svg()}</div><h3>New to {e(tool)}</h3><ol>{lis(s["dont"])}</ol></div>
    </div>
  </div>
  {know}
  {foot}
</section>
{f'''<section class="page">{top2}{feats}{foot}</section>''' if feats else ""}"""


from playwright.sync_api import sync_playwright

all_t = data["t"]
out_dir.mkdir(parents=True, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for t in templates:
        n = f"{all_t.index(next(x for x in all_t if x['slug'] == t['slug'])) + 1:02d}"
        tmp = out_dir / f".{t['slug']}.html"
        tmp.write_text(f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{guide_html(t, n)}</body></html>")
        pg = b.new_page()
        pg.goto(tmp.as_uri())
        pg.evaluate("document.fonts.ready")
        pg.wait_for_timeout(300)
        pg.pdf(path=str(out_dir / f"{t['slug']}.pdf"), prefer_css_page_size=True, print_background=True)
        pg.close()
        tmp.unlink()
        print("built", t["slug"])
    b.close()
