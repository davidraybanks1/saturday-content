"""Abstract, brand-styled UI diagrams for the setup guides.

Each diagram is a simplified sketch of the tool's interface: ink outlines,
warm-gray panels, the thing to click highlighted in yellow, and a numbered
tag that matches the step it illustrates. Deliberately schematic so it
doesn't go stale when the tools redesign.
"""

INK, BG, PANEL, LINE, HAIR, MUTED, Y = "#141413", "#efede8", "#e2dfd7", "#b9b5ab", "#d3d0c8", "#55534d", "#ffb800"
W, H = 340, 214
MONO = "font-family=\"'Geist Mono', monospace\""


def svg(body):
    return (f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" width="100%" '
            f'style="display:block;overflow:visible">{body}</svg>')


def window(x, y, w, h, label):
    # Window frame with hard offset shadow and a title bar, like the site.
    return (f'<rect x="{x + 5}" y="{y + 5}" width="{w}" height="{h}" rx="6" fill="{INK}"/>'
            f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{BG}" stroke="{INK}" stroke-width="1.5"/>'
            f'<line x1="{x}" y1="{y + 20}" x2="{x + w}" y2="{y + 20}" stroke="{INK}" stroke-width="1.5"/>'
            f'<circle cx="{x + 11}" cy="{y + 10}" r="3.2" fill="none" stroke="{INK}" stroke-width="1.3"/>'
            f'<circle cx="{x + 21}" cy="{y + 10}" r="3.2" fill="none" stroke="{INK}" stroke-width="1.3"/>'
            f'<text x="{x + 32}" y="{y + 13.5}" {MONO} font-size="7.5" letter-spacing=".6" fill="{INK}">{label}</text>')


def lines(x, y, widths, gap=9, h=3.5, color=LINE):
    return "".join(f'<rect x="{x}" y="{y + i * gap}" width="{w}" height="{h}" rx="1.75" fill="{color}"/>'
                   for i, w in enumerate(widths))


def button(x, y, w, label, hot=False, h=16):
    fill = Y if hot else BG
    sw = 1.5 if hot else 1
    stroke = INK if hot else LINE
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h / 2}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
            f'<text x="{x + w / 2}" y="{y + h / 2 + 2.8}" text-anchor="middle" {MONO} font-size="7.5" '
            f'letter-spacing=".4" fill="{INK}">{label}</text>')


def tag(x, y, n, tx, ty):
    # Numbered tag with a leader line to the target point (tx, ty).
    return (f'<line x1="{x + 10}" y1="{y + 7}" x2="{tx}" y2="{ty}" stroke="{INK}" stroke-width="1.2"/>'
            f'<circle cx="{tx}" cy="{ty}" r="2.4" fill="{INK}"/>'
            f'<rect x="{x}" y="{y}" width="21" height="14" rx="3.5" fill="{Y}" stroke="{INK}" stroke-width="1.2"/>'
            f'<text x="{x + 10.5}" y="{y + 10}" text-anchor="middle" {MONO} font-size="8" font-weight="500" fill="{INK}">{n}</text>')


def page_body(x, y, w):
    # Generic template page: icon, title, a callout block and body lines.
    return (f'<rect x="{x}" y="{y}" width="16" height="16" rx="3" fill="{INK}"/>'
            f'<rect x="{x}" y="{y + 24}" width="{w * .62}" height="8" rx="2" fill="{INK}"/>'
            f'<rect x="{x}" y="{y + 40}" width="{w}" height="26" rx="3" fill="{PANEL}"/>'
            + lines(x + 8, y + 47, [w * .7, w * .5])
            + lines(x, y + 76, [w * .92, w * .8, w * .86, w * .55]))


