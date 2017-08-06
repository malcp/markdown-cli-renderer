
install:
	npm install

build:
	npm run build

install-global:
	sudo npm install -g

simple_test:
	npm start test/assets/simple.md out.html
	rm out.html

clean:
	rm -r dist
	rm -r node_modules

patch:
	npm version patch

minor:
	npm version minor

major:
	npm version major

publish:
	npm publish
