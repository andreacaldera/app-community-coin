LOCAL_DEPLOYMENT_PATH=../community-coin.github.io
STATIC_OUTPUT_FOLDER=static

build-static:
	@echo 'Building static web application resources...'
	./bin/build-static.sh

deploy:
	@echo 'Deploying static web application resources to community-coin...'
	cp -a $(STATIC_OUTPUT_FOLDER)/* $(LOCAL_DEPLOYMENT_PATH)
	cd $(LOCAL_DEPLOYMENT_PATH)
	pwd
	git add . && git commit -m 'automatic deployment' && git pull --rebase && git push

build-and-deploy: build-static deploy
