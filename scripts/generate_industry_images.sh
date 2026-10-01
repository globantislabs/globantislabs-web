#!/usr/bin/env bash
# Generate AI images for the home AI section + 7 industry hero banners.
# Saved to:
#   /home/z/my-project/public/images/ai/ai-hero.png       (home AI section)
#   /home/z/my-project/public/images/industries/{slug}.png (7 industry heroes)
#
# Each prompt is industry-specific per the image-search skill's strong-query
# guidance — real workplace environments + technology layered in.
set -u

AI_DIR="/home/z/my-project/public/images/ai"
IND_DIR="/home/z/my-project/public/images/industries"
mkdir -p "$AI_DIR" "$IND_DIR"

# (slug, prompt) — strong-query strategy per skill Appendix C
declare -a SPECS=(
  "ai-hero|Abstract AI visualization, glowing neural network nodes connected by light streams, deep navy blue background with warm orange accent highlights, futuristic technology, high quality, detailed, professional tech illustration"
  "financial-services|Modern bank trading floor with multiple monitors showing stock market data, financial district skyline through window, navy and orange accent lighting, professional enterprise photography, high quality, detailed"
  "healthcare|Modern hospital corridor with clinician using tablet beside patient room, soft natural lighting, clean white walls with teal accents, professional healthcare photography, high quality, detailed"
  "education|Modern university classroom with diverse students using laptops and tablets, large interactive display at front, bright natural lighting, professional education photography, high quality, detailed"
  "logistics|Large distribution warehouse with shipping containers, conveyor systems, and workers scanning packages, golden hour lighting through skylights, professional logistics photography, high quality, detailed"
  "cybersecurity|Security operations center with multiple monitors showing network threat dashboards, analysts at desks, dark room with blue and orange screen glow, professional enterprise photography, high quality, detailed"
  "ecommerce|Modern retail store interior with mobile checkout tablets, inventory shelves, and digital price tags, warm commercial lighting, professional retail photography, high quality, detailed"
  "automation|Smart factory floor with industrial robotic arms assembling products on conveyor line, engineers monitoring on tablets, bright industrial lighting, professional manufacturing photography, high quality, detailed"
)

OUT_DIR="$AI_DIR"
for spec in "${SPECS[@]}"; do
  slug="${spec%%|*}"
  prompt="${spec#*|}"
  if [ "$slug" = "ai-hero" ]; then
    out="$AI_DIR/ai-hero.png"
  else
    out="$IND_DIR/${slug}.png"
  fi
  echo "[$slug] generating → $out"
  z-ai image --prompt "$prompt" --output "$out" --size 1344x768 2>&1 | tail -2
  if [ -f "$out" ]; then
    sz=$(ls -lh "$out" | awk '{print $5}')
    echo "  ✅ saved ($sz)"
  else
    echo "  ❌ failed — file not written"
  fi
  sleep 2  # gentle rate-limit buffer
done

echo ""
echo "===== summary ====="
ls -lh "$AI_DIR" "$IND_DIR"