# ---------- Notion ----------
def notion_have():
    x, y, w, h = 6, 8, 322, 196
    side = (f'<rect x="{x + 1}" y="{y + 21}" width="78" height="{h - 23.5}" rx="0" fill="{PANEL}"/>'
            f'<line x1="{x + 79}" y1="{y + 21}" x2="{x + 79}" y2="{y + h}" stroke="{HAIR}"/>'
            f'<text x="{x + 9}" y="{y + 36}" {MONO} font-size="6.5" letter-spacing=".5" fill="{MUTED}">WORKSPACE</text>'
            f'<rect x="{x + 6}" y="{y + 44}" width="66" height="14" rx="3" fill="{Y}" stroke="{INK}" stroke-width="1.2"/>'
            f'<rect x="{x + 11}" y="{y + 49}" width="5" height="5" rx="1" fill="{INK}"/>'
            + lines(x + 20, y + 49.5, [44], h=3, color=INK)
            + lines(x + 11, y + 68, [52, 44, 58, 40], gap=11, h=3)
            + lines(x + 11, y + 140, [50, 38, 56], gap=11, h=3))
    tb = (f'<text x="{x + 196}" y="{y + 38}" {MONO} font-size="7.5" fill="{MUTED}">Search</text>'
          + button(x + 228, y + 27, 58, "Duplicate", hot=True)
          + f'<text x="{x + 294}" y="{y + 38}" {MONO} font-size="9" fill="{MUTED}">···</text>')
    return svg(window(x, y, w, h, "NOTION.SITE/YOUR-TEMPLATE") + side + tb + page_body(x + 96, y + 62, 210)
               + tag(x + 262, y + 62, "02", x + 257, y + 43) + tag(x + 29, y + 110, "03", x + 40, y + 59))


def notion_new():
    x, y, w, h = 6, 8, 322, 196
    tb = (f'<text x="{x + 150}" y="{y + 38}" {MONO} font-size="7.5" fill="{MUTED}">Search</text>'
          f'<text x="{x + 182}" y="{y + 38}" {MONO} font-size="7.5" fill="{MUTED}">Duplicate</text>'
          + button(x + 236, y + 27, 62, "Try Notion", hot=True))
    return svg(window(x, y, w, h, "NOTION.SITE/YOUR-TEMPLATE") + tb + page_body(x + 20, y + 62, 280)
               + tag(x + 278, y + 62, "01", x + 267, y + 43))


# ---------- ClickUp ----------
def clickup_have():
    x, y, w, h = 6, 8, 322, 196
    dim = f'<rect x="{x + 1}" y="{y + 21}" width="{w - 2.5}" height="{h - 23.5}" fill="{PANEL}"/>' + lines(x + 16, y + 34, [120, 90, 140, 100, 130, 80, 110, 96, 124, 70], gap=15, h=4)
    mx, my, mw, mh = x + 86, y + 34, 176, 150
    modal = (f'<rect x="{mx + 4}" y="{my + 4}" width="{mw}" height="{mh}" rx="6" fill="{INK}"/>'
             f'<rect x="{mx}" y="{my}" width="{mw}" height="{mh}" rx="6" fill="{BG}" stroke="{INK}" stroke-width="1.5"/>'
             f'<text x="{mx + 12}" y="{my + 20}" font-size="10" font-weight="700" fill="{INK}">Use a template</text>'
             f'<text x="{mx + 12}" y="{my + 40}" {MONO} font-size="6.5" letter-spacing=".5" fill="{MUTED}">WORKSPACE</text>'
             f'<rect x="{mx + 12}" y="{my + 45}" width="{mw - 24}" height="18" rx="3" fill="{Y}" stroke="{INK}" stroke-width="1.2"/>'
             + lines(mx + 18, my + 52, [70], h=3.5, color=INK)
             + f'<path d="M{mx + mw - 24} {my + 52} l4 4 l4 -4" fill="none" stroke="{INK}" stroke-width="1.3"/>'
             f'<text x="{mx + 12}" y="{my + 80}" {MONO} font-size="6.5" letter-spacing=".5" fill="{MUTED}">NAME</text>'
             f'<rect x="{mx + 12}" y="{my + 85}" width="{mw - 24}" height="18" rx="3" fill="none" stroke="{LINE}"/>'
             + lines(mx + 18, my + 92, [80], h=3.5)
             + button(mx + 34, my + 120, 54, "Cancel")
             + button(mx + 94, my + 120, 70, "Use template", hot=True))
    return svg(window(x, y, w, h, "APP.CLICKUP.COM/TEMPLATE") + dim + modal
               + tag(x + 22, y + 92, "02", mx + 12, my + 54) + tag(x + 286, y + 128, "02", mx + 164, my + 128))


