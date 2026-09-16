#!/usr/bin/env python3
"""One-shot: derive index.html + src/styles/webflow.css from the reference snapshot.
Run once; index.html is hand-edited afterwards (brand, copy, structure)."""
import re, csv, urllib.parse, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REF = f"{ROOT}/docs/reference/2026-09-16"
html = open(f"{REF}/awards.html").read()
# --- asset map -------------------------------------------------------------
amap = {}
for row in csv.DictReader(open(f"{REF}/assets/manifest.tsv"), delimiter="\t"):
    if row["status"] != "200": continue
    src, loc = row["source_url"], row["local_path"]
    amap[src] = "/assets/" + loc
    amap[urllib.parse.unquote(src)] = "/assets/" + loc
    amap[src.replace("&", "&amp;")] = "/assets/" + loc
def localize(s):
    for k in sorted(amap, key=len, reverse=True):
        s = s.replace(k, amap[k])
    return s
# --- body ------------------------------------------------------------------
body = html[html.find("<body"):html.rfind("</body>") + 7]
# drop scripts and script-embeds
body = re.sub(r"<script\b[^>]*>.*?</script>", "", body, flags=re.S)
body = re.sub(r'<div class="[^"]*w-embed w-script[^"]*">\s*</div>', "", body)
body = re.sub(r'<div class="[^"]*w-embed w-script[^"]*">.*?</div>', "", body, flags=re.S)
# drop inline <style> blocks in the body (they are collected in custom.css)
body = re.sub(r"<style\b[^>]*>.*?</style>", "", body, flags=re.S)
# strip Webflow bookkeeping attributes (CSS never targets these)
for attr in ["data-w-id", "data-wf-target", "data-wf-page-id", "data-wf-element-id",
             "data-wf-component-id", "data-wf-variant-state", "data-wf-domain", "data-wf-page", "data-wf-site"]:
    body = re.sub(r'\s' + attr + r'="[^"]*"', "", body)
body = localize(body)
# designer-only grid + empty w-embed wrappers left behind
body = re.sub(r'<div class="grid-style-fixed designer-only">.*?</div>\s*</div>', "", body, count=1, flags=re.S)
body = re.sub(r'<div class="js-component w-embed w-script">\s*</div>', "", body)
body = re.sub(r'<div class="header-scroll w-embed w-script">\s*</div>', "", body)
open(f"{ROOT}/index.body.html", "w").write(body)
# --- css -------------------------------------------------------------------
css = open(f"{REF}/webflow.pretty.css").read()
css = localize(css)
css = css.replace("https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg", "/assets/custom-checkbox-checkmark.589d534424.svg")
open(f"{ROOT}/src/styles/webflow.css", "w").write(css)
left = re.findall(r"https?://[^\s\"')]+", css)
print("css remote urls left:", sorted(set(left)))
print("body remote urls left:", sorted(set(re.findall(r'(?:src|href)="(https?://[^"]+)"', body)))[:40])
print("body bytes", len(body))
