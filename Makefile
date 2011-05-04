# npm install uglify-js -g
minify:
	uglifyjs -o data-min.js data.js

deploy: minify
	scp index.html microjs:/home/madrobby/htdocs/microjs.com/index.html
	scp data-min.js microjs:/home/madrobby/htdocs/microjs.com/data-min.js
	scp data.js microjs:/home/madrobby/htdocs/microjs.com/data-min.js
