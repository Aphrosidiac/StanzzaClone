#!/usr/bin/env python3
"""side.py <refDir> <ourDir> <name> <out.png> — ref | ours | diff triptych at half size."""
import sys, os
from PIL import Image
ref, ours, name, out = sys.argv[1:5]
A = Image.open(os.path.join(ref, name)).convert("RGB"); B = Image.open(os.path.join(ours, name)).convert("RGB")
D = Image.open(os.path.join(ours, "diff-" + name)).convert("RGB")
w, h = A.size; s = 0.5; tw, th = int(w * s), int(h * s)
sheet = Image.new("RGB", (tw * 3 + 20, th), "white")
for i, im in enumerate((A, B, D)): sheet.paste(im.resize((tw, th)), (i * (tw + 10), 0))
sheet.save(out); print(out)
