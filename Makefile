LOCAL_DEPLOYMENT_PATH=../community-coin.github.io
STATIC_OUTPUT_FOLDER=static

serve-static:
	@echo 'Serving static web application...'
	http-server $(STATIC_OUTPUT_FOLDER) -p 8082

build-static:
	@echo 'Building static web application resources...'
	PORT=3003 node src/server/index.js & echo $$! > server.PID; \
	yarn build && \
	rm -fr $(STATIC_OUTPUT_FOLDER) && \
  mkdir -p $(STATIC_OUTPUT_FOLDER) && \
  cp dist/* $(STATIC_OUTPUT_FOLDER)/ && \
  cp -a images $(STATIC_OUTPUT_FOLDER)/ && \
  curl http://localhost:3003/ -o $(STATIC_OUTPUT_FOLDER)/index.html && \
  ls static && \
	kill `cat server.PID` && rm server.PID

deploy:
	@echo 'Deploying static web application resources to community-coin...'
	cp -a $(STATIC_OUTPUT_FOLDER)/* $(LOCAL_DEPLOYMENT_PATH) && \
	cd $(LOCAL_DEPLOYMENT_PATH) && \
	pwd && \
	git add . && git commit -m 'automatic deployment' && git pull --rebase && git push

build-and-deploy: build-static deploy
