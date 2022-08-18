.PHONY: fmt fmt/ci lint build test deploy clean mod/update mod/ci
.PHONY: cdk/synth cdk/diff

DEPENDENCIES := \
		bin/main.ts \
		lib/stateful.ts \
		tsconfig.json

bin/main.js: $(DEPENDENCIES)
	npx tsc

fmt:
	npx prettier --write .

fmt/ci:
	npx prettier --check .

lint:
	npx eslint --ext ".ts,.js" .

build: bin/main.js

test:
	npx vitest run

deploy:
	npx cdk list | peco --select-1 | xargs npx cdk deploy

# We don't define undeploy=cdk/destroy because there are risks to execute these task accidentally.
# undeploy:
# 	npx cdk list | peco | xargs npx cdk destroy

clean:
	rm -rf cdk.out
	rm -f bin/*.js lib/*.js

mod/update:
	npm install

mod/ci:
	npm ci

cdk/synth:
	npx cdk list | peco --select-1 | xargs npx cdk synth

cdk/diff:
	npx cdk list | peco --select-1 | xargs npx cdk diff
