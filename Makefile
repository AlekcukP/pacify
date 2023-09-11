#!make
# WEB_SERVICE_NAME=pacify-dev
# EXEC_USER=www-data

# DOCKER COMMANDS
.PHONY: up
up:
	./vendor/bin/sail up -d

.PHONY: down
down:
	./vendor/bin/sail down

.PHONY: restart
restart:
	./vendor/bin/sail restart

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

# YARN COMMANDS
.PHONY: watch
watch:
	yarn watch-dev

# ARTISAN COMMANDS
.PHONY: migrate
migrate:
	php artisan migrate

.PHONY: rollback
rollback:
	php artisan migrate:rollback



