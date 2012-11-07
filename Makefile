remotehost = objclibs
remotepath = /var/www/html
scpfiles = index.html data-min.js data.js atom.xml

compile: deps
	@./build

deps:
	@npm install

deploy: compile
	scp $(scpfiles) $(remotehost):$(remotepath)

# fully quiet except on a nasty error
autodeploy:
	@./build -q
	@scp -q $(scpfiles) $(remotehost):$(remotepath)
