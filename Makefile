.PHONY: fmt build deploy clean
.PHONY: cdk/synth cdk/diff

DEPENDENCIES := \
		bin/main.ts \
		lib/statefull-stack.ts \
		tsconfig.json

bin/main.js: $(DEPENDENCIES)
	npx tsc

fmt:
	npx prettier --write .

build: bin/main.js

deploy:
	npx cdk list | peco --select-1 | xargs npx cdk deploy

# We don't define undeploy=cdk/destroy because there are risks to execute these task accidentally.
# undeploy:
# 	npx cdk list | peco | xargs npx cdk destroy

clean:
	rm -rf cdk.out
	rm -f bin/*.js lib/*.js

cdk/synth:
	npx cdk list | peco --select-1 | xargs npx cdk synth

cdk/diff:
	npx cdk list | peco --select-1 | xargs npx cdk diff
