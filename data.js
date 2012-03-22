// See the README (https://github.com/madrobby/microjs.com#readme) for details about how
// to use this file.
// Make sure you run 'make compile' to check that your library doesn't come up with
// warnings or errors. It would also be appreciated if you could check any versioned
// libraries to see if they have new releases.
// As per the README, the source should be a link to your unminified, raw, source. It can
// also be just the raw JS if it's small enough, an array of source files or a ZIP file.
// See examples below.

var MicroJS = [
  {
    name: "Qatrix",
    github: "/qatrix/Qatrix",
    tags: ["framework"],
    description: "A new lightweight JavaScript framework for easily building up high performance web application with less code",
    url: "http://qatrix.com",
    source: "http://qatrix.com/files/qatrix-0.8"
  },
  {
    name: "Smoothie Charts",
    github: "joewalnes/smoothie",
    tags: ["canvas", "charts", "graphs"],
    description: "Smooooooth JavaScript charts for realtime streaming data",
    url: "http://smoothiecharts.org/",
    source: "https://raw.github.com/joewalnes/smoothie/master/smoothie.js"
  },
  {
    name: "soma.js",
    github: "somajs/somajs",
    tags: ["framework", "mvc", "events", "command", "observer"],
    description: "Javascript mvc framework that help developers write loosely-coupled applications to increase scalability and maintainability.",
    url: "http://somajs.github.com/somajs/",
    source: "http://somajs.github.com/somajs/examples/native/framework/src/soma.js"
  },
  {
    name: "Minion",
    tags: ["class", "inheritance", "namespace", "dependencies", "pubsub", "notifications"],
    description: "Cross-platform & cross-browser classical inheritance in JavaScript",
    url: "https://github.com/gigafied/minion",
    source: "https://raw.github.com/gigafied/minion/master/dist/minion-latest.js"
  },
  {
    name: "Panzer",
    tags: ["data"],
    description: "A comprehensive node-tree solution, for smart data",
    url: "https://github.com/bemson/Panzer",
    source: "https://raw.github.com/bemson/Panzer/master/src/panzer.js"
  },
  {
    name: "one-color",
    tags: ["color"],
    description: "Browser/node color library. Implicit color space conversions, chainable channel methods and CSS convenience methods. RGB, HSV, HSL, CMYK with alpha channel",
    url: "https://github.com/One-com/one-color",
    source: "https://raw.github.com/One-com/one-color/master/one-color-debug.js"
  },
  {
    name: "Simplify.js",
    tags: ["math", "geometry", "simplification", "polyline"],
    description: "A tiny high-performance JavaScript 2D/3D polyline simplification library.",
    url: "http://mourner.github.com/simplify-js/",
    source: "https://raw.github.com/mourner/simplify-js/master/simplify.js"
  },
  {
    name: "TinyDOM",
    tags: ["dom"],
    description: "A very small DOM manipulation framework",
    url: "https://github.com/ctult/TinyDOM",
    source: "https://raw.github.com/ctult/TinyDOM/master/tinyDOM.js"
  },
  {
    name: "cssFx",
    tags: ["css", "css3", "polyfill"],
    description: "Standalone polyfill that inserts the vendor-specific CSS3 properties necessary for old and new browsers.",
    url: "http://imsky.github.com/cssFx/",
    source: "https://raw.github.com/imsky/cssFx/master/cssfx.js"
  },
  {
    name: "shorttag.js",
    tags: ["templating"],
    description: "templating engine for node and browser.",
    url: "https://github.com/jeromeetienne/shorttag.js",
    source: "https://raw.github.com/jeromeetienne/shorttag.js/master/lib/shorttag.js"
  },
  {
    name: "microcache.js",
    tags: ["data", "storage", "cache"],
    description: "in-memory cache for node and browser.",
    url: "https://github.com/jeromeetienne/microcache.js",
    source: "https://raw.github.com/jeromeetienne/MicroCache.js/master/microcache.js"
  },
  {
    name: "microevent.js",
    tags: ["events", "node"],
    description: "event emitter for any javascript object for node and browser.",
    url: "https://github.com/jeromeetienne/microevent.js",
    source: "https://raw.github.com/jeromeetienne/microevent.js/master/microevent.js"
  },
  {
    name: "dropinrequire.js",
    tags: ["loader", "commonjs", "require", "node"],
    description: "dropin replacement for require() in browser.",
    url: "http://jeromeetienne.github.com/dropinrequire.js/",
    source: "https://raw.github.com/jeromeetienne/dropinrequire.js/master/dropin_require.js"
  },
  {
    name: "gowiththeflow.js",
    tags: ["functional", "async", "defered"],
    description: "Async flow control micro library for node and browser.",
    url: "https://github.com/jeromeetienne/gowiththeflow.js",
    source: "https://raw.github.com/jeromeetienne/gowiththeflow.js/master/gowiththeflow.js"
  },
  /* Too big, 5.5kb
  {
    name: "Prevel Framework",
    tags: ["dom", "ajax", "events", "css"],
    description: "All-purpose development tool (CSS query selector, DOM, Ajax, etc).",
    url: "https://github.com/chernikovalexey/Prevel",
    source: "https://raw.github.com/chernikovalexey/Prevel/master/prevel-full.js"
  },
  */
  {
    name: "genData",
    tags: ["data"],
    description: "A normalization pattern to build, query, and manipulate everything.",
    url: "https://github.com/bemson/genData/",
    source: "https://raw.github.com/bemson/genData/master/src/gendata.js"
  },
  {
    name: "GSet",
    tags: ["data", "compose"],
    description: "Share and control public proxies of private objects, with same-name getter/setters.",
    url: "https://github.com/bemson/GSet/",
    source: "https://raw.github.com/bemson/GSet/master/src/gset.js"
  },
  {
    name: "Slang",
    tags: ["string", "functional", "language"],
    description: "A collection of utility functions for strings",
    url: "https://github.com/devongovett/slang",
    source: "https://raw.github.com/devongovett/slang/master/slang.js"
  },
  {
    name: "Backbone",
    github: "documentcloud/backbone",
    tags: ["mvc", "data", "functional"],
    description: "Lightweight MVC—models with custom events, collections with rich enumerables, views and RESTful JSON.",
    url: "http://backbonejs.org/",
    source: "http://backbonejs.org/backbone.js"
  },
  {
    name: "$dom",
    tags: ["dom", "events", "animation"],
    description: "Selecting, styling, traversing and animating DOM elements.",
    url: "https://github.com/julienw/dollardom",
    source: "https://raw.github.com/julienw/dollardom/master/src/dollardom.js"
  },
  {
    name: "DOMBrew",
    tags: ["dom", "dom-builder"],
    description: "Clean API high performance DOM builder",
    url: "https://github.com/glebm/DOMBrew",
    source: "https://raw.github.com/glebm/DOMBrew/master/dombrew.js"
  },
  {
    name: "HEX/RGB",
    tags: ["color"],
    description: "Two way color conversion for Hexadecimal and RGB integer colors",
    url: "https://github.com/daniellmb/HEX-RGB-Conversion",
    source: "https://raw.github.com/daniellmb/HEX-RGB-Conversion/master/hex-rgb.src.js",
    tinyminify: true // this source has a ton of comments so the minified version is tiny compared to raw, so
                     // we overrule the sanity-check that compares the sizes and would otherwise reject this
  },
  {
    name: "MinPubSub",
    tags: ["events", "pubsub"],
    description: "A publish/subscribe messaging framework",
    url: "https://github.com/daniellmb/MinPubSub",
    source: "https://raw.github.com/daniellmb/MinPubSub/master/minpubsub.src.js"
  },
  {
    name: "Modernizr",
    tags: ["feature"],
    description: "Detects native CSS3 and HTML5 features available in the current browser.",
    url: "http://www.modernizr.com/",
    source: "https://raw.github.com/Modernizr/Modernizr/master/modernizr.js"
  },
  {
    name: "Zepto",
    tags: ["base", "dom", "webkit", "jquery", "ajax", "events", "mobile"],
    description: "jQuery API-compatible framework for modern web browsers. Optional Ajax, Events, Data and Touch modules.",
    url: "http://zeptojs.com",
    source: "https://raw.github.com/madrobby/zepto/master/src/zepto.js"
  },
  {
    name: "xui",
    github: "xui/xui",
    tags: ["base", "dom", "mobile", "ajax", "events", "webkit", "animation"],
    description: "DOM library for authoring HTML5 mobile web applications, works cross-device and cross-platform.",
    url: "http://xuijs.com",
    // TODO: multiple editions - needs better handling
    source: "http://xuijs.com/downloads/xui-2.3.2.js"
  },
  {
    name: "Underscore",
    github: "documentcloud/underscore",
    tags: ["functional", "language", "data"],
    description: "A utility-belt that provides functional programming support that you would expect in Ruby.",
    url: "http://underscorejs.org/",
    source: "http://underscorejs.org/underscore.js"
  },
  {
    name: "Weld",
    tags: ["templating"],
    description: "Completely unobtrusive, full featured template antimatter. Works in Node.js or the Browser, awesome built-in debugger.",
    url: "http://www.github.com/hij1nx/weld",
    source: "https://raw.github.com/hij1nx/weld/master/lib/weld.js"
  },
  {
    name: "Mustache",
    tags: ["templating"],
    description: "Minimal, logic-less templating with {{mustaches}}. Great for server- or client-side templating.",
    url: "http://mustache.github.com/",
    source: "https://raw.github.com/janl/mustache.js/master/mustache.js"
  },
  {
    name: "LABjs",
    tags: ["loader"],
    description: "The *performance* script loader: on-demand parallel script loading with ordered execution for dependencies.",
    url: "http://labjs.com/",
    source: "https://raw.github.com/getify/LABjs/master/LAB.js"
  },
  {
    name: "Qwery",
    tags: ["css"],
    description: "Blazing fast query selector engine allowing you to select elements with CSS1, CSS2 & CSS3 selectors.",
    url: "https://github.com/ded/qwery",
    source: "https://raw.github.com/ded/qwery/master/qwery.js"
  },
  /* Too big, 5.5 kb
  {
    name: "Slick",
    tags: ["css"],
    description: "Accurate selector engine w/ CSS3 selectors and extensions like 'reverse combinators'.",
    url: "https://github.com/mootools/slick",
    source: [ "https://raw.github.com/mootools/slick/master/Source/Slick.Finder.js",
              "https://raw.github.com/mootools/slick/master/Source/Slick.Parser.js",
              "https://raw.github.com/mootools/slick/master/Source/slick.js" ]
  },
  */
  {
    name: "Sly",
    tags: ["css"],
    description: "Sly is a query selector engine allowing you to select elements with CSS1, CSS2 & CSS3 selectors.",
    url: "https://github.com/digitarald/sly",
    source: "https://raw.github.com/digitarald/sly/master/Sly.js"
  },
  {
    name: "Jaguar",
    tags: ["css"],
    description: "A lightweight, extensible, and fast selector engine with excellent support for matchesSelector(), commonly used in event delegation. Jaguar supports all CSS1, CSS2, and most CSS3 selectors.",
    url: "https://github.com/alpha123/Jaguar",
    source: "https://raw.github.com/alpha123/Jaguar/master/src/jaguar.js"
  },
  {
    name: "Émile",
    tags: ["animation","jsanimation"],
    description: "Émile is a no-frills stand-alone CSS animation JavaScript framework",
    url: "https://github.com/madrobby/emile",
    source: "https://raw.github.com/madrobby/emile/master/emile.js"
  },
  {
    name: "Lawnchair",
    github: "brianleroux/lawnchair",
    tags: ["data","storage","webkit","mobile"],
    description: "Client side JSON document store. Perfect for WebKit mobile apps.",
    url: "http://westcoastlogic.com/lawnchair/",
    source: "http://westcoastlogic.com/lawnchair/downloads/lawnchair-0.6.1.js"
  },
  /* Too Big 7kb
  {
    name: "ExplorerCanvas",
    tags: ["polyfill", "canvas"],
    description: "HTML5 canvas tag support for Internet Explorer.",
    url: "http://code.google.com/p/explorercanvas/",
    source: "http://explorercanvas.googlecode.com/svn/trunk/excanvas.js"
  },
  */
  {
    name: "Placeholder.js",
    tags: ["polyfill"],
    description: "Adds support for the placeholder attribute in older browsers that don't support this HTML5 feature.",
    url: "https://github.com/NV/placeholder.js",
    source: "http://nv.github.com/placeholder.js/placeholder.js"
  },
  {
    name: "Micro-Templating",
    tags: ["templating"],
    description: "Templating function that is fast, caches quickly, and is easy to use.",
    url: "http://ejohn.org/blog/javascript-micro-templating/",
    source: "http://www.manning.com/resig/JavaScriptNinjaSourceCode.zip!/code/07/11.js"
  },
  {
    name: "BuildSugar",
    tags: ["templating"],
    description: "Bizarrely clean & simple syntax sugar for building HTML/XML strings",
    url: "http://jsfiddle.net/SubtleGradient/4W3RR/",
    source: "https://raw.github.com/gist/278016/BuildSugar.SubtleGradient.js"
  },
  {
    name: "Tweet-Templ",
    tags: ["templating"],
    description: "function t(s,d){for(var p in d)s=s.replace(new RegExp('{'+p+'}','g'),d[p]);return s;}",
    url: "http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/",
    source: "function t(s,d){ for(var p in d) s=s.replace(new RegExp('{'+p+'}','g'), d[p]); return s; }"
  },
  {
    name: "Firmin",
    github: "beastaugh/firmin",
    tags: ["animation","webkit"],
    description: "Animation library that uses CSS transforms and transitions to create smooth, hardware-accelerated animations.",
    url: "http://extralogical.net/projects/firmin/",
    source: "http://extralogical.net/projects/firmin/downloads/firmin-1.0.0.js"
  },
  {
    name: "Bonzo",
    tags: ["dom"],
    description: "Hassle-free, library agnostic, extensible DOM utility.",
    url: "https://github.com/ded/bonzo",
    source: "https://raw.github.com/ded/bonzo/master/bonzo.js"
  },
  {
    name: "Bean",
    tags: ["events", "dom"],
    description: "Bean is a slick, cross-platform, framework-agnostic event utility designed for desktop, mobile, and touch-based browsers. ",
    url: "https://github.com/fat/bean",
    source: "https://raw.github.com/fat/bean/master/bean.js"
  },
  {
    name: "$script.js",
    tags: ["loader"],
    description: "An asynchronous JavaScript loader and dependency manager with an astonishingly impressive footprint.",
    url: "https://github.com/ded/script.js",
    source: "https://raw.github.com/ded/script.js/master/dist/script.js"
  },
  {
    name: "Klass",
    tags: ["language", "class"],
    description: "An expressive, cross platform JavaScript Class provider with a slick, classical interface to prototypal inheritance.",
    url: "https://github.com/ded/klass",
    source: "https://raw.github.com/ded/klass/master/klass.js"
  },
  {
    name: "OORJa",
    tags: ["language", "class"],
    description: "OORJa = Object Oriented JavaScript",
    url: "http://maxpert.github.com/oorja/",
    source: "https://raw.github.com/maxpert/oorja/master/Class.js"
  },
  {
    name: "Classy",
    tags: ["language", "class"],
    description: "Classy is a small JavaScript library that implements Python inspired classes for JavaScript.",
    url: "http://classy.pocoo.org/",
    source: "https://raw.github.com/mitsuhiko/classy/master/classy.js"
  },
  {
    name: "Milk",
    tags: ["templating"],
    description: "Spec-compatible (v1.1+λ) Mustache templating: written in CoffeeScript, runnable anywhere.",
    url: "https://github.com/pvande/Milk",
    source: "https://raw.github.com/pvande/Milk/master/dist/v1.2.0/milk.js"
  },
  {
    name: "Director",
    tags: ["spa"],
    description: "A lightweight, full featured client side router for single page apps.",
    url: "https://github.com/flatiron/director",
    source: "https://raw.github.com/flatiron/director/master/build/director-1.0.7.js"
  },
  {
    name: "snack.js",
    tags: ["base", "dom", "events", "ajax", "language"],
    description: "A tiny, cross-browser, library with DOM manipulation, events, pub/sub, Ajax and language utilities.",
    url: "http://snackjs.com/",
    source: "https://raw.github.com/rpflorence/snack/master/builds/snack.js"
  },
  {
    name: "Ender",
    tags: ["compose", "base", "mobile"],
    description: "An open, powerful, micro-to-macro API for composing your own custom JavaScript library.",
    url: "http://ender.no.de",
    source: "https://raw.github.com/ender-js/ender-js/master/ender.js"
  },
  {
    name: "Mold",
    github: "marijnh/mold",
    tags: ["templating"],
    description: "Mold is a templating library.",
    url: "http://marijnhaverbeke.nl/mold/",
    source: "http://marijnhaverbeke.nl/mold/mold.js"
  },
  {
    name: "Tempo",
    tags: ["templating"],
    description: "Tempo is a JSON rendering engine that enables you to craft data templates in pure HTML.",
    url: "http://twigkit.github.com/tempo/",
    source: "https://raw.github.com/twigkit/tempo/master/tempo.js"
  },
  {
    name: "Reqwest",
    tags: ["ajax"],
    description: "Robust wrapper for asynchronous http requests.",
    url: "https://github.com/ded/Reqwest",
    source: "https://raw.github.com/ded/Reqwest/master/reqwest.js"
  },
  {
    name: "JSON2",
    tags: ["polyfill", "json"],
    description: "Creates a JSON property in the global object, if there  isn't already one, with stringify and parse methods.",
    url: "https://github.com/douglascrockford/JSON-js",
    source: "https://raw.github.com/douglascrockford/JSON-js/master/json2.js"
  },
  {
    name: "yepnope",
    tags: ["polyfill", "loader"],
    description: "yepnope is an asynchronous conditional resource loader that allows you to load only the scripts that your users need.",
    url: "http://yepnopejs.com/",
    source: "https://raw.github.com/SlexAxton/yepnope.js/master/yepnope.js"
  },
  {
    name: "ICanHaz",
    tags: ["templating"],
    description: "Simple & powerful client-side templating for jQuery or Zepto.js.",
    url: "http://icanhazjs.com/",
    source: "https://raw.github.com/andyet/ICanHaz.js/master/ICanHaz.js"
  },
  {
    name: "Q",
    tags: ["functional", "events"],
    description: "when/defer-style promises for JavaScript (CommonJS/Promises/A,B,D)",
    url: "https://github.com/kriskowal/q",
    source: "https://raw.github.com/kriskowal/q/master/q.js"
  },
  {
    name: "domReady",
    tags: ["dom", "events"],
    description: "Lets you know when the DOM is ready",
    url: "https://github.com/ded/domready",
    source: "https://raw.github.com/ded/domready/master/ready.js"
  },
  /* I'm not sure what to do with this, the download is a big ZIP file with 9 .js files, all together gzipped they are nearly 7 KB
  {
    name: "Spine",
    tags: ["mvc"],
    description: "MVC with real protypical inheritance, controllers, model layer and ORM, Ajax and local storage.",
    url: "http://maccman.github.com/spine/",
    source: "http://spinejs.com/pages/download"
  },
  */
  {
    name: "Kizzy",
    tags: ["data", "storage"],
    description: "Cross Browser caching util leveraging LocalStorage and XML Store with a Memcached interface",
    url: "https://github.com/ded/Kizzy",
    source: "https://raw.github.com/ded/Kizzy/master/kizzy.js"
  },
  {
    name: "Bowser",
    tags: ["feature"],
    description: "A browser detector. Because when there is no features to detect, sometimes you have to browser sniff",
    url: "https://github.com/ded/bowser",
    source: "https://raw.github.com/ded/bowser/master/bowser.js"
  },
  {
    name: "ES5-Shim",
    tags: ["language", "polyfill"],
    description: "Compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    url: "https://github.com/kriskowal/es5-shim/",
    source: "https://raw.github.com/kriskowal/es5-shim/master/es5-shim.js"
  },
  {
    name: "Loadrunner",
    tags: ["loader"],
    description: "Simple, flexible and sane JavaScript loader and build tool for browsers",
    url: "https://github.com/danwrong/loadrunner",
    source: "https://raw.github.com/danwrong/loadrunner/master/src/loadrunner.js"
  },
  {
    name: "functools",
    tags: ["functional"],
    description: "A library for functional operations",
    url: "https://github.com/azer/functools",
    source: "https://raw.github.com/azer/functools/master/lib/functools.js"
  },
  {
    name: "observer",
    tags: ["observer","events"],
    description: "CommonJS implementation of the observer design pattern",
    url: "https://github.com/azer/observer",
    source: "https://raw.github.com/azer/observer/master/lib/observer.js"
  },
  {
    name: "defer.js",
    tags: ["loader"],
    description: "Script loader, using the 'Deferred' pattern for async operations.",
    url: "https://github.com/BorisMoore/jsdefer/",
    source: "https://raw.github.com/BorisMoore/jsdefer/master/jsdefer.js"
  },
  {
    name: "Bootstrap",
    tags: ["loader"],
    description: "A small, simple bootloader. No frills. Black and white label.",
    url: "https://bitbucket.org/scott_koon/bootstrap",
    source: "https://bitbucket.org/scott_koon/bootstrap/raw/default/bootstrap.js"
  },
  {
    name: "LazyLoad",
    tags: ["loader"],
    description: "Async JavaScript and CSS loader.",
    url: "https://github.com/rgrove/lazyload",
    source: "https://raw.github.com/rgrove/lazyload/master/lazyload.js"
  },
  {
    name: "Valentine",
    tags: ["functional", "language", "data"],
    description: "JavaScripts functional sister providing iterators, type checking, and basic utils",
    url: "https://github.com/ded/valentine",
    source: "https://raw.github.com/ded/valentine/master/valentine.js"
  },
  {
    name: "TurtleWax",
    tags: ["canvas", "graphics"],
    description: "LOGO-inspired canvas drawing lib, adds method chaining and polar coordinates for added fun.",
    url: "https://github.com/davebalmer/turtlewax",
    source: "https://raw.github.com/davebalmer/turtlewax/master/pen.js" // also needs an extra, small, hsv.js
  },
  {
    name: "picoCSS",
    tags: ["CSS", "CSS3", "mobile"],
    description: "Basic CSS DOM manipulation and animation optimized for webkit browsers(Safari, Chrome) for building mobile web apps",
    url: "https://github.com/vladocar/picoCSS",
    source: "https://raw.github.com/vladocar/picoCSS/master/src/picoCSS.js"
  },
  {
    name: "H5F.js",
    tags: ["polyfill"],
    description: "Adds support for HTML5 Forms chapters new field input types, attributes and constraint validation API in non-supporting browsers.",
    url: "https://github.com/ryanseddon/H5F",
    source: "https://raw.github.com/ryanseddon/H5F/master/h5f.js"
  },
  {
    name: "Store.js",
    tags: ["data", "storage"],
    description: "localStorage wrapper for all browsers without using cookies or flash",
    url: "https://github.com/marcuswestin/store.js",
    source: "https://raw.github.com/marcuswestin/store.js/master/store.js"
  },
  {
    name: "Objs",
    tags: ["language"],
    description: "A minimalistic library intended to help in using namespaces and class inheritance in JavaScript.",
    url: "https://github.com/tekool/objs",
    source: "https://raw.github.com/tekool/objs/master/src/Objs.js"
  },
  {
    name: "EventEmitter",
    tags: ["events"],
    description: "Evented JavaScript for the browser",
    url: "https://github.com/Wolfy87/EventEmitter",
    source: "https://raw.github.com/Wolfy87/EventEmitter/master/src/EventEmitter.js"
  },
  {
    name: "Color",
    tags: ["color"],
    description: "Color conversion functions for switching between hex decimal, RGB, names and arrays.",
    url: "https://github.com/Wolfy87/Color",
    source: "https://raw.github.com/Wolfy87/Color/master/color.js"
  },
  {
    name: "Microajax",
    tags: ["ajax"],
    description: "Simple AJAX library.",
    url: "http://code.google.com/p/microajax/",
    source: "http://microajax.googlecode.com/files/microajax.js"
  },
  {
    name: "Fermata",
    tags: ["ajax"],
    description: "Succinct native REST client, for client-side web apps and node.js. Turns URLs into magic JavaScript objects.",
    url: "https://github.com/natevw/fermata",
    source: "https://raw.github.com/natevw/fermata/master/fermata.js"
  },
  {
    name: "Base64.js",
    tags: ["polyfill"],
    description: "`window.btoa` and `window.atob` for browsers which don't provide these functions.",
    url: "https://bitbucket.org/davidchambers/base64.js",
    source: "https://bitbucket.org/davidchambers/base64.js/raw/default/base64.js"
  },
  {
    name: "Mibbu",
    tags: ["games", "canvas"],
    description: "Microframework for fast game prototyping using Canvas & DOM",
    url: "https://github.com/michalbe/mibbu",
    source: "https://raw.github.com/michalbe/mibbu/master/mibbu.js"
  },
  {
    name: "nimble",
    tags: ["functional", "async"],
    description: "Functional flow-control for JavaScript. Combines features of the underscore and async libraries.",
    url: "http://caolan.github.com/nimble/",
    source: "https://raw.github.com/caolan/nimble/master/nimble.js"
  },
  {
    name: "loom",
    tags: ["functional"],
    description: "A simple, four method API for differential inheritance and AOP.",
    url: "https://github.com/rpflorence/loom",
    source: "https://raw.github.com/rpflorence/loom/master/src/loom.js"
  },
  {
    name: "jWorkflow",
    tags: ["functional", "workflow", "async"],
    description: "Simple, buildable, repeatable workflows for client or serverside javascript",
    url: "http://github.com/tinyhippos/jWorkflow",
    source: "https://raw.github.com/tinyhippos/jWorkflow/master/lib/jWorkflow.js"
  },
  {
    name: "Events.js",
    tags: ["events", "dom"],
    description: "Cross-browser DOM events, with keystroke handling, hashchange, mouseenter/leave.",
    url: "https://github.com/kbjr/Events.js",
    source: "https://raw.github.com/kbjr/Events.js/master/events.js"
  },
  {
    name: "JS-Signals",
    tags: ["events"],
    description: "Custom Event/Messaging system for JavaScript.",
    url: "http://millermedeiros.github.com/js-signals/",
    source: "https://raw.github.com/millermedeiros/js-signals/master/dist/signals.js"
  },
  {
    name: "Crossroads.js",
    tags: ["route", "events", "spa"],
    description: "Powerful JavaScript URL routing/dispatch for server-side and client-side applications.",
    url: "http://millermedeiros.github.com/crossroads.js/",
    source: "https://raw.github.com/millermedeiros/crossroads.js/master/dist/crossroads.js"
  },
  {
    name: "Hasher",
    tags: ["spa"],
    description: "Browser history manager for rich-media applications.",
    url: "https://github.com/millermedeiros/Hasher",
    source: "https://raw.github.com/millermedeiros/Hasher/master/dist/js/hasher.js"
  },
  {
    name: "Artemia",
    tags: ["data", "storage"],
    description: "Artemia is a clientside document store, inspired by Lawnchair.",
    url: "https://github.com/k33g/artemia/",
    source: [ "https://raw.github.com/k33g/artemia/master/js/artemia.js",
              "https://raw.github.com/k33g/artemia/master/js/adaptors.plugins/artemia.storage.js",
              "https://raw.github.com/k33g/artemia/master/js/adaptors.plugins/artemia.sqlite.storage.js" ]
  },
  {
    name: "js.class",
    tags: ["functional","class","extend"],
    description: "Class-based OO for JavaScript.",
    url: "http://code.google.com/p/jsclassextend/",
    source: "http://jsclassextend.googlecode.com/files/js.class.js"
  },
  {
    name: "Satisfy",
    tags: ["html","css","selector"],
    description: "CSS Selector to HTML generator.",
    url: "https://github.com/padolsey/satisfy",
    source: "https://raw.github.com/padolsey/satisfy/master/satisfy.js"
  },
  {
    name: "jXHR",
    tags: ["json","json-p","xhr","ajax","cross-domain"],
    description: "JSON-P based cross-domain Ajax wrapped in the XHR API.",
    url: "http://mulletxhr.com/",
    source: "http://mulletxhr.com/jXHR-0.1.zip!/jXHR.js"
  },
  {
    name: "Ekho",
    tags: ["events"],
    description: "DOM-agnostic event library, with bubbling.",
    url: "https://bitbucket.org/killdream/ekho",
    source: "https://bitbucket.org/killdream/ekho/raw/tip/src/ekho.js"
  },
  {
    name: "JSON.minify",
    tags: ["json"],
    description: "Strip out // and /*..*/ comments from JSON before parsing.",
    url: "http://github.com/getify/JSON.minify",
    source: "https://raw.github.com/getify/JSON.minify/master/minify.json.js"
  },
  {
    name: "jaylist",
    tags: ["functional", "extend", "data"],
    description: "A simple wrapper for JavaScript's built-in hash storage.",
    url: "http://benbscholz.github.com/jaylist",
    source: "https://raw.github.com/benbscholz/jaylist/master/src/jaylist.js"
  },
  {
    name: "SubtleLocationProxy",
    tags: ["history", "route", "spa"],
    description: "Proxy the location of one window, frame or iframe to the hash of another and vice-versa.",
    url: "https://github.com/subtleGradient/SubtleLocationProxy.js",
    source: "https://raw.github.com/subtleGradient/SubtleLocationProxy.js/master/SubtleLocationProxy.js"
  },
  {
    name: "LeviRoutes",
    tags: ["history", "route", "spa"],
    description: "A basic routes framework for JS that hooks in to HTML5 history",
    url: "http://leviroutes.com",
    source: "https://raw.github.com/PaulKinlan/leviroutes/master/routes.js"
  },
  {
    name: "FormfactorJS",
    tags: ["formfactor", "loader"],
    description: "A formfactor detection library, to help developers target tablet, tvs, desktops and handhelds (or anything you choose)",
    url: "http://formfactorjs.com",
    source: "https://raw.github.com/PaulKinlan/formfactor/master/formfactor.js"
  },
  {
    name: "Head JS",
    tags: ["loader", "polyfill", "feature"],
    description: "An asynchronous loader library, with HTML5 and CSS3 polyfills",
    url: "http://headjs.com/",
    source: "https://raw.github.com/headjs/headjs/master/dist/head.js"
  },
  {
    name: "Augment.js",
    tags: ["polyfill"],
    description: "Enables use of modern JavaScript by augmenting built in objects with the latest JavaScript methods.",
    url: "http://augmentjs.com",
    source: "https://raw.github.com/olivernn/augment.js/master/augment.js"
  },
  {
    name: "thumbs.js",
    tags: ["polyfill"],
    description: "Add touch event support to the desktop and other mouse-based browsers.",
    url: "http://mwbrooks.github.com/thumbs.js/",
    source: "https://raw.github.com/mwbrooks/thumbs.js/master/lib/thumbs.js"
  },
  {
    name: "DOMBuilder",
    tags: ["dom", "html"],
    description: "Declarative builder with (mostly) interchangeable DOM or HTML output",
    url: "https://github.com/insin/DOMBuilder",
    source: "https://raw.github.com/insin/DOMBuilder/master/dist/DOMBuilder.js"
  },
  {
    name: "my.common.js",
    tags: ["loader", "commonjs"],
    description: "A CommonJS-like script/module loader.",
    url: "https://github.com/jiem/my-common",
    source: "http://myjs.fr/my-common/my.common.js"
  },
  {
    name: "my.class.js",
    tags: ["language", "class"],
    description: "Probably the fastest JS class system. No wrappers.",
    url: "https://github.com/jiem/my-class",
    source: "http://myjs.fr/my-class/my.class.js"
  },
  {
    name: "htmlentities.js",
    tags: ["htmlentities", "decode", "encode", "dom"],
    description: "A minimal html entities decoder/encoder using DOM.",
    url: "https://github.com/jussi-kalliokoski/htmlentities.js",
    source: "https://raw.github.com/jussi-kalliokoski/htmlentities.js/master/src/htmlentities.js"
  },
  {
    name: "binary.js",
    tags: ["binary", "decode", "encode"],
    description: "A fast, small, robust and extensible binary conversion library.",
    url: "https://github.com/jussi-kalliokoski/binary.js",
    source: "https://raw.github.com/jussi-kalliokoski/binary.js/master/binarystream.js"
  },
  {
    name: "C-qwncr",
    tags: ["async", "animation", "jsanimation"],
    description: "An animation sequencing library that prevents complex animations from starting again before they've completed.",
    url: "https://github.com/vsa-partners/c-qwncr",
    source: "https://raw.github.com/vsa-partners/c-qwncr/master/js/c-qwncr.js"
  },
  {
    name: "Timed",
    tags: ["functional", "sugar"],
    description: "Syntactic sugar for JavaScript's setTimeout() and setInterval().",
    url: "https://github.com/ChiperSoft/Timed",
    source: "https://raw.github.com/ChiperSoft/Timed/master/timed.js"
  },
  {
    name: "Sslac",
    tags: ["language", "class"],
    description: "A (seemingly backwards) JS class builder with support for runtime patching",
    url: "https://github.com/jakobo/sslac",
    source: "https://raw.github.com/Jakobo/Sslac/master/src/sslac.js"
  },
  {
    name: "ShinyCar",
    tags: ["data", "storage"],
    description: "Set localStorage keys and values as objects",
    url: "https://github.com/Poincare/ShinyCar",
    source: "https://raw.github.com/Poincare/ShinyCar/master/shinycar.js"
  },
  {
    name: "lscache",
    tags: ["data", "storage"],
    description: "A localStorage-based memcache-inspired client-side caching library.",
    url: "https://github.com/pamelafox/lscache",
    source: "https://raw.github.com/pamelafox/lscache/master/lscache.js"
  },
  {
    name: "Evidence",
    tags: ["testing"],
    description: "Evidence is a JavaScript unit testing library. This fork exclusively uses the console to log.",
    url: "https://github.com/madrobby/evidence",
    source: "https://raw.github.com/madrobby/evidence/master/src/evidence.js"
  },
  {
    name: "ClassIE",
    tags: ["feature"],
    description: "ClassIE is an unobstrusive library which detects Internet Explorer version for JS and CSS sides",
    url: "https://github.com/pyrsmk/ClassIE",
    source: "https://raw.github.com/pyrsmk/ClassIE/master/src/ClassIE.js"
  },
  {
    name: "Sheethub",
    tags: ["polyfill"],
    description: "A CSS backdoor API for providing awesome scripts in a centralized way",
    url: "https://github.com/pyrsmk/Sheethub",
    source: "https://raw.github.com/pyrsmk/Sheethub/master/src/Sheethub.js"
  },
  {
    name: "nut",
    tags: ["css"],
    description: "The concise CSS selector engine",
    url: "https://github.com/pyrsmk/nut",
    source: "https://raw.github.com/pyrsmk/nut/master/src/nut.js"
  },
  {
    name: "molt",
    tags: ["responsive"],
    description: "Image updater for responsive designs",
    url: "https://github.com/pyrsmk/molt",
    source: "https://raw.github.com/pyrsmk/molt/master/src/molt.js"
  },
  {
    name: "W",
    tags: ["responsive"],
    description: "Width management tool for responsive designs",
    url: "https://github.com/pyrsmk/W",
    source: "https://raw.github.com/pyrsmk/W/master/src/W.js"
  },
  {
    name: "toast",
    tags: ["loader"],
    description: "A tiny and powerful resource loader",
    url: "https://github.com/pyrsmk/toast",
    source: "https://raw.github.com/pyrsmk/toast/master/src/toast.js"
  },
  {
    name: "mediatizr",
    tags: ["polyfill","responsive"],
    description: "Adds media queries support to incapable browsers",
    url: "https://github.com/pyrsmk/mediatizr",
    source: "https://raw.github.com/pyrsmk/mediatizr/master/src/mediatizr.js"
  },
  {
    name: "DragDrop",
    tags: ["dragdrop", "ui"],
    description: "Drag-and-Drop functionality for advanced UI development.",
    url: "https://github.com/kbjr/DragDrop",
    source: "https://raw.github.com/kbjr/DragDrop/master/drag-drop.js"
  },
  {
    name: "Jaml",
    tags: ["templating"],
    description: "Jaml tries to emulate Ruby’s Haml library, making it easy to generate HTML in your JavaScript projects.",
    url: "http://edspencer.github.com/jaml/",
    source: "https://raw.github.com/edspencer/jaml/master/Jaml-all.js"
  },
  {
    name: "Async GA",
    tags: ["analytics"],
    description: "Reduced Google's original analytics snippet by one third, with better performance.",
    url: "http://mathiasbynens.be/notes/async-analytics-snippet",
    source: "var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview']];" +
            "(function(d, t) {" +
            "var g = d.createElement(t)," +
            "s = d.getElementsByTagName(t)[0];" +
            "g.src = '//www.google-analytics.com/ga.js';" +
            "s.parentNode.insertBefore(g, s);" +
            "}(document, 'script'));"
  },
  {
    name: "JSONSelect",
    github: "lloyd/JSONSelect",
    tags: ["data", "json"],
    description: "CSS-like selectors for JSON.",
    url: "http://jsonselect.org",
    source: "http://jsonselect.org/js/jsonselect.js"
  },
  {
    name: "Morpheus",
    tags: ["animation", "jsanimation", "color"],
    description: "An animator that lets you tween in parallel on multiple elements, from integers to colors in a single high-performant loop",
    url: "https://github.com/ded/morpheus",
    source: "https://raw.github.com/ded/morpheus/master/morpheus.js"
  },
  {
    name: "Viper",
    tags: ["animation", "jsanimation", "color", "text"],
    description: "A friendly library for changing a property of an object over time. Supports animating numbers, colors, and even strings.",
    url: "https://github.com/alpha123/Viper",
    source: "https://raw.github.com/alpha123/Viper/master/src/viper-uncompressed.js"
  },
  {
    name: "microjungle",
    tags: ["templating"],
    description: "very simple and powerful client-side HTML via JSON templating engine.",
    url: "https://github.com/deepsweet/microjungle",
    source: "https://raw.github.com/deepsweet/microjungle/master/src/microjungle.js"
  },
  {
    name: "environ",
    tags: ["feature"],
    description: "Cross platform environment detection library.",
    url: "https://github.com/azer/environ",
    source: "https://raw.github.com/azer/environ/master/lib/environ.js"
  },
  {
    name: "state-machine",
    tags: ["data", "games", "statemachine"],
    description: "A finite state machine, useful in game development",
    url: "https://github.com/jakesgordon/javascript-state-machine",
    source: "https://raw.github.com/jakesgordon/javascript-state-machine/master/state-machine.js"
  },
  {
    name: "Janis",
    tags: ["animation", "ui", "transitions"],
    description: "A simple CSS Transitions animation framework",
    url: "http://mikemctiernan.github.com/Janis/",
    source: "https://raw.github.com/MikeMcTiernan/Janis/master/janis.js"
  },
  // requires Underscore, dependency allowed?
  {
    name: "extend.js",
    tags: ["base", "language", "feature"],
    description: "A simple way to define and extend namespaces",
    url: "https://github.com/searls/extend.js",
    source: "https://raw.github.com/searls/extend.js/master/src/extend.js"
  },
  {
    name: "System.js",
    tags: ["feature"],
    description: "Generates a JavaScript object with the user's system information.",
    url: "https://github.com/mrdoob/system.js",
    source: "https://raw.github.com/mrdoob/system.js/master/src/System.js"
  },
  /* Too big: 8.1 kb
  {
    name: "Benchmark.js",
    tags: ["benchmark", "testing"],
    description: "A benchmarking library that works on nearly all JavaScript platforms, supports high-resolution timers, and returns statistically significant results. As used on jsPerf.com.",
    url: "http://benchmarkjs.com/",
    source: "https://raw.github.com/bestiejs/benchmark.js/master/benchmark.js"
  },
  */
  {
    name: "Platform.js",
    tags: ["feature"],
    description: "A platform detection library that works on nearly all JavaScript platforms.",
    url: "https://github.com/bestiejs/platform.js",
    source: "https://raw.github.com/bestiejs/platform.js/master/platform.js"
  },
  {
    name: "Hypher",
    tags: ["hyphenation"],
    description: "Fast and small hyphenation engine for Node.js and the browser",
    url: "https://github.com/bramstein/Hypher",
    source: "https://raw.github.com/bramstein/Hypher/master/lib/hypher.js"
  },
  {
    name: "tinyJS",
    tags: ["base","css","functional"],
    description: "A tiny yet complete toolkit",
    url: "http://tinyjs.sourceforge.net/tiny.js",
    source: "http://tinyjs.sourceforge.net/tiny.js"
  },
  {
    name:"Vine",
    tags:["events"],
    description:"An events library that supports binding, unbinding, and triggering events on DOM elements or JavaScript Objects",
    url:"https://github.com/arexkun/Vine",
    source:"https://raw.github.com/arexkun/Vine/master/vine.js"
  },
  {
    name: "micro-selector",
    tags: ["css"],
    description: "A micro, super fast, scope limited, javascript selector engine to be used anywhere",
    url: "https://github.com/fabiomcosta/micro-selector",
    source: "https://raw.github.com/fabiomcosta/micro-selector/master/dist/uSelector.js"
  },
  {
    name: "Obscura",
    tags: ["canvas", "image", "manipulation"],
    description: "Canvas based image manipulation library",
    url: "https://github.com/OiNutter/Obscura",
    source: "https://raw.github.com/OiNutter/Obscura/master/dist/obscura.js"
  },
  {
    name: "Shifty",
    tags: ["animation", "jsanimation"],
    description: "A teeny tiny tweening engine in JavaScript.",
    url: "https://github.com/jeremyckahn/shifty",
    source: "https://raw.github.com/jeremyckahn/shifty/master/dist/shifty.js"
  },
  {
    name: "whenever.js",
    tags: ["events"],
    description: "Specify your app's behavior using a syntax that reads like English",
    url: "https://github.com/paulca/whenever.js",
    source: "https://raw.github.com/paulca/whenever.js/master/whenever.js"
  },
  /* Links to a zip file, needs to link to a JS file, couldn't find a reference to a pure js file on the site.
  {
    name: "Sylvester",
    tags: ["svg","vector", "matrix","math"],
    description: "A js library for mathematics with vectors and matrices",
    url: "http://sylvester.jcoglan.com/",
    source: "http://sylvester.jcoglan.com/assets/sylvester-0-1-3.zip"
  },
  */
  {
    name: "Include.js",
    tags: ["loader"],
    description: "A tiny on-demand async javascript loader.",
    url: "http://capmousse.github.com/include.js/",
    source: "https://raw.github.com/CapMousse/include.js/master/include.js"
  },
  {
    name: "asEvented",
    tags: ["events", "functional"],
    description: "Micro event emitter which provides the observer pattern to JavaScript objects.",
    url: "https://github.com/mkuklis/asEvented",
    source: "https://raw.github.com/mkuklis/asEvented/master/asevented.js"
  },
  {
    name: "Keymaster",
    tags: ["events"],
    description: "Define scoped keyboard shortcuts, including modifier keys.",
    url: "https://github.com/madrobby/keymaster",
    source: "https://raw.github.com/madrobby/keymaster/master/keymaster.js"
  },
  {
    name: "Date-Utils",
    tags: ["date", "polyfill"],
    description: "Lightweight Date Polyfill with a lot of flexibility.",
    url: "https://github.com/JerrySievert/node-date-utils",
    source: "https://raw.github.com/JerrySievert/node-date-utils/master/lib/date-utils.js"
  },
  {
    name: "Morf",
    tags: ["animation", "jsanimation"],
    description: "A JavaScript work-around for hardware accelerated CSS3 transitions with custom easing functions.",
    url: "https://github.com/joelambert/morf",
    source: "http://www.joelambert.co.uk/morf/js/morf.js"
  },
  {
    name: "typogr.js",
    tags: ["dom", "data", "css", "text", "ui", "typography", "hyphenation"],
    description: "Provides ransformations to plain text for typographically-improved HTML.",
    url: "https://github.com/ekalinin/typogr.js",
    source: "https://raw.github.com/ekalinin/typogr.js/master/typogr.js"
  },
  {
    name: "Species",
    tags: ["language", "class"],
    description: "Java style OOP, and AOP ability, watchable members, inheritance and ability to call super members.",
    url: "https://github.com/k33g/species",
    source: "https://raw.github.com/k33g/species/master/js/species.js"
  },
  {
    name: "Maddy",
    github: "bestiejs/maddy",
    tags: ["functional", "language", "data"],
    description: "A functional object operations library.",
    url: "http://bestiejs.github.com/maddy",
    source: "http://bestiejs.github.com/maddy/lib/maddy.js"
  },
  {
    name: "resistance",
    tags: ["async", "flow"],
    description: "A tiny javascript async flow control library.",
    url: "https://github.com/jgallen23/resistance",
    source: "https://raw.github.com/jgallen23/resistance/master/dist/resistance.js"
  },
  {
    name: "wru",
    tags: ["testing"],
    description: "essential unit test framework compatible with browsers, node.js, and Rhino",
    url: "https://github.com/WebReflection/wru",
    source: "https://raw.github.com/WebReflection/wru/master/build/wru.dom.js"
  },
  {
    name: "Unlimit",
    tags: ["functional", "language"],
    description: "Allows for chaining with native JavaScript objects without extending objects' prototypes.",
    url: "http://limeblack.github.com/UnlimitJS/",
    source: "https://raw.github.com/limeblack/UnlimitJS/master/unlimit.js"
  },
  {
    name: "audio-fx",
    tags: ["audio", "games"],
    description: "A HTML5 Audio Library",
    url: "https://github.com/jakesgordon/javascript-audio-fx",
    source: "https://raw.github.com/jakesgordon/javascript-audio-fx/master/audio-fx.js"
  },
  {
    name: "swipe",
    tags: ["jsanimation","mobile"],
    description: "A lightweight 1-to-1 mobile slider. Optimized for touch devices.",
    url: "https://github.com/bradbirdsall/Swipe",
    source: "https://raw.github.com/bradbirdsall/Swipe/master/swipe.js"
  },
  {
    name: "Happen",
    tags: ["events" ],
    description: "General purpose event triggering",
    url: "https://github.com/tmcw/happen",
    source: "https://raw.github.com/tmcw/happen/master/src/happen.js"
  },
  {
    name: "zest",
    tags: ["css", "selector", "dom"],
    description: "An absurdly fast selector engine. Supports CSS3/CSS4 selectors - faster than Sizzle.",
    url: "https://github.com/chjj/zest",
    source: "https://raw.github.com/chjj/zest/master/lib/zest.js"
  },
  {
    name: "Cookie Monster",
    tags: ["cookies", "data", "store"],
    description: "A lightweight cookie library",
    url: "https://github.com/jgallen23/cookie-monster",
    source: "https://raw.github.com/jgallen23/cookie-monster/master/dist/monster.js"
  },
  {
    name: "EditrJS",
    tags: ["manipulation","image", "editing"],
    description: "A very simple image editing library with a chainable api.",
    url: "https://github.com/narfdre/Editr",
    source: "https://raw.github.com/narfdre/Editr/master/Editr-src.js"
  },
  {
    name: "hsi.js",
    tags: ["color"],
    description: "A small RGB &lt;-&gt; HSI converter.",
    url: "https://github.com/e-/hsi.js",
    source: "https://raw.github.com/e-/hsi.js/master/hsi.js"
  },
  {
    name: "colorspaces.js",
    tags: ["color"],
    description: "Convert between RGB and several CIE color spaces for smarter color manipulation.",
    url: "http://boronine.github.com/colorspaces.js",
    source: "https://raw.github.com/boronine/colorspaces.js/master/colorspaces.js"
  },
  {
    name: "Fayer",
    tags: ["functional"],
    description: "Easily kick-off page specific JavaScript.",
    url: "https://github.com/sandeepjain/fayer",
    source: "https://raw.github.com/sandeepjain/fayer/master/src/fayer.js"
  },
  {
    name: "Supplement.js",
    tags: ["functional", "language", "data", "sugar"],
    description: "A small collection of utility functions to make working with JavaScript that much sweeter and more expressive.",
    url: "http://supplementjs.com",
    source: "https://raw.github.com/olivernn/supplement.js/master/dist/supplement-0.1.1.js"
  },
  {
    name: "marked",
    tags: ["markdown", "markup", "parser"],
    description: "A markdown parser and compiler. Built for speed.",
    url: "https://github.com/chjj/marked",
    source: "https://raw.github.com/chjj/marked/master/lib/marked.js"
  },
  {
    name: "mathmethods.js",
    tags: ["math", "language", "sugar"],
    description: "Give `Number.prototype` the `Math` methods it deserves.",
    url: "https://bitbucket.org/davidchambers/mathmethods.js",
    source: "https://bitbucket.org/davidchambers/mathmethods.js/raw/default/mathmethods.js"
  },
  {
    name: "uuid-v4.js",
    tags: ["random", "uuid", "data", "browser", "commonjs", "node"],
    description: "RFC-4122 Compliant Random (v4) UUID Generator",
    url: "https://github.com/makeable/uuid-v4.js",
    source: "https://raw.github.com/makeable/uuid-v4.js/master/uuid-v4.js"
  },
  {
    name: "notificon.js",
    tags: ["notification", "alert", "browser", "canvas", "tab"],
    description: "Dynamic tab favicon notifications/alerts",
    url: "https://github.com/makeable/Notificon",
    source: "https://raw.github.com/makeable/Notificon/master/notificon.js"
  },
  {
    name: "Traversty",
    tags: ["dom"],
    description: "Headache-free DOM traversal using PrototypeJS inspired up(), down(), next() and previous(). Ideal for use with Ender.",
    url: "https://github.com/rvagg/traversty",
    source: "https://raw.github.com/rvagg/traversty/master/traversty.js"
  },
  {
    name: "140medley",
    tags: ["dom", "selector", "events", "templating", "ajax", "storage"],
    description: "A micro-framework or a collection of small, helpful utilities for common javascript tasks.",
    url: "https://github.com/honza/140medley",
    source: "https://raw.github.com/honza/140medley/master/140medley.js"
  },
  {
    name: "SpeculOOs",
    tags: ["language", "class"],
    description: "Simple JavaScript Class notation, fully CoffeeScript compliant",
    url: "https://github.com/k33g/speculoos",
    source: "https://raw.github.com/k33g/speculoos/master/speculoos.js"
  },
  {
    name: "aug",
    tags: ["extend", "augment"],
    description: "A object extend utility",
    url: "https://github.com/jgallen23/aug",
    source: "https://raw.github.com/jgallen23/aug/master/dist/aug.js"
  },
  {
    name: "path.js",
    tags: ["route"],
    description: "Simple, lightweight routing for web browsers",
    url: "http://mtrpcic.github.com/pathjs/",
    source: "https://raw.github.com/mtrpcic/pathjs/master/path.js"
  },
  {
    name: "scaleApp.js",
    github: "flosse/scaleApp",
    tags: ["spa", "base", "events"],
    description: "scaleApp is a tiny JavaScript framework for scalable one-page-applications",
    url: "http://scaleapp.org/",
    source: "https://raw.github.com/flosse/scaleApp/master/build/scaleApp.full.js"
  },
  {
    name: "Humane JS",
    tags: ["notification", "alert"],
    description: "A simple, modern, browser notification system",
    url: "http://wavded.github.com/humane-js/",
    source: "https://raw.github.com/wavded/humane-js/master/humane.js"
  },
  {
    name: "JSFace",
    tags: ["oop", "language", "commonjs", "node", "class"],
    description: "Small, fast, elegant, powerful, and cross platform OOP library. Support singleton, super call, private, mixins, plugins, AOP and more.",
    url: "https://github.com/tannhu/jsface",
    source: "https://raw.github.com/tannhu/jsface/master/jsface.js"
  },
  {
    name: "Radio.js",
    tags: ["events", "pubsub"],
    description: "Chainable publish/subscribe framework",
    url: "http://radio.uxder.com",
    source: "https://raw.github.com/uxder/Radio/master/radio.js"
  },
  {
    name: "keyvent.js",
    tags: ["dom", "events", "amd"],
    description: "Keyboard events simulator.",
    url: "https://github.com/gtramontina/keyvent.js",
    source: "https://raw.github.com/gtramontina/keyvent.js/master/keyvent.js"
  },
  {
    name: "draggable.js",
    tags: ["dom", "css", "css3", "amd"],
    description: "Make your dom elements draggable easily.",
    url: "http://gtramontina.github.com/draggable.js/",
    source: "https://raw.github.com/gtramontina/draggable.js/master/draggable.js"
  },
  {
    name: "T-Lite",
    tags: ["templating"],
    description: "A lite but powerfull javascript template engine",
    url: "https://github.com/CapMousse/T-Lite",
    source: "https://raw.github.com/CapMousse/T-Lite/master/tlite.js"
  },
  {
    name: "String::format",
    tags: ["string", "language", "sugar"],
    description: "Adds a `format` method to `String.prototype`. Inspired by Python's `str.format()`.",
    url: "https://bitbucket.org/davidchambers/string-format",
    source: "https://bitbucket.org/davidchambers/string-format/raw/default/string-format.js"
  },
  {
    name: "Callbacks.js",
    tags: ["events","dispatcher","static","callbacks"],
    url: "https://github.com/dperrymorrow/callbacks.js",
    description: "Event dispatching, can be used either as static or instance based.",
    source: "https://raw.github.com/dperrymorrow/callbacks.js/master/callbacks-min.js"
  },
  {
    name: "Router.js",
    tags: ["routing","rails"],
    url: "https://github.com/dperrymorrow/router.js",
    description: "controller/action convention for javascript. home/index would automatically instantiate Home js class and fire index action.",
    source: "https://raw.github.com/dperrymorrow/router.js/master/router-min.js"
  },
  {
    name: "Blueshell",
    tags: ["inheritance", "prototype", "class"],
    description: "A microlibrary for inheritance with prototypal inheritance tools allowing class-like construction.",
    url: "https://github.com/jgnewman/blueshell",
    source: "https://raw.github.com/jgnewman/blueshell/master/js/blueshell.js"
  },
  {
    name: "ancestry.js",
    tags: ["class", "extend", "commonjs", "amd"],
    description: "Simple, yet powerful inheritance library to make polymorphism and super-constructors work propertly.",
    url: "https://github.com/jasonwyatt/ancestry.js",
    source: "https://raw.github.com/jasonwyatt/ancestry.js/master/ancestry.js"
  },
  {
    name: "ytIframe.js",
    tags: ["youtube", "iframe", "video"],
    description: "A flexible, plain javascript youtube video embedding script in less than 40 lines.",
    url: "https://github.com/mdix/ytIframe",
    source: "https://raw.github.com/mdix/ytIframe/master/iframe.js"
  },
  {
    name: "List.js",
    tags: ["list", "extend", "templating", "utils", "sort", "search", "filter"],
    description: "Add search, sort and flexibility to plain HTML lists (div, ul, table, everything!).",
    url: "http://listjs.com",
    source: "https://raw.github.com/javve/list/master/src/list.js"
  },
  {
    name: "Mediator.js",
    tags: ["utils", "pubsub", "notifications", "events", "async", "callbacks"],
    description: "Flexible pubsub-ish framework for handling namespaced events.",
    url: "http://www.thejacklawson.com/Mediator.js",
    source: "https://raw.github.com/ajacksified/Mediator.js/master/mediator.js"
  },
  {
    name: "doT.js",
    tags: ["nodejs", "browsers", "templating", "partials", "custom delimiters"],
    description: "The fastest + concise javascript template engine for nodejs and browsers. Partials, custom delimiters and more.",
    url: "https://github.com/olado/doT",
    source: "https://github.com/olado/doT/raw/master/doT.js"
  },
  {
    name: "Stapes.js",
    tags: ["mvc", "class", "events", "mobile"],
    description: "A (really) tiny Javascript MVC microframework. Perfect for mobile.",
    url: "http://hay.github.com/stapes/",
    source: "https://raw.github.com/hay/stapes/master/stapes.js"
  },
  {
    name: "Smoke Signals",
    tags: ["events" ],
    description: "Really, really lightweight event emitting",
    url: "https://github.com/bentomas/smokesignals",
    source: "https://raw.github.com/bentomas/smokesignals/master/smokesignals.js"
  },
  {
    name: "CSSClass",
    tags: ["css" ],
    description: "Adds the functions .hasClass, .addClass, .removeClass and .toggleClass to the Element prototype.",
    url: "https://github.com/EarMaster/CSSClass",
    source: "https://raw.github.com/EarMaster/CSSClass/master/CSSClass.js"
  },
  {
    name: "remoteStorage.js",
    tags: ["events", "ajax", "storage" ],
    description: "A library for adding remoteStorage support to your client-side app.",
    url: "https://github.com/unhosted/remoteStorage.js",
    source: "https://raw.github.com/unhosted/remoteStorage.js/master/src/remoteStorage.js"
  },
  {
    name: "impress.js",
    tags: ["animation", "jsanimation", "css", "css3" ],
    description: "A presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.",
    url: "https://github.com/bartaz/impress.js",
    source: "https://raw.github.com/bartaz/impress.js/master/js/impress.js"
  },
  {
    name: "Jwerty",
    tags: ["events" ],
    description: "Bind, fire and assert on keyboard events, with easy to use keyboard selector combos",
    url: "https://github.com/keithamus/jwerty",
    source: "https://raw.github.com/keithamus/jwerty/master/jwerty.js"
  },
  {
    name: "filesize.js",
    tags: ["math", "language", "amd"],
    description: "JavaScript library to generate a human readable String describing the filesize",
    url: "http://filesizejs.com",
    source: "https://raw.github.com/avoidwork/filesize.js/master/debug/filesize.js"
  },
  {
    name: "bacon.js",
    tags: ["mobile" ],
    description: "Detects a mobile browser",
    url: "https://github.com/tajjyarden/bacon.js",
    source: "https://raw.github.com/tajjyarden/bacon.js/master/bacon.js"
  },
  {
    name: "JSON 3",
    github: "bestiejs/json3",
    tags: ["polyfill", "json", "amd"],
    description: "A modern JSON implementation compatible with nearly all JavaScript platforms.",
    url: "http://bestiejs.github.com/json3",
    source: "http://bestiejs.github.com/json3/lib/json3.js"
  }
];