def clickup_new():
    x, y, w, h = 6, 8, 322, 196
    cx, cy, cw = x + 96, y + 32, 130
    card = (f'<text x="{cx + cw / 2}" y="{cy + 14}" text-anchor="middle" font-size="10" font-weight="700" fill="{INK}">Sign up free</text>'
            + "".join(f'<rect x="{cx}" y="{cy + 24 + i * 22}" width="{cw}" height="16" rx="3" fill="none" stroke="{LINE}"/>'
                      + lines(cx + 6, cy + 30 + i * 22, [wd], h=3.5) for i, wd in enumerate([60, 80, 48]))
            + button(cx, cy + 92, cw, "Create account", hot=True)
            + f'<line x1="{cx}" y1="{cy + 122}" x2="{cx + cw}" y2="{cy + 122}" stroke="{HAIR}"/>'
            f'<text x="{cx + cw / 2}" y="{cy + 136}" text-anchor="middle" {MONO} font-size="6.5" letter-spacing=".5" fill="{MUTED}">CHECK YOUR EMAIL</text>'
            + "".join(f'<rect x="{cx + 14 + i * 18}" y="{cy + 142}" width="13" height="15" rx="2.5" fill="{Y if i < 3 else BG}" stroke="{INK}" stroke-width="1.1"/>' for i in range(6)))
    return svg(window(x, y, w, h, "APP.CLICKUP.COM/SIGNUP") + card
               + tag(x + 262, y + 112, "01", cx + cw, cy + 100) + tag(x + 262, y + 160, "02", cx + 120, cy + 150))


# ---------- Airtable ----------
def airtable_grid(x, y, w):
    cols = [0, 70, 150, 220]
    head = f'<rect x="{x}" y="{y}" width="{w}" height="14" fill="{PANEL}"/>' + "".join(
        lines(x + c + 6, y + 5, [40], h=3.5, color=MUTED) for c in cols)
    rows = "".join(
        f'<line x1="{x}" y1="{y + 14 + r * 17}" x2="{x + w}" y2="{y + 14 + r * 17}" stroke="{HAIR}"/>'
        + lines(x + 6, y + 21 + r * 17, [48], h=3.5, color=INK)
        + f'<rect x="{x + 76}" y="{y + 19 + r * 17}" width="34" height="8" rx="4" fill="{[Y, PANEL, LINE, Y, PANEL][r % 5]}"/>'
        + lines(x + 156, y + 21 + r * 17, [52], h=3.5)
        + f'<circle cx="{x + 232}" cy="{y + 23 + r * 17}" r="5" fill="{PANEL}" stroke="{LINE}"/>'
        for r in range(7))
    return head + rows + "".join(f'<line x1="{x + c}" y1="{y}" x2="{x + c}" y2="{y + 133}" stroke="{HAIR}"/>' for c in cols[1:])


def airtable_have():
    x, y, w, h = 6, 8, 322, 196
    top = (f'<text x="{x + 12}" y="{y + 39}" font-size="10" font-weight="700" fill="{INK}">Expert hub</text>'
           + button(x + 196, y + 27, 50, "Share")
           + button(x + 252, y + 27, 58, "Copy base", hot=True))
    return svg(window(x, y, w, h, "AIRTABLE.COM/SHARED-BASE") + top + airtable_grid(x + 12, y + 52, 298)
               + tag(x + 266, y + 64, "02", x + 281, y + 43))


def airtable_new():
    x, y, w, h = 6, 8, 322, 196
    top = (f'<text x="{x + 12}" y="{y + 39}" font-size="10" font-weight="700" fill="{INK}">Expert hub</text>'
           + button(x + 222, y + 27, 88, "Sign up for free", hot=True))
    return svg(window(x, y, w, h, "AIRTABLE.COM/SHARED-BASE") + top + airtable_grid(x + 12, y + 52, 298)
               + tag(x + 266, y + 64, "01", x + 281, y + 43))


