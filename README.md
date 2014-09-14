Fantastic Micro-Frameworks and Micro-Libraries for Fun and Profit!
-----

How much library code do you really need &mdash; *50K? 100K? 150K? More?*
How much of that do you really use?

Sure, we all love our favorite monolithic frameworks, and sometimes we even
use them fully. But how often do we reach for the ride-on John Deere tractor
with air conditioning and six-speaker sound system, when a judiciously
applied pocketknife would do the trick better, faster, slicker?

Micro-frameworks are definitely the pocketknives of the JavaScript library
world: short, sweet, to the point. And at 5k and under, micro-frameworks are
very very portable. A micro-framework does one thing and one thing only —
and does it well. No cruft, no featuritis, no feature creep, no excess anywhere.

MicroJS.com helps you discover the most compact-but-powerful microframeworks,
and makes it easy for you to pick one that’ll work for you.

## Submitting new libraries and frameworks

Want to add your own? Fork this site on GitHub, add your framework to "data.js" and submit a pull request..

### Rules

  * Must not have dependencies (It's ok to target a specific platform, like Node.js or WebKit)
  * Must do something useful, and must not be just a demo
  * Must be MIT/BSD-license or similar **permissive license**
  * Templating engines and loaders will only be added if they're outstanding and exceptional
  * Must be < 5k when minified and gzipped (see below)
  * Source file must be available for download and not change across releases (e.g. *awesomesauce-1.1.0.js*)
  * Prefer hand-coded/hand-optimized JavaScript over generated/cross-compiled code

To check the minified and compressed size of your library from the command line, either use `./build.js -v` (see below) or run:

    $ uglifyjs yourlib.js | gzip -9f | wc -c

### How to add

  * Add your library to "data.js", pick a **random** point in the file (this helps with merging many contributions) and enter the required attributes: `'name'`, `'tags'`, `'url'`, `'source'`
  * The a `'url'` should point to wherever you host your README or docs and where code is downloaded code-download
  * If the `'url'` is not a GitHub address but your project is hosted there, add a `'github'` field with your username & lib name, e.g. `'timrwood/moment'` so the builder can collect GitHub stats
  * The `'source'` attribute must point to a single-file, or an array of files that can be concatenated to form your complete library in a ready-to-use form. The `'source'` **must not be minified** (see below)
  * Running `make` should work and not return an error. To run make, you'll need node installed

*If your source very small, you can simply include the whole thing in the source attribute as a string. If your source is split across multiple files, you can use an array of URLs (it's preferrable to just have a single source). If your source is released in a ZIP file you can point to the ZIP's URL and append a `!/zip/entry.js` to the end so the compiler knows where to look (it's still preferrable to just have a single source URL!)*

### Using make / build ###

The builder reads *data.js* and checks the *source* of each entry. It will calculate the raw, minified and gzipped sizes of the entries.

You will see **warnings** where entries need to be checked and **errors** where entries will be excluded.

If you wish to see details of all entries, you can run the `./build -v` command.

## All rights reserved ###

Please note that MicroJS.com is a curated site and that we reserve the right to refuse any listing for any reason.

The [microjs.com](http://microjs.com) code/website is released under a MIT License.
