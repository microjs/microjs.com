remotehost = microjs
remotepath = /home/madrobby/htdocs/microjs.com/
scpfiles = index.html data-min.js data.js atom.xml

compile: deps
	@./build.js

deps:
	@npm install

deploy: compile
	scp $(scpfiles) $(remotehost):$(remotepath)

# fully quiet except on a nasty error
autodeploy:
	@./build.js -q
	@scp -q $(scpfiles) $(remotehost):$(remotepath)
