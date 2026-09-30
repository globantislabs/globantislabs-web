#!/usr/bin/env bash
# Fetch real stock photos for each industry via z-ai image-search.
# Writes one JSON file per query under /home/z/my-project/layout-plans/images/
set -u
OUTDIR="/home/z/my-project/layout-plans/images"
mkdir -p "$OUTDIR"

# (industry_slug, search_query) — strong-query strategy from skill Appendix C
declare -a QUERIES=(
  "financial-services|bank trading floor screens financial district"
  "healthcare|hospital corridor clinician tablet patient care"
  "education|modern university classroom students tablets technology"
  "logistics|warehouse logistics containers port scanning operations"
  "cybersecurity|security operations center analysts monitors dashboard"
  "ecommerce|retail ecommerce warehouse fulfillment packaging conveyor"
  "automation|smart factory robotic arm assembly line automation"
)

run_search() {
  local slug="${1%%|*}"
  local query="${1#*|}"
  local out="${OUTDIR}/${slug}.json"
  echo "[start] $slug → $query"
  z-ai image-search --query "$query" --count 5 --gl us --no-rank --output "$out" 2>&1 | tail -2
  echo "[done]  $slug"
}

export -f run_search
export OUTDIR

# Run all 7 searches in parallel (each takes ~90s, total ~90s wall)
printf '%s\n' "${QUERIES[@]}" | xargs -I {} -P 7 bash -c 'run_search "$@"' _ {}
echo "all searches done"
ls -la "$OUTDIR"
