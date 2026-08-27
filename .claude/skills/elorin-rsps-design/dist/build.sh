#!/usr/bin/env bash
# Regenerate dist/elorin.css from the modular CSS sources.
# Run from the repo root: bash dist/build.sh
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=dist/elorin.css
FILES=(
  tokens/fonts.css
  tokens/colors.css
  tokens/typography.css
  tokens/spacing.css
  tokens/shape.css
  tokens/motion.css
  tokens/gradients.css
  base/reset.css
  base/utilities.css
  components/core/core.css
  components/checklist/checklist.css
  components/feedback/feedback.css
  components/content/content.css
  components/navigation/navigation.css
  components/game/game.css
  components/data/data.css
  components/media/media.css
)

{
  echo "/* Elorin RSPS design system - single concatenated stylesheet."
  echo "   Built from styles.css and its import graph, in load order."
  echo "   Contains no @import, so it costs one request instead of eleven serialised ones."
  echo "   Load the three Google fonts with <link rel=\"preconnect\"> + <link rel=\"stylesheet\">"
  echo "   in the page head. Regenerate with dist/build.sh after editing any source CSS. */"
  for f in "${FILES[@]}"; do
    echo
    echo "/* ================ $f ================ */"
    cat "$f"
  done
} > "$OUT"

echo "Wrote $OUT ($(wc -c < "$OUT") bytes from ${#FILES[@]} files)"
