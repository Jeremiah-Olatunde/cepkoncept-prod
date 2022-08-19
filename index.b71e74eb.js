// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6Ictx":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
// IMPORT ALL COMPONENT ROOT SCRIPTS
var _indexTs = require("./**/index.ts");
var _scroll = require("./scripts/scroll");
"use strict";
const links = Array.from(document.querySelectorAll("[data-nav-link]"));
const sections = Array.from(document.querySelectorAll("[data-nav-target]"));
//--CHANGE ACTIVE NAVBAR LINK BASED ON IN VIEW SECTION---------------
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        const target = entry.target.dataset.navTarget;
        const link1 = links.find((link)=>link.dataset.navLink === target);
        if (!(link1 instanceof HTMLElement) || !entry.isIntersecting) return;
        links.forEach((link)=>link.classList.remove("active"));
        link1.classList.add("active");
    });
}, {
    threshold: .2
});
sections.forEach((section)=>observer.observe(section));
//-------------------------------------------------------------------
//--SCROLLING NAVIGATION FROM LANBAR LINKS---------------------------
links.forEach((link)=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        const target = document.querySelector(`[data-nav-target=${link.dataset.navLink}]`);
        if (!(target instanceof HTMLElement)) return;
        const offset = +(target.dataset.scrollOffset ?? 0);
        (0, _scroll.scroll)(window.pageYOffset, target.offsetTop + offset);
    });
});

},{"./**/index.ts":"gxVzW","./scripts/scroll":"e6Be0"}],"gxVzW":[function(require,module,exports) {
const _temp0 = require("../index.ts");
const _temp1 = require("../components/about/index.ts");
const _temp2 = require("../components/hero/index.ts");
const _temp3 = require("../components/navbar/index.ts");
const _temp4 = require("../components/projects/index.ts");
const _temp5 = require("../components/services/index.ts");
module.exports = {
    "undefined": _temp0,
    "components": {
        "about": _temp1,
        "hero": _temp2,
        "navbar": _temp3,
        "projects": _temp4,
        "services": _temp5
    }
};

},{"../index.ts":"h7u1C","../components/about/index.ts":"7qC0d","../components/hero/index.ts":"cWDTb","../components/navbar/index.ts":"fZpCD","../components/projects/index.ts":"ibI5z","../components/services/index.ts":"i7fD5"}],"7qC0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cWDTb":[function(require,module,exports) {
var _scroll = require("~/src/scripts/scroll");
"use strict";
const btns = Array.from(document.querySelectorAll(".cepkoncept-hero .view-more"));
const projects = document.getElementById("cepkoncept-projects");
btns.forEach((btn)=>btn.addEventListener("click", (event)=>{
        const offset = +(projects.dataset.scrollOffset ?? 0);
        if (!(projects instanceof HTMLElement)) return;
        (0, _scroll.scroll)(window.pageYOffset, projects.offsetTop + offset);
    }));

},{"~/src/scripts/scroll":"e6Be0"}],"e6Be0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scroll", ()=>scroll);
var _motion = require("motion");
"use strict";
function scroll(from, to) {
    const navbar = document.getElementById("cepkoncept-navbar");
    const displacement = to - navbar.offsetHeight - from;
    (0, _motion.animate)((t)=>{
        window.scrollTo(0, from + displacement * t);
    }, {
        duration: 2,
        easing: [
            .17,
            .85,
            .438,
            .99
        ]
    });
}

},{"motion":"aqnbF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqnbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _animateEsJs.animate));
var _dom = require("@motionone/dom");
parcelHelpers.exportAll(_dom, exports);
var _types = require("@motionone/types");
parcelHelpers.exportAll(_types, exports);
var _animateEsJs = require("./animate.es.js");

},{"@motionone/dom":"krEZT","@motionone/types":"6rLrg","./animate.es.js":"lEsDf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krEZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _indexEsJs.animate));
parcelHelpers.export(exports, "animateStyle", ()=>(0, _animateStyleEsJs.animateStyle));
parcelHelpers.export(exports, "timeline", ()=>(0, _indexEsJs1.timeline));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerEsJs.stagger));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs2.spring));
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs3.glide));
parcelHelpers.export(exports, "style", ()=>(0, _styleEsJs.style));
parcelHelpers.export(exports, "inView", ()=>(0, _inViewEsJs.inView));
parcelHelpers.export(exports, "resize", ()=>(0, _indexEsJs4.resize));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexEsJs5.scroll));
parcelHelpers.export(exports, "ScrollOffset", ()=>(0, _presetsEsJs.ScrollOffset));
parcelHelpers.export(exports, "withControls", ()=>(0, _controlsEsJs.withControls));
parcelHelpers.export(exports, "getAnimationData", ()=>(0, _dataEsJs.getAnimationData));
parcelHelpers.export(exports, "getStyleName", ()=>(0, _getStyleNameEsJs.getStyleName));
parcelHelpers.export(exports, "createMotionState", ()=>(0, _indexEsJs6.createMotionState));
parcelHelpers.export(exports, "mountedStates", ()=>(0, _indexEsJs6.mountedStates));
parcelHelpers.export(exports, "createStyles", ()=>(0, _styleObjectEsJs.createStyles));
parcelHelpers.export(exports, "createStyleString", ()=>(0, _styleStringEsJs.createStyleString));
var _indexEsJs = require("./animate/index.es.js");
var _animateStyleEsJs = require("./animate/animate-style.es.js");
var _indexEsJs1 = require("./timeline/index.es.js");
var _staggerEsJs = require("./utils/stagger.es.js");
var _indexEsJs2 = require("./easing/spring/index.es.js");
var _indexEsJs3 = require("./easing/glide/index.es.js");
var _styleEsJs = require("./animate/style.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _indexEsJs4 = require("./gestures/resize/index.es.js");
var _indexEsJs5 = require("./gestures/scroll/index.es.js");
var _presetsEsJs = require("./gestures/scroll/offsets/presets.es.js");
var _controlsEsJs = require("./animate/utils/controls.es.js");
var _dataEsJs = require("./animate/data.es.js");
var _getStyleNameEsJs = require("./animate/utils/get-style-name.es.js");
var _indexEsJs6 = require("./state/index.es.js");
var _styleObjectEsJs = require("./animate/utils/style-object.es.js");
var _styleStringEsJs = require("./animate/utils/style-string.es.js");

},{"./animate/index.es.js":"4V5Bk","./animate/animate-style.es.js":"3Iur2","./timeline/index.es.js":"j3Ike","./utils/stagger.es.js":"ihQdi","./easing/spring/index.es.js":"31qfP","./easing/glide/index.es.js":"6w57n","./animate/style.es.js":"gYtky","./gestures/in-view.es.js":"gjZoF","./gestures/resize/index.es.js":"3ucYu","./gestures/scroll/index.es.js":"fySeU","./gestures/scroll/offsets/presets.es.js":"gHEKo","./animate/utils/controls.es.js":"39ePr","./animate/data.es.js":"jdGoo","./animate/utils/get-style-name.es.js":"ksBTX","./state/index.es.js":"62kdY","./animate/utils/style-object.es.js":"ejYmc","./animate/utils/style-string.es.js":"cdmxE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V5Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _animateStyleEsJs = require("./animate-style.es.js");
var _optionsEsJs = require("./utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _controlsEsJs = require("./utils/controls.es.js");
var _staggerEsJs = require("../utils/stagger.es.js");
function animate(elements, keyframes, options = {}) {
    elements = (0, _resolveElementsEsJs.resolveElements)(elements);
    const numElements = elements.length;
    /**
     * Create and start new animations
     */ const animationFactories = [];
    for(let i = 0; i < numElements; i++){
        const element = elements[i];
        for(const key in keyframes){
            const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
            valueOptions.delay = (0, _staggerEsJs.resolveOption)(valueOptions.delay, i, numElements);
            const animation = (0, _animateStyleEsJs.animateStyle)(element, key, keyframes[key], valueOptions);
            animationFactories.push(animation);
        }
    }
    return (0, _controlsEsJs.withControls)(animationFactories, options, /**
     * TODO:
     * If easing is set to spring or glide, duration will be dynamically
     * generated. Ideally we would dynamically generate this from
     * animation.effect.getComputedTiming().duration but this isn't
     * supported in iOS13 or our number polyfill. Perhaps it's possible
     * to Proxy animations returned from animateStyle that has duration
     * as a getter.
     */ options.duration);
}

},{"./animate-style.es.js":"3Iur2","./utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","./utils/controls.es.js":"39ePr","../utils/stagger.es.js":"ihQdi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Iur2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateStyle", ()=>animateStyle);
var _dataEsJs = require("./data.es.js");
var _cssVarEsJs = require("./utils/css-var.es.js");
var _animation = require("@motionone/animation");
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./utils/transforms.es.js");
var _easingEsJs = require("./utils/easing.es.js");
var _featureDetectionEsJs = require("./utils/feature-detection.es.js");
var _keyframesEsJs = require("./utils/keyframes.es.js");
var _styleEsJs = require("./style.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _stopAnimationEsJs = require("./utils/stop-animation.es.js");
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration =(0, _utils.defaults).duration , delay =(0, _utils.defaults).delay , endDelay =(0, _utils.defaults).endDelay , repeat =(0, _utils.defaults).repeat , easing =(0, _utils.defaults).easing , direction , offset , allowWebkitAcceleration =false ,  } = options;
    const data = (0, _dataEsJs.getAnimationData)(element);
    let canAnimateNatively = (0, _featureDetectionEsJs.supports).waapi();
    const valueIsTransform = (0, _transformsEsJs.isTransform)(key);
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, _transformsEsJs.addTransformToElement)(element, key);
    const name = (0, _getStyleNameEsJs.getStyleName)(key);
    const motionValue = (0, _dataEsJs.getMotionValue)(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = (0, _transformsEsJs.transformDefinitions).get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, _stopAnimationEsJs.stopAnimation)(motionValue.animation, !((0, _utils.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = (0, _styleEsJs.style).get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, _keyframesEsJs.hydrateKeyframes)((0, _keyframesEsJs.keyframesList)(keyframesDefinition), readInitialValue);
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, readInitialValue, valueIsTransform, name, motionValue);
            easing = custom.easing;
            if (custom.keyframes !== undefined) keyframes = custom.keyframes;
            if (custom.duration !== undefined) duration = custom.duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, _cssVarEsJs.isCssVar)(name)) {
            if ((0, _featureDetectionEsJs.supports).cssRegisterProperty()) (0, _cssVarEsJs.registerCssVariable)(name);
            else canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so. Currently this only
         * feature detects CSS.registerProperty but could check WAAPI too.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) keyframes = keyframes.map((value)=>(0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value);
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!(0, _featureDetectionEsJs.supports).partialKeyframes() || isRecording)) keyframes.unshift(readInitialValue());
            const animationOptions = {
                delay: (0, _utils.time).ms(delay),
                duration: (0, _utils.time).ms(duration),
                endDelay: (0, _utils.time).ms(endDelay),
                easing: !(0, _utils.isEasingList)(easing) ? (0, _easingEsJs.convertEasing)(easing) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, _utils.isEasingList)(easing) ? easing.map((0, _easingEsJs.convertEasing)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) animation.finished = new Promise((resolve, reject)=>{
                animation.onfinish = resolve;
                animation.oncancel = reject;
            });
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                // Apply styles to target
                (0, _styleEsJs.style).set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch((0, _utils.noop));
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) keyframes.unshift(parseFloat(readInitialValue()));
            const render = (latest)=>{
                if (definition) latest = definition.toDefaultUnit(latest);
                (0, _styleEsJs.style).set(element, name, latest);
            };
            animation = new (0, _animation.Animation)(render, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            (0, _styleEsJs.style).set(element, name, definition && (0, _utils.isNumber)(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) record(element, key, keyframes, {
            duration,
            delay: delay,
            easing,
            repeat,
            offset
        }, "motion-one");
        motionValue.setAnimation(animation);
        return animation;
    };
}

},{"./data.es.js":"jdGoo","./utils/css-var.es.js":"eE8uy","@motionone/animation":"ebY3Z","@motionone/utils":"krBNu","./utils/transforms.es.js":"3akS9","./utils/easing.es.js":"45L34","./utils/feature-detection.es.js":"98zUZ","./utils/keyframes.es.js":"e1Tay","./style.es.js":"gYtky","./utils/get-style-name.es.js":"ksBTX","./utils/stop-animation.es.js":"jktqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdGoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimationData", ()=>getAnimationData);
parcelHelpers.export(exports, "getMotionValue", ()=>getMotionValue);
var _types = require("@motionone/types");
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) data.set(element, {
        transforms: [],
        values: new Map()
    });
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) motionValues.set(name, new (0, _types.MotionValue)());
    return motionValues.get(name);
}

},{"@motionone/types":"6rLrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rLrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>(0, _motionValueEsJs.MotionValue));
var _motionValueEsJs = require("./MotionValue.es.js");

},{"./MotionValue.es.js":"alVre","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alVre":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 || animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eE8uy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCssVar", ()=>isCssVar);
parcelHelpers.export(exports, "registerCssVariable", ()=>registerCssVariable);
parcelHelpers.export(exports, "registeredProperties", ()=>registeredProperties);
var _transformsEsJs = require("./transforms.es.js");
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax , initialValue  } = (0, _transformsEsJs.transformDefinitions).has(name) ? (0, _transformsEsJs.transformDefinitions).get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3akS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTransformToElement", ()=>addTransformToElement);
parcelHelpers.export(exports, "asTransformCssVar", ()=>asTransformCssVar);
parcelHelpers.export(exports, "axes", ()=>axes);
parcelHelpers.export(exports, "buildTransformTemplate", ()=>buildTransformTemplate);
parcelHelpers.export(exports, "compareTransformOrder", ()=>compareTransformOrder);
parcelHelpers.export(exports, "isTransform", ()=>isTransform);
parcelHelpers.export(exports, "transformAlias", ()=>transformAlias);
parcelHelpers.export(exports, "transformDefinitions", ()=>transformDefinitions);
var _utils = require("@motionone/utils");
var _dataEsJs = require("../data.es.js");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: (0, _utils.noopReturn)
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms: transforms1  } = (0, _dataEsJs.getAnimationData)(element);
    (0, _utils.addUniqueItem)(transforms1, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms1);
};
const buildTransformTemplate = (transforms2)=>transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;

},{"@motionone/utils":"krBNu","../data.es.js":"jdGoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krBNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>(0, _arrayEsJs.addUniqueItem));
parcelHelpers.export(exports, "removeItem", ()=>(0, _arrayEsJs.removeItem));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampEsJs.clamp));
parcelHelpers.export(exports, "defaults", ()=>(0, _defaultsEsJs.defaults));
parcelHelpers.export(exports, "getEasingForSegment", ()=>(0, _easingEsJs.getEasingForSegment));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateEsJs.interpolate));
parcelHelpers.export(exports, "isCubicBezier", ()=>(0, _isEsJs.isCubicBezier));
parcelHelpers.export(exports, "isEasingGenerator", ()=>(0, _isEsJs.isEasingGenerator));
parcelHelpers.export(exports, "isEasingList", ()=>(0, _isEsJs.isEasingList));
parcelHelpers.export(exports, "isNumber", ()=>(0, _isEsJs.isNumber));
parcelHelpers.export(exports, "isString", ()=>(0, _isEsJs.isString));
parcelHelpers.export(exports, "mix", ()=>(0, _mixEsJs.mix));
parcelHelpers.export(exports, "noop", ()=>(0, _noopEsJs.noop));
parcelHelpers.export(exports, "noopReturn", ()=>(0, _noopEsJs.noopReturn));
parcelHelpers.export(exports, "defaultOffset", ()=>(0, _offsetEsJs.defaultOffset));
parcelHelpers.export(exports, "fillOffset", ()=>(0, _offsetEsJs.fillOffset));
parcelHelpers.export(exports, "progress", ()=>(0, _progressEsJs.progress));
parcelHelpers.export(exports, "time", ()=>(0, _timeEsJs.time));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityEsJs.velocityPerSecond));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapEsJs.wrap));
var _arrayEsJs = require("./array.es.js");
var _clampEsJs = require("./clamp.es.js");
var _defaultsEsJs = require("./defaults.es.js");
var _easingEsJs = require("./easing.es.js");
var _interpolateEsJs = require("./interpolate.es.js");
var _isEsJs = require("./is.es.js");
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _timeEsJs = require("./time.es.js");
var _velocityEsJs = require("./velocity.es.js");
var _wrapEsJs = require("./wrap.es.js");

},{"./array.es.js":"lV7u8","./clamp.es.js":"eARWM","./defaults.es.js":"4Xx6A","./easing.es.js":"b9U1C","./interpolate.es.js":"dDlur","./is.es.js":"Dz8UR","./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./time.es.js":"98Uct","./velocity.es.js":"alryn","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV7u8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eARWM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xx6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9U1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _isEsJs = require("./is.es.js");
var _wrapEsJs = require("./wrap.es.js");
function getEasingForSegment(easing, i) {
    return (0, _isEsJs.isEasingList)(easing) ? easing[(0, _wrapEsJs.wrap)(0, easing.length, i)] : easing;
}

},{"./is.es.js":"Dz8UR","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Dz8UR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCubicBezier", ()=>isCubicBezier);
parcelHelpers.export(exports, "isEasingGenerator", ()=>isEasingGenerator);
parcelHelpers.export(exports, "isEasingList", ()=>isEasingList);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isString", ()=>isString);
const isNumber = (value)=>typeof value === "number";
const isString = (value)=>typeof value === "string";
const isEasingGenerator = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);
const isCubicBezier = (easing)=>Array.isArray(easing) && isNumber(easing[0]);
const isEasingList = (easing)=>Array.isArray(easing) && !isNumber(easing[0]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iRdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDlur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _easingEsJs = require("./easing.es.js");
var _clampEsJs = require("./clamp.es.js");
function interpolate(output, input = (0, _offsetEsJs.defaultOffset)(output.length), easing = (0, _noopEsJs.noopReturn)) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, _offsetEsJs.fillOffset)(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, _clampEsJs.clamp)(0, 1, (0, _progressEsJs.progress)(input[i], input[i + 1], t));
        const segmentEasing = (0, _easingEsJs.getEasingForSegment)(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, _mixEsJs.mix)(output[i], output[i + 1], progressInRange);
    };
}

},{"./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./easing.es.js":"b9U1C","./clamp.es.js":"eARWM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y3RWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
const mix = (min, max, progress)=>-progress * min + progress * max + min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIUEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "noopReturn", ()=>noopReturn);
const noop = ()=>{};
const noopReturn = (v)=>v;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q1NU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _mixEsJs = require("./mix.es.js");
var _progressEsJs = require("./progress.es.js");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressEsJs.progress)(0, remaining, i);
        offset.push((0, _mixEsJs.mix)(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [
        0
    ];
    fillOffset(offset, length - 1);
    return offset;
}

},{"./mix.es.js":"Y3RWW","./progress.es.js":"3PqyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PqyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98Uct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
const time = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alryn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebY3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>(0, _animationEsJs.Animation));
parcelHelpers.export(exports, "getEasingFunction", ()=>(0, _easingEsJs.getEasingFunction));
var _animationEsJs = require("./Animation.es.js");
var _easingEsJs = require("./utils/easing.es.js");

},{"./Animation.es.js":"lESA9","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lESA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
var _utils = require("@motionone/utils");
var _easingEsJs = require("./utils/easing.es.js");
class Animation {
    constructor(output, keyframes = [
        0,
        1
    ], { easing , duration: initialDuration = (0, _utils.defaults).duration , delay =(0, _utils.defaults).delay , endDelay =(0, _utils.defaults).endDelay , repeat =(0, _utils.defaults).repeat , offset , direction ="normal" ,  } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = (0, _utils.noopReturn);
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || (0, _utils.defaults).easing;
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, ()=>"0", true);
            easing = custom.easing;
            if (custom.keyframes !== undefined) keyframes = custom.keyframes;
            if (custom.duration !== undefined) initialDuration = custom.duration;
        }
        this.repeat = repeat;
        this.easing = (0, _utils.isEasingList)(easing) ? (0, _utils.noopReturn) : (0, _easingEsJs.getEasingFunction)(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, _utils.interpolate)(keyframes, offset, (0, _utils.isEasingList)(easing) ? easing.map((0, _easingEsJs.getEasingFunction)) : (0, _utils.noopReturn));
        this.tick = (timestamp)=>{
            var _a;
            delay;
            let t = 0;
            if (this.pauseTime !== undefined) t = this.pauseTime;
            else t = (timestamp - this.startTime) * this.rate;
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) t = this.totalDuration;
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) iterationProgress = 1;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) iterationProgress = 1 - iterationProgress;
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 || _a.call(this, latest);
            } else if (this.playState !== "idle") this.frameRequestId = requestAnimationFrame(this.tick);
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) this.startTime = now - this.pauseTime;
        else if (!this.startTime) this.startTime = now;
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) cancelAnimationFrame(this.frameRequestId);
        (_a = this.reject) === null || _a === void 0 || _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) this.pauseTime = t;
        else this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

},{"@motionone/utils":"krBNu","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajTA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingFunction", ()=>getEasingFunction);
var _easing = require("@motionone/easing");
var _utils = require("@motionone/utils");
const namedEasings = {
    ease: (0, _easing.cubicBezier)(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, _easing.cubicBezier)(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, _easing.cubicBezier)(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, _easing.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if (typeof definition === "function") return definition;
    // If an easing curve definition, return bezier function
    if (Array.isArray(definition)) return (0, _easing.cubicBezier)(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition]) return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, _easing.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return 0, _utils.noopReturn;
}

},{"@motionone/easing":"k1EJx","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1EJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierEsJs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsEsJs.steps));
var _cubicBezierEsJs = require("./cubic-bezier.es.js");
var _stepsEsJs = require("./steps.es.js");

},{"./cubic-bezier.es.js":"ajXFr","./steps.es.js":"gpf57","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajXFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _utils = require("@motionone/utils");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _utils.noopReturn;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpf57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "steps", ()=>steps);
var _utils = require("@motionone/utils");
const steps = (steps1, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps1;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, _utils.clamp)(0, 1, rounded / steps1);
    };

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45L34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertEasing", ()=>convertEasing);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
var _utils = require("@motionone/utils");
const convertEasing = (easing)=>(0, _utils.isCubicBezier)(easing) ? cubicBezierAsString(easing) : easing;
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98zUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supports", ()=>supports);
const testAnimation = (keyframes)=>document.createElement("div").animate(keyframes, {
        duration: 0.001
    });
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }).finished)
};
const results = {};
const supports = {};
for(const key in featureTests)supports[key] = ()=>{
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1Tay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hydrateKeyframes", ()=>hydrateKeyframes);
parcelHelpers.export(exports, "keyframesList", ()=>keyframesList);
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++)if (keyframes[i] === null) keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYtky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "style", ()=>style);
var _cssVarEsJs = require("./utils/css-var.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _transformsEsJs = require("./utils/transforms.es.js");
const style = {
    get: (element, name)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        let value = (0, _cssVarEsJs.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = (0, _transformsEsJs.transformDefinitions).get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        if ((0, _cssVarEsJs.isCssVar)(name)) element.style.setProperty(name, value);
        else element.style[name] = value;
    }
};

},{"./utils/css-var.es.js":"eE8uy","./utils/get-style-name.es.js":"ksBTX","./utils/transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStyleName", ()=>getStyleName);
var _transformsEsJs = require("./transforms.es.js");
function getStyleName(key) {
    if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
    return (0, _transformsEsJs.isTransform)(key) ? (0, _transformsEsJs.asTransformCssVar)(key) : key;
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jktqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stopAnimation", ()=>stopAnimation);
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) animation.stop();
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCKN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptions", ()=>getOptions);
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KZgGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else elements = document.querySelectorAll(elements);
    } else if (elements instanceof Element) elements = [
        elements
    ];
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39ePr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controls", ()=>controls);
parcelHelpers.export(exports, "withControls", ()=>withControls);
var _utils = require("@motionone/utils");
var _stopAnimationEsJs = require("./stop-animation.es.js");
const createAnimation = (factory)=>factory();
const withControls = (animationFactory, options, duration = (0, _utils.defaults).duration)=>{
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const getActiveAnimation = (state)=>state.animations[0];
const controls = {
    get: (target, key)=>{
        const activeAnimation = getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return (0, _utils.time).s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) target.finished = Promise.all(target.animations.map(selectFinished)).catch((0, _utils.noop));
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, _stopAnimationEsJs.stopAnimation)(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = (0, _utils.time).ms(value);
            case "currentTime":
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++)target.animations[i][key] = value;
                return true;
        }
        return false;
    }
};
const selectFinished = (animation)=>animation.finished;

},{"@motionone/utils":"krBNu","./stop-animation.es.js":"jktqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihQdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFromIndex", ()=>getFromIndex);
parcelHelpers.export(exports, "resolveOption", ()=>resolveOption);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function stagger(duration = 0.1, { start =0 , from =0 , easing  } = {}) {
    return (i, total)=>{
        const fromIndex = (0, _utils.isNumber)(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, _animation.getEasingFunction)(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return typeof option === "function" ? option(i, total) : option;
}

},{"@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3Ike":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimationsFromTimeline", ()=>createAnimationsFromTimeline);
parcelHelpers.export(exports, "timeline", ()=>timeline);
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _staggerEsJs = require("../utils/stagger.es.js");
var _animateStyleEsJs = require("../animate/animate-style.es.js");
var _controlsEsJs = require("../animate/utils/controls.es.js");
var _keyframesEsJs = require("../animate/utils/keyframes.es.js");
var _optionsEsJs = require("../animate/utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _transformsEsJs = require("../animate/utils/transforms.es.js");
var _calcTimeEsJs = require("./utils/calc-time.es.js");
var _editEsJs = require("./utils/edit.es.js");
var _sortEsJs = require("./utils/sort.es.js");
function timeline(definition1, options = {}) {
    var _a;
    const animationDefinitions = createAnimationsFromTimeline(definition1, options);
    /**
     * Create and start animations
     */ const animationFactories = animationDefinitions.map((definition)=>(0, _animateStyleEsJs.animateStyle)(...definition)).filter(Boolean);
    return (0, _controlsEsJs.withControls)(animationFactories, options, // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration);
}
function createAnimationsFromTimeline(definition, _a = {}) {
    var { defaultOptions ={}  } = _a, timelineOptions = (0, _tslib.__rest)(_a, [
        "defaultOptions"
    ]);
    const animationDefinitions = [];
    const elementSequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the definition array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i1 = 0; i1 < definition.length; i1++){
        const segment = definition[i1];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if ((0, _utils.isString)(segment)) {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, _calcTimeEsJs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        const [elementDefinition, keyframes, options = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (options.at !== undefined) currentTime = (0, _calcTimeEsJs.calcNextTime)(currentTime, options.at, prevTime, timeLabels);
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        /**
         * Find all the elements specified in the definition and parse value
         * keyframes from their timeline definitions.
         */ const elements = (0, _resolveElementsEsJs.resolveElements)(elementDefinition, elementCache);
        const numElements = elements.length;
        for(let elementIndex = 0; elementIndex < numElements; elementIndex++){
            const element = elements[elementIndex];
            const elementSequence = getElementSequence(element, elementSequences);
            for(const key in keyframes){
                const valueSequence = getValueSequence(key, elementSequence);
                let valueKeyframes = (0, _keyframesEsJs.keyframesList)(keyframes[key]);
                const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
                let { duration =defaultOptions.duration || (0, _utils.defaults).duration , easing =defaultOptions.easing || (0, _utils.defaults).easing ,  } = valueOptions;
                if ((0, _utils.isEasingGenerator)(easing)) {
                    const valueIsTransform = (0, _transformsEsJs.isTransform)(key);
                    (0, _heyListen.invariant)(valueKeyframes.length === 2 || !valueIsTransform, "spring must be provided 2 keyframes within timeline");
                    const custom = easing.createAnimation(valueKeyframes, // TODO We currently only support explicit keyframes
                    // so this doesn't currently read from the DOM
                    ()=>"0", valueIsTransform);
                    easing = custom.easing;
                    if (custom.keyframes !== undefined) valueKeyframes = custom.keyframes;
                    if (custom.duration !== undefined) duration = custom.duration;
                }
                const delay = (0, _staggerEsJs.resolveOption)(options.delay, elementIndex, numElements) || 0;
                const startTime = currentTime + delay;
                const targetTime = startTime + duration;
                /**
                 *
                 */ let { offset =(0, _utils.defaultOffset)(valueKeyframes.length)  } = valueOptions;
                /**
                 * If there's only one offset of 0, fill in a second with length 1
                 *
                 * TODO: Ensure there's a test that covers this removal
                 */ if (offset.length === 1 && offset[0] === 0) offset[1] = 1;
                /**
                 * Fill out if offset if fewer offsets than keyframes
                 */ const remainder = length - valueKeyframes.length;
                remainder > 0 && (0, _utils.fillOffset)(offset, remainder);
                /**
                 * If only one value has been set, ie [1], push a null to the start of
                 * the keyframe array. This will let us mark a keyframe at this point
                 * that will later be hydrated with the previous value.
                 */ valueKeyframes.length === 1 && valueKeyframes.unshift(null);
                /**
                 * Add keyframes, mapping offsets to absolute time.
                 */ (0, _editEsJs.addKeyframes)(valueSequence, valueKeyframes, easing, offset, startTime, targetTime);
                maxDuration = Math.max(delay + duration, maxDuration);
                totalDuration = Math.max(targetTime, totalDuration);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ elementSequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort((0, _sortEsJs.compareByTime));
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at , value , easing  } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, _utils.progress)(0, totalDuration, at));
                valueEasing.push(easing || (0, _utils.defaults).easing);
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift("linear");
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            animationDefinitions.push([
                element,
                key,
                keyframes,
                Object.assign(Object.assign(Object.assign({}, defaultOptions), {
                    duration: totalDuration,
                    easing: valueEasing,
                    offset: valueOffset
                }), timelineOptions), 
            ]);
        }
    });
    return animationDefinitions;
}
function getElementSequence(element, sequences) {
    !sequences.has(element) && sequences.set(element, {});
    return sequences.get(element);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}

},{"tslib":"lRdW5","hey-listen":"8yK8Z","@motionone/utils":"krBNu","../utils/stagger.es.js":"ihQdi","../animate/animate-style.es.js":"3Iur2","../animate/utils/controls.es.js":"39ePr","../animate/utils/keyframes.es.js":"e1Tay","../animate/utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","../animate/utils/transforms.es.js":"3akS9","./utils/calc-time.es.js":"fvV2P","./utils/edit.es.js":"iQMGd","./utils/sort.es.js":"fCgRH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvV2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcNextTime", ()=>calcNextTime);
var _utils = require("@motionone/utils");
function calcNextTime(current, next, prev, labels) {
    var _a;
    if ((0, _utils.isNumber)(next)) return next;
    else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
    else if (next === "<") return prev;
    else return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQMGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeyframes", ()=>addKeyframes);
parcelHelpers.export(exports, "eraseKeyframes", ()=>eraseKeyframes);
var _utils = require("@motionone/utils");
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, _utils.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++)sequence.push({
        value: keyframes[i],
        at: (0, _utils.mix)(startTime, endTime, offset[i]),
        easing: (0, _utils.getEasingForSegment)(easing, i)
    });
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByTime", ()=>compareByTime);
function compareByTime(a, b) {
    if (a.at === b.at) return a.value === null ? 1 : -1;
    else return a.at - b.at;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31qfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _generators = require("@motionone/generators");
var _createGeneratorEasingEsJs = require("../create-generator-easing.es.js");
const spring = (0, _createGeneratorEasingEsJs.createGeneratorEasing)((0, _generators.spring));

},{"@motionone/generators":"17PnZ","../create-generator-easing.es.js":"deZka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17PnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs.glide));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs1.spring));
parcelHelpers.export(exports, "pregenerateKeyframes", ()=>(0, _pregenerateKeyframesEsJs.pregenerateKeyframes));
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>(0, _velocityEsJs.calcGeneratorVelocity));
var _indexEsJs = require("./glide/index.es.js");
var _indexEsJs1 = require("./spring/index.es.js");
var _pregenerateKeyframesEsJs = require("./utils/pregenerate-keyframes.es.js");
var _velocityEsJs = require("./utils/velocity.es.js");

},{"./glide/index.es.js":"25xtk","./spring/index.es.js":"1gwOH","./utils/pregenerate-keyframes.es.js":"60YU3","./utils/velocity.es.js":"c9uks","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25xtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>glide);
var _utils = require("@motionone/utils");
var _velocityEsJs = require("../utils/velocity.es.js");
var _indexEsJs = require("../spring/index.es.js");
const glide = ({ from =0 , velocity =0.0 , power =0.8 , decay =0.325 , bounceDamping , bounceStiffness , changeTarget , min , max , restDistance =0.5 , restSpeed ,  })=>{
    decay = (0, _utils.time).ms(decay);
    const state = {
        hasReachedTarget: false,
        done: false,
        current: from,
        target: from
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = changeTarget === undefined ? ideal : changeTarget(ideal);
    state.target = target;
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - from;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / decay);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDistance;
        state.current = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.current)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _indexEsJs.spring)({
            from: state.current,
            to: nearestBoundary(state.current),
            velocity: (0, _velocityEsJs.calcGeneratorVelocity)(calcLatest, t, state.current),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDistance,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return (t)=>{
        /**
         * We need to resolve the friction to figure out if we need a
         * spring but we don't want to do this twice per frame. So here
         * we flag if we updated for this frame and later if we did
         * we can skip doing it again.
         */ let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === undefined) {
            hasUpdatedFrame = true;
            applyFriction(t);
            checkCatchBoundary(t);
        }
        /**
         * If we have a spring and the provided t is beyond the moment the friction
         * animation crossed the min/max boundary, use the spring.
         */ if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
            state.hasReachedTarget = true;
            return spring$1(t - timeReachedBoundary);
        } else {
            state.hasReachedTarget = false;
            !hasUpdatedFrame && applyFriction(t);
            return state;
        }
    };
};

},{"@motionone/utils":"krBNu","../utils/velocity.es.js":"c9uks","../spring/index.es.js":"1gwOH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9uks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>calcGeneratorVelocity);
var _utils = require("@motionone/utils");
const sampleT = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - sampleT, 0);
    return (0, _utils.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gwOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _utils = require("@motionone/utils");
var _defaultsEsJs = require("./defaults.es.js");
var _utilsEsJs = require("./utils.es.js");
var _hasReachedTargetEsJs = require("../utils/has-reached-target.es.js");
var _velocityEsJs = require("../utils/velocity.es.js");
const spring = ({ stiffness =(0, _defaultsEsJs.defaults).stiffness , damping =(0, _defaultsEsJs.defaults).damping , mass =(0, _defaultsEsJs.defaults).mass , from =0 , to =1 , velocity =0.0 , restSpeed =2 , restDistance =0.5 ,  } = {})=>{
    velocity = velocity ? (0, _utils.time).s(velocity) : 0.0;
    const state = {
        done: false,
        hasReachedTarget: false,
        current: from,
        target: to
    };
    const initialDelta = to - from;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    const dampingRatio = (0, _utilsEsJs.calcDampingRatio)(stiffness, damping, mass);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        // Underdamped spring (bouncy)
        resolveSpring = (t)=>to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    } else // Critically damped spring
    resolveSpring = (t)=>{
        return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
    return (t)=>{
        state.current = resolveSpring(t);
        const currentVelocity = t === 0 ? velocity : (0, _velocityEsJs.calcGeneratorVelocity)(resolveSpring, t, state.current);
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        state.hasReachedTarget = (0, _hasReachedTargetEsJs.hasReachedTarget)(from, to, state.current);
        return state;
    };
};

},{"@motionone/utils":"krBNu","./defaults.es.js":"eXwH5","./utils.es.js":"5MLtH","../utils/has-reached-target.es.js":"1oJKA","../utils/velocity.es.js":"c9uks","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXwH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    stiffness: 100.0,
    damping: 10.0,
    mass: 1.0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MLtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcDampingRatio", ()=>calcDampingRatio);
var _defaultsEsJs = require("./defaults.es.js");
const calcDampingRatio = (stiffness = (0, _defaultsEsJs.defaults).stiffness, damping = (0, _defaultsEsJs.defaults).damping, mass = (0, _defaultsEsJs.defaults).mass)=>damping / (2 * Math.sqrt(stiffness * mass));

},{"./defaults.es.js":"eXwH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oJKA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReachedTarget", ()=>hasReachedTarget);
function hasReachedTarget(origin, target, current) {
    return origin < target && current >= target || origin > target && current <= target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60YU3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pregenerateKeyframes", ()=>pregenerateKeyframes);
const timeStep = 10;
const maxDuration = 10000;
function pregenerateKeyframes(generator) {
    let overshootDuration = undefined;
    let timestamp = timeStep;
    let state = generator(0);
    const keyframes = [
        state.current
    ];
    while(!state.done && timestamp < maxDuration){
        state = generator(timestamp);
        keyframes.push(state.done ? state.target : state.current);
        if (overshootDuration === undefined && state.hasReachedTarget) overshootDuration = timestamp;
        timestamp += timeStep;
    }
    const duration = timestamp - timeStep;
    /**
     * If generating an animation that didn't actually move,
     * generate a second keyframe so we have an origin and target.
     */ if (keyframes.length === 1) keyframes.push(state.current);
    return {
        keyframes,
        duration: duration / 1000,
        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"deZka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createGeneratorEasing", ()=>createGeneratorEasing);
var _generators = require("@motionone/generators");
function createGeneratorEasing(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {})=>{
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false)=>{
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) generatorCache.set(key, createGenerator(Object.assign({
                from,
                to,
                velocity,
                restSpeed: isScale ? 0.05 : 2,
                restDistance: isScale ? 0.01 : 0.5
            }, options)));
            return generatorCache.get(key);
        };
        const getKeyframes = (generator)=>{
            if (!keyframesCache.has(generator)) keyframesCache.set(generator, (0, _generators.pregenerateKeyframes)(generator));
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, getOrigin, canUseGenerator, name, motionValue)=>{
                var _a, _b;
                let settings;
                const numKeyframes = keyframes.length;
                let shouldUseGenerator = canUseGenerator && numKeyframes <= 2 && keyframes.every(isNumberOrNull);
                if (shouldUseGenerator) {
                    const target = keyframes[numKeyframes - 1];
                    const unresolvedOrigin = numKeyframes === 1 ? null : keyframes[0];
                    let velocity = 0;
                    let origin = 0;
                    const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                    if (prevGenerator) {
                        /**
                         * If we have a generator for this value we can use it to resolve
                         * the animations's current value and velocity.
                         */ const { animation , generatorStartTime  } = motionValue;
                        const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                        const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                        const prevGeneratorCurrent = prevGenerator(currentTime).current;
                        origin = (_a = unresolvedOrigin) !== null && _a !== void 0 ? _a : prevGeneratorCurrent;
                        if (numKeyframes === 1 || numKeyframes === 2 && keyframes[0] === null) velocity = (0, _generators.calcGeneratorVelocity)((t)=>prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                    } else origin = (_b = unresolvedOrigin) !== null && _b !== void 0 ? _b : parseFloat(getOrigin());
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    const keyframesMetadata = getKeyframes(generator);
                    settings = Object.assign(Object.assign({}, keyframesMetadata), {
                        easing: "linear"
                    });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                } else {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration
                    };
                }
                return settings;
            }
        };
    };
}
const isNumberOrNull = (value)=>typeof value !== "string";

},{"@motionone/generators":"17PnZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6w57n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>glide);
var _generators = require("@motionone/generators");
var _createGeneratorEasingEsJs = require("../create-generator-easing.es.js");
const glide = (0, _createGeneratorEasingEsJs.createGeneratorEasing)((0, _generators.glide));

},{"@motionone/generators":"17PnZ","../create-generator-easing.es.js":"deZka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjZoF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
const thresholds = {
    any: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root , margin: rootMargin , amount ="any"  } = {}) {
    /**
     * If this browser doesn't support IntersectionObserver, return a dummy stop function.
     * Default triggering of onStart is tricky - it could be used for starting/stopping
     * videos, lazy loading content etc. We could provide an option to enable a fallback, or
     * provide a fallback callback option.
     */ if (typeof IntersectionObserver === "undefined") return ()=>{};
    const elements = (0, _resolveElementsEsJs.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") activeIntersections.set(entry.target, newOnEnd);
                else observer.unobserve(entry.target);
            } else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}

},{"../utils/resolve-elements.es.js":"KZgGT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ucYu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resize", ()=>resize);
var _handleElementEsJs = require("./handle-element.es.js");
var _handleWindowEsJs = require("./handle-window.es.js");
function resize(a, b) {
    return typeof a === "function" ? (0, _handleWindowEsJs.resizeWindow)(a) : (0, _handleElementEsJs.resizeElement)(a, b);
}

},{"./handle-element.es.js":"aRilw","./handle-window.es.js":"jcB2n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRilw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeElement", ()=>resizeElement);
var _resolveElementsEsJs = require("../../utils/resolve-elements.es.js");
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize , blockSize  } = borderBoxSize[0];
        return {
            width: inlineSize,
            height: blockSize
        };
    } else if (target instanceof SVGElement && "getBBox" in target) return target.getBBox();
    else return {
        width: target.offsetWidth,
        height: target.offsetHeight
    };
}
function notifyTarget({ target , contentRect , borderBoxSize ,  }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 || _a.forEach((handler)=>{
        handler({
            target,
            contentSize: contentRect,
            get size () {
                return getElementSize(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, _resolveElementsEsJs.resolveElements)(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 || observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 || elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) observer === null || observer === void 0 || observer.unobserve(element);
        });
    };
}

},{"../../utils/resolve-elements.es.js":"KZgGT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcB2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeWindow", ()=>resizeWindow);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const info = {
            target: window,
            size,
            contentSize: size
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) windowResizeHandler = undefined;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fySeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scroll", ()=>scroll);
var _tslib = require("tslib");
var _indexEsJs = require("../resize/index.es.js");
var _infoEsJs = require("./info.es.js");
var _onScrollHandlerEsJs = require("./on-scroll-handler.es.js");
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.documentElement ? window : element;
function scroll(onScroll, _a1 = {}) {
    var { container =document.documentElement  } = _a1, options = (0, _tslib.__rest)(_a1, [
        "container"
    ]);
    let containerHandlers1 = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers1) {
        containerHandlers1 = new Set();
        onScrollHandlers.set(container, containerHandlers1);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, _infoEsJs.createScrollInfo)();
    const containerHandler = (0, _onScrollHandlerEsJs.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers1.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const listener = ()=>{
            const time = performance.now();
            for (const handler of containerHandlers1)handler.measure();
            for (const handler1 of containerHandlers1)handler1.update(time);
            for (const handler2 of containerHandlers1)handler2.notify();
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) resizeListeners.set(container, (0, _indexEsJs.resize)(container, listener));
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const listener1 = scrollListeners.get(container);
    const onLoadProcesss = requestAnimationFrame(listener1);
    return ()=>{
        var _a;
        if (typeof onScroll !== "function") onScroll.stop();
        cancelAnimationFrame(onLoadProcesss);
        /**
         * Check if we even have any handlers for this container.
         */ const containerHandlers = onScrollHandlers.get(container);
        if (!containerHandlers) return;
        containerHandlers.delete(containerHandler);
        if (containerHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const listener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (listener) {
            getEventTarget(container).removeEventListener("scroll", listener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 || _a();
            window.removeEventListener("resize", listener);
        }
    };
}

},{"tslib":"lRdW5","../resize/index.es.js":"3ucYu","./info.es.js":"eDt4T","./on-scroll-handler.es.js":"8Y3X4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDt4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createScrollInfo", ()=>createScrollInfo);
parcelHelpers.export(exports, "updateScrollInfo", ()=>updateScrollInfo);
var _utils = require("@motionone/utils");
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length , position  } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, _utils.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, _utils.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Y3X4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOnScrollHandler", ()=>createOnScrollHandler);
var _utils = require("@motionone/utils");
var _infoEsJs = require("./info.es.js");
var _indexEsJs = require("./offsets/index.es.js");
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node != container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    const axis = options.axis || "y";
    return {
        measure: ()=>measure(element, options.target, info),
        update: (time)=>{
            (0, _infoEsJs.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) (0, _indexEsJs.resolveOffsets)(element, info, options);
        },
        notify: typeof onScroll === "function" ? ()=>onScroll(info) : scrubAnimation(onScroll, info[axis])
    };
}
function scrubAnimation(controls, axisInfo) {
    controls.pause();
    controls.forEachNative((animation, { easing  })=>{
        var _a, _b;
        if (animation.updateDuration) {
            if (!easing) animation.easing = (0, _utils.noopReturn);
            animation.updateDuration(1);
        } else {
            const timingOptions = {
                duration: 1000
            };
            if (!easing) timingOptions.easing = "linear";
            (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 || _b.call(_a, timingOptions);
        }
    });
    return ()=>{
        controls.currentTime = axisInfo.progress;
    };
}

},{"@motionone/utils":"krBNu","./info.es.js":"eDt4T","./offsets/index.es.js":"5Sl1H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Sl1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffsets", ()=>resolveOffsets);
var _utils = require("@motionone/utils");
var _insetEsJs = require("./inset.es.js");
var _presetsEsJs = require("./presets.es.js");
var _offsetEsJs = require("./offset.es.js");
const point = {
    x: 0,
    y: 0
};
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = (0, _presetsEsJs.ScrollOffset).All  } = options;
    const { target =container , axis ="y"  } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, _insetEsJs.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : {
        width: target.clientWidth,
        height: target.clientHeight
    };
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, _offsetEsJs.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, _utils.interpolate)((0, _utils.defaultOffset)(numOffsets), info[axis].offset);
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}

},{"@motionone/utils":"krBNu","./inset.es.js":"iYtaW","./presets.es.js":"gHEKo","./offset.es.js":"iuNov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYtaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcInset", ()=>calcInset);
function calcInset(element, container) {
    let inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
            const { top , left  } = current.getBBox();
            inset.x += left;
            inset.y += top;
            /**
             * Assign the next parent element as the <svg /> tag.
             */ while(current && current.tagName !== "svg")current = current.parentNode;
        }
    }
    return inset;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHEKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollOffset", ()=>ScrollOffset);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ], 
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ], 
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ], 
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ], 
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuNov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffset", ()=>resolveOffset);
var _utils = require("@motionone/utils");
var _edgeEsJs = require("./edge.es.js");
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if ((0, _utils.isNumber)(offset)) /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
        offset,
        offset
    ];
    else if ((0, _utils.isString)(offset)) {
        offset = offset.trim();
        if (offset.includes(" ")) offsetDefinition = offset.split(" ");
        else /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
            offset,
            (0, _edgeEsJs.namedEdges)[offset] ? offset : `0`
        ];
    }
    targetPoint = (0, _edgeEsJs.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, _edgeEsJs.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}

},{"@motionone/utils":"krBNu","./edge.es.js":"2pTUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pTUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "namedEdges", ()=>namedEdges);
parcelHelpers.export(exports, "resolveEdge", ()=>resolveEdge);
var _utils = require("@motionone/utils");
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (namedEdges[edge] !== undefined) edge = namedEdges[edge];
    /**
     * Handle unit values
     */ if ((0, _utils.isString)(edge)) {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) delta = asNumber;
        else if (edge.endsWith("%")) edge = asNumber / 100;
        else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
        else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
        else edge = asNumber;
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if ((0, _utils.isNumber)(edge)) delta = length * edge;
    return inset + delta;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62kdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionState", ()=>createMotionState);
parcelHelpers.export(exports, "mountedStates", ()=>mountedStates);
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _animateStyleEsJs = require("../animate/animate-style.es.js");
var _styleEsJs = require("../animate/style.es.js");
var _optionsEsJs = require("../animate/utils/options.es.js");
var _hasChangedEsJs = require("./utils/has-changed.es.js");
var _resolveVariantEsJs = require("./utils/resolve-variant.es.js");
var _scheduleEsJs = require("./utils/schedule.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _hoverEsJs = require("./gestures/hover.es.js");
var _pressEsJs = require("./gestures/press.es.js");
var _eventsEsJs = require("./utils/events.es.js");
const gestures = {
    inView: (0, _inViewEsJs.inView),
    hover: (0, _hoverEsJs.hover),
    press: (0, _pressEsJs.press)
};
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */ const stateTypes = [
    "initial",
    "animate",
    ...Object.keys(gestures),
    "exit"
];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */ const mountedStates = new WeakMap();
function createMotionState(options = {}, parent) {
    /**
     * The element represented by the motion state. This is an empty reference
     * when we create the state to support SSR and allow for later mounting
     * in view libraries.
     *
     * @ts-ignore
     */ let element;
    /**
     * Calculate a depth that we can use to order motion states by tree depth.
     */ let depth = parent ? parent.getDepth() + 1 : 0;
    /**
     * Track which states are currently active.
     */ const activeStates = {
        initial: true,
        animate: true
    };
    /**
     * A map of functions that, when called, will remove event listeners for
     * a given gesture.
     */ const gestureSubscriptions = {};
    /**
     * Initialise a context to share through motion states. This
     * will be populated by variant names (if any).
     */ const context = {};
    for (const name1 of stateTypes)context[name1] = typeof options[name1] === "string" ? options[name1] : parent === null || parent === void 0 ? void 0 : parent.getContext()[name1];
    /**
     * If initial is set to false we use the animate prop as the initial
     * animation state.
     */ const initialVariantSource = options.initial === false ? "animate" : "initial";
    /**
     * Destructure an initial target out from the resolved initial variant.
     */ let _a1 = (0, _resolveVariantEsJs.resolveVariant)(options[initialVariantSource] || context[initialVariantSource], options.variants) || {}, target = (0, _tslib.__rest)(_a1, [
        "transition"
    ]);
    /**
     * The base target is a cached map of values that we'll use to animate
     * back to if a value is removed from all active state types. This
     * is usually the initial value as read from the DOM, for instance if
     * it hasn't been defined in initial.
     */ const baseTarget = Object.assign({}, target);
    /**
     * A generator that will be processed by the global animation scheduler.
     * This yeilds when it switches from reading the DOM to writing to it
     * to prevent layout thrashing.
     */ function* animateUpdates() {
        var _a2, _b;
        const prevTarget = target;
        target = {};
        const animationOptions = {};
        for (const name of stateTypes){
            if (!activeStates[name]) continue;
            const variant = (0, _resolveVariantEsJs.resolveVariant)(options[name]);
            if (!variant) continue;
            for(const key in variant){
                if (key === "transition") continue;
                target[key] = variant[key];
                animationOptions[key] = (0, _optionsEsJs.getOptions)((_b = (_a2 = variant.transition) !== null && _a2 !== void 0 ? _a2 : options.transition) !== null && _b !== void 0 ? _b : {}, key);
            }
        }
        const allTargetKeys = new Set([
            ...Object.keys(target),
            ...Object.keys(prevTarget), 
        ]);
        const animationFactories = [];
        allTargetKeys.forEach((key)=>{
            var _a;
            if (target[key] === undefined) target[key] = baseTarget[key];
            if ((0, _hasChangedEsJs.hasChanged)(prevTarget[key], target[key])) {
                (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : baseTarget[key] = (0, _styleEsJs.style).get(element, key);
                animationFactories.push((0, _animateStyleEsJs.animateStyle)(element, key, target[key], animationOptions[key]));
            }
        });
        // Wait for all animation states to read from the DOM
        yield;
        const animations = animationFactories.map((factory)=>factory()).filter(Boolean);
        if (!animations.length) return;
        const animationTarget = target;
        element.dispatchEvent((0, _eventsEsJs.motionEvent)("motionstart", animationTarget));
        Promise.all(animations.map((animation)=>animation.finished)).then(()=>{
            element.dispatchEvent((0, _eventsEsJs.motionEvent)("motioncomplete", animationTarget));
        }).catch((0, _utils.noop));
    }
    const setGesture = (name, isActive)=>()=>{
            activeStates[name] = isActive;
            (0, _scheduleEsJs.scheduleAnimation)(state);
        };
    const updateGestureSubscriptions = ()=>{
        for(const name in gestures){
            const isGestureActive = gestures[name].isActive(options);
            const remove = gestureSubscriptions[name];
            if (isGestureActive && !remove) gestureSubscriptions[name] = gestures[name].subscribe(element, {
                enable: setGesture(name, true),
                disable: setGesture(name, false)
            }, options);
            else if (!isGestureActive && remove) {
                remove();
                delete gestureSubscriptions[name];
            }
        }
    };
    const state = {
        update: (newOptions)=>{
            if (!element) return;
            options = newOptions;
            updateGestureSubscriptions();
            (0, _scheduleEsJs.scheduleAnimation)(state);
        },
        setActive: (name, isActive)=>{
            if (!element) return;
            activeStates[name] = isActive;
            (0, _scheduleEsJs.scheduleAnimation)(state);
        },
        animateUpdates,
        getDepth: ()=>depth,
        getTarget: ()=>target,
        getOptions: ()=>options,
        getContext: ()=>context,
        mount: (newElement)=>{
            (0, _heyListen.invariant)(Boolean(newElement), "Animation state must be mounted with valid Element");
            element = newElement;
            mountedStates.set(element, state);
            updateGestureSubscriptions();
            return ()=>{
                mountedStates.delete(element);
                (0, _scheduleEsJs.unscheduleAnimation)(state);
                for(const key in gestureSubscriptions)gestureSubscriptions[key]();
            };
        },
        isMounted: ()=>Boolean(element)
    };
    return state;
}

},{"tslib":"lRdW5","hey-listen":"8yK8Z","@motionone/utils":"krBNu","../animate/animate-style.es.js":"3Iur2","../animate/style.es.js":"gYtky","../animate/utils/options.es.js":"fCKN3","./utils/has-changed.es.js":"iYOpx","./utils/resolve-variant.es.js":"1fRlC","./utils/schedule.es.js":"NJrJF","./gestures/in-view.es.js":"74O7b","./gestures/hover.es.js":"1t5Lv","./gestures/press.es.js":"7xW6Y","./utils/events.es.js":"2uqa6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYOpx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "shallowCompare", ()=>shallowCompare);
function hasChanged(a, b) {
    if (typeof a !== typeof b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return !shallowCompare(a, b);
    return a !== b;
}
function shallowCompare(next, prev) {
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fRlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _isVariantEsJs = require("./is-variant.es.js");
function resolveVariant(definition, variants) {
    if ((0, _isVariantEsJs.isVariant)(definition)) return definition;
    else if (definition && variants) return variants[definition];
}

},{"./is-variant.es.js":"cpoLp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpoLp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariant", ()=>isVariant);
function isVariant(definition) {
    return typeof definition === "object";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NJrJF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleAnimation", ()=>scheduleAnimation);
parcelHelpers.export(exports, "unscheduleAnimation", ()=>unscheduleAnimation);
var _utils = require("@motionone/utils");
let scheduled = undefined;
function processScheduledAnimations() {
    if (!scheduled) return;
    const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
    generators.forEach(fireNext);
    generators.forEach(fireNext);
    scheduled = undefined;
}
function scheduleAnimation(state) {
    if (!scheduled) {
        scheduled = [
            state
        ];
        requestAnimationFrame(processScheduledAnimations);
    } else (0, _utils.addUniqueItem)(scheduled, state);
}
function unscheduleAnimation(state) {
    scheduled && (0, _utils.removeItem)(scheduled, state);
}
const compareByDepth = (a, b)=>a.getDepth() - b.getDepth();
const fireAnimateUpdates = (state)=>state.animateUpdates();
const fireNext = (iterator)=>iterator.next();

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74O7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _tslib = require("tslib");
var _eventsEsJs = require("../utils/events.es.js");
var _inViewEsJs = require("../../gestures/in-view.es.js");
const inView = {
    isActive: (options)=>Boolean(options.inView),
    subscribe: (element, { enable , disable  }, { inViewOptions ={}  })=>{
        const { once  } = inViewOptions, viewOptions = (0, _tslib.__rest)(inViewOptions, [
            "once"
        ]);
        return (0, _inViewEsJs.inView)(element, (enterEntry)=>{
            enable();
            (0, _eventsEsJs.dispatchViewEvent)(element, "viewenter", enterEntry);
            if (!once) return (leaveEntry)=>{
                disable();
                (0, _eventsEsJs.dispatchViewEvent)(element, "viewleave", leaveEntry);
            };
        }, viewOptions);
    }
};

},{"tslib":"lRdW5","../utils/events.es.js":"2uqa6","../../gestures/in-view.es.js":"gjZoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uqa6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatchPointerEvent", ()=>dispatchPointerEvent);
parcelHelpers.export(exports, "dispatchViewEvent", ()=>dispatchViewEvent);
parcelHelpers.export(exports, "motionEvent", ()=>motionEvent);
const motionEvent = (name, target)=>new CustomEvent(name, {
        detail: {
            target
        }
    });
function dispatchPointerEvent(element, name, event) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEvent: event
        }
    }));
}
function dispatchViewEvent(element, name, entry) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEntry: entry
        }
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1t5Lv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>hover);
var _eventsEsJs = require("../utils/events.es.js");
const mouseEvent = (element, name, action)=>(event)=>{
        if (event.pointerType && event.pointerType !== "mouse") return;
        action();
        (0, _eventsEsJs.dispatchPointerEvent)(element, name, event);
    };
