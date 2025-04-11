FROM composer:2.8.3 AS composer

#####################################

### BUILDER
FROM php:8.3-fpm-alpine3.20 AS builder

WORKDIR /app

ARG UID=1000
ARG GID=1000

RUN addgroup -g $GID user && \
  adduser -D -u $UID -G user user

RUN apk add --no-cache --virtual .build-deps \
  autoconf bash git libzip-dev icu-dev rabbitmq-c-dev \
  gcc g++ make linux-headers curl && \
  pecl channel-update pecl.php.net && \
  pecl install apcu amqp xdebug && \
  docker-php-ext-enable apcu amqp xdebug && \
  docker-php-ext-configure zip && \
  docker-php-ext-install -j"$(nproc)" zip intl opcache pdo pdo_mysql && \
  apk del --no-network .build-deps

### BASE
FROM php:8.3-fpm-alpine3.20 AS base

WORKDIR /app

ENV PATH="$PATH:/app/bin"

ARG UID=1000
ARG GID=1000

RUN addgroup -g $GID user && \
  adduser -D -u $UID -G user user

COPY --from=composer /usr/bin/composer /usr/local/bin/composer

COPY --from=builder /usr/local/lib/php/extensions /usr/local/lib/php/extensions
COPY --from=builder /usr/local/etc/php/conf.d /usr/local/etc/php/conf.d

RUN apk add --no-cache bash git libzip icu rabbitmq-c

COPY --chown=$UID:$GID ./apps/backend /app

RUN composer install --no-scripts --no-dev

### DEVELOPMENT
FROM base AS dev

ENV APP_ENV=dev
ENV APP_DEBUG=1

USER user

### TEST
FROM dev AS test

ENV APP_ENV=test
ENV APP_DEBUG=0

RUN composer install --no-scripts

### PROD
FROM base AS prod

ENV APP_ENV=prod
ENV APP_DEBUG=0

RUN composer install --no-scripts --no-dev && \
  rm /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