# ---------- Claude (skill) ----------
def claude_have(skill="content-performance-hub"):
    x, y, w, h = 6, 8, 322, 196
    side = (f'<rect x="{x + 1}" y="{y + 21}" width="70" height="{h - 23.5}" fill="{PANEL}"/>'
            f'<line x1="{x + 71}" y1="{y + 21}" x2="{x + 71}" y2="{y + h}" stroke="{HAIR}"/>'
            + lines(x + 10, y + 34, [46, 38, 50, 34], gap=12, h=3)
            + f'<rect x="{x + 6}" y="{y + 80}" width="58" height="13" rx="3" fill="{BG}" stroke="{INK}" stroke-width="1.2"/>'
            f'<text x="{x + 12}" y="{y + 89}" {MONO} font-size="6.5" letter-spacing=".4" fill="{INK}">SKILLS</text>'
            + lines(x + 10, y + 104, [44, 36], gap=12, h=3))
    mx = x + 86
    main = (f'<text x="{mx}" y="{y + 40}" font-size="10" font-weight="700" fill="{INK}">Skills</text>'
            + button(x + 236, y + 29, 74, "Upload skill", hot=True)
            + f'<rect x="{mx}" y="{y + 52}" width="224" height="24" rx="4" fill="{BG}" stroke="{INK}" stroke-width="1.2"/>'
            f'<rect x="{mx + 8}" y="{y + 58}" width="10" height="12" rx="1.5" fill="{Y}" stroke="{INK}" stroke-width="1.1"/>'
            f'<text x="{mx + 24}" y="{y + 67}" {MONO} font-size="6.8" fill="{INK}">{skill}</text>'
            f'<rect x="{mx + 196}" y="{y + 59}" width="20" height="10" rx="5" fill="{INK}"/><circle cx="{mx + 211}" cy="{y + 64}" r="3.2" fill="{Y}"/>'
            + lines(mx, y + 88, [200, 160], gap=11, h=3)
            + f'<rect x="{mx}" y="{y + 132}" width="224" height="50" rx="8" fill="{BG}" stroke="{INK}" stroke-width="1.5"/>'
            + lines(mx + 10, y + 142, [170, 140, 96], gap=9, h=3, color=INK)
            + f'<rect x="{mx + 198}" y="{y + 160}" width="18" height="16" rx="4" fill="{Y}" stroke="{INK}" stroke-width="1.2"/>'
            f'<path d="M{mx + 207} {y + 172} v-8 m-3.5 3.5 l3.5 -3.5 l3.5 3.5" fill="none" stroke="{INK}" stroke-width="1.3"/>')
    return svg(window(x, y, w, h, "CLAUDE.AI/SETTINGS") + side + main
               + tag(x + 196, y + 2, "01", x + 250, y + 30) + tag(x + 30, y + 150, "03", mx, y + 157))


def claude_new():
    x, y, w, h = 6, 8, 322, 196
    dash = (f'<text x="{x + 12}" y="{y + 40}" font-size="10" font-weight="700" fill="{INK}">Content performance hub</text>'
            + f'<rect x="{x + 228}" y="{y + 29}" width="84" height="15" rx="3" fill="{BG}" stroke="{INK}" stroke-width="1.2"/>'
            f'<text x="{x + 270}" y="{y + 39.5}" text-anchor="middle" {MONO} font-size="6.5" fill="{INK}">Connect your data</text>'
            + f'<rect x="{x + 1}" y="{y + 52}" width="{w - 2.5}" height="{h - 54.5}" fill="{PANEL}"/>'
            + lines(x + 14, y + 62, [90, 70, 110, 60, 96, 80, 70], gap=17, h=4))
    mx, my, mw, mh = x + 70, y + 60, 180, 126
    modal = (f'<rect x="{mx + 4}" y="{my + 4}" width="{mw}" height="{mh}" rx="6" fill="{INK}"/>'
             f'<rect x="{mx}" y="{my}" width="{mw}" height="{mh}" rx="6" fill="{BG}" stroke="{INK}" stroke-width="1.5"/>'
             f'<text x="{mx + 12}" y="{my + 18}" font-size="9" font-weight="700" fill="{INK}">Connect your data</text>'
             + "".join(f'<rect x="{mx + 12 + (i % 3) * 53}" y="{my + 28 + (i // 3) * 24}" width="48" height="18" rx="3" fill="{Y if i == 0 else BG}" stroke="{INK if i == 0 else LINE}" stroke-width="{1.2 if i == 0 else 1}"/>'
                       + f'<text x="{mx + 36 + (i % 3) * 53}" y="{my + 40 + (i // 3) * 24}" text-anchor="middle" {MONO} font-size="6" fill="{INK}">{lab}</text>'
                       for i, lab in enumerate(["CSV", "BigQuery", "Databricks", "Snowflake", "Postgres", "GA4"]))
             + button(mx + 12, my + 90, 76, "Choose file", hot=True)
             + lines(mx + 96, my + 96, [66], h=3.5))
    return svg(window(x, y, w, h, "SATURDAYCONTENT.CO/DEMOS") + dash + modal
               + tag(x + 286, y + 62, "02", x + 296, y + 44) + tag(x + 22, y + 170, "02", mx + 12, my + 98))


