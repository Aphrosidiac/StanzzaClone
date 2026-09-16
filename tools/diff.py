#!/usr/bin/env python3
"""diff.py <refDir> <ourDir> [suffix] — numeric diff per matching screenshot.
Prints mean abs difference (0-255) and % of pixels differing by >24; writes diff-<name>.png
heat images next to ours. Sampled every 2px in both axes."""
import sys, os
from PIL import Image, ImageChops
ref, ours = sys.argv[1], sys.argv[2]
suffix = sys.argv[3] if len(sys.argv) > 3 else "1440"
names = sorted(f for f in os.listdir(ref) if f.endswith(f"-{suffix}.png"))
rows = []
for n in names:
    a = os.path.join(ref, n); b = os.path.join(ours, n)
    if not os.path.exists(b): print(f"{n:24s} MISSING"); continue
    A = Image.open(a).convert("RGB"); B = Image.open(b).convert("RGB")
    if A.size != B.size: print(f"{n:24s} size {A.size} vs {B.size}"); continue
    d = ImageChops.difference(A, B).convert("L")
    small = d.resize((d.width // 2, d.height // 2))
    px = list(small.getdata()); cnt = len(px)
    mean = sum(px) / cnt; big = sum(1 for v in px if v > 24) / cnt * 100
    d.point(lambda v: min(255, v * 4)).save(os.path.join(ours, f"diff-{n}"))
    rows.append((n, mean, big)); print(f"{n:24s} mean {mean:6.2f}  >24: {big:5.2f}%")
if rows: print(f"AVG mean {sum(r[1] for r in rows)/len(rows):.2f}  worst {max(rows,key=lambda r:r[1])[0]}")