const hover = {
    isActive: (options)=>Boolean(options.hover),
    subscribe: (element, { enable , disable  })=>{
        const onEnter = mouseEvent(element, "hoverstart", enable);
        const onLeave = mouseEvent(element, "hoverend", disable);
        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        return ()=>{
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
        };
    }
};

},{"../utils/events.es.js":"2uqa6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xW6Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "press", ()=>press);
var _eventsEsJs = require("../utils/events.es.js");
const press = {
    isActive: (options)=>Boolean(options.press),
    subscribe: (element, { enable , disable  })=>{
        const onPointerUp = (event)=>{
            disable();
            (0, _eventsEsJs.dispatchPointerEvent)(element, "pressend", event);
            window.removeEventListener("pointerup", onPointerUp);
        };
        const onPointerDown = (event)=>{
            enable();
            (0, _eventsEsJs.dispatchPointerEvent)(element, "pressstart", event);
            window.addEventListener("pointerup", onPointerUp);
        };
        element.addEventListener("pointerdown", onPointerDown);
        return ()=>{
            element.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }
};

},{"../utils/events.es.js":"2uqa6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejYmc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStyles", ()=>createStyles);
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./transforms.es.js");
function createStyles(keyframes) {
    const initialKeyframes = {};
    const transformKeys = [];
    for(let key in keyframes){
        const value = keyframes[key];
        if ((0, _transformsEsJs.isTransform)(key)) {
            if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
            transformKeys.push(key);
            key = (0, _transformsEsJs.asTransformCssVar)(key);
        }
        let initialKeyframe = Array.isArray(value) ? value[0] : value;
        /**
         * If this is a number and we have a default value type, convert the number
         * to this type.
         */ const definition = (0, _transformsEsJs.transformDefinitions).get(key);
        if (definition) initialKeyframe = (0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value;
        initialKeyframes[key] = initialKeyframe;
    }
    if (transformKeys.length) initialKeyframes.transform = (0, _transformsEsJs.buildTransformTemplate)(transformKeys);
    return initialKeyframes;
}

},{"@motionone/utils":"krBNu","./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdmxE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStyleString", ()=>createStyleString);
var _styleObjectEsJs = require("./style-object.es.js");
const camelLetterToPipeLetter = (letter)=>`-${letter.toLowerCase()}`;
const camelToPipeCase = (str)=>str.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(target = {}) {
    const styles = (0, _styleObjectEsJs.createStyles)(target);
    let style = "";
    for(const key in styles){
        style += key.startsWith("--") ? key : camelToPipeCase(key);
        style += `: ${styles[key]}; `;
    }
    return style;
}

},{"./style-object.es.js":"ejYmc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEsDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animateProgress", ()=>animateProgress);
var _dom = require("@motionone/dom");
var _animation = require("@motionone/animation");
function animateProgress(target, options = {}) {
    return (0, _dom.withControls)([
        ()=>{
            const animation = new (0, _animation.Animation)(target, [
                0,
                1
            ], options);
            animation.finished.catch(()=>{});
            return animation;
        }, 
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = typeof target === "function" ? animateProgress : (0, _dom.animate);
    return factory(target, keyframesOrOptions, options);
}

},{"@motionone/dom":"krEZT","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZpCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function toggleFixedClass(navbar) {
    if (!(navbar instanceof HTMLElement)) return;
    if (window.pageYOffset !== 0) navbar.classList.add("fixed");
    else navbar.classList.remove("fixed");
}
document.addEventListener("scroll", ()=>{
    toggleFixedClass(document.getElementById("cepkoncept-navbar"));
});
document.body.onload = function() {
    toggleFixedClass(document.getElementById("cepkoncept-navbar"));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibI5z":[function(require,module,exports) {
// IMPORT ALL COMPONENT ROOT SCRIPTS
var _indexTs = require("./**/index.ts");
var _slider = require("~/src/scripts/slider");
"use strict";
const portrait = document.documentElement.clientWidth < document.documentElement.clientHeight;
const slider = new (0, _slider.Slider)("projects-slider", {
    focusPosition: portrait ? "center" : "start",
    animConfig: {
        duration: .5,
        easing: [
            .767,
            .01,
            .18,
            1.01
        ]
    }
});
function initPagination() {
    const pagination = document.querySelector(".projects-pagination");
    const children = Array.from(pagination?.children || []);
    if (!(pagination instanceof HTMLElement)) return;
    pagination.addEventListener("click", (event)=>{
        const next = children.findIndex((child)=>child === event.target);
        const curr = children.findIndex((child)=>child.classList.contains("active"));
        slider.jumpToSlide(next);
        if (children[next]) {
            children[curr]?.classList.toggle("active");
            children[next]?.classList.toggle("active");
        }
    });
}
initPagination();

},{"./**/index.ts":"aGwXc","~/src/scripts/slider":"jeEgb"}],"aGwXc":[function(require,module,exports) {
const _temp0 = require("../index.ts");
module.exports = {
    "undefined": _temp0
};

},{"../index.ts":"ibI5z"}],"jeEgb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slider", ()=>Slider);
var _motion = require("motion");
"use strict";
class Slider {
    constructor(sliderId, { focusPosition , animConfig , slideshowConfig ,  }){
        this.sliderId = sliderId;
        this.slideshowTimer = 0;
        this.listeners = [];
        this.playState = "pause";
        this.inView = false;
        const { slider , wrapper , focus  } = this.initializeSlider(sliderId);
        this.slider = slider;
        this.wrapper = wrapper;
        this.focus = focus;
        this.animConfig = animConfig;
        this.focusPosition = focusPosition;
        this.slideshowConfig = slideshowConfig;
        this.initializeListeners();
        this.initializeObservers();
    }
    initializeSlider(sliderId) {
        // RETRIEVE SLIDER COMPONENTS FROM THE DOM 
        const slider = document.querySelector(`[data-slider=${sliderId}]`);
        const wrapper = slider?.querySelector(`[data-wrapper]`);
        const focus = wrapper?.querySelector(`[data-focus]`);
        if (!(focus instanceof HTMLElement)) throw new Error("Focus not specified");
        if (!(wrapper instanceof HTMLElement)) throw new Error("Wrapper not specified");
        if (!(slider instanceof HTMLElement)) throw new Error("Slider not a HTMLElement");
        // SET REQUIRED STYLES
        slider.style.overflow = "hidden";
        slider.style.position = "relative";
        wrapper.style.display = "flex";
        wrapper.style.position = "absolute";
        return {
            slider,
            wrapper,
            focus
        };
    }
    initializeListeners() {
        const left = document.querySelector(`[data-left=${this.sliderId}]`);
        const right = document.querySelector(`[data-right=${this.sliderId}]`);
        left?.addEventListener("click", ()=>{
            this.jumpToSlide(this.currentSlideNo() - 1);
            this.move();
        });
        right?.addEventListener("click", ()=>{
            this.jumpToSlide(this.currentSlideNo() + 1);
            this.move();
        });
    }
    initializeObservers() {
        const resize = new ResizeObserver((_)=>this.move());
        resize.observe(this.slider);
        Array.from(this.wrapper.children).forEach((slide)=>resize.observe(slide));
        const intersection = new IntersectionObserver((entries)=>{
            this.inView = entries[0].isIntersecting;
            if (this.inView && this.playState == "play") this.beginSlideshow();
            else this.endSlideshow();
        }, {
            threshold: 1
        });
        intersection.observe(this.slider);
    }
    move() {
        // ANIMATE THE SLIDE IN FOCUS TO IT'S APPROPRIATE POSITION
        const offset = this.computeFocusPoint() - this.focus.offsetLeft - this.wrapper.offsetLeft;
        return (0, _motion.animate)(this.wrapper, {
            x: offset
        }, this.animConfig);
    }
    changeFocus(index) {
        // DO NOT CHANGE FOCUS IF NEW INDEX OUT OF RANGE
        const prevFocus = this.focus; // STORE CURRENT FOCUS AS PREVIOS FOCUS
        const newFocus = this.wrapper.children[index]; // GET NEW FOCUS | NULL IF INDEX OUT OF RANGE
        if (!(newFocus instanceof HTMLElement)) return {
            prev: prevFocus,
            focus: prevFocus
        };
        prevFocus.toggleAttribute("data-focus");
        newFocus.toggleAttribute("data-focus");
        this.focus = newFocus;
        return {
            prev: prevFocus,
            focus: newFocus
        };
    }
    computeFocusPoint() {
        // CALCULATES THE COORDINATES OF THE SLIDE IN FOCUS BASED ON CHOSEN POSITION IN THE SLIDER
        switch(this.focusPosition){
            case "start":
                return 0;
            case "center":
                return (this.slider.offsetWidth - this.focus.offsetWidth) / 2;
            case "end":
                return this.slider.offsetWidth - this.focus.offsetWidth;
        }
    }
    currentSlideNo() {
        return Array.from(this.wrapper.children).findIndex((item)=>item === this.focus);
    }
    jumpToSlide(index) {
        const { prev , focus  } = this.changeFocus(index);
        const animCtrls = this.move();
        this.listeners.forEach((listener)=>listener({
                animCtrls,
                prev,
                focus,
                slider: this.slider,
                slideNo: this.currentSlideNo()
            }));
    }
    beginSlideshow() {
        if (!this.slideshowConfig) return;
        const slideCount = this.wrapper.children.length;
        this.slideshowTimer = setInterval(()=>{
            this.jumpToSlide((this.currentSlideNo() + 1) % slideCount);
        }, this.slideshowConfig.duration * 1000);
    }
    endSlideshow() {
        if (!this.slideshowConfig) return;
        clearInterval(this.slideshowTimer);
    }
    play() {
        this.playState = "play";
        if (this.inView) this.beginSlideshow();
    }
    pause() {
        this.playState = "pause";
        this.endSlideshow();
    }
    on(eventName, listener) {
        eventName;
        this.listeners.push(listener);
    }
}

},{"motion":"aqnbF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7fD5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
const element = document.getElementById("year");
if (element instanceof HTMLElement) {
    const year = new Date(Date.now()).getFullYear();
    element.textContent = `${year}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6Ictx","h7u1C"], "h7u1C", "parcelRequire3309")

//# sourceMappingURL=index.b71e74eb.js.map
