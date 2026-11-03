# Production image (built by .github/workflows/docker.yml, published to ghcr.io).
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
ARG NEXT_PUBLIC_SITE_URL=https://omidfaryabi.ir
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
# output: 'standalone' bundles only the files the server needs
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
# src/lib/articles.ts lists articles from this folder at runtime (feed.xml)
COPY --from=build --chown=node:node /app/src/articles ./src/articles
USER node
EXPOSE 3000
CMD ["node", "server.js"]
