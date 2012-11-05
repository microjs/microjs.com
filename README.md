Fantastic Objective-C Frameworks for Fun and Profit!
-----

objclibs.com helps you discover useful and actively developed Objective-C frameworks that best fit your usecase.
Want to add your own? Fork this site on GitHub, add your framework to data.js and submit a pull request.

Special thanks to Thomas Fuchs for allowing this shameless copy of [microjs.com](http://microjs.com).

Check out his [homepage](http://mir.aculo.us) and the awesome [JavaScript Master Class](http://javascriptmasterclass.com/).

This project was initiated and is supported by [XING AG](http://www.xing.com). Thanks!


SUBMITTING NEW LIBRARIES AND FRAMEWORKS:
-------

Want to add your own? Fork this site on GitHub, add your framework to data.js
and submit a pull request. When adding your source URL, please use an un-minified
file with a name that's unlikely to change (no version numbers).

  * Must do something useful, and must not be just a demo
  * Must be MIT/BSD-license or similiar
  * Templating engines and loaders will only be added if they're outstanding and exceptional.
  * Add to "data.js"
  * Needs a "url" that points to readme/docs & code-download (ideally GitHub)
  * Needs a "source" attribute that points at a single-file, ready-to-use download of the library/framework (unminified) (3)
  * Running "make" should work and not return an error. To run make, you'll need node/npm installed.

### Using make / build ###

`make deps` will run `npm install --dev` to install the dependencies of the data compiler.

`make compile` will run the compiler. The compiler reads *data.js* and checks the *source* of
each entry. It will calculate the raw, minified and gzipped sizes of the entries.

You will see **warnings** where entries need to be checked and **errors** where entries will be
excluded.

If you wish to see details of all entries, you can run the `./build -v` command.

### All rights reserved ###

Please note that objclibs.com is a curated site and that we reserve the right to refuse
any listing for any reason.

The [objclibs.com](http://objclibs.com) code/website is released under a MIT License.
