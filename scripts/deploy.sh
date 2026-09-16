#!/usr/bin/env bash
#
# Deploy this demo to Cloudflare Pages: https://ff-stanzza.pages.dev
#
#   npm run deploy            # production
#   FF_BRANCH=preview npm run deploy   # preview branch, production untouched
#
# Same pattern as the other FF portfolio demos (ff-search, ff-shoots, ...): a DIRECT UPLOAD
# Pages project on Fakhrul's personal Cloudflare account, no git connection — pushing to
# GitHub deploys nothing; push and deploy are two acts. wrangler ≥4.13x delegates "pages" to
# Workers unless --force. Credentials come from the FF brand repo's .env.
set -euo pipefail
cd "$(dirname "$0")/.."

PROJECT="ff-stanzza"
BRANCH="${FF_BRANCH:-main}"
ENV_FILE="${FF_ENV:-$HOME/Desktop/dev/ffdevstudio/.env}"

[ -f "$ENV_FILE" ] || { echo "✗ no credentials at $ENV_FILE"; exit 1; }
set -a; . "$ENV_FILE"; set +a
: "${CLOUDFLARE_API_TOKEN:?missing in $ENV_FILE}"
: "${CLOUDFLARE_ACCOUNT_ID:?missing in $ENV_FILE}"

npm run build
# One page: every other path (the reference's /projects, /blog, /documents links) lands here.
printf '/*\t/index.html\t200\n' > dist/_redirects

npx --yes wrangler@latest pages project list 2>/dev/null | grep -q "│ $PROJECT " \
  || npx --yes wrangler@latest pages project create "$PROJECT" --production-branch main --force

npx --yes wrangler@latest pages deploy dist --project-name "$PROJECT" --branch "$BRANCH" --commit-dirty=true --force