def studio_new():
    x, y, w, h = 6, 8, 322, 196
    top = f'<text x="{x + 12}" y="{y + 40}" font-size="10" font-weight="700" fill="{INK}">What are we up to?</text>'
    modes = "".join(
        f'<rect x="{x + 12 + i * 76}" y="{y + 50}" width="70" height="34" rx="5" fill="{Y if i == 0 else BG}" stroke="{INK if i == 0 else LINE}" stroke-width="{1.4 if i == 0 else 1}"/>'
        f'<text x="{x + 20 + i * 76}" y="{y + 71}" font-size="8" font-weight="700" fill="{INK}">{lab}</text>'
        for i, lab in enumerate(["Draft", "Remix", "Critique", "Brainstorm"]))
    picks = "".join(
        f'<rect x="{x + 12 + i * 76}" y="{y + 94}" width="70" height="22" rx="4" fill="{BG}" stroke="{INK if i < 2 else LINE}" stroke-width="{1.3 if i < 2 else 1}"/>'
        f'<text x="{x + 47 + i * 76}" y="{y + 108}" text-anchor="middle" {MONO} font-size="6.2" fill="{INK}">{lab}</text>'
        for i, lab in enumerate(["LinkedIn", "Marketer", "Software", "TOFU"]))
    gen = button(x + 12, y + 128, 92, "Build my prompt", hot=True)
    out = (f'<rect x="{x + 12}" y="{y + 154}" width="298" height="32" rx="4" fill="{PANEL}"/>'
           + lines(x + 20, y + 162, [200, 160], gap=9, h=3, color=MUTED))
    return svg(window(x, y, w, h, "SATURDAYCONTENT.CO/DEMOS") + top + modes + picks + gen + out
               + tag(x + 116, y + 120, "02", x + 104, y + 136))


def demo_new(title, modes, picks, button, url="SATURDAYCONTENT.CO/DEMOS"):
    # Generic sketch of a saturday content demo page: a title, mode cards, pick chips, the main button.
    x, y, w, h = 6, 8, 322, 196
    top = f'<text x="{x + 12}" y="{y + 40}" font-size="10" font-weight="700" fill="{INK}">{title}</text>'
    n = max(1, len(modes)); mw = (298 - 6 * (n - 1)) / n
    mc = "".join(
        f'<rect x="{x + 12 + i * (mw + 6)}" y="{y + 50}" width="{mw}" height="34" rx="5" fill="{Y if i == 0 else BG}" stroke="{INK if i == 0 else LINE}" stroke-width="{1.4 if i == 0 else 1}"/>'
        f'<text x="{x + 19 + i * (mw + 6)}" y="{y + 71}" font-size="7.5" font-weight="700" fill="{INK}">{lab}</text>'
        for i, lab in enumerate(modes[:4]))
    pc = "".join(
        f'<rect x="{x + 12 + i * 76}" y="{y + 94}" width="70" height="22" rx="4" fill="{BG}" stroke="{INK if i < 2 else LINE}" stroke-width="{1.3 if i < 2 else 1}"/>'
        f'<text x="{x + 47 + i * 76}" y="{y + 108}" text-anchor="middle" {MONO} font-size="6" fill="{INK}">{lab[:14]}</text>'
        for i, lab in enumerate(picks[:4]))
    bw = max(70, 6 * len(button) + 16)
    gen = button_(x + 12, y + 128, bw, button)
    out = (f'<rect x="{x + 12}" y="{y + 154}" width="298" height="32" rx="4" fill="{PANEL}"/>'
           + lines(x + 20, y + 162, [200, 160], gap=9, h=3, color=MUTED))
    return svg(window(x, y, w, h, url) + top + mc + pc + gen + out
               + tag(x + 24 + bw, y + 120, "02", x + 12 + bw, y + 136))


def button_(x, y, w, label):
    return button(x, y, w, label, hot=True)


def register_skill(slug, skill, d):
    DIAGRAMS[slug] = (lambda: claude_have(skill), lambda: demo_new(d["title"], d.get("modes", []), d.get("picks", []), d.get("button", "Build my prompt")))


DIAGRAMS = {
    "Notion": (notion_have, notion_new),
    "ClickUp": (clickup_have, clickup_new),
    "Airtable": (airtable_have, airtable_new),
    "Claude": (claude_have, claude_new),
    "b2b-content-studio-claude": (lambda: claude_have("b2b-content-studio"), studio_new),
}


# Claude skills listed in skill-diagrams.json (written when a skill is added) get a generic demo sketch.
import json as _json, pathlib as _pl
_f = _pl.Path(__file__).resolve().parent / "skill-diagrams.json"
if _f.exists():
    for _slug, _v in _json.loads(_f.read_text()).items():
        register_skill(_slug, _v["skill"], _v["diagram"])
