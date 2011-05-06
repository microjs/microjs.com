var MicroJS = [
  {
    name: "$dom",
    size: "2.6k",
    tags: ["dom", "ajax", "events", "animation"],
    description: "Selecting, styling, traversing and animating DOM elements.",
    url: "https://github.com/julienw/dollardom",
    source: "https://github.com/julienw/dollardom/raw/master/$dom.min.js"
  },
  {
    name: "HEX/RGB",
    size: "0.1k",
    tags: ["color"],
    description: "Two way color conversion for Hexadecimal and RGB integer colors",
    url: "https://github.com/daniellmb/HEX-RGB-Conversion",
    source: "https://github.com/daniellmb/HEX-RGB-Conversion/raw/master/hex-rgb.js"
  },
  {
    name: "MinPubSub",
    size: "0.1k",
    tags: ["events"],
    description: "A publish/subscribe messaging framework",
    url: "https://github.com/daniellmb/MinPubSub",
    source: "https://github.com/daniellmb/MinPubSub/raw/master/minpubsub.js"
  },
  {
    name: "Modernizr",
    size: "3.7k",
    tags: ["feature"],
    description: "Detects native CSS3 and HTML5 features available in the current browser.",
    url: "http://www.modernizr.com/",
    source: ""
  },
  {
    name: "Zepto",
    size: "4.2k",
    tags: ["base", "dom", "webkit", "jquery", "ajax", "events", "mobile"],
    description: "jQuery API-compatible framework for mobile WebKit browsers, with DOM manipulation, Ajax and events.",
    url: "http://zeptojs.com",
    source: ""
  },
  {
    name: "xui",
    size: "4.1k",
    tags: ["base", "dom", "mobile", "ajax", "events", "webkit", "animation"],
    description: "DOM library for authoring HTML5 mobile web applications, works cross-device and cross-platform.",
    url: "http://xuijs.com",
    source: "" // TODO: multiple editions - needs better handling
  },
  {
    name: "Underscore",
    size: "3.0k",
    tags: ["functional", "language", "data"],
    description: "A utility-belt that provides functional programming support that you would expect in Ruby.",
    url: "http://documentcloud.github.com/underscore",
    source: "http://documentcloud.github.com/underscore/underscore-min.js"
  },
  {
    name: "Backbone",
    size: "3.9k",
    tags: ["mvc", "data", "functional"],
    description: "Lightweight MVC—models with custom events, collections with rich enumerables, views and RESTful JSON.",
    url: "http://documentcloud.github.com/backbone",
    source: "http://documentcloud.github.com/backbone/backbone-min.js"
  },
  {
    name: "Mustache",
    size: "1.5k",
    tags: ["templating"],
    description: "Minimal, logic-less templating with {{mustaches}}. Great for server- or client-side templating.",
    url: "http://mustache.github.com/",
    source: "https://github.com/janl/mustache.js/raw/master/mustache.js"
  },
  {
    name: "LABjs",
    size: "2.1k",
    tags: ["loader"],
    description: "Flexible JavaScript dependency loader.",
    url: "http://labjs.com/",
    source: "https://github.com/getify/LABjs/raw/master/LAB.min.js"
  },
  {
    name: "Qwery",
    size: "1.0k",
    tags: ["css"],
    description: "Blazing fast query selector engine allowing you to select elements with CSS1 & CSS2 selectors.",
    url: "https://github.com/ded/qwery",
    source: "https://github.com/ded/qwery/raw/master/qwery.min.js"
  },
  {
    name: "Sly",
    size: "3.0k",
    tags: ["css"],
    description: "Sly is a query selector engine allowing you to select elements with CSS1, CSS2 & CSS3 selectors.",
    url: "https://github.com/digitarald/sly",
    source: "https://github.com/digitarald/sly/raw/master/Sly-min.js"
  },
  {
    name: "Émile",
    size: "0.9k",
    tags: ["animation"],
    description: "Émile is a no-frills stand-alone CSS animation JavaScript framework",
    url: "https://github.com/madrobby/emile",
    source: "https://github.com/madrobby/emile/raw/master/emile.min.js"
  },
  {
    name: "Lawnchair",
    size: "2.0k",
    tags: ["data","storage","webkit","mobile"],
    description: "Client side JSON document store. Perfect for WebKit mobile apps.",
    url: "http://westcoastlogic.com/lawnchair/",
    source: ""
  },
  {
    name: "ExplorerCanvas",
    size: "4.3k",
    tags: ["polyfill", "canvas"],
    description: "HTML5 canvas tag support for Internet Explorer.",
    url: "http://code.google.com/p/explorercanvas/",
    source: ""
  },
  {
    name: "Placeholder.js",
    size: "0.4k",
    tags: ["polyfill"],
    description: "Adds support for the placeholder attribute in older browsers that don't support this HTML5 feature.",
    url: "https://github.com/NV/placeholder.js",
    source: "http://nv.github.com/placeholder.js/placeholder.js"
  },
  {
    name: "Micro-Templating",
    size: "0.2k",
    tags: ["templating"],
    description: "Templating function that is fast, caches quickly, and is easy to use.",
    url: "http://ejohn.org/blog/javascript-micro-templating/",
    source: ""
  },
  {
    name: "Tweet-Templ",
    size: "0.1k",
    tags: ["templating"],
    description: "function t(s,d){for(var p in d)s=s.replace(new RegExp('{'+p+'}','g'),d[p]);return s;}",
    url: "http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/",
    source: ""
  },
  {
    name: "Firmin",
    size: "2.5k",
    tags: ["animation","webkit"],
    description: "Animation library that uses CSS transforms and transitions to create smooth, hardware-accelerated animations.",
    url: "http://extralogical.net/projects/firmin/",
    source: "http://extralogical.net/projects/firmin/downloads/firmin-1.0.0-min.js"
  },
  {
    name: "Bonzo",
    size: "2.9k",
    tags: ["dom"],
    description: "Hassle-free, library agnostic, extensible DOM utility.",
    url: "https://github.com/ded/bonzo",
    source: "https://github.com/ded/bonzo/raw/master/bonzo.min.js"
  },
  {
    name: "Bean",
    size: "2.4k",
    tags: ["events", "dom"],
    description: "Bean is a slick, cross-platform, framework-agnostic event utility designed for desktop, mobile, and touch-based browsers. ",
    url: "https://github.com/fat/bean",
    source: "https://github.com/fat/bean/raw/master/bean.min.js"
  },
  {
    name: "$script.js",
    size: "0.8k",
    tags: ["loader"],
    description: "An asynchronous JavaScript loader and dependency manager with an astonishingly impressive footprint.",
    url: "https://github.com/ded/script.js",
    source: "https://github.com/ded/script.js/raw/master/dist/script.min.js"
  },
  {
    name: "Klass",
    size: "0.6k",
    tags: ["language", "class"],
    description: "An expressive, cross platform JavaScript Class provider with a slick, classical interface to prototypal inheritance.",
    url: "https://github.com/ded/klass",
    source: "https://github.com/ded/klass/raw/700e1eb6d86ed78caa9a2d675673f648e9a54b2e/klass.min.js"
  },
  {
    name: "Classy",
    size: "0.6k",
    tags: ["language", "class"],
    description: "Classy is a small JavaScript library that implements Python inspired classes for JavaScript.",
    url: "http://classy.pocoo.org/",
    source: "https://github.com/mitsuhiko/classy/raw/master/classy.js"
  },
  {
    name: "Snack.js",
    size: "3.3k",
    tags: ["base", "dom", "events", "ajax", "language"],
    description: "A tiny, cross-browser, library with DOM manipulation, events, pub/sub, Ajax and language utilities.",
    url: "http://snackjs.com/",
    source: "https://github.com/rpflorence/snack/raw/master/server.js"
  },
  {
    name: "Ender",
    size: "36k",
    tags: ["compose", "base", "mobile"],
    description: "An open, powerful, micro-to-macro API for composing your own custom JavaScript library.",
    url: "http://ender.no.de",
    source: "http://ender-js.s3.amazonaws.com/ender.min.js"
  },
  {
    name: "Mold",
    size: "1.9k",
    tags: ["templating"],
    description: "Mold is a templating library.",
    url: "http://marijnhaverbeke.nl/mold/",
    source: "" // multiple versions
  },
  {
    name: "Tempo",
    size: "3.2k",
    tags: ["templating"],
    description: "Tempo is a JSON rendering engine that enables you to craft data templates in pure HTML.",
    url: "http://twigkit.github.com/tempo/",
    source: "https://github.com/twigkit/tempo/raw/master/tempo.min.js"
  },
  {
    name: "Reqwest",
    size: "0.9k",
    tags: ["ajax"],
    description: "Robust wrapper for asynchronous http requests.",
    url: "https://github.com/ded/Reqwest",
    source: "https://github.com/ded/Reqwest/raw/master/reqwest.min.js"
  },
  {
    name: "JSON2",
    size: "1.3k",
    tags: ["polyfill", "json"],
    description: "Creates a JSON property in the global object, if there  isn't already one, with stringify and parse methods.",
    url: "https://github.com/douglascrockford/JSON-js",
    source: "https://github.com/douglascrockford/JSON-js/raw/master/json2.js"
  },
  {
    name: "yepnope",
    size: "1.6k",
    tags: ["polyfill", "loader"],
    description: "yepnope is an asynchronous conditional resource loader that allows you to load only the scripts that your users need.",
    url: "http://yepnopejs.com/",
    source: "https://github.com/SlexAxton/yepnope.js/raw/master/yepnope.1.0.1-min.js"
  },
  {
    name: "ICanHaz",
    size: "1.8k",
    tags: ["templating"],
    description: "Simple & powerful client-side templating for jQuery or Zepto.js.",
    url: "http://icanhazjs.com/",
    source: "https://github.com/andyet/ICanHaz.js/raw/master/ICanHaz.min.js"
  },
  {
    name: "Q",
    size: "1.0k",
    tags: ["functional", "events"],
    description: "when/defer-style promises for JavaScript (CommonJS/Promises/A,B,D)",
    url: "https://github.com/kriskowal/q",
    source: "https://github.com/kriskowal/q/raw/master/q-0.2.4.min.js"
  },
  {
    name: "domReady",
    size: "0.2k",
    tags: ["dom", "events"],
    description: "Lets you know when the DOM is ready",
    url: "https://github.com/ded/domready",
    source: "https://github.com/ded/domready/raw/master/ready.min.js"
  },
  {
    name: "Spine",
    size: "2.0k",
    tags: ["mvc"],
    description: "MVC with real protypical inheritance, controllers, model layer and ORM, Ajax and local storage.",
    url: "http://maccman.github.com/spine/",
    source: "http://maccman.github.com/spine/spine.min.js"
  },
  {
    name: "Kizzy",
    size: "0.6k",
    tags: ["data", "storage"],
    description: "Cross Browser caching util leveraging LocalStorage and XML Store with a Memcached interface",
    url: "https://github.com/ded/Kizzy",
    source: "https://github.com/ded/Kizzy/raw/master/kizzy.min.js"
  },
  {
    name: "Bowser",
    size: "0.2k",
    tags: ["feature"],
    description: "A browser detector. Because when there is no features to detect, sometimes you have to browser sniff",
    url: "https://github.com/ded/bowser",
    source: "https://github.com/ded/bowser/raw/master/bowser.min.js"
  },
  {
    name: "ES5-Shim",
    size: "2.0k",
    tags: ["language", "polyfill"],
    description: "Compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    url: "https://github.com/kriskowal/es5-shim/",
    source: "https://github.com/kriskowal/es5-shim/raw/master/es5-shim.js"
  },
  {
    name: "Loadrunner",
    size: "2.0k",
    tags: ["loader"],
    description: "Simple, flexible and sane JavaScript loader and build tool for browsers",
    url: "https://github.com/danwrong/loadrunner",
    source: "https://github.com/danwrong/loadrunner/raw/master/dist/loadrunner.js"
  },
  {
    name: "functools",
    size: "2.2k",
    tags: ["functional"],
    description: "A library for functional operations",
    url: "https://github.com/azer/functools",
    source: "https://github.com/azer/functools/raw/master/lib/functools.js"
  },
  {
    name: "observer",
    size: "1.0k",
    tags: ["observer","events"],
    description: "CommonJS implementation of the observer design pattern",
    url: "https://github.com/azer/observer",
    source: "https://github.com/azer/observer/raw/master/lib/observer.js"
  },
  {
    name: "defer.js",
    size: "4.8k",
    tags: ["loader"],
    description: "Script loader, using the 'Deferred' pattern for async operations.",
    url: "https://github.com/BorisMoore/jsdefer/",
    source: "https://github.com/BorisMoore/jsdefer/raw/master/jsdefer.min.js"
  },
  {
    name: "Bootstrap",
    size: "1.3k",
    tags: ["loader"],
    description: "A small, simple bootloader. No frills. Black and white label.",
    url: "https://bitbucket.org/scott_koon/bootstrap",
    source: "https://bitbucket.org/scott_koon/bootstrap/raw/default/bootstrap-min.js"
  },
  {
    name: "LazyLoad",
    size: "0.9k",
    tags: ["loader"],
    description: "Async JavaScript and CSS loader.",
    url: "https://github.com/rgrove/lazyload",
    source: "https://github.com/rgrove/lazyload/raw/master/lazyload-min.js"
  },
  {
    name: "Valentine",
    size: "1.5k",
    tags: ["functional", "language", "data"],
    description: "JavaScripts functional sister providing iterators, type checking, and basic utils",
    url: "https://github.com/ded/valentine",
    source: "https://github.com/ded/valentine/raw/master/valentine.min.js"
  },
  {
    name: "TurtleWax",
    size: "0.7k",
    tags: ["canvas", "graphics"],
    description: "LOGO-inspired canvas drawing lib, adds method chaining and polar coordinates for added fun.",
    url: "https://github.com/davebalmer/turtlewax",
    source: "" // Multiple files...
  },
  {
    name: "picoCSS",
    size: "0.4k",
    tags: ["CSS", "CSS3", "mobile"],
    description: "Basic CSS DOM manipulation and animation optimized for webkit browsers(Safari, Chrome) for building mobile web apps",
    url: "https://github.com/vladocar/picoCSS",
    source: "https://github.com/vladocar/picoCSS/raw/master/src/picoCSS.min.js"
  },
  {
    name: "H5F.js",
    size: "1.8k",
    tags: ["polyfill"],
    description: "Adds support for HTML5 Forms chapters new field input types, attributes and constraint validation API in non-supporting browsers.",
    url: "https://github.com/ryanseddon/H5F",
    source: "https://github.com/ryanseddon/H5F/raw/master/h5f.min.js"
  },
  {
    name: "Store.js",
    size: "1.8k",
    tags: ["data", "storage"],
    description: "localStorage wrapper for all browsers without using cookies or flash",
    url: "https://github.com/marcuswestin/store.js",
    source: "https://github.com/marcuswestin/store.js/raw/master/store.min.js"
  },
  {
    name: "Handlebars",
    size: "5.0k",
    tags: ["templating"],
    description: "Build semantic templates effectively with no frustration.",
    url: "http://handlebars.strobeapp.com",
    source: ""
  },
  {
    name: "Objs",
    size: "0.5k",
    tags: ["language"],
    description: "A minimalistic library intended to help in using namespaces and class inheritance in JavaScript.",
    url: "https://github.com/tekool/objs",
    source: "https://github.com/tekool/objs/raw/master/src/Objs.js"
  },
  {
    name: "EventEmitter",
    size: "0.6k",
    tags: ["events"],
    description: "Evented JavaScript for the browser",
    url: "https://github.com/Wolfy87/EventEmitter",
    source: "https://github.com/Wolfy87/EventEmitter/raw/master/EventEmitter.js"
  },
  {
    name: "Color",
    size: "1.9k",
    tags: ["color"],
    description: "Color conversion functions for switching between hex decimal, RGB, names and arrays.",
    url: "https://github.com/Wolfy87/Color",
    source: "https://github.com/Wolfy87/Color/raw/master/color.js"
  },
  {
    name: "Microajax",
    size: "2.1k",
    tags: ["ajax"],
    description: "Simple AJAX library.",
    url: "http://code.google.com/p/microajax/",
    source: "http://microajax.googlecode.com/files/microajax.minified.js"
  },
  {
    name: "Fermata",
    size: "1.9k",
    tags: ["ajax"],
    description: "Succinct native REST client, for client-side web apps and node.js. Turns URLs into magic JavaScript objects.",
    url: "https://github.com/andyet/fermata",
    source: "https://github.com/andyet/fermata/raw/master/fermata.js"
  },
  {
    name: "Base64.js",
    size: "0.9k",
    tags: ["polyfill"],
    description: "`window.btoa` and `window.atob` for browsers which don't provide these functions.",
    url: "https://bitbucket.org/davidchambers/base64.js",
    source: "https://bitbucket.org/davidchambers/base64.js/raw/default/base64.min.js"
  },
  {
    name: "Mibbu",
    size: "4.4k",
    tags: ["games", "canvas"],
    description: "Microframework for fast game prototyping using Canvas & DOM",
    url: "https://github.com/michalbe/mibbu",
    source: "https://github.com/michalbe/mibbu/raw/master/mibbu-min.js"
  },
  {
    name: "nimble",
    size: "0.8k",
    tags: ["functional", "async"],
    description: "Functional flow-control for JavaScript. Combines features of the underscore and async libraries.",
    url: "http://caolan.github.com/nimble/",
    source: "https://github.com/caolan/nimble/raw/master/nimble.min.js"
  }
];
