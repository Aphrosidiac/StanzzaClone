#!/usr/bin/env python3
"""sheet.py <dir> <suffix> <out.png> [cols] [thumbW] — contact sheet of s*-<suffix>.png shots."""
import sys, os
from PIL import Image, ImageDraw
d, suf, out = sys.argv[1], sys.argv[2], sys.argv[3]
cols = int(sys.argv[4]) if len(sys.argv) > 4 else 4
tw = int(sys.argv[5]) if len(sys.argv) > 5 else 480
names = sorted(f for f in os.listdir(d) if f.endswith(f"-{suf}.png") and f.startswith("s"))
ims = [Image.open(os.path.join(d, n)) for n in names]
w, h = ims[0].size; th = int(h * tw / w)
rows = (len(ims) + cols - 1) // cols
sheet = Image.new("RGB", (cols * tw, rows * (th + 18)), "white")
dr = ImageDraw.Draw(sheet)
for i, (n, im) in enumerate(zip(names, ims)):
    x, y = (i % cols) * tw, (i // cols) * (th + 18)
    sheet.paste(im.resize((tw, th)), (x, y + 18)); dr.text((x + 4, y + 2), n, fill="black")
sheet.save(out); print(out, sheet.size, len(ims))
