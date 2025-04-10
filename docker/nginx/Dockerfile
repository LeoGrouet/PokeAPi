FROM nginx:1.21.3-alpine AS base

FROM base AS prod

COPY ./docker/nginx/nginx.prod.conf /etc/nginx/nginx.conf
COPY ./apps/backend/public /app/public
