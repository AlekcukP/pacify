#!make
# WEB_SERVICE_NAME=pacify-dev
# EXEC_USER=www-data

.PHONY: up
up:
	./vendor/bin/sail up -d

.PHONY: down
down:
	./vendor/bin/sail down

.PHONY: bash
bash:
	./vendor/bin/sail bash

.PHONY: build
build:
	./vendor/bin/sail build

.PHONY: proxy
proxy:
	valet proxy pacify http://127.0.0.1:3000

.PHONY: unproxy
unproxy:
	valet unproxy pacify

.PHONY: watch
watch:
	yarn watch-dev

# .PHONY: bash
# bash:
# 	docker-compose exec -w /var/www -u ${EXEC_USER} ${WEB_SERVICE_NAME} bash


