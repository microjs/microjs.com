var MicroJS = [
  {
    name: "Modernizr",
    size: "3.7k",
    tags: ["feature"],
    description: "Detects native CSS3 and HTML5 features available in the current browser.",
    url: "http://www.modernizr.com/"
  },
  {
    name: "Zepto",
    size: "4.2k",
    tags: ["base", "dom", "webkit", "jquery", "ajax", "events", "mobile"],
    description: "jQuery API-compatible micro-framework for mobile WebKit browsers, with DOM manipulation, Ajax and events.",
    url: "http://zeptojs.com/"
  },
  {
    name: "xui",
    size: "4.1k",
    tags: ["base", "dom", "mobile", "ajax", "events", "webkit", "animation"],
    description: "A super micro tiny dom library for authoring HTML5 mobile web applications, works cross-device and cross-platform.",
    url: "http://xuijs.com/"
  },
  {
    name: "Underscore",
    size: "3.0k",
    tags: ["functional", "language", "data"],
    description: "A utility-belt that provides functional programming support that you would expect in Ruby.",
    url: "http://documentcloud.github.com/underscore/"
  },
  {
    name: "Backbone",
    size: "3.9k",
    tags: ["mvc", "data", "functional"],
    description: "Lightweight MVC—models with custom events, collections with rich enumerables, views and RESTful JSON.",
    url: "http://documentcloud.github.com/backbone/"
  },
  {
    name: "Mustache",
    size: "1.5k",
    tags: ["templating"],
    description: "Minimal, logic-less templating with {{mustaches}}. Great for server- or client-side templating.",
    url: "http://mustache.github.com/"
  },
  {
    name: "LABjs",
    size: "2.1k",
    tags: ["loader"],
    description: "Flexible and light-weight JavaScript dependency loader.",
    url: "http://labjs.com/"
  },
  {
    name: "Qwery",
    size: "1.0k",
    tags: ["css"],
    description: "Qwery is a 1k blazing fast query selector engine allowing you to select elements with CSS1 & CSS2 selectors.",
    url: "https://github.com/ded/qwery"
  },
  {
    name: "Sly",
    size: "3.0k",
    tags: ["css"],
    description: "Sly is a query selector engine allowing you to select elements with CSS1, CSS2 & CSS3 selectors.",
    url: "https://github.com/digitarald/sly"
  },
  {
    name: "Émile",
    size: "0.9k",
    tags: ["animation"],
    description: "Émile is a no-frills stand-alone CSS animation JavaScript framework, named after Émile Cohl, early animator.",
    url: "https://github.com/madrobby/emile"
  },
  {
    name: "Lawnchair",
    size: "2.0k",
    tags: ["data","storage","webkit"],
    description: "Sorta like a couch except smaller and outside, also, a client side JSON document store. Perfect for WebKit mobile apps.",
    url: "http://westcoastlogic.com/lawnchair/"
  },
  {
    name: "ExplorerCanvas",
    size: "4.3k",
    tags: ["polyfill"],
    description: "HTML5 canvas tag support for Internet Explorer.",
    url: "http://code.google.com/p/explorercanvas/"
  },
  {
    name: "Placeholder.js",
    size: "0.4k",
    tags: ["polyfill"],
    description: "Adds support for the placeholder attribute in older browsers that don't support this HTML5 feature.",
    url: "https://github.com/NV/placeholder.js"
  },
  {
    name: "Micro-Templating",
    size: "0.2k",
    tags: ["templating"],
    description: "Templating function that is fast, caches quickly, and is easy to use.",
    url: "http://ejohn.org/blog/javascript-micro-templating/"
  },
  {
    name: "Tweet-Templ",
    size: "0.1k",
    tags: ["templating"],
    description: "function t(s,d){for(var p in d)s=s.replace(new RegExp('{'+p+'}','g'),d[p]);return s;}",
    url: "http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/"
  },
  {
    name: "Firmin",
    size: "2.5k",
    tags: ["animation","webkit"],
    description: "Animation library that uses CSS transforms and transitions to create smooth, hardware-accelerated animations.",
    url: "http://extralogical.net/projects/firmin/"
  },
  {
    name: "Bonzo",
    size: "2.9k",
    tags: ["dom"],
    description: "A simple, to the point, hassle-free, small, library agnostic, extensible DOM utility.",
    url: "https://github.com/ded/bonzo"
  },
  {
    name: "Bean",
    size: "2.4k",
    tags: ["events", "dom"],
    description: "Bean is a small, slick, cross-platform, framework-agnostic event utility designed for desktop, mobile, and touch-based browsers. ",
    url: "https://github.com/fat/bean"
  },
  {
    name: "$script.js",
    size: "0.8k",
    tags: ["loader"],
    description: "An asynchronous JavaScript loader and dependency manager with an astonishingly impressive footprint.",
    url: "https://github.com/ded/script.js"
  },
  {
    name: "Klass.js",
    size: "0.6k",
    tags: ["language", "class"],
    description: "An expressive, cross platform JavaScript Class provider with a slick, classical interface to prototypal inheritance.",
    url: "https://github.com/ded/klass"
  },
  {
    name: "snack.js",
    size: "3.3k",
    tags: ["base", "dom", "events", "ajax", "language"],
    description: "A tiny, cross-browser, library with DOM manipulation, events, pub/sub, Ajax and language utilities.",
    url: "http://snackjs.com/"
  },
  {
    name: "Ender",
    size: "?k",
    tags: ["compose"],
    description: "A open, powerful, micro-to-macro API for composing your own custom JavaScript library.",
    url: "http://ender.no.de"
  },
  {
    name: "Mold",
    size: "1.9k",
    tags: ["templating"],
    description: "Mold is a very light-weight (200 lines) client-side JavaScript-based templating library.",
    url: "http://marijnhaverbeke.nl/mold/"
  },
  {
    name: "Tempo",
    size: "3.2k",
    tags: ["templating"],
    description: "Tempo is a JSON rendering engine that enables you to craft data templates in pure HTML.",
    url: "http://twigkit.github.com/tempo/"
  },
  {
    name: "Reqwest",
    size: "0.9k",
    tags: ["ajax"],
    description: "A robust lightweight wrapper for asynchronous http requests.",
    url: "https://github.com/ded/Reqwest"
  },
  {
    name: "JSON2",
    size: "1.3k",
    tags: ["polyfill", "json"],
    description: "Creates a JSON property in the global object, if there  isn't already one, with stringify and parse methods.",
    url: "https://github.com/douglascrockford/JSON-js"
  },
  {
    name: "yepnope",
    size: "1.6k",
    tags: ["polyfill", "loader"],
    description: "yepnope is an asynchronous conditional resource loader that allows you to load only the scripts that your users need.",
    url: "http://yepnopejs.com/"
  },
  {
    name: "ICanHaz",
    size: "1.8k",
    tags: ["templating"],
    description: "Simple & powerful client-side templating for jQuery or Zepto.js.",
    url: "http://icanhazjs.com/"
  },
  {
    name: "Q",
    size: "1.0k",
    tags: ["functional", "events"],
    description: "when/defer-style promises for JavaScript (CommonJS/Promises/A,B,D)",
    url: "https://github.com/kriskowal/q"
  },
  {
    name: "domReady",
    size: "0.2k",
    tags: ["dom", "events"],
    description: "lets you know when the DOM is ready",
    url: "https://github.com/ded/domready"
  },
  {
    name: "Spine",
    size: "2.0k",
    tags: ["mvc"],
    description: "MVC with real protypical inheritance, controllers, model layer and ORM, Ajax and local storage.",
    url: "http://maccman.github.com/spine/"
  },
  {
    name: "Kizzy",
    size: "0.6k",
    tags: ["data", "storage"],
    description: "Cross Browser caching util leveraging LocalStorage and XML Store with a Memcached interface",
    url: "https://github.com/ded/Kizzy"
  },
  {
    name: "Bowser",
    size: "0.2k",
    tags: ["feature"],
    description: "A browser detector. Because when there is no features to detect, sometimes you have to browser sniff",
    url: "https://github.com/ded/bowser"
  },
  {
    name: "ES5-Shim",
    size: "2.0k",
    tags: ["language", "polyfill"],
    description: "Compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    url: "https://github.com/kriskowal/es5-shim/"
  },
  {
    name: "Loadrunner",
    size: "2.0k",
    tags: ["loader"],
    description: "Simple, flexible and sane JavaScript loader and build tool for browsers",
    url: "https://github.com/danwrong/loadrunner"
  },
  {
    name : "RequireJS",
    size : "5.5k",
    tags : ["loader"],
    description : "a JavaScript file and module loader.",
    url : "http://www.requirejs.org"
  }
];