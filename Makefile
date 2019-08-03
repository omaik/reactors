ENV ?= development

prepare:
	docker volume create -d local --opt "o=addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3" --opt "type=nfs" --opt "device=:$(shell pwd)" reactors_be
	docker volume create -d local --opt "o=addr=host.docker.internal,rw,nolock,hard,nointr,nfsvers=3" --opt "type=nfs" --opt "device=:$(shell pwd)/reactors_fe" reactors_fe
	ENV=$(ENV) docker-compose build
	bundle
	ENV=$(ENV) docker-compose run api bash -c "docker/migrate.sh"

prepare-test:
	ENV=test docker-compose run api bash -c "docker/migrate.sh"

start:
	ENV=$(ENV) docker-compose up -d

bundle:
	ENV=$(ENV) docker-compose run api bundle install


test:
	ENV=test docker-compose run api bundle exec rspec

rm:
	ENV=$(ENV) docker-compose rm
