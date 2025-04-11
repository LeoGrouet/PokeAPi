# Executables (local)
DOCKER_COMP = docker compose
DOCKER_RUN  = $(DOCKER_COMP) run --rm

.PHONY: start stop prune
start:
	@$(DOCKER_COMP) up -d

stop:
	@$(DOCKER_COMP) down

prune:
	docker system prune -a
