# How to contribute

## Submitting new libraries and frameworks

Want to add your own? Fork this repo on GitHub, add your framework to "data.js" (only data.js, NOT atom.xml and NOT data-min.js) and submit a pull request.

### Rules

* Must not have dependencies (It's ok to target a specific platform, like Node.js or WebKit)
* Must do something useful, and must not be just a demo
* Must be MIT/BSD-license or similar **permissive license**
* Templating engines and loaders will only be added if they're outstanding and exceptional
* Must be < 5k when minified and gzipped (see below)
* Source file must be available for download and not change across releases (e.g. *awesomesauce-1.1.0.js*)
* Prefer hand-coded/hand-optimized JavaScript over generated/cross-compiled code

To check the minified and compressed size of your library from the command line, either use `./build.js -v` (see below) or run:

```sh
uglifyjs yourlib.js | gzip -9f | wc -c
```

or

```sh
wget -q -O- https://domain.tld/path/to/file.src | uglifyjs | gzip -9f | wc -c
```

### How to add

* Add your library to "data.js", pick a **random** point in the file (this helps with merging many contributions) and enter the required attributes: `'name'`, `'tags'`, `'url'`, `'source'`
* The a `'url'` should point to wherever you host your README or docs and where code is downloaded code-download
* If the `'url'` is not a GitHub address but your project is hosted there, add a `'github'` field with your username & lib name, e.g. `'timrwood/moment'` so the builder can collect GitHub stats
* The `'source'` attribute must point to a single-file, or an array of files that can be concatenated to form your complete library in a ready-to-use form. The `'source'` **must not be minified** (see below)
* Running `make` should work and not return an error. To run make, you'll need node installed

## Make other changes

* Split big changes into multiple commits
* make helpful commit messages
