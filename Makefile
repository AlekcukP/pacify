#!make

APP_NAME=pacify
APP_URL=http://127.0.0.1:3000

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

# VALET COMMANDS
.PHONY: proxy
proxy:
	valet proxy $(pacify) $(APP_URL)

.PHONY: unproxy
unproxy:
	valet unproxy $(pacify)

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

.PHONY: fresh
fresh:
	php artisan migrate:fresh --seed

