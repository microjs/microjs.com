var MicroJS = [
  {
    name: "GSet",
    size: "1.8k",
    tags: ["data", "base"],
    description: "Share and control public proxies of private objects, with same-name getter/setters.",
    url: "https://github.com/bemson/GSet/",
    source: "https://github.com/bemson/GSet/raw/master/gset-min.js"
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
    name: "Weld",
    size: "3.9k",
    tags: ["templating"],
    description: "Completely unobtrusive, full featured, works in Node.js or the Browser, awesome built-in debugger.",
    url: "http://www.github.com/hij1nx/weld"
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
    size: "2.2k",
    tags: ["loader"],
    description: "The *performance* script loader: on-demand parallel script loading with ordered execution for dependencies.",
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
    name: "Slick",
    size: "5.0k",
    tags: ["css"],
    description: "Accurate selector engine w/ CSS3 selectors and extensions like 'reverse combinators'.",
    url: "https://github.com/mootools/slick",
    source: "http://mootools.net/core/826c8f047c6ae21b10342f3112de2cbf"
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
    name: "Puma",
    size: "2.5k",
    tags: ["css"],
    description: "Extensible CSS selector engine. Scanner and parser can be used separately from the engine.",
    url: "https://github.com/alpha123/Puma",
    source: "https://github.com/alpha123/Puma/raw/master/src/puma-uncompressed.js"
  },
  {
    name: "Émile",
    size: "0.9k",
    tags: ["animation","jsanimation"],
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
    name: "BuildSugar",
    size: "0.2k",
    tags: ["templating"],
    description: "Bizarrely clean & simple syntax sugar for building HTML/XML strings",
    url: "http://jsfiddle.net/SubtleGradient/4W3RR/",
    source: "https://gist.github.com/278016#file_bs.sg.js"
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
    name: "OORJa",
    size: "1.5k",
    tags: ["language", "class"],
    description: "OORJa = Object Oriented Javascript",
    url: "http://maxpert.github.com/oorja/",
    source: "https://github.com/maxpert/oorja/raw/master/Class.js"
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
    name: "Milk",
    size: "1.9k",
    tags: ["templating"],
    description: "Spec-compatible (v1.1+λ) Mustache templating: written in CoffeeScript, runnable anywhere.",
    url: "https://github.com/pvande/Milk",
    source: "https://github.com/pvande/Milk/raw/master/dist/v1.2.0/milk.min.js"
  },
  {
    name: "SugarSkull",
    size: "3.8k",
    tags: ["spa"],
    description: "A lightweight, full featured client side router for single page apps.",
    url: "http://github.com/hij1nx/SugarSkull"
  },
  {
    name: "snack.js",
    size: "3.3k",
    tags: ["base", "dom", "events", "ajax", "language"],
    description: "A tiny, cross-browser, library with DOM manipulation, events, pub/sub, Ajax and language utilities.",
    url: "http://snackjs.com/",
    source: "https://github.com/rpflorence/snack/raw/master/builds/snack-min.js"
  },
  {
    name: "Ender",
    size: "?k",
    tags: ["compose", "base", "mobile"],
    description: "An open, powerful, micro-to-macro API for composing your own custom JavaScript library.",
    url: "http://ender.no.de",
    source: "http://enderjs.com/js/ender.js"
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
    size: "1.8k",
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
  },
  {
    name: "loom",
    size: "0.5k",
    tags: ["functional"],
    description: "A simple, four method API for differential inheritance and AOP.",
    url: "https://github.com/rpflorence/loom",
    source: "https://github.com/rpflorence/loom/blob/master/src/loom.js"
  },
  {
    name: "jWorkflow",
    size: "0.7k",
    tags: ["functional", "workflow", "async"],
    description: "Simple, buildable, repeatable workflows for client or serverside javascript",
    url: "http://github.com/tinyhippos/jWorkflow"
  },
  {
    name: "Events.js",
    size: "4.2k",
    tags: ["events", "dom"],
    description: "Cross-browser DOM events, with keystroke handling, hashchange, mouseenter/leave.",
    url: "https://github.com/kbjr/Events.js",
    source: "https://github.com/kbjr/Events.js/raw/master/events.min.js"
  },
  {
    name: "JS-Signals",
    size: "0.9k",
    tags: ["events"],
    description: "Custom Event/Messaging system for JavaScript.",
    url: "http://millermedeiros.github.com/js-signals/"
  },
  {
    name: "Crossroads.js",
    size: "1.2k",
    tags: ["route", "events"],
    description: "Powerful JavaScript URL routing/dispatch for server-side and client-side applications.",
    url: "http://millermedeiros.github.com/crossroads.js/"
  },
  {
    name: "Artemia",
    size: "2.5k",
    tags: ["data", "storage"],
    description: "Artemia is a clientside document store, inspired by Lawnchair.",
    url: "https://github.com/k33g/artemia/",
    source: "https://github.com/k33g/artemia/raw/master/js/minified/artemia.pkg.lite.min.js"
  },
  {
    name: "js.class",
    size: "1.8k",
    tags: ["functional","class","extend"],
    description: "Class-based OO for JavaScript.",
    url: "http://code.google.com/p/jsclassextend/"
  },
  {
    name: "Satisfy",
    size: "2.3k",
    tags: ["html","css","selector"],
    description: "CSS Selector to HTML generator.",
    url: "https://github.com/jamespadolsey/satisfy/"
  },
  {
    name: "jXHR",
    size: "0.6k",
    tags: ["json","json-p","xhr","ajax","cross-domain"],
    description: "JSON-P based cross-domain Ajax wrapped in the XHR API.",
    url: "http://mulletxhr.com"
  },
  {
    name: "Ekho",
    size: "1.1k",
    tags: ["events"],
    description: "DOM-agnostic event library, with bubbling.",
    url: "https://bitbucket.org/killdream/ekho",
    source: "https://bitbucket.org/killdream/ekho/raw/tip/dist/ekho.min.js"
  },
  {
    name: "JSON.minify",
    size: "0.4k",
    tags: ["json"],
    description: "Strip out // and /*..*/ comments from JSON before parsing.",
    url: "http://github.com/getify/JSON.minify"
  },
  {
    name: "jaylist",
    size: "0.5k",
    tags: ["functional", "extend", "data"],
    description: "A simple wrapper for Javascript's built-in hash storage.",
    url: "http://benbscholz.github.com/jaylist",
    source: "http://github.com/benbscholz/jaylist/raw/master/src/list.min.js"
  },
  {
    name: "SubtleLocationProxy",
    size: "0.8k",
    tags: ["history", "route", "spa"],
    description: "Proxy the location of one window, frame or iframe to the hash of another and vice-versa.",
    url: "https://github.com/subtleGradient/SubtleLocationProxy.js",
    source: "https://github.com/subtleGradient/SubtleLocationProxy.js/raw/master/SubtleLocationProxy.js"
  },
  {
    name: "LeviRoutes",
    size: "817b",
    tags: ["history", "route"],
    description: "A basic routes framework for JS that hooks in to HTML5 history",
    url: "http://leviroutes.com",
    source: "http://github.com/PaulKinlan/leviroutes/raw/master/routes-min.js"
  },
  {
    name: "FormfactorJS",
    size: "1.4k",
    tags: ["formfactor", "loader"],
    description: "A formfactor detection library, to help developers target tablet, tvs, desktops and handhelds (or anything you choose)",
    url: "http://formfactorjs.com",
    source: "http://github.com/PaulKinlan/formfactor/raw/master/formfactor-min.js"
  },
  {
    name: "Head JS",
    size: "2.8k",
    tags: ["loader", "polyfill", "feature"],
    description: "An asynchronous loader library, with HTML5 and CSS3 polyfills",
    url: "http://headjs.com",
    source: "https://github.com/headjs/headjs/raw/master/dist/head.min.js"
  },
  {
    name: "Augment.js",
    size: "1.4k",
    tags: ["polyfill"],
    description: "Enables use of modern JavaScript by augmenting built in objects with the latest JavaScript methods.",
    url: "http://augmentjs.com"
  },
  {
    name: "thumbs.js",
    size: "0.6k",
    tags: ["polyfill"],
    description: "Add touch event support to the desktop and other mouse-based browsers.",
    url: "http://mwbrooks.github.com/thumbs.js/",
    source: "https://github.com/mwbrooks/thumbs.js/blob/master/lib/thumbs.js"
  },
  {
    name: "DOMBuilder",
    size: "2.8k",
    tags: ["dom", "html"],
    description: "Declarative builder with (mostly) interchangeable DOM or HTML output",
    url: "https://github.com/insin/DOMBuilder",
    source: "https://github.com/insin/DOMBuilder/raw/master/DOMBuilder.min.js"
  },
  {
    name: "my.common.js",
    size: "1.0k",
    tags: ["loader", "commonjs"],
    description: "A CommonJS-like script/module loader.",
    url: "https://github.com/jiem/my-common",
    source: "http://myjs.fr/my-common/my.common.min.js"
  },
  {
    name: "my.class.js",
    size: "0.6k",
    tags: ["language", "class"],
    description: "Probably the fastest JS class system. No wrappers.",
    url: "https://github.com/jiem/my-class",
    source: "http://myjs.fr/my-class/my.class.min.js"
  },
  {
    name: "htmlentities.js",
    size: "0.2k",
    tags: ["htmlentities", "decode", "encode", "dom"],
    description: "A minimal html entities decoder/encoder using DOM.",
    url: "https://github.com/jussi-kalliokoski/htmlentities.js",
    source: "https://github.com/jussi-kalliokoski/htmlentities.js/raw/master/htmlentities.min.js"
  },
  {
    name: "binary.js",
    size: "0.5k",
    tags: ["binary", "decode", "encode"],
    description: "A fast, small, robust and extensible binary conversion library.",
    url: "https://github.com/jussi-kalliokoski/binary.js",
    source: "https://github.com/jussi-kalliokoski/binary.js/raw/master/binary.min.js"
  },
  {
    name: "C-qwncr",
    size: "0.5k",
    tags: ["async", "animation", "jsanimation"],
    description: "An animation sequencing library that prevents complex animations from starting again before they've completed.",
    url: "https://github.com/vsa-partners/c-qwncr",
    source: "https://github.com/vsa-partners/c-qwncr/blob/master/js/c-qwncr.js"
  },
  {
    name: "Timed",
    size: "0.7k",
    tags: ["functional", "sugar"],
    description: "Syntactic sugar for JavaScript's setTimeout() and setInterval().",
    url: "https://github.com/ChiperSoft/Timed",
    source: "https://github.com/ChiperSoft/Timed/blob/master/timed.js"
  },
  {
    name: "Sslac",
    size: "2.9k",
    tags: ["language", "class"],
    description: "A (seemingly backwards) JS class builder with support for runtime patching",
    url: "https://github.com/jakobo/sslac",
    source: "https://github.com/Jakobo/Sslac/blob/master/src/sslac.js"
  },
  {
    name: "ShinyCar",
    size: "2.8k",
    tags: ["data", "storage"],
    description: "Set localStorage keys and values as objects",
    url: "https://github.com/Poincare/ShinyCar",
    source: "https://github.com/Poincare/ShinyCar/blob/master/shinycar-minified.js"
  },
  {
    name: "lscache",
    size: "0.9k",
    tags: ["data", "storage"],
    description: "A localStorage-based memcache-inspired client-side caching library.",
    url: "https://github.com/pamelafox/lscache",
    source: "https://github.com/pamelafox/lscache/blob/master/lscache.js"
  },
  {
    name: "Evidence",
    size: "4.1k",
    tags: ["testing"],
    description: "Evidence is a JavaScript unit testing library. This fork exclusively uses the console to log.",
    url: "https://github.com/madrobby/evidence",
    source: "https://github.com/madrobby/evidence/blob/master/src/evidence.js"
  },
  {
    name: "ClassIE",
    size: "0.3k",
    tags: ["feature"],
    description: "ClassIE is an unobstrusive library which detects Internet Explorer version for JS and CSS sides",
    url: "https://github.com/pyrsmk/classie",
    source: "https://github.com/pyrsmk/classie/blob/master/classie.min.js"
  },
  {
    name: "Sheethub",
    size: "4.0k",
    tags: ["dom"],
    description: "The cross-browser CSS API",
    url: "https://github.com/pyrsmk/sheethub",
    source: "https://github.com/pyrsmk/sheethub/blob/master/sheethub.min.js"
  },
  {
    name: "DragDrop",
    size: "1.4k",
    tags: ["dragdrop", "ui"],
    description: "Drag-and-Drop functionality for advanced UI development.",
    url: "https://github.com/kbjr/DragDrop",
    source: "https://github.com/kbjr/DragDrop/blob/master/drag-drop.js"
  },
  {
    name: "Jaml",
    size: "1.4k",
    tags: ["templating"],
    description: "Jaml tries to emulate Ruby’s Haml library, making it easy to generate HTML in your JavaScript projects.",
    url: "http://edspencer.github.com/jaml/",
    source: "https://github.com/edspencer/jaml/raw/master/Jaml-all.js"
  },
  {
    name: "Async GA",
    size: "0.2k",
    tags: ["analytics"],
    description: "Reduced Google's original analytics snippet by one third, with better performance.",
    url: "http://mathiasbynens.be/notes/async-analytics-snippet"
  },
  {
    name: "JSONSelect",
    size: "1.7k",
    tags: ["data", "json"],
    description: "CSS-like selectors for JSON.",
    url: "http://jsonselect.org"
  },
  {
    name: "Morpheus",
    size: "1.3k",
    tags: ["animation", "jsanimation", "color"],
    description: "An animator that lets you tween in parallel on multiple elements, from integers to colors in a single high-performant loop",
    url: "https://github.com/ded/morpheus",
    source: "https://github.com/ded/morpheus/raw/master/morpheus.min.js"
  },
  {
    name: "microjungle",
    size: "0.3k",
    tags: ["templating"],
    description: "very simple and powerful client-side HTML via JSON templating engine.",
    url: "https://github.com/deepsweet/microjungle",
    source: "https://github.com/deepsweet/microjungle/raw/master/src/microjungle.min.js"
  },
  {
    name: "environ",
    size: "1.3k",
    tags: ["feature"],
    description: "Cross platform environment detection library.",
    url: "https://github.com/azer/environ",
    source: "https://github.com/azer/environ/raw/master/lib/environ.js"
  },
  {
    name: "state-machine",
    size: "0.5k",
    tags: ["data", "games", "statemachine"],
    description: "A finite state machine, useful in game development",
    url: "https://github.com/jakesgordon/javascript-state-machine",
    source: "https://github.com/jakesgordon/javascript-state-machine/raw/master/state-machine.min.js"
  }
];
