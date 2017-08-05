
build:
	npm run build

simple_test:
	npm start test/assets/simple.md out.html
	rm out.html

clean:
	rm -r dist
	rm -r node_modules
