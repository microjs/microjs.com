Fantastic Micro-Frameworks and Micro-Libraries for Fun and Profit!
-----

How much library code do you really need — *50K? 100K? 150K? More?*
How much of that do you really use?

Sure, we all love our favorite monolithic frameworks, and sometimes we even
use them fully. But how often do we reach for the ride-on John Deere tractor
with air conditioning and six-speaker sound system, when a judiciously
applied pocketknife would do the trick better, faster, slicker?

Micro-frameworks are definitely the pocketknives of the JavaScript library
world: short, sweet, to the point. And at 5k and under, micro-frameworks are
very very portable. A micro-framework does one thing and one thing only —
and does it well. No cruft, no featuritis, no feature creep, no excess anywhere.

Microjs.com helps you discover the most compact-but-powerful microframeworks,
and makes it easy for you to pick one that’ll work for you.

SUBMITTING NEW LIBRARIES AND FRAMEWORKS:
-------

Want to add your own? Fork this site on GitHub, add your framework to data.js
and submit a pull request. When adding your source URL, we recommend a minified
file with a name that's unlikely to change (no version numbers).

  * Must not have dependencies.(1)
  * Must do something useful, and must not be just a demo
  * Must be MIT/BSD-license or similiar
  * Templating engines and loaders will only be added if they're outstanding and exceptional.
  * Add to "data.js"
  * Has to be <5k, minified and gzipped (2)
  * Needs a "url" that points to readme/docs & code-download (ideally GitHub)
  * Needs a "source" attribute that points at a single-file, ready-to-use download of the library/framework (can be minified or not)
  * Prefer hand-coded/hand-optimized JavaScript over generated/cross-compiled code.
  * Running "make" should work and not return an error. To run make, you'll need node/npm installed with the uglify-js package available: npm install uglify-js -g
  * (We're adding an automated size checker soon!)

(1) It's ok to target a specific platform, like node.js, or WebKit.

(2) To check the minified and compressed size of your library from the command line, run:

    $ uglifyjs yourlib.js | gzip -9f | wc -c

We will only accept code released under a MIT/BSD-style licenses (or comparable).

Please note that Microjs.com is a curated site and that we reserve the right to refuse
any listing for any reason.

The [microjs.com](http://microjs.com) code/website is released under a MIT License.
