VERSION=v1.0.2
IMAGE=us.gcr.io/kubernetes-dev/worldping-website
.DEFAULT_GOAL := build

node_modules:
	npm install

build/dist:
	grunt

.PHONY: build
build: node_modules build/dist

.PHONY: docker
docker: build
	docker build -t ${IMAGE}:${VERSION} .

.PHONY: push
push: docker
	docker push ${IMAGE}:${VERSION}

.PHONY: clean
clean:
	rm -rf build

.PHONY: launch
launch: docker
	docker run --rm -p 8081:80 -d --name worldping-website ${IMAGE}:${VERSION}
