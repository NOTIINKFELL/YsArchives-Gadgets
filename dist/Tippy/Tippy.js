/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/atomiks/tippyjs}
* @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Tippy}
 * @license MIT {@link https://github.com/atomiks/tippyjs/blob/master/LICENSE}
 */

/**
 * Copyright (c) 2017-present atomiks
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js"(exports2, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
      return function() {
        return call.apply(fn2, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn2, val;
      if (pref === "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      if (isCallable(fn2 = input.valueOf) && !isObject(val = call(fn2, input))) return val;
      if (pref !== "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.40.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js"(exports2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max2 = Math.max;
    var min2 = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max2(integer + length, 0) : min2(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min2 = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min2(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-set-length.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports2, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $ = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-helpers.js
var require_set_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-helpers.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var SetPrototype = Set.prototype;
    module2.exports = {
      // eslint-disable-next-line es/no-set -- safe
      Set,
      add: uncurryThis(SetPrototype.add),
      has: uncurryThis(SetPrototype.has),
      remove: uncurryThis(SetPrototype["delete"]),
      proto: SetPrototype
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-set.js
var require_a_set = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-set.js"(exports2, module2) {
    "use strict";
    var has = require_set_helpers().has;
    module2.exports = function(it) {
      has(it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate-simple.js
var require_iterate_simple = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate-simple.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    module2.exports = function(record, fn2, ITERATOR_INSTEAD_OF_RECORD) {
      var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
      var next = record.next;
      var step, result;
      while (!(step = call(next, iterator)).done) {
        result = fn2(step.value);
        if (result !== void 0) return result;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-iterate.js
var require_set_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-iterate.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var iterateSimple = require_iterate_simple();
    var SetHelpers = require_set_helpers();
    var Set2 = SetHelpers.Set;
    var SetPrototype = SetHelpers.proto;
    var forEach = uncurryThis(SetPrototype.forEach);
    var keys = uncurryThis(SetPrototype.keys);
    var next = keys(new Set2()).next;
    module2.exports = function(set, fn2, interruptible) {
      return interruptible ? iterateSimple({ iterator: keys(set), next }, fn2) : forEach(set, fn2);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-clone.js
var require_set_clone = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-clone.js"(exports2, module2) {
    "use strict";
    var SetHelpers = require_set_helpers();
    var iterate = require_set_iterate();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    module2.exports = function(set) {
      var result = new Set2();
      iterate(set, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-size.js
var require_set_size = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-size.js"(exports2, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var SetHelpers = require_set_helpers();
    module2.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
      return set.size;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
    "use strict";
    module2.exports = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-set-record.js
var require_get_set_record = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-set-record.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var call = require_function_call();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var getIteratorDirect = require_get_iterator_direct();
    var INVALID_SIZE = "Invalid size";
    var $RangeError = RangeError;
    var $TypeError = TypeError;
    var max2 = Math.max;
    var SetRecord = function(set, intSize) {
      this.set = set;
      this.size = max2(intSize, 0);
      this.has = aCallable(set.has);
      this.keys = aCallable(set.keys);
    };
    SetRecord.prototype = {
      getIterator: function() {
        return getIteratorDirect(anObject(call(this.keys, this.set)));
      },
      includes: function(it) {
        return call(this.has, this.set, it);
      }
    };
    module2.exports = function(obj) {
      anObject(obj);
      var numSize = +obj.size;
      if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
      var intSize = toIntegerOrInfinity(numSize);
      if (intSize < 0) throw new $RangeError(INVALID_SIZE);
      return new SetRecord(obj, intSize);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-difference.js
var require_set_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-difference.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function difference(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = clone(O);
      if (size(O) <= otherRec.size) iterateSet(O, function(e) {
        if (otherRec.includes(e)) remove(result, e);
      });
      else iterateSimple(otherRec.getIterator(), function(e) {
        if (has(O, e)) remove(result, e);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-method-accept-set-like.js
var require_set_method_accept_set_like = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-method-accept-set-like.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var createSetLike = function(size) {
      return {
        size,
        has: function() {
          return false;
        },
        keys: function() {
          return {
            next: function() {
              return { done: true };
            }
          };
        }
      };
    };
    var createSetLikeWithInfinitySize = function(size) {
      return {
        size,
        has: function() {
          return true;
        },
        keys: function() {
          throw new Error("e");
        }
      };
    };
    module2.exports = function(name, callback) {
      var Set2 = getBuiltIn("Set");
      try {
        new Set2()[name](createSetLike(0));
        try {
          new Set2()[name](createSetLike(-1));
          return false;
        } catch (error2) {
          if (!callback) return true;
          try {
            new Set2()[name](createSetLikeWithInfinitySize(-Infinity));
            return false;
          } catch (error) {
            var set = new Set2();
            set.add(1);
            set.add(2);
            return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
          }
        }
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.difference.v2.js
var require_es_set_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.difference.v2.js"() {
    "use strict";
    var $ = require_export();
    var difference = require_set_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("difference", function(result) {
      return result.size === 0;
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      difference
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-intersection.js
var require_set_intersection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-intersection.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    module2.exports = function intersection(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = new Set2();
      if (size(O) > otherRec.size) {
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e)) add(result, e);
        });
      } else {
        iterateSet(O, function(e) {
          if (otherRec.includes(e)) add(result, e);
        });
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.intersection.v2.js
var require_es_set_intersection_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.intersection.v2.js"() {
    "use strict";
    var $ = require_export();
    var fails = require_fails();
    var intersection = require_set_intersection();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("intersection", function(result) {
      return result.size === 2 && result.has(1) && result.has(2);
    }) || fails(function() {
      return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      intersection
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-disjoint-from.js
var require_set_is_disjoint_from = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-disjoint-from.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isDisjointFrom(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
        if (otherRec.includes(e)) return false;
      }, true) !== false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (has(O, e)) return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var require_es_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js"() {
    "use strict";
    var $ = require_export();
    var isDisjointFrom = require_set_is_disjoint_from();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("isDisjointFrom", function(result) {
      return !result;
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      isDisjointFrom
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-subset-of.js
var require_set_is_subset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-subset-of.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var size = require_set_size();
    var iterate = require_set_iterate();
    var getSetRecord = require_get_set_record();
    module2.exports = function isSubsetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) > otherRec.size) return false;
      return iterate(O, function(e) {
        if (!otherRec.includes(e)) return false;
      }, true) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js
var require_es_set_is_subset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-subset-of.v2.js"() {
    "use strict";
    var $ = require_export();
    var isSubsetOf = require_set_is_subset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("isSubsetOf", function(result) {
      return result;
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      isSubsetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-superset-of.js
var require_set_is_superset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-is-superset-of.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isSupersetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) < otherRec.size) return false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (!has(O, e)) return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js
var require_es_set_is_superset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.is-superset-of.v2.js"() {
    "use strict";
    var $ = require_export();
    var isSupersetOf = require_set_is_superset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("isSupersetOf", function(result) {
      return !result;
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      isSupersetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-symmetric-difference.js
var require_set_symmetric_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-symmetric-difference.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function symmetricDifference(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(e) {
        if (has(O, e)) remove(result, e);
        else add(result, e);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var require_es_set_symmetric_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.symmetric-difference.v2.js"() {
    "use strict";
    var $ = require_export();
    var symmetricDifference = require_set_symmetric_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("symmetricDifference") }, {
      symmetricDifference
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-union.js
var require_set_union = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/set-union.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var add = require_set_helpers().add;
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    module2.exports = function union(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.union.v2.js
var require_es_set_union_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.set.union.v2.js"() {
    "use strict";
    var $ = require_export();
    var union = require_set_union();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("union") }, {
      union
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports2, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else object[key] = value;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js"(exports2, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js"(exports2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js"(exports2, module2) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js
var require_es_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js"() {
    "use strict";
    var $ = require_export();
    var globalThis2 = require_global_this();
    var anInstance = require_an_instance();
    var anObject = require_an_object();
    var isCallable = require_is_callable();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var createProperty = require_create_property();
    var fails = require_fails();
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var CONSTRUCTOR = "constructor";
    var ITERATOR = "Iterator";
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $TypeError = TypeError;
    var NativeIterator = globalThis2[ITERATOR];
    var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
      NativeIterator({});
    });
    var IteratorConstructor = function Iterator() {
      anInstance(this, IteratorPrototype);
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
    };
    var defineIteratorPrototypeAccessor = function(key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
          configurable: true,
          get: function() {
            return value;
          },
          set: function(replacement) {
            anObject(this);
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
            if (hasOwn(this, key)) this[key] = replacement;
            else createProperty(this, key, replacement);
          }
        });
      } else IteratorPrototype[key] = value;
    };
    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
    }
    IteratorConstructor.prototype = IteratorPrototype;
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js
var require_esnext_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js"() {
    "use strict";
    require_es_iterator_constructor();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports2, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn2) {
      if (classofRaw(fn2) === "Function") return uncurryThis(fn2);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn2, that) {
      aCallable(fn2);
      return that === void 0 ? fn2 : NATIVE_BIND ? bind(fn2, that) : function() {
        return fn2.apply(that, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js"(exports2, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn2 = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn2(value[0], value[1], stop) : fn2(value[0], value[1]);
        }
        return INTERRUPTED ? fn2(value, stop) : fn2(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.every.js
var require_es_iterator_every = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.every.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $({ target: "Iterator", proto: true, real: true }, {
      every: function every(predicate) {
        anObject(this);
        aCallable(predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return !iterate(record, function(value, stop) {
          if (!predicate(value, counter++)) return stop();
        }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.every.js
var require_esnext_iterator_every = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.every.js"() {
    "use strict";
    require_es_iterator_every();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js"(exports2, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js"(exports2, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js
var require_iterator_create_proxy = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var create = require_object_create();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIns = require_define_built_ins();
    var wellKnownSymbol = require_well_known_symbol();
    var InternalStateModule = require_internal_state();
    var getMethod = require_get_method();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var createIterResultObject = require_create_iter_result_object();
    var iteratorClose = require_iterator_close();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var ITERATOR_HELPER = "IteratorHelper";
    var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
    var setInternalState = InternalStateModule.set;
    var createIteratorProxyPrototype = function(IS_ITERATOR) {
      var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
      return defineBuiltIns(create(IteratorPrototype), {
        next: function next() {
          var state = getInternalState(this);
          if (IS_ITERATOR) return state.nextHandler();
          if (state.done) return createIterResultObject(void 0, true);
          try {
            var result = state.nextHandler();
            return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
          } catch (error) {
            state.done = true;
            throw error;
          }
        },
        "return": function() {
          var state = getInternalState(this);
          var iterator = state.iterator;
          state.done = true;
          if (IS_ITERATOR) {
            var returnMethod = getMethod(iterator, "return");
            return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
          }
          if (state.inner) try {
            iteratorClose(state.inner.iterator, "normal");
          } catch (error) {
            return iteratorClose(iterator, "throw", error);
          }
          if (iterator) iteratorClose(iterator, "normal");
          return createIterResultObject(void 0, true);
        }
      });
    };
    var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
    var IteratorHelperPrototype = createIteratorProxyPrototype(false);
    createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
    module2.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
      var IteratorProxy = function Iterator(record, state) {
        if (state) {
          state.iterator = record.iterator;
          state.next = record.next;
        } else state = record;
        state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
        state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
        state.nextHandler = nextHandler;
        state.counter = 0;
        state.done = false;
        setInternalState(this, state);
      };
      IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
      return IteratorProxy;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
    "use strict";
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module2.exports = function(iterator, fn2, value, ENTRIES) {
      try {
        return ENTRIES ? fn2(anObject(value)[0], value[1]) : fn2(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js
var require_es_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IS_PURE = require_is_pure();
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var predicate = this.predicate;
      var next = this.next;
      var result, done, value;
      while (true) {
        result = anObject(call(next, iterator));
        done = this.done = !!result.done;
        if (done) return;
        value = result.value;
        if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
      }
    });
    $({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      filter: function filter(predicate) {
        anObject(this);
        aCallable(predicate);
        return new IteratorProxy(getIteratorDirect(this), {
          predicate
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js
var require_esnext_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js"() {
    "use strict";
    require_es_iterator_filter();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.find.js
var require_es_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.find.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $({ target: "Iterator", proto: true, real: true }, {
      find: function find(predicate) {
        anObject(this);
        aCallable(predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop(value);
        }, { IS_RECORD: true, INTERRUPTED: true }).result;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.find.js
var require_esnext_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.find.js"() {
    "use strict";
    require_es_iterator_find();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js
var require_es_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $({ target: "Iterator", proto: true, real: true }, {
      forEach: function forEach(fn2) {
        anObject(this);
        aCallable(fn2);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          fn2(value, counter++);
        }, { IS_RECORD: true });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js
var require_esnext_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js"() {
    "use strict";
    require_es_iterator_for_each();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js
var require_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var result = anObject(call(this.next, iterator));
      var done = this.done = !!result.done;
      if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
    });
    module2.exports = function map(mapper) {
      anObject(this);
      aCallable(mapper);
      return new IteratorProxy(getIteratorDirect(this), {
        mapper
      });
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js
var require_es_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js"() {
    "use strict";
    var $ = require_export();
    var map = require_iterator_map();
    var IS_PURE = require_is_pure();
    $({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      map
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js
var require_esnext_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js"() {
    "use strict";
    require_es_iterator_map();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.reduce.js
var require_es_iterator_reduce = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.reduce.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var $TypeError = TypeError;
    $({ target: "Iterator", proto: true, real: true }, {
      reduce: function reduce(reducer) {
        anObject(this);
        aCallable(reducer);
        var record = getIteratorDirect(this);
        var noInitial = arguments.length < 2;
        var accumulator = noInitial ? void 0 : arguments[1];
        var counter = 0;
        iterate(record, function(value) {
          if (noInitial) {
            noInitial = false;
            accumulator = value;
          } else {
            accumulator = reducer(accumulator, value, counter);
          }
          counter++;
        }, { IS_RECORD: true });
        if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
        return accumulator;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.reduce.js
var require_esnext_iterator_reduce = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.reduce.js"() {
    "use strict";
    require_es_iterator_reduce();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.some.js
var require_es_iterator_some = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.some.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $({ target: "Iterator", proto: true, real: true }, {
      some: function some(predicate) {
        anObject(this);
        aCallable(predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop();
        }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.some.js
var require_esnext_iterator_some = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.some.js"() {
    "use strict";
    require_es_iterator_some();
  }
});

// dist/Tippy/Tippy.js
require_es_array_push();
require_es_set_difference_v2();
require_es_set_intersection_v2();
require_es_set_is_disjoint_from_v2();
require_es_set_is_subset_of_v2();
require_es_set_is_superset_of_v2();
require_es_set_symmetric_difference_v2();
require_es_set_union_v2();
require_esnext_iterator_constructor();
require_esnext_iterator_every();
require_esnext_iterator_filter();
require_esnext_iterator_find();
require_esnext_iterator_for_each();
require_esnext_iterator_map();
require_esnext_iterator_reduce();
require_esnext_iterator_some();
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  tippy: () => tippy_esm_default
});
module.exports = __toCommonJS(Tippy_exports);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
if (false) {
  resetVisitedMessages();
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (false) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (false) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (false) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (false) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (false) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtY2xvbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc2l6ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc2V0LXJlY29yZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaW50ZXJzZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pbnRlcnNlY3Rpb24udjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1pcy1kaXNqb2ludC1mcm9tLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pcy1kaXNqb2ludC1mcm9tLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWlzLXN1YnNldC1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaXMtc3Vic2V0LW9mLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWlzLXN1cGVyc2V0LW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pcy1zdXBlcnNldC1vZi52Mi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1zeW1tZXRyaWMtZGlmZmVyZW5jZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuc3ltbWV0cmljLWRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdW5pb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnVuaW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuY29uc3RydWN0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmV2ZXJ5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5ldmVyeS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5maWx0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5mb3ItZWFjaC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZm9yLWVhY2guanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1tYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IubWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5tYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IucmVkdWNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5yZWR1Y2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3Iuc29tZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3Iuc29tZS5qcyIsICJzcmMvVGlwcHkvVGlwcHkudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VzZXJBZ2VudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzTGF5b3V0Vmlld3BvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2Fycm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRWYXJpYXRpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXREb2N1bWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRBbHRBeGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlU2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY29uc3RhbnRzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3V0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2RvbS11dGlscy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYnJvd3Nlci50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy92YWxpZGF0aW9uLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3Byb3BzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3RlbXBsYXRlLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2NyZWF0ZVRpcHB5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2luZGV4LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2FkZG9ucy9jcmVhdGVTaW5nbGV0b24udHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2RlbGVnYXRlLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvYW5pbWF0ZUZpbGwudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9mb2xsb3dDdXJzb3IudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9pbmxpbmVQb3NpdGlvbmluZy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL3N0aWNreS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL2J1aWxkL2Jhc2UuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40MC4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MC4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXNldCAtLSBzYWZlXG52YXIgU2V0UHJvdG90eXBlID0gU2V0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxuICBTZXQ6IFNldCxcbiAgYWRkOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuYWRkKSxcbiAgaGFzOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuaGFzKSxcbiAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGVbJ2RlbGV0ZSddKSxcbiAgcHJvdG86IFNldFByb3RvdHlwZVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJykuaGFzO1xuXG4vLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW1NldERhdGFdXSlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGhhcyhpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZWNvcmQsIGZuLCBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCkge1xuICB2YXIgaXRlcmF0b3IgPSBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCA/IHJlY29yZCA6IHJlY29yZC5pdGVyYXRvcjtcbiAgdmFyIG5leHQgPSByZWNvcmQubmV4dDtcbiAgdmFyIHN0ZXAsIHJlc3VsdDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gZm4oc3RlcC52YWx1ZSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgU2V0UHJvdG90eXBlID0gU2V0SGVscGVycy5wcm90bztcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmZvckVhY2gpO1xudmFyIGtleXMgPSB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUua2V5cyk7XG52YXIgbmV4dCA9IGtleXMobmV3IFNldCgpKS5uZXh0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXQsIGZuLCBpbnRlcnJ1cHRpYmxlKSB7XG4gIHJldHVybiBpbnRlcnJ1cHRpYmxlID8gaXRlcmF0ZVNpbXBsZSh7IGl0ZXJhdG9yOiBrZXlzKHNldCksIG5leHQ6IG5leHQgfSwgZm4pIDogZm9yRWFjaChzZXQsIGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG5cbnZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcbnZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2V0KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG4gIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAoaXQpIHtcbiAgICBhZGQocmVzdWx0LCBpdCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIG1ldGhvZCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICByZXR1cm4gdW5jdXJyeVRoaXMoYUNhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpW21ldGhvZF0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXNBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3InKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihTZXRIZWxwZXJzLnByb3RvLCAnc2l6ZScsICdnZXQnKSB8fCBmdW5jdGlvbiAoc2V0KSB7XG4gIHJldHVybiBzZXQuc2l6ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYEdldEl0ZXJhdG9yRGlyZWN0KG9iailgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLWl0ZXJhdG9yLWhlbHBlcnMvI3NlYy1nZXRpdGVyYXRvcmRpcmVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgaXRlcmF0b3I6IG9iaixcbiAgICBuZXh0OiBvYmoubmV4dCxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbnZhciBJTlZBTElEX1NJWkUgPSAnSW52YWxpZCBzaXplJztcbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBtYXggPSBNYXRoLm1heDtcblxudmFyIFNldFJlY29yZCA9IGZ1bmN0aW9uIChzZXQsIGludFNpemUpIHtcbiAgdGhpcy5zZXQgPSBzZXQ7XG4gIHRoaXMuc2l6ZSA9IG1heChpbnRTaXplLCAwKTtcbiAgdGhpcy5oYXMgPSBhQ2FsbGFibGUoc2V0Lmhhcyk7XG4gIHRoaXMua2V5cyA9IGFDYWxsYWJsZShzZXQua2V5cyk7XG59O1xuXG5TZXRSZWNvcmQucHJvdG90eXBlID0ge1xuICBnZXRJdGVyYXRvcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRJdGVyYXRvckRpcmVjdChhbk9iamVjdChjYWxsKHRoaXMua2V5cywgdGhpcy5zZXQpKSk7XG4gIH0sXG4gIGluY2x1ZGVzOiBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gY2FsbCh0aGlzLmhhcywgdGhpcy5zZXQsIGl0KTtcbiAgfVxufTtcblxuLy8gYEdldFNldFJlY29yZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtc2V0LW1ldGhvZHMvI3NlYy1nZXRzZXRyZWNvcmRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBhbk9iamVjdChvYmopO1xuICB2YXIgbnVtU2l6ZSA9ICtvYmouc2l6ZTtcbiAgLy8gTk9URTogSWYgc2l6ZSBpcyB1bmRlZmluZWQsIHRoZW4gbnVtU2l6ZSB3aWxsIGJlIE5hTlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICBpZiAobnVtU2l6ZSAhPT0gbnVtU2l6ZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoSU5WQUxJRF9TSVpFKTtcbiAgdmFyIGludFNpemUgPSB0b0ludGVnZXJPckluZmluaXR5KG51bVNpemUpO1xuICBpZiAoaW50U2l6ZSA8IDApIHRocm93IG5ldyAkUmFuZ2VFcnJvcihJTlZBTElEX1NJWkUpO1xuICByZXR1cm4gbmV3IFNldFJlY29yZChvYmosIGludFNpemUpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtY2xvbmUnKTtcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcblxudmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xudmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpZmZlcmVuY2Uob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG4gIGlmIChzaXplKE8pIDw9IG90aGVyUmVjLnNpemUpIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuICB9KTtcbiAgZWxzZSBpdGVyYXRlU2ltcGxlKG90aGVyUmVjLmdldEl0ZXJhdG9yKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGhhcyhPLCBlKSkgcmVtb3ZlKHJlc3VsdCwgZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxudmFyIGNyZWF0ZVNldExpa2UgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgaGFzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjcmVhdGVTZXRMaWtlV2l0aEluZmluaXR5U2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICBoYXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdlJyk7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgdmFyIFNldCA9IGdldEJ1aWx0SW4oJ1NldCcpO1xuICB0cnkge1xuICAgIG5ldyBTZXQoKVtuYW1lXShjcmVhdGVTZXRMaWtlKDApKTtcbiAgICB0cnkge1xuICAgICAgLy8gbGF0ZSBzcGVjIGNoYW5nZSwgZWFybHkgV2ViS2l0IH4gU2FmYXJpIDE3LjAgYmV0YSBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBwYXNzIGl0XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kcy9wdWxsLzg4XG4gICAgICBuZXcgU2V0KClbbmFtZV0oY3JlYXRlU2V0TGlrZSgtMSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yMikge1xuICAgICAgaWYgKCFjYWxsYmFjaykgcmV0dXJuIHRydWU7XG4gICAgICAvLyBlYXJseSBWOCBpbXBsZW1lbnRhdGlvbiBidWdcbiAgICAgIC8vIGh0dHBzOi8vaXNzdWVzLmNocm9taXVtLm9yZy9pc3N1ZXMvMzUxMzMyNjM0XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgU2V0KClbbmFtZV0oY3JlYXRlU2V0TGlrZVdpdGhJbmZpbml0eVNpemUoLUluZmluaXR5KSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHZhciBzZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHNldC5hZGQoMSk7XG4gICAgICAgIHNldC5hZGQoMik7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhzZXRbbmFtZV0oY3JlYXRlU2V0TGlrZVdpdGhJbmZpbml0eVNpemUoSW5maW5pdHkpKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBkaWZmZXJlbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG52YXIgSU5DT1JSRUNUID0gIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2RpZmZlcmVuY2UnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuc2l6ZSA9PT0gMDtcbn0pO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUIH0sIHtcbiAgZGlmZmVyZW5jZTogZGlmZmVyZW5jZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG5cbnZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcbnZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcbnZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcblxuLy8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGludGVyc2VjdGlvbihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG5cbiAgaWYgKHNpemUoTykgPiBvdGhlclJlYy5zaXplKSB7XG4gICAgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGhhcyhPLCBlKSkgYWRkKHJlc3VsdCwgZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSBhZGQocmVzdWx0LCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pbnRlcnNlY3Rpb24nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbnZhciBJTkNPUlJFQ1QgPSAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaW50ZXJzZWN0aW9uJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnNpemUgPT09IDIgJiYgcmVzdWx0LmhhcygxKSAmJiByZXN1bHQuaGFzKDIpO1xufSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSwgZXMvbm8tc2V0LCBlcy9uby1zZXQtcHJvdG90eXBlLWludGVyc2VjdGlvbiAtLSB0ZXN0aW5nXG4gIHJldHVybiBTdHJpbmcoQXJyYXkuZnJvbShuZXcgU2V0KFsxLCAyLCAzXSkuaW50ZXJzZWN0aW9uKG5ldyBTZXQoWzMsIDJdKSkpKSAhPT0gJzMsMic7XG59KTtcblxuLy8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb25cbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1QgfSwge1xuICBpbnRlcnNlY3Rpb246IGludGVyc2VjdGlvblxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJykuaGFzO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcbnZhciBpdGVyYXRlU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Rpc2pvaW50RnJvbShvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIGlmIChzaXplKE8pIDw9IG90aGVyUmVjLnNpemUpIHJldHVybiBpdGVyYXRlU2V0KE8sIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSByZXR1cm4gZmFsc2U7XG4gIH0sIHRydWUpICE9PSBmYWxzZTtcbiAgdmFyIGl0ZXJhdG9yID0gb3RoZXJSZWMuZ2V0SXRlcmF0b3IoKTtcbiAgcmV0dXJuIGl0ZXJhdGVTaW1wbGUoaXRlcmF0b3IsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG4gIH0pICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNEaXNqb2ludEZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWlzLWRpc2pvaW50LWZyb20nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbnZhciBJTkNPUlJFQ1QgPSAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaXNEaXNqb2ludEZyb20nLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiAhcmVzdWx0O1xufSk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5pc2Rpc2pvaW50ZnJvbVxuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVCB9LCB7XG4gIGlzRGlzam9pbnRGcm9tOiBpc0Rpc2pvaW50RnJvbVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdWJzZXRPZlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N1YnNldE9mKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgaWYgKHNpemUoTykgPiBvdGhlclJlYy5zaXplKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpdGVyYXRlKE8sIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFvdGhlclJlYy5pbmNsdWRlcyhlKSkgcmV0dXJuIGZhbHNlO1xuICB9LCB0cnVlKSAhPT0gZmFsc2U7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzU3Vic2V0T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWlzLXN1YnNldC1vZicpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxudmFyIElOQ09SUkVDVCA9ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdpc1N1YnNldE9mJywgZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmlzc3Vic2V0b2ZcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1QgfSwge1xuICBpc1N1YnNldE9mOiBpc1N1YnNldE9mXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNTdXBlcnNldE9mXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3VwZXJzZXRPZihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIGlmIChzaXplKE8pIDwgb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgaXRlcmF0b3IgPSBvdGhlclJlYy5nZXRJdGVyYXRvcigpO1xuICByZXR1cm4gaXRlcmF0ZVNpbXBsZShpdGVyYXRvciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWhhcyhPLCBlKSkgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBmYWxzZSk7XG4gIH0pICE9PSBmYWxzZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNTdXBlcnNldE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pcy1zdXBlcnNldC1vZicpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxudmFyIElOQ09SUkVDVCA9ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdpc1N1cGVyc2V0T2YnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiAhcmVzdWx0O1xufSk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzU3VwZXJzZXRPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuaXNzdXBlcnNldG9mXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUIH0sIHtcbiAgaXNTdXBlcnNldE9mOiBpc1N1cGVyc2V0T2Zcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1jbG9uZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcblxudmFyIGFkZCA9IFNldEhlbHBlcnMuYWRkO1xudmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xudmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5zeW1tZXRyaWNEaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2Uob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIga2V5c0l0ZXIgPSBnZXRTZXRSZWNvcmQob3RoZXIpLmdldEl0ZXJhdG9yKCk7XG4gIHZhciByZXN1bHQgPSBjbG9uZShPKTtcbiAgaXRlcmF0ZVNpbXBsZShrZXlzSXRlciwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoaGFzKE8sIGUpKSByZW1vdmUocmVzdWx0LCBlKTtcbiAgICBlbHNlIGFkZChyZXN1bHQsIGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgc3ltbWV0cmljRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UnKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLnN5bW1ldHJpY2RpZmZlcmVuY2VcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnc3ltbWV0cmljRGlmZmVyZW5jZScpIH0sIHtcbiAgc3ltbWV0cmljRGlmZmVyZW5jZTogc3ltbWV0cmljRGlmZmVyZW5jZVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBhZGQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKS5hZGQ7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS51bmlvbmAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlvbihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoaXQpIHtcbiAgICBhZGQocmVzdWx0LCBpdCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdW5pb24nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS51bmlvblxuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCd1bmlvbicpIH0sIHtcbiAgdW5pb246IHVuaW9uXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUHJvdG90eXBlKSB7XG4gIGlmIChpc1Byb3RvdHlwZU9mKFByb3RvdHlwZSwgaXQpKSByZXR1cm4gaXQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gJE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyAkT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzT3duKG9iamVjdCwgSUVfUFJPVE8pKSByZXR1cm4gb2JqZWN0W0lFX1BST1RPXTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNDYWxsYWJsZShjb25zdHJ1Y3RvcikgJiYgb2JqZWN0IGluc3RhbmNlb2YgY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiAkT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTICYmICFWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gIWlzT2JqZWN0KEl0ZXJhdG9yUHJvdG90eXBlKSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5lbHNlIGlmIChJU19QVVJFKSBJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICghaXNDYWxsYWJsZShJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gIGRlZmluZUJ1aWx0SW4oSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBDT05TVFJVQ1RPUiA9ICdjb25zdHJ1Y3Rvcic7XG52YXIgSVRFUkFUT1IgPSAnSXRlcmF0b3InO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE5hdGl2ZUl0ZXJhdG9yID0gZ2xvYmFsVGhpc1tJVEVSQVRPUl07XG5cbi8vIEZGNTYtIGhhdmUgbm9uLXN0YW5kYXJkIGdsb2JhbCBoZWxwZXIgYEl0ZXJhdG9yYFxudmFyIEZPUkNFRCA9IElTX1BVUkVcbiAgfHwgIWlzQ2FsbGFibGUoTmF0aXZlSXRlcmF0b3IpXG4gIHx8IE5hdGl2ZUl0ZXJhdG9yLnByb3RvdHlwZSAhPT0gSXRlcmF0b3JQcm90b3R5cGVcbiAgLy8gRkY0NC0gbm9uLXN0YW5kYXJkIGBJdGVyYXRvcmAgcGFzc2VzIHByZXZpb3VzIHRlc3RzXG4gIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7IE5hdGl2ZUl0ZXJhdG9yKHt9KTsgfSk7XG5cbnZhciBJdGVyYXRvckNvbnN0cnVjdG9yID0gZnVuY3Rpb24gSXRlcmF0b3IoKSB7XG4gIGFuSW5zdGFuY2UodGhpcywgSXRlcmF0b3JQcm90b3R5cGUpO1xuICBpZiAoZ2V0UHJvdG90eXBlT2YodGhpcykgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWJzdHJhY3QgY2xhc3MgSXRlcmF0b3Igbm90IGRpcmVjdGx5IGNvbnN0cnVjdGFibGUnKTtcbn07XG5cbnZhciBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEl0ZXJhdG9yUHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICAgICAgYW5PYmplY3QodGhpcyk7XG4gICAgICAgIGlmICh0aGlzID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJZb3UgY2FuJ3QgcmVkZWZpbmUgdGhpcyBwcm9wZXJ0eVwiKTtcbiAgICAgICAgaWYgKGhhc093bih0aGlzLCBrZXkpKSB0aGlzW2tleV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgZWxzZSBjcmVhdGVQcm9wZXJ0eSh0aGlzLCBrZXksIHJlcGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIEl0ZXJhdG9yUHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcbn07XG5cbmlmICghaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihUT19TVFJJTkdfVEFHLCBJVEVSQVRPUik7XG5cbmlmIChGT1JDRUQgfHwgIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgQ09OU1RSVUNUT1IpIHx8IEl0ZXJhdG9yUHJvdG90eXBlW0NPTlNUUlVDVE9SXSA9PT0gT2JqZWN0KSB7XG4gIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoQ09OU1RSVUNUT1IsIEl0ZXJhdG9yQ29uc3RydWN0b3IpO1xufVxuXG5JdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEl0ZXJhdG9yUHJvdG90eXBlO1xuXG4vLyBgSXRlcmF0b3JgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yXG4kKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBJdGVyYXRvcjogSXRlcmF0b3JDb25zdHJ1Y3RvclxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuaXRlcmF0b3IuY29uc3RydWN0b3InKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmV2ZXJ5XG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShwcmVkaWNhdGUpIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiAhaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKCFwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKCk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUsIElOVEVSUlVQVEVEOiB0cnVlIH0pLnN0b3BwZWQ7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLmV2ZXJ5Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgSVRFUkFUT1JfSEVMUEVSID0gJ0l0ZXJhdG9ySGVscGVyJztcbnZhciBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA9ICdXcmFwRm9yVmFsaWRJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSA9IGZ1bmN0aW9uIChJU19JVEVSQVRPUikge1xuICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVIpO1xuXG4gIHJldHVybiBkZWZpbmVCdWlsdElucyhjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpLCB7XG4gICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAvLyBmb3Igc2ltcGxpZmljYXRpb246XG4gICAgICAvLyAgIGZvciBgJVdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBvciB3aXRoIGBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0YCBvdXIgYG5leHRIYW5kbGVyYCByZXR1cm5zIGBJdGVyUmVzdWx0T2JqZWN0YFxuICAgICAgLy8gICBmb3IgYCVJdGVyYXRvckhlbHBlclByb3RvdHlwZSUubmV4dGAgLSBqdXN0IGEgdmFsdWVcbiAgICAgIGlmIChJU19JVEVSQVRPUikgcmV0dXJuIHN0YXRlLm5leHRIYW5kbGVyKCk7XG4gICAgICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgICByZXR1cm4gc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA/IHJlc3VsdCA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QocmVzdWx0LCBzdGF0ZS5kb25lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHN0YXRlLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gc3RhdGUuaXRlcmF0b3I7XG4gICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgIGlmIChJU19JVEVSQVRPUikge1xuICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgICAgIHJldHVybiByZXR1cm5NZXRob2QgPyBjYWxsKHJldHVybk1ldGhvZCwgaXRlcmF0b3IpIDogY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmlubmVyKSB0cnkge1xuICAgICAgICBpdGVyYXRvckNsb3NlKHN0YXRlLmlubmVyLml0ZXJhdG9yLCAnbm9ybWFsJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJyk7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgV3JhcEZvclZhbGlkSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGVJdGVyYXRvclByb3h5UHJvdG90eXBlKHRydWUpO1xudmFyIEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZShmYWxzZSk7XG5cbmNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvckhlbHBlclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgJ0l0ZXJhdG9yIEhlbHBlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZXh0SGFuZGxlciwgSVNfSVRFUkFUT1IsIFJFVFVSTl9IQU5ETEVSX1JFU1VMVCkge1xuICB2YXIgSXRlcmF0b3JQcm94eSA9IGZ1bmN0aW9uIEl0ZXJhdG9yKHJlY29yZCwgc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHN0YXRlLml0ZXJhdG9yID0gcmVjb3JkLml0ZXJhdG9yO1xuICAgICAgc3RhdGUubmV4dCA9IHJlY29yZC5uZXh0O1xuICAgIH0gZWxzZSBzdGF0ZSA9IHJlY29yZDtcbiAgICBzdGF0ZS50eXBlID0gSVNfSVRFUkFUT1IgPyBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA6IElURVJBVE9SX0hFTFBFUjtcbiAgICBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0ID0gISFSRVRVUk5fSEFORExFUl9SRVNVTFQ7XG4gICAgc3RhdGUubmV4dEhhbmRsZXIgPSBuZXh0SGFuZGxlcjtcbiAgICBzdGF0ZS5jb3VudGVyID0gMDtcbiAgICBzdGF0ZS5kb25lID0gZmFsc2U7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCBzdGF0ZSk7XG4gIH07XG5cbiAgSXRlcmF0b3JQcm94eS5wcm90b3R5cGUgPSBJU19JVEVSQVRPUiA/IFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlIDogSXRlcmF0b3JIZWxwZXJQcm90b3R5cGU7XG5cbiAgcmV0dXJuIEl0ZXJhdG9yUHJveHk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBjcmVhdGVJdGVyYXRvclByb3h5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eScpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIHByZWRpY2F0ZSA9IHRoaXMucHJlZGljYXRlO1xuICB2YXIgbmV4dCA9IHRoaXMubmV4dDtcbiAgdmFyIHJlc3VsdCwgZG9uZSwgdmFsdWU7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcmVzdWx0ID0gYW5PYmplY3QoY2FsbChuZXh0LCBpdGVyYXRvcikpO1xuICAgIGRvbmUgPSB0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lO1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIHByZWRpY2F0ZSwgW3ZhbHVlLCB0aGlzLmNvdW50ZXIrK10sIHRydWUpKSByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yUHJveHkoZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyksIHtcbiAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlXG4gICAgfSk7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlcicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUoZm4pO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZm4odmFsdWUsIGNvdW50ZXIrKyk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUgfSk7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLmZvci1lYWNoJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgSXRlcmF0b3JQcm94eSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHkoZnVuY3Rpb24gKCkge1xuICB2YXIgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yO1xuICB2YXIgcmVzdWx0ID0gYW5PYmplY3QoY2FsbCh0aGlzLm5leHQsIGl0ZXJhdG9yKSk7XG4gIHZhciBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgaWYgKCFkb25lKSByZXR1cm4gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgdGhpcy5tYXBwZXIsIFtyZXN1bHQudmFsdWUsIHRoaXMuY291bnRlcisrXSwgdHJ1ZSk7XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtaXRlcmF0b3ItaGVscGVyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXAobWFwcGVyKSB7XG4gIGFuT2JqZWN0KHRoaXMpO1xuICBhQ2FsbGFibGUobWFwcGVyKTtcbiAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgbWFwcGVyOiBtYXBwZXJcbiAgfSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1tYXAnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUubWFwXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgbWFwOiBtYXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLm1hcCcpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKHJlZHVjZXIgLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUocmVkdWNlcik7XG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBub0luaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoIDwgMjtcbiAgICB2YXIgYWNjdW11bGF0b3IgPSBub0luaXRpYWwgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChub0luaXRpYWwpIHtcbiAgICAgICAgbm9Jbml0aWFsID0gZmFsc2U7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2N1bXVsYXRvciA9IHJlZHVjZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBjb3VudGVyKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSB9KTtcbiAgICBpZiAobm9Jbml0aWFsKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGl0ZXJhdG9yIHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuaXRlcmF0b3IucmVkdWNlJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5zb21lXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgY291bnRlcisrKSkgcmV0dXJuIHN0b3AoKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkuc3RvcHBlZDtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuaXRlcmF0b3Iuc29tZScpO1xuIiwgImltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgdGlwcHl9IGZyb20gJ3RpcHB5LmpzJztcbiIsICJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsICJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwgImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgaWYgKHVhRGF0YSAhPSBudWxsICYmIHVhRGF0YS5icmFuZHMgJiYgQXJyYXkuaXNBcnJheSh1YURhdGEuYnJhbmRzKSkge1xuICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn0iLCAiaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGluY2x1ZGVTY2FsZSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gIH1cblxuICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG4gIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIGxlZnQ6IHgsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwgImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG4gIH1cblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCAiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwgImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZiwgd2luKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9KSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjMueDtcbiAgeSA9IF9yZWYzLnk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0sIGdldFdpbmRvdyhwb3BwZXIpKSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjQueDtcbiAgeSA9IF9yZWY0Lnk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjUuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCAidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwgInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCAiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCAiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCAiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCAiaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIHN0cmF0ZWd5ID0gX29wdGlvbnMkc3RyYXRlZ3kgPT09IHZvaWQgMCA/IHN0YXRlLnN0cmF0ZWd5IDogX29wdGlvbnMkc3RyYXRlZ3ksXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsICJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsICJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwgImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwgImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZi5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCAiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCAiZXhwb3J0IGNvbnN0IFJPVU5EX0FSUk9XID1cbiAgJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG5cbmV4cG9ydCBjb25zdCBCT1hfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYm94YDtcbmV4cG9ydCBjb25zdCBDT05URU5UX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWNvbnRlbnRgO1xuZXhwb3J0IGNvbnN0IEJBQ0tEUk9QX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJhY2tkcm9wYDtcbmV4cG9ydCBjb25zdCBBUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1hcnJvd2A7XG5leHBvcnQgY29uc3QgU1ZHX0FSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLXN2Zy1hcnJvd2A7XG5cbmV4cG9ydCBjb25zdCBUT1VDSF9PUFRJT05TID0ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWV9O1xuXG5leHBvcnQgY29uc3QgVElQUFlfREVGQVVMVF9BUFBFTkRfVE8gPSAoKSA9PiBkb2N1bWVudC5ib2R5O1xuIiwgImltcG9ydCB7QmFzZVBsYWNlbWVudCwgUGxhY2VtZW50fSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBrZXk6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuPFQ+KFxuICB2YWx1ZTogVCB8IFtUIHwgbnVsbCwgVCB8IG51bGxdLFxuICBpbmRleDogbnVtYmVyLFxuICBkZWZhdWx0VmFsdWU6IFQgfCBbVCwgVF1cbik6IFQge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCB2ID0gdmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiB2ID09IG51bGxcbiAgICAgID8gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpXG4gICAgICAgID8gZGVmYXVsdFZhbHVlW2luZGV4XVxuICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgOiB2O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBzdHIgPSB7fS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCdbb2JqZWN0JykgPT09IDAgJiYgc3RyLmluZGV4T2YoYCR7dHlwZX1dYCkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVdpdGhBcmdzT3JSZXR1cm4odmFsdWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoLi4uYXJncykgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQ+KFxuICBmbjogKGFyZzogVCkgPT4gdm9pZCxcbiAgbXM6IG51bWJlclxuKTogKGFyZzogVCkgPT4gdm9pZCB7XG4gIC8vIEF2b2lkIHdyYXBwaW5nIGluIGBzZXRUaW1lb3V0YCBpZiBtcyBpcyAwIGFueXdheVxuICBpZiAobXMgPT09IDApIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgdGltZW91dDogYW55O1xuXG4gIHJldHVybiAoYXJnKTogdm9pZCA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuKGFyZyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllczxUPihvYmo6IFQsIGtleXM6IHN0cmluZ1tdKTogUGFydGlhbDxUPiB7XG4gIGNvbnN0IGNsb25lID0gey4uLm9ian07XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIChjbG9uZSBhcyBhbnkpW2tleV07XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U3BhY2VzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRvQXJyYXk8VD4odmFsdWU6IFQgfCBUW10pOiBUW10ge1xuICByZXR1cm4gKFtdIGFzIFRbXSkuY29uY2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hJZlVuaXF1ZTxUPihhcnI6IFRbXSwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgaWYgKGFyci5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBhcnIucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFB4SWZOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9cHhgIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBCYXNlUGxhY2VtZW50IHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdIGFzIEJhc2VQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUZyb20odmFsdWU6IEFycmF5TGlrZTxhbnk+KTogYW55W10ge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wcyhcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIChhY2MgYXMgYW55KVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuIiwgImltcG9ydCB7UmVmZXJlbmNlRWxlbWVudCwgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlclRyZWVEYXRhfSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tLCBpc1R5cGUsIG5vcm1hbGl6ZVRvQXJyYXksIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQge1xuICByZXR1cm4gWydFbGVtZW50JywgJ0ZyYWdtZW50J10uc29tZSgodHlwZSkgPT4gaXNUeXBlKHZhbHVlLCB0eXBlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTm9kZUxpc3Qge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTm9kZUxpc3QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW91c2VFdmVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE1vdXNlRXZlbnQge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTW91c2VFdmVudCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWZlcmVuY2VFbGVtZW50KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBSZWZlcmVuY2VFbGVtZW50IHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl90aXBweSAmJiB2YWx1ZS5fdGlwcHkucmVmZXJlbmNlID09PSB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcnJheU9mRWxlbWVudHModmFsdWU6IFRhcmdldHMpOiBFbGVtZW50W10ge1xuICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9XG5cbiAgaWYgKGlzTm9kZUxpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYXJyYXlGcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25EdXJhdGlvbihcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICB2YWx1ZTogbnVtYmVyXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt2YWx1ZX1tc2A7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlTdGF0ZShcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICBzdGF0ZTogJ3Zpc2libGUnIHwgJ2hpZGRlbidcbik6IHZvaWQge1xuICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHN0YXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3duZXJEb2N1bWVudChcbiAgZWxlbWVudE9yRWxlbWVudHM6IEVsZW1lbnQgfCBFbGVtZW50W11cbik6IERvY3VtZW50IHtcbiAgY29uc3QgW2VsZW1lbnRdID0gbm9ybWFsaXplVG9BcnJheShlbGVtZW50T3JFbGVtZW50cyk7XG5cbiAgLy8gRWxlbWVudHMgY3JlYXRlZCB2aWEgYSA8dGVtcGxhdGU+IGhhdmUgYW4gb3duZXJEb2N1bWVudCB3aXRoIG5vIHJlZmVyZW5jZSB0byB0aGUgYm9keVxuICByZXR1cm4gZWxlbWVudD8ub3duZXJEb2N1bWVudD8uYm9keSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IGRvY3VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIoXG4gIHBvcHBlclRyZWVEYXRhOiBQb3BwZXJUcmVlRGF0YVtdLFxuICBldmVudDogTW91c2VFdmVudFxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50O1xuXG4gIHJldHVybiBwb3BwZXJUcmVlRGF0YS5ldmVyeSgoe3BvcHBlclJlY3QsIHBvcHBlclN0YXRlLCBwcm9wc30pID0+IHtcbiAgICBjb25zdCB7aW50ZXJhY3RpdmVCb3JkZXJ9ID0gcHJvcHM7XG4gICAgY29uc3QgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocG9wcGVyU3RhdGUucGxhY2VtZW50KTtcbiAgICBjb25zdCBvZmZzZXREYXRhID0gcG9wcGVyU3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7XG5cbiAgICBpZiAoIW9mZnNldERhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBvZmZzZXREYXRhLnRvcCEueSA6IDA7XG4gICAgY29uc3QgYm90dG9tRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAndG9wJyA/IG9mZnNldERhdGEuYm90dG9tIS55IDogMDtcbiAgICBjb25zdCBsZWZ0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnID8gb2Zmc2V0RGF0YS5sZWZ0IS54IDogMDtcbiAgICBjb25zdCByaWdodERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnID8gb2Zmc2V0RGF0YS5yaWdodCEueCA6IDA7XG5cbiAgICBjb25zdCBleGNlZWRzVG9wID1cbiAgICAgIHBvcHBlclJlY3QudG9wIC0gY2xpZW50WSArIHRvcERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc0JvdHRvbSA9XG4gICAgICBjbGllbnRZIC0gcG9wcGVyUmVjdC5ib3R0b20gLSBib3R0b21EaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNMZWZ0ID1cbiAgICAgIHBvcHBlclJlY3QubGVmdCAtIGNsaWVudFggKyBsZWZ0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzUmlnaHQgPVxuICAgICAgY2xpZW50WCAtIHBvcHBlclJlY3QucmlnaHQgLSByaWdodERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG5cbiAgICByZXR1cm4gZXhjZWVkc1RvcCB8fCBleGNlZWRzQm90dG9tIHx8IGV4Y2VlZHNMZWZ0IHx8IGV4Y2VlZHNSaWdodDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoXG4gIGJveDogSFRNTERpdkVsZW1lbnQsXG4gIGFjdGlvbjogJ2FkZCcgfCAncmVtb3ZlJyxcbiAgbGlzdGVuZXI6IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgbWV0aG9kID0gYCR7YWN0aW9ufUV2ZW50TGlzdGVuZXJgIGFzXG4gICAgfCAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICB8ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblxuICAvLyBzb21lIGJyb3dzZXJzIGFwcGFyZW50bHkgc3VwcG9ydCBgdHJhbnNpdGlvbmAgKHVucHJlZml4ZWQpIGJ1dCBvbmx5IGZpcmVcbiAgLy8gYHdlYmtpdFRyYW5zaXRpb25FbmRgLi4uXG4gIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBib3hbbWV0aG9kXShldmVudCwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXBhcmVkIHRvIHh4eC5jb250YWlucywgdGhpcyBmdW5jdGlvbiB3b3JrcyBmb3IgZG9tIHN0cnVjdHVyZXMgd2l0aCBzaGFkb3dcbiAqIGRvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsQ29udGFpbnMocGFyZW50OiBFbGVtZW50LCBjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICBsZXQgdGFyZ2V0ID0gY2hpbGQ7XG4gIHdoaWxlICh0YXJnZXQpIHtcbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0YXJnZXQgPSAodGFyZ2V0LmdldFJvb3ROb2RlPy4oKSBhcyBhbnkpPy5ob3N0O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICJpbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7aXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50SW5wdXQgPSB7aXNUb3VjaDogZmFsc2V9O1xubGV0IGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcblxuLyoqXG4gKiBXaGVuIGEgYHRvdWNoc3RhcnRgIGV2ZW50IGlzIGZpcmVkLCBpdCdzIGFzc3VtZWQgdGhlIHVzZXIgaXMgdXNpbmcgdG91Y2hcbiAqIGlucHV0LiBXZSdsbCBiaW5kIGEgYG1vdXNlbW92ZWAgZXZlbnQgbGlzdGVuZXIgdG8gbGlzdGVuIGZvciBtb3VzZSBpbnB1dCBpblxuICogdGhlIGZ1dHVyZS4gVGhpcyB3YXksIHRoZSBgaXNUb3VjaGAgcHJvcGVydHkgaXMgZnVsbHkgZHluYW1pYyBhbmQgd2lsbCBoYW5kbGVcbiAqIGh5YnJpZCBkZXZpY2VzIHRoYXQgdXNlIGEgbWl4IG9mIHRvdWNoICsgbW91c2UgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudElucHV0LmlzVG91Y2ggPSB0cnVlO1xuXG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxufVxuXG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZSgpOiB2b2lkIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgaWYgKG5vdyAtIGxhc3RNb3VzZU1vdmVUaW1lIDwgMjApIHtcbiAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cblxuLyoqXG4gKiBXaGVuIGFuIGVsZW1lbnQgaXMgaW4gZm9jdXMgYW5kIGhhcyBhIHRpcHB5LCBsZWF2aW5nIHRoZSB0YWIvd2luZG93IGFuZFxuICogcmV0dXJuaW5nIGNhdXNlcyBpdCB0byBzaG93IGFnYWluLiBGb3IgbW91c2UgdXNlcnMgdGhpcyBpcyB1bmV4cGVjdGVkLCBidXRcbiAqIGZvciBrZXlib2FyZCB1c2UgaXQgbWFrZXMgc2Vuc2UuXG4gKiBUT0RPOiBmaW5kIGEgYmV0dGVyIHRlY2huaXF1ZSB0byBzb2x2ZSB0aGlzIHByb2JsZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpOiB2b2lkIHtcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIGlmIChpc1JlZmVyZW5jZUVsZW1lbnQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5ITtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgaXNJRTExID0gaXNCcm93c2VyXG4gID8gLy8gQHRzLWlnbm9yZVxuICAgICEhd2luZG93Lm1zQ3J5cHRvXG4gIDogZmFsc2U7XG4iLCAiaW1wb3J0IHtUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKG1ldGhvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHh0ID0gbWV0aG9kID09PSAnZGVzdHJveScgPyAnbiBhbHJlYWR5LScgOiAnICc7XG5cbiAgcmV0dXJuIFtcbiAgICBgJHttZXRob2R9KCkgd2FzIGNhbGxlZCBvbiBhJHt0eHR9ZGVzdHJveWVkIGluc3RhbmNlLiBUaGlzIGlzIGEgbm8tb3AgYnV0YCxcbiAgICAnaW5kaWNhdGVzIGEgcG90ZW50aWFsIG1lbW9yeSBsZWFrLicsXG4gIF0uam9pbignICcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNwYWNlc0FuZFRhYnMgPSAvWyBcXHRdezIsfS9nO1xuICBjb25zdCBsaW5lU3RhcnRXaXRoU3BhY2VzID0gL15bIFxcdF0qL2dtO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKHNwYWNlc0FuZFRhYnMsICcgJylcbiAgICAucmVwbGFjZShsaW5lU3RhcnRXaXRoU3BhY2VzLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXZNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjbGVhbihgXG4gICVjdGlwcHkuanNcblxuICAlYyR7Y2xlYW4obWVzc2FnZSl9XG5cbiAgJWPwn5G34oCNIFRoaXMgaXMgYSBkZXZlbG9wbWVudC1vbmx5IG1lc3NhZ2UuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uLlxuICBgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gW1xuICAgIGdldERldk1lc3NhZ2UobWVzc2FnZSksXG4gICAgLy8gdGl0bGVcbiAgICAnY29sb3I6ICMwMEM1ODQ7IGZvbnQtc2l6ZTogMS4zZW07IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgLy8gbWVzc2FnZVxuICAgICdsaW5lLWhlaWdodDogMS41JyxcbiAgICAvLyBmb290ZXJcbiAgICAnY29sb3I6ICNhNmEwOTU7JyxcbiAgXTtcbn1cblxuLy8gQXNzdW1lIHdhcm5pbmdzIGFuZCBlcnJvcnMgbmV2ZXIgaGF2ZSB0aGUgc2FtZSBtZXNzYWdlXG5sZXQgdmlzaXRlZE1lc3NhZ2VzOiBTZXQ8c3RyaW5nPjtcbmlmIChfX0RFVl9fKSB7XG4gIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFZpc2l0ZWRNZXNzYWdlcygpOiB2b2lkIHtcbiAgdmlzaXRlZE1lc3NhZ2VzID0gbmV3IFNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS53YXJuKC4uLmdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS5lcnJvciguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRzKHRhcmdldHM6IFRhcmdldHMpOiB2b2lkIHtcbiAgY29uc3QgZGlkUGFzc0ZhbHN5VmFsdWUgPSAhdGFyZ2V0cztcbiAgY29uc3QgZGlkUGFzc1BsYWluT2JqZWN0ID1cbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0cykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXG4gICAgISh0YXJnZXRzIGFzIGFueSkuYWRkRXZlbnRMaXN0ZW5lcjtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc0ZhbHN5VmFsdWUsXG4gICAgW1xuICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCcsXG4gICAgICAnYCcgKyBTdHJpbmcodGFyZ2V0cykgKyAnYCcsXG4gICAgICAnYXMgaXRzIHRhcmdldHMgKGZpcnN0KSBhcmd1bWVudC4gVmFsaWQgdHlwZXMgYXJlOiBTdHJpbmcsIEVsZW1lbnQsJyxcbiAgICAgICdFbGVtZW50W10sIG9yIE5vZGVMaXN0LicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc1BsYWluT2JqZWN0LFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQgYSBwbGFpbiBvYmplY3Qgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBhcmd1bWVudCcsXG4gICAgICAnZm9yIHZpcnR1YWwgcG9zaXRpb25pbmcuIFVzZSBwcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0IGluc3RlYWQuJyxcbiAgICBdLmpvaW4oJyAnKVxuICApO1xufVxuIiwgImltcG9ydCB7RGVmYXVsdFByb3BzLCBQbHVnaW4sIFByb3BzLCBSZWZlcmVuY2VFbGVtZW50LCBUaXBweX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBoYXNPd25Qcm9wZXJ0eSxcbiAgcmVtb3ZlUHJvcGVydGllcyxcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3dhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UT30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2UsXG59O1xuXG5jb25zdCByZW5kZXJQcm9wcyA9IHtcbiAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIGFycm93OiB0cnVlLFxuICBjb250ZW50OiAnJyxcbiAgaW5lcnRpYTogZmFsc2UsXG4gIG1heFdpZHRoOiAzNTAsXG4gIHJvbGU6ICd0b29sdGlwJyxcbiAgdGhlbWU6ICcnLFxuICB6SW5kZXg6IDk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzOiBEZWZhdWx0UHJvcHMgPSB7XG4gIGFwcGVuZFRvOiBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyxcbiAgYXJpYToge1xuICAgIGNvbnRlbnQ6ICdhdXRvJyxcbiAgICBleHBhbmRlZDogJ2F1dG8nLFxuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGUoKSB7fSxcbiAgb25DcmVhdGUoKSB7fSxcbiAgb25EZXN0cm95KCkge30sXG4gIG9uSGlkZGVuKCkge30sXG4gIG9uSGlkZSgpIHt9LFxuICBvbk1vdW50KCkge30sXG4gIG9uU2hvdygpIHt9LFxuICBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcigpIHt9LFxuICBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZSgpIHt9LFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwbHVnaW5zOiBbXSxcbiAgcG9wcGVyT3B0aW9uczoge30sXG4gIHJlbmRlcjogbnVsbCxcbiAgc2hvd09uQ3JlYXRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHRyaWdnZXI6ICdtb3VzZWVudGVyIGZvY3VzJyxcbiAgdHJpZ2dlclRhcmdldDogbnVsbCxcbiAgLi4ucGx1Z2luUHJvcHMsXG4gIC4uLnJlbmRlclByb3BzLFxufTtcblxuY29uc3QgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFByb3BzOiBUaXBweVsnc2V0RGVmYXVsdFByb3BzJ10gPSAocGFydGlhbFByb3BzKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhwYXJ0aWFsUHJvcHMsIFtdKTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIERlZmF1bHRQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgKGRlZmF1bHRQcm9wcyBhcyBhbnkpW2tleV0gPSBwYXJ0aWFsUHJvcHNba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHBhc3NlZFByb3BzLnBsdWdpbnMgfHwgW107XG4gIGNvbnN0IHBsdWdpblByb3BzID0gcGx1Z2lucy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChhY2MsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHtuYW1lLCBkZWZhdWx0VmFsdWV9ID0gcGx1Z2luO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFjY1tuYW1lXSA9XG4gICAgICAgIHBhc3NlZFByb3BzW25hbWVdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHBhc3NlZFByb3BzW25hbWVdXG4gICAgICAgICAgOiAoZGVmYXVsdFByb3BzIGFzIGFueSlbbmFtZV0gPz8gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnBhc3NlZFByb3BzLFxuICAgIC4uLnBsdWdpblByb3BzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBsdWdpbnM6IFBsdWdpbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHByb3BLZXlzID0gcGx1Z2luc1xuICAgID8gT2JqZWN0LmtleXMoZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyh7Li4uZGVmYXVsdFByb3BzLCBwbHVnaW5zfSkpXG4gICAgOiBkZWZhdWx0S2V5cztcblxuICBjb25zdCBwcm9wcyA9IHByb3BLZXlzLnJlZHVjZShcbiAgICAoYWNjOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSAoXG4gICAgICAgIHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYGRhdGEtdGlwcHktJHtrZXl9YCkgfHwgJydcbiAgICAgICkudHJpbSgpO1xuXG4gICAgICBpZiAoIXZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlQXNTdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiBwcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcHJvcHM6IFByb3BzXG4pOiBQcm9wcyB7XG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICBjb250ZW50OiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHByb3BzLmNvbnRlbnQsIFtyZWZlcmVuY2VdKSxcbiAgICAuLi4ocHJvcHMuaWdub3JlQXR0cmlidXRlc1xuICAgICAgPyB7fVxuICAgICAgOiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcy5wbHVnaW5zKSksXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLmFyaWEsXG4gICAgLi4ub3V0LmFyaWEsXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6XG4gICAgICBvdXQuYXJpYS5leHBhbmRlZCA9PT0gJ2F1dG8nID8gcHJvcHMuaW50ZXJhY3RpdmUgOiBvdXQuYXJpYS5leHBhbmRlZCxcbiAgICBjb250ZW50OlxuICAgICAgb3V0LmFyaWEuY29udGVudCA9PT0gJ2F1dG8nXG4gICAgICAgID8gcHJvcHMuaW50ZXJhY3RpdmVcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6ICdkZXNjcmliZWRieSdcbiAgICAgICAgOiBvdXQuYXJpYS5jb250ZW50LFxuICB9O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKFxuICBwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge30sXG4gIHBsdWdpbnM6IFBsdWdpbltdID0gW11cbik6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGNvbnN0IG5vblBsdWdpblByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhcbiAgICAgIGRlZmF1bHRQcm9wcyxcbiAgICAgIE9iamVjdC5rZXlzKHBsdWdpblByb3BzKVxuICAgICk7XG5cbiAgICBsZXQgZGlkUGFzc1Vua25vd25Qcm9wID0gIWhhc093blByb3BlcnR5KG5vblBsdWdpblByb3BzLCBwcm9wKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wIGV4aXN0cyBpbiBgcGx1Z2luc2BcbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPVxuICAgICAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBwbHVnaW4ubmFtZSA9PT0gcHJvcCkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHdhcm5XaGVuKFxuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wLFxuICAgICAgW1xuICAgICAgICBgXFxgJHtwcm9wfVxcYGAsXG4gICAgICAgIFwiaXMgbm90IGEgdmFsaWQgcHJvcC4gWW91IG1heSBoYXZlIHNwZWxsZWQgaXQgaW5jb3JyZWN0bHksIG9yIGlmIGl0J3NcIixcbiAgICAgICAgJ2EgcGx1Z2luLCBmb3Jnb3QgdG8gcGFzcyBpdCBpbiBhbiBhcnJheSBhcyBwcm9wcy5wbHVnaW5zLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnQWxsIHByb3BzOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWxsLXByb3BzL1xcbicsXG4gICAgICAgICdQbHVnaW5zOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvcGx1Z2lucy8nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBBUlJPV19DTEFTUyxcbiAgQkFDS0RST1BfQ0xBU1MsXG4gIEJPWF9DTEFTUyxcbiAgQ09OVEVOVF9DTEFTUyxcbiAgU1ZHX0FSUk9XX0NMQVNTLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2RpdiwgaXNFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge0luc3RhbmNlLCBQb3BwZXJFbGVtZW50LCBQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRmlyZWZveCBleHRlbnNpb25zIGRvbid0IGFsbG93IC5pbm5lckhUTUwgPSBcIi4uLlwiIHByb3BlcnR5LiBUaGlzIHRyaWNrcyBpdC5cbmNvbnN0IGlubmVySFRNTCA9ICgpOiAnaW5uZXJIVE1MJyA9PiAnaW5uZXJIVE1MJztcblxuZnVuY3Rpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoZWxlbWVudDogRWxlbWVudCwgaHRtbDogc3RyaW5nKTogdm9pZCB7XG4gIGVsZW1lbnRbaW5uZXJIVE1MKCldID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyb3dFbGVtZW50KHZhbHVlOiBQcm9wc1snYXJyb3cnXSk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgYXJyb3cgPSBkaXYoKTtcblxuICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBBUlJPV19DTEFTUztcbiAgfSBlbHNlIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBTVkdfQVJST1dfQ0xBU1M7XG5cbiAgICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgYXJyb3cuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChhcnJvdywgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQ6IEhUTUxEaXZFbGVtZW50LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgaWYgKGlzRWxlbWVudChwcm9wcy5jb250ZW50KSkge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsICcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb3BzLmNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcy5jb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb3BzLmFsbG93SFRNTCkge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgcHJvcHMuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRyZW4ocG9wcGVyOiBQb3BwZXJFbGVtZW50KTogUG9wcGVyQ2hpbGRyZW4ge1xuICBjb25zdCBib3ggPSBwb3BwZXIuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGJveENoaWxkcmVuID0gYXJyYXlGcm9tKGJveC5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIHtcbiAgICBib3gsXG4gICAgY29udGVudDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ09OVEVOVF9DTEFTUykpLFxuICAgIGFycm93OiBib3hDaGlsZHJlbi5maW5kKFxuICAgICAgKG5vZGUpID0+XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEFSUk9XX0NMQVNTKSB8fFxuICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhTVkdfQVJST1dfQ0xBU1MpXG4gICAgKSxcbiAgICBiYWNrZHJvcDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT5cbiAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEJBQ0tEUk9QX0NMQVNTKVxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoXG4gIGluc3RhbmNlOiBJbnN0YW5jZVxuKToge1xuICBwb3BwZXI6IFBvcHBlckVsZW1lbnQ7XG4gIG9uVXBkYXRlPzogKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpID0+IHZvaWQ7XG59IHtcbiAgY29uc3QgcG9wcGVyID0gZGl2KCk7XG5cbiAgY29uc3QgYm94ID0gZGl2KCk7XG4gIGJveC5jbGFzc05hbWUgPSBCT1hfQ0xBU1M7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IENPTlRFTlRfQ0xBU1M7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuXG4gIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuXG4gIHBvcHBlci5hcHBlbmRDaGlsZChib3gpO1xuICBib3guYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgb25VcGRhdGUoaW5zdGFuY2UucHJvcHMsIGluc3RhbmNlLnByb3BzKTtcblxuICBmdW5jdGlvbiBvblVwZGF0ZShwcmV2UHJvcHM6IFByb3BzLCBuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XG4gICAgY29uc3Qge2JveCwgY29udGVudCwgYXJyb3d9ID0gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcblxuICAgIGlmIChuZXh0UHJvcHMudGhlbWUpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBuZXh0UHJvcHMudGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuYW5pbWF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBuZXh0UHJvcHMuYW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmluZXJ0aWEpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJyk7XG4gICAgfVxuXG4gICAgYm94LnN0eWxlLm1heFdpZHRoID1cbiAgICAgIHR5cGVvZiBuZXh0UHJvcHMubWF4V2lkdGggPT09ICdudW1iZXInXG4gICAgICAgID8gYCR7bmV4dFByb3BzLm1heFdpZHRofXB4YFxuICAgICAgICA6IG5leHRQcm9wcy5tYXhXaWR0aDtcblxuICAgIGlmIChuZXh0UHJvcHMucm9sZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5jb250ZW50ICE9PSBuZXh0UHJvcHMuY29udGVudCB8fFxuICAgICAgcHJldlByb3BzLmFsbG93SFRNTCAhPT0gbmV4dFByb3BzLmFsbG93SFRNTFxuICAgICkge1xuICAgICAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgaWYgKCFhcnJvdykge1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgIT09IG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyb3cpIHtcbiAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9wcGVyLFxuICAgIG9uVXBkYXRlLFxuICB9O1xufVxuXG4vLyBSdW50aW1lIGNoZWNrIHRvIGlkZW50aWZ5IGlmIHRoZSByZW5kZXIgZnVuY3Rpb24gaXMgdGhlIGRlZmF1bHQgb25lOyB0aGlzXG4vLyB3YXkgd2UgY2FuIGFwcGx5IGRlZmF1bHQgQ1NTIHRyYW5zaXRpb25zIGxvZ2ljIGFuZCBpdCBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheVxucmVuZGVyLiQkdGlwcHkgPSB0cnVlO1xuIiwgImltcG9ydCB7Y3JlYXRlUG9wcGVyLCBTdHJpY3RNb2RpZmllcnMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge2N1cnJlbnRJbnB1dH0gZnJvbSAnLi9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHtpc0lFMTF9IGZyb20gJy4vYnJvd3Nlcic7XG5pbXBvcnQge1RJUFBZX0RFRkFVTFRfQVBQRU5EX1RPLCBUT1VDSF9PUFRJT05TfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBhY3R1YWxDb250YWlucyxcbiAgZGl2LFxuICBnZXRPd25lckRvY3VtZW50LFxuICBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcixcbiAgaXNNb3VzZUV2ZW50LFxuICBzZXRUcmFuc2l0aW9uRHVyYXRpb24sXG4gIHNldFZpc2liaWxpdHlTdGF0ZSxcbiAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyLFxufSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgZXZhbHVhdGVQcm9wcywgZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wc30gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7XG4gIENvbnRlbnQsXG4gIEluc3RhbmNlLFxuICBMaWZlY3ljbGVIb29rcyxcbiAgUG9wcGVyRWxlbWVudCxcbiAgUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdCwgUG9wcGVyVHJlZURhdGEsIFBvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7XG4gIGFycmF5RnJvbSxcbiAgZGVib3VuY2UsXG4gIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuLFxuICBpbnZva2VXaXRoQXJnc09yUmV0dXJuLFxuICBub3JtYWxpemVUb0FycmF5LFxuICBwdXNoSWZVbmlxdWUsXG4gIHNwbGl0QnlTcGFjZXMsXG4gIHVuaXF1ZSxcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcHMsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVNZW1vcnlMZWFrV2FybmluZywgZXJyb3JXaGVuLCB3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxubGV0IGlkQ291bnRlciA9IDE7XG5sZXQgbW91c2VNb3ZlTGlzdGVuZXJzOiAoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKVtdID0gW107XG5cbi8vIFVzZWQgYnkgYGhpZGVBbGwoKWBcbmV4cG9ydCBsZXQgbW91bnRlZEluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXBweShcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz5cbik6IEluc3RhbmNlIHtcbiAgY29uc3QgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAuLi5nZXRFeHRlbmRlZFBhc3NlZFByb3BzKHJlbW92ZVVuZGVmaW5lZFByb3BzKHBhc3NlZFByb3BzKSksXG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV0IHNob3dUaW1lb3V0OiBhbnk7XG4gIGxldCBoaWRlVGltZW91dDogYW55O1xuICBsZXQgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcbiAgbGV0IGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuICBsZXQgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgbGV0IGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICBsZXQgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRyaWdnZXJFdmVudDogRXZlbnQgfCB1bmRlZmluZWQ7XG4gIGxldCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZDtcbiAgbGV0IG9uRmlyc3RVcGRhdGU6ICgpID0+IHZvaWQ7XG4gIGxldCBsaXN0ZW5lcnM6IExpc3RlbmVyT2JqZWN0W10gPSBbXTtcbiAgbGV0IGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIHByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudDtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgaWQgPSBpZENvdW50ZXIrKztcbiAgY29uc3QgcG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICBjb25zdCBwbHVnaW5zID0gdW5pcXVlKHByb3BzLnBsdWdpbnMpO1xuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC8vIElzIHRoZSBpbnN0YW5jZSBjdXJyZW50bHkgZW5hYmxlZD9cbiAgICBpc0VuYWJsZWQ6IHRydWUsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBzaG93aW5nIGFuZCBub3QgdHJhbnNpdGlvbmluZyBvdXQ/XG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIGluc3RhbmNlIGJlZW4gZGVzdHJveWVkP1xuICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IG1vdW50ZWQgdG8gdGhlIERPTT9cbiAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgdGlwcHkgZmluaXNoZWQgdHJhbnNpdGlvbmluZyBpbj9cbiAgICBpc1Nob3duOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB7XG4gICAgLy8gcHJvcGVydGllc1xuICAgIGlkLFxuICAgIHJlZmVyZW5jZSxcbiAgICBwb3BwZXI6IGRpdigpLFxuICAgIHBvcHBlckluc3RhbmNlLFxuICAgIHByb3BzLFxuICAgIHN0YXRlLFxuICAgIHBsdWdpbnMsXG4gICAgLy8gbWV0aG9kc1xuICAgIGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXRQcm9wcyxcbiAgICBzZXRDb250ZW50LFxuICAgIHNob3csXG4gICAgaGlkZSxcbiAgICBoaWRlV2l0aEludGVyYWN0aXZpdHksXG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gICAgdW5tb3VudCxcbiAgICBkZXN0cm95LFxuICB9O1xuXG4gIC8vIFRPRE86IEludmVzdGlnYXRlIHdoeSB0aGlzIGVhcmx5IHJldHVybiBjYXVzZXMgYSBURFogZXJyb3IgaW4gdGhlIHRlc3RzIOKAlFxuICAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gaGFwcGVuIGluIHRoZSBicm93c2VyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXByb3BzLnJlbmRlcikge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBlcnJvcldoZW4odHJ1ZSwgJ3JlbmRlcigpIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiBzdXBwbGllZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbCBtdXRhdGlvbnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHtwb3BwZXIsIG9uVXBkYXRlfSA9IHByb3BzLnJlbmRlcihpbnN0YW5jZSk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290JywgJycpO1xuICBwb3BwZXIuaWQgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tJHtpbnN0YW5jZS5pZH1gO1xuXG4gIGluc3RhbmNlLnBvcHBlciA9IHBvcHBlcjtcbiAgcmVmZXJlbmNlLl90aXBweSA9IGluc3RhbmNlO1xuICBwb3BwZXIuX3RpcHB5ID0gaW5zdGFuY2U7XG5cbiAgY29uc3QgcGx1Z2luc0hvb2tzID0gcGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLmZuKGluc3RhbmNlKSk7XG4gIGNvbnN0IGhhc0FyaWFFeHBhbmRlZCA9IHJlZmVyZW5jZS5oYXNBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICBhZGRMaXN0ZW5lcnMoKTtcbiAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gIGhhbmRsZVN0eWxlcygpO1xuXG4gIGludm9rZUhvb2soJ29uQ3JlYXRlJywgW2luc3RhbmNlXSk7XG5cbiAgaWYgKHByb3BzLnNob3dPbkNyZWF0ZSkge1xuICAgIHNjaGVkdWxlU2hvdygpO1xuICB9XG5cbiAgLy8gUHJldmVudCBhIHRpcHB5IHdpdGggYSBkZWxheSBmcm9tIGhpZGluZyBpZiB0aGUgY3Vyc29yIGxlZnQgdGhlbiByZXR1cm5lZFxuICAvLyBiZWZvcmUgaXQgc3RhcnRlZCBoaWRpbmdcbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgfVxuICB9KTtcblxuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMFxuICAgICkge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpOiBbc3RyaW5nIHwgYm9vbGVhbiwgbnVtYmVyXSB7XG4gICAgY29uc3Qge3RvdWNofSA9IGluc3RhbmNlLnByb3BzO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRvdWNoKSA/IHRvdWNoIDogW3RvdWNoLCAwXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKVswXSA9PT0gJ2hvbGQnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKTogYm9vbGVhbiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLnJlbmRlcj8uJCR0aXBweTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXJnZXQgfHwgcmVmZXJlbmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldEN1cnJlbnRUYXJnZXQoKS5wYXJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldE93bmVyRG9jdW1lbnQocGFyZW50KSA6IGRvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTogUG9wcGVyQ2hpbGRyZW4ge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihwb3BwZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsYXkoaXNTaG93OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAvLyBGb3IgdG91Y2ggb3Iga2V5Ym9hcmQgaW5wdXQsIGZvcmNlIGAwYCBkZWxheSBmb3IgVVggcmVhc29uc1xuICAgIC8vIEFsc28gaWYgdGhlIGluc3RhbmNlIGlzIG1vdW50ZWQgYnV0IG5vdCB2aXNpYmxlICh0cmFuc2l0aW9uaW5nIG91dCksXG4gICAgLy8gaWdub3JlIGRlbGF5XG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB8fFxuICAgICAgY3VycmVudElucHV0LmlzVG91Y2ggfHxcbiAgICAgIChsYXN0VHJpZ2dlckV2ZW50ICYmIGxhc3RUcmlnZ2VyRXZlbnQudHlwZSA9PT0gJ2ZvY3VzJylcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmRlbGF5LFxuICAgICAgaXNTaG93ID8gMCA6IDEsXG4gICAgICBkZWZhdWx0UHJvcHMuZGVsYXlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3R5bGVzKGZyb21IaWRlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBwb3BwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiAhZnJvbUhpZGUgPyAnJyA6ICdub25lJztcbiAgICBwb3BwZXIuc3R5bGUuekluZGV4ID0gYCR7aW5zdGFuY2UucHJvcHMuekluZGV4fWA7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VIb29rKFxuICAgIGhvb2s6IGtleW9mIExpZmVjeWNsZUhvb2tzLFxuICAgIGFyZ3M6IFtJbnN0YW5jZSwgYW55P10sXG4gICAgc2hvdWxkSW52b2tlUHJvcHNIb29rID0gdHJ1ZVxuICApOiB2b2lkIHtcbiAgICBwbHVnaW5zSG9va3MuZm9yRWFjaCgocGx1Z2luSG9va3MpID0+IHtcbiAgICAgIGlmIChwbHVnaW5Ib29rc1tob29rXSkge1xuICAgICAgICBwbHVnaW5Ib29rc1tob29rXSEoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgICBpbnN0YW5jZS5wcm9wc1tob29rXSguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXJpYX0gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGlmICghYXJpYS5jb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IGBhcmlhLSR7YXJpYS5jb250ZW50fWA7XG4gICAgY29uc3QgaWQgPSBwb3BwZXIuaWQ7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIGN1cnJlbnRWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZX0gJHtpZH1gIDogaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5yZXBsYWNlKGlkLCAnJykudHJpbSgpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBuZXh0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgaWYgKGhhc0FyaWFFeHBhbmRlZCB8fCAhaW5zdGFuY2UucHJvcHMuYXJpYS5leHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBub2RlID09PSBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgICA6ICdmYWxzZSdcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBnZXREb2N1bWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBtb3VzZU1vdmVMaXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciAhPT0gZGVib3VuY2VkT25Nb3VzZU1vdmVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudFByZXNzKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vIE1vdmVkIGZpbmdlciB0byBzY3JvbGwgaW5zdGVhZCBvZiBhbiBpbnRlbnRpb25hbCB0YXAgb3V0c2lkZVxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgaWYgKGRpZFRvdWNoTW92ZSB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0dWFsVGFyZ2V0ID1cbiAgICAgIChldmVudC5jb21wb3NlZFBhdGggJiYgZXZlbnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIENsaWNrZWQgb24gaW50ZXJhY3RpdmUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGFjdHVhbENvbnRhaW5zKHBvcHBlciwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xpY2tlZCBvbiB0aGUgZXZlbnQgbGlzdGVuZXJzIHRhcmdldFxuICAgIGlmIChcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpLnNvbWUoKGVsKSA9PlxuICAgICAgICBhY3R1YWxDb250YWlucyhlbCwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52b2tlSG9vaygnb25DbGlja091dHNpZGUnLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgLy8gYG1vdXNlZG93bmAgZXZlbnQgaXMgZmlyZWQgcmlnaHQgYmVmb3JlIGBmb2N1c2AgaWYgcHJlc3NpbmcgdGhlXG4gICAgICAvLyBjdXJyZW50VGFyZ2V0LiBUaGlzIGxldHMgYSB0aXBweSB3aXRoIGBmb2N1c2AgdHJpZ2dlciBrbm93IHRoYXQgaXRcbiAgICAgIC8vIHNob3VsZCBub3Qgc2hvd1xuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhlIGxpc3RlbmVyIGdldHMgYWRkZWQgaW4gYHNjaGVkdWxlU2hvdygpYCwgYnV0IHRoaXMgbWF5IGJlIGhpZGluZyBpdFxuICAgICAgLy8gYmVmb3JlIGl0IHNob3dzLCBhbmQgaGlkZSgpJ3MgZWFybHkgYmFpbC1vdXQgYmVoYXZpb3IgY2FuIHByZXZlbnQgaXRcbiAgICAgIC8vIGZyb20gYmVpbmcgY2xlYW5lZCB1cFxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKTogdm9pZCB7XG4gICAgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50UHJlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpXG4gICAgICApIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGJveCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCkuYm94O1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYm94KSB7XG4gICAgICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBjYWxsYmFjayBzeW5jaHJvbm91cyBpZiBkdXJhdGlvbiBpcyAwXG4gICAgLy8gYHRyYW5zaXRpb25lbmRgIHdvbid0IGZpcmUgb3RoZXJ3aXNlXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcik7XG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ2FkZCcsIGxpc3RlbmVyKTtcblxuICAgIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBpZiAoZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkpIHtcbiAgICAgIG9uKCd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlIGFzIEV2ZW50TGlzdGVuZXIsIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgc3BsaXRCeVNwYWNlcyhpbnN0YW5jZS5wcm9wcy50cmlnZ2VyKS5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdtYW51YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgIG9uKGlzSUUxMSA/ICdmb2N1c291dCcgOiAnYmx1cicsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICAgIG9uKCdmb2N1c291dCcsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkIHx8XG4gICAgICBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fFxuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3YXNGb2N1c2VkID0gbGFzdFRyaWdnZXJFdmVudD8udHlwZSA9PT0gJ2ZvY3VzJztcblxuICAgIGxhc3RUcmlnZ2VyRXZlbnQgPSBldmVudDtcbiAgICBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50O1xuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAvLyBJZiBzY3JvbGxpbmcsIGBtb3VzZWVudGVyYCBldmVudHMgY2FuIGJlIGZpcmVkIGlmIHRoZSBjdXJzb3IgbGFuZHNcbiAgICAgIC8vIG92ZXIgYSBuZXcgdGFyZ2V0LCBidXQgYG1vdXNlbW92ZWAgZXZlbnRzIGRvbid0IGdldCBmaXJlZC4gVGhpc1xuICAgICAgLy8gY2F1c2VzIGludGVyYWN0aXZlIHRvb2x0aXBzIHRvIGdldCBzdHVjayBvcGVuIHVudGlsIHRoZSBjdXJzb3IgaXNcbiAgICAgIC8vIG1vdmVkXG4gICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHNob3cvaGlkZSB3aGVuIGNsaWNraW5nIGNsaWNrLXRyaWdnZXJlZCB0b29sdGlwc1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA8IDAgfHxcbiAgICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrKSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgIT09IGZhbHNlICYmXG4gICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICApIHtcbiAgICAgIHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVTaG93KGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gIXNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSAmJiAhd2FzRm9jdXNlZCkge1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBOb2RlO1xuICAgIGNvbnN0IGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyID1cbiAgICAgIGdldEN1cnJlbnRUYXJnZXQoKS5jb250YWlucyh0YXJnZXQpIHx8IHBvcHBlci5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyVHJlZURhdGEgPSBnZXROZXN0ZWRQb3BwZXJUcmVlKClcbiAgICAgIC5jb25jYXQocG9wcGVyKVxuICAgICAgLm1hcCgocG9wcGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gcG9wcGVyLl90aXBweSE7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LnN0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3BwZXJSZWN0OiBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBwb3BwZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBQb3BwZXJUcmVlRGF0YVtdO1xuXG4gICAgaWYgKGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKHBvcHBlclRyZWVEYXRhLCBldmVudCkpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNob3VsZEJhaWwgPVxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJiBpc1Zpc2libGVGcm9tQ2xpY2spO1xuXG4gICAgaWYgKHNob3VsZEJhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ck9yRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2ZvY3VzaW4nKSA8IDAgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgZm9jdXMgd2FzIG1vdmVkIHRvIHdpdGhpbiB0aGUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiZcbiAgICAgIHBvcHBlci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJbnB1dC5pc1RvdWNoXG4gICAgICA/IGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpICE9PSBldmVudC50eXBlLmluZGV4T2YoJ3RvdWNoJykgPj0gMFxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgY29uc3Qge1xuICAgICAgcG9wcGVyT3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICBtb3ZlVHJhbnNpdGlvbixcbiAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBjb25zdCBhcnJvdyA9IGdldElzRGVmYXVsdFJlbmRlckZuKCkgPyBnZXRDaGlsZHJlbihwb3BwZXIpLmFycm93IDogbnVsbDtcblxuICAgIGNvbnN0IGNvbXB1dGVkUmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgPyB7XG4gICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgICAgIGNvbnRleHRFbGVtZW50OlxuICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdC5jb250ZXh0RWxlbWVudCB8fCBnZXRDdXJyZW50VGFyZ2V0KCksXG4gICAgICAgIH1cbiAgICAgIDogcmVmZXJlbmNlO1xuXG4gICAgY29uc3QgdGlwcHlNb2RpZmllcjogTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPSB7XG4gICAgICBuYW1lOiAnJCR0aXBweScsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbih7c3RhdGV9KSB7XG4gICAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgICAgY29uc3Qge2JveH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuXG4gICAgICAgICAgWydwbGFjZW1lbnQnLCAncmVmZXJlbmNlLWhpZGRlbicsICdlc2NhcGVkJ10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2VtZW50Jywgc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcltgZGF0YS1wb3BwZXItJHthdHRyfWBdKSB7XG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJ9YCwgJycpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0eXBlIFRpcHB5TW9kaWZpZXIgPSBNb2RpZmllcjwnJCR0aXBweScsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PjtcbiAgICB0eXBlIEV4dGVuZGVkTW9kaWZpZXJzID0gU3RyaWN0TW9kaWZpZXJzIHwgUGFydGlhbDxUaXBweU1vZGlmaWVyPjtcblxuICAgIGNvbnN0IG1vZGlmaWVyczogQXJyYXk8RXh0ZW5kZWRNb2RpZmllcnM+ID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAyLFxuICAgICAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICAgICAgbGVmdDogNSxcbiAgICAgICAgICAgIHJpZ2h0OiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWRhcHRpdmU6ICFtb3ZlVHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aXBweU1vZGlmaWVyLFxuICAgIF07XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBhcnJvdykge1xuICAgICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZWxlbWVudDogYXJyb3csXG4gICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZGlmaWVycy5wdXNoKC4uLihwb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pKTtcblxuICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gY3JlYXRlUG9wcGVyPEV4dGVuZGVkTW9kaWZpZXJzPihcbiAgICAgIGNvbXB1dGVkUmVmZXJlbmNlLFxuICAgICAgcG9wcGVyLFxuICAgICAge1xuICAgICAgICAuLi5wb3BwZXJPcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG9uRmlyc3RVcGRhdGUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHthcHBlbmRUb30gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGxldCBwYXJlbnROb2RlOiBhbnk7XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSdsbCBhcHBlbmQgdGhlIHBvcHBlciB0byB0aGUgdHJpZ2dlclRhcmdldHMncyBwYXJlbnROb2RlIHNvXG4gICAgLy8gaXQncyBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgc28gdGhlIGVsZW1lbnRzIGluc2lkZSB0aGVcbiAgICAvLyB0aXBweSBjYW4gYmUgdGFiYmVkIHRvXG4gICAgLy8gSWYgdGhlcmUgYXJlIGNsaXBwaW5nIGlzc3VlcywgdGhlIHVzZXIgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgYXBwZW5kVG9cbiAgICAvLyBhbmQgZW5zdXJlIGZvY3VzIG1hbmFnZW1lbnQgaXMgaGFuZGxlZCBjb3JyZWN0bHkgbWFudWFsbHlcbiAgICBjb25zdCBub2RlID0gZ2V0Q3VycmVudFRhcmdldCgpO1xuXG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGFwcGVuZFRvID09PSBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTykgfHxcbiAgICAgIGFwcGVuZFRvID09PSAncGFyZW50J1xuICAgICkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZSA9IGludm9rZVdpdGhBcmdzT3JSZXR1cm4oYXBwZW5kVG8sIFtub2RlXSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHBvcHBlciBlbGVtZW50IG5lZWRzIHRvIGV4aXN0IG9uIHRoZSBET00gYmVmb3JlIGl0cyBwb3NpdGlvbiBjYW4gYmVcbiAgICAvLyB1cGRhdGVkIGFzIFBvcHBlciBuZWVkcyB0byByZWFkIGl0cyBkaW1lbnNpb25zXG4gICAgaWYgKCFwYXJlbnROb2RlLmNvbnRhaW5zKHBvcHBlcikpIHtcbiAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocG9wcGVyKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgY2hlY2tcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgICAgIGFwcGVuZFRvID09PSBkZWZhdWx0UHJvcHMuYXBwZW5kVG8gJiZcbiAgICAgICAgICBub2RlLm5leHRFbGVtZW50U2libGluZyAhPT0gcG9wcGVyLFxuICAgICAgICBbXG4gICAgICAgICAgJ0ludGVyYWN0aXZlIHRpcHB5IGVsZW1lbnQgbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIHZpYSBrZXlib2FyZCcsXG4gICAgICAgICAgJ25hdmlnYXRpb24gYmVjYXVzZSBpdCBpcyBub3QgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50JyxcbiAgICAgICAgICAnaW4gdGhlIERPTSBzb3VyY2Ugb3JkZXIuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnVXNpbmcgYSB3cmFwcGVyIDxkaXY+IG9yIDxzcGFuPiB0YWcgYXJvdW5kIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ3NvbHZlcyB0aGlzIGJ5IGNyZWF0aW5nIGEgbmV3IHBhcmVudE5vZGUgY29udGV4dC4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdTcGVjaWZ5aW5nIGBhcHBlbmRUbzogZG9jdW1lbnQuYm9keWAgc2lsZW5jZXMgdGhpcyB3YXJuaW5nLCBidXQgaXQnLFxuICAgICAgICAgICdhc3N1bWVzIHlvdSBhcmUgdXNpbmcgYSBmb2N1cyBtYW5hZ2VtZW50IHNvbHV0aW9uIHRvIGhhbmRsZScsXG4gICAgICAgICAgJ2tleWJvYXJkIG5hdmlnYXRpb24uJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU2VlOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWNjZXNzaWJpbGl0eS8jaW50ZXJhY3Rpdml0eScsXG4gICAgICAgIF0uam9pbignICcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5lc3RlZFBvcHBlclRyZWUoKTogUG9wcGVyRWxlbWVudFtdIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKFxuICAgICAgcG9wcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLV9fTkFNRVNQQUNFX1BSRUZJWF9fLXJvb3RdJylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVTaG93KGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgaW52b2tlSG9vaygnb25UcmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGxldCBkZWxheSA9IGdldERlbGF5KHRydWUpO1xuICAgIGNvbnN0IFt0b3VjaFZhbHVlLCB0b3VjaERlbGF5XSA9IGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCk7XG5cbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2ggJiYgdG91Y2hWYWx1ZSA9PT0gJ2hvbGQnICYmIHRvdWNoRGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gdG91Y2hEZWxheTtcbiAgICB9XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHNob3dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlSGlkZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGludm9rZUhvb2soJ29uVW50cmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBzY2hlZHVsZUhpZGUgaXMgYWRkZWQgdG8gYSBkb2N1bWVudC5ib2R5IGhhbmRsZXJcbiAgICAvLyBmcm9tIG9uTW91c2VMZWF2ZSBzbyBtdXN0IGludGVyY2VwdCBzY2hlZHVsZWQgaGlkZXMgZnJvbSBtb3VzZW1vdmUvbGVhdmVcbiAgICAvLyBldmVudHMgd2hlbiB0cmlnZ2VyIGNvbnRhaW5zIG1vdXNlZW50ZXIgYW5kIGNsaWNrLCBhbmQgdGhlIHRpcCBpc1xuICAgIC8vIGN1cnJlbnRseSBzaG93biBhcyBhIHJlc3VsdCBvZiBhIGNsaWNrLlxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDAgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmXG4gICAgICBbJ21vdXNlbGVhdmUnLCAnbW91c2Vtb3ZlJ10uaW5kZXhPZihldmVudC50eXBlKSA+PSAwICYmXG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2tcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheSA9IGdldERlbGF5KGZhbHNlKTtcblxuICAgIGlmIChkZWxheSkge1xuICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaXhlcyBhIGB0cmFuc2l0aW9uZW5kYCBwcm9ibGVtIHdoZW4gaXQgZmlyZXMgMSBmcmFtZSB0b29cbiAgICAgIC8vIGxhdGUgc29tZXRpbWVzLCB3ZSBkb24ndCB3YW50IGhpZGUoKSB0byBiZSBjYWxsZWQuXG4gICAgICBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBlbmFibGUoKTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKTogdm9pZCB7XG4gICAgLy8gRGlzYWJsaW5nIHRoZSBpbnN0YW5jZSBzaG91bGQgYWxzbyBoaWRlIGl0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHkuanMtcmVhY3QvaXNzdWVzLzEwNlxuICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lb3V0cygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQoc2hvd1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJvcHMocGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPik6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2V0UHJvcHMnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25CZWZvcmVVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICBjb25zdCBuZXh0UHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgICAgLi4ucHJldlByb3BzLFxuICAgICAgLi4ucmVtb3ZlVW5kZWZpbmVkUHJvcHMocGFydGlhbFByb3BzKSxcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcblxuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlICE9PSBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2UoXG4gICAgICAgIG9uTW91c2VNb3ZlLFxuICAgICAgICBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgc3RhbGUgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGVzIGFyZSByZW1vdmVkXG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0ICYmICFuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgbm9ybWFsaXplVG9BcnJheShwcmV2UHJvcHMudHJpZ2dlclRhcmdldCkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgICAvLyBGaXhlcyBhbiBpc3N1ZSB3aXRoIG5lc3RlZCB0aXBwaWVzIGlmIHRoZXkgYXJlIGFsbCBnZXR0aW5nIHJlLXJlbmRlcmVkLFxuICAgICAgLy8gYW5kIHRoZSBuZXN0ZWQgb25lcyBnZXQgcmUtcmVuZGVyZWQgZmlyc3QuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzLXJlYWN0L2lzc3Vlcy8xNzdcbiAgICAgIC8vIFRPRE86IGZpbmQgYSBjbGVhbmVyIC8gbW9yZSBlZmZpY2llbnQgc29sdXRpb24oISlcbiAgICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKChuZXN0ZWRQb3BwZXIpID0+IHtcbiAgICAgICAgLy8gUmVhY3QgKGFuZCBvdGhlciBVSSBsaWJzIGxpa2VseSkgcmVxdWlyZXMgYSByQUYgd3JhcHBlciBhcyBpdCBmbHVzaGVzXG4gICAgICAgIC8vIGl0cyB3b3JrIGluIG9uZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobmVzdGVkUG9wcGVyLl90aXBweSEucG9wcGVySW5zdGFuY2UhLmZvcmNlVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQWZ0ZXJVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50OiBDb250ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2NvbnRlbnR9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzaG93JykpO1xuICAgIH1cblxuICAgIC8vIEVhcmx5IGJhaWwtb3V0XG4gICAgY29uc3QgaXNBbHJlYWR5VmlzaWJsZSA9IGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZTtcbiAgICBjb25zdCBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIGNvbnN0IGlzVG91Y2hBbmRUb3VjaERpc2FibGVkID1cbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmICFpbnN0YW5jZS5wcm9wcy50b3VjaDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAwLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIGlzQWxyZWFkeVZpc2libGUgfHxcbiAgICAgIGlzRGVzdHJveWVkIHx8XG4gICAgICBpc0Rpc2FibGVkIHx8XG4gICAgICBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBgZGlzYWJsZWRgIGJlaGF2aW9yIGFjcm9zcyBicm93c2Vycy5cbiAgICAvLyBGaXJlZm94IGFsbG93cyBldmVudHMgb24gZGlzYWJsZWQgZWxlbWVudHMsIGJ1dCBDaHJvbWUgZG9lc24ndC5cbiAgICAvLyBVc2luZyBhIHdyYXBwZXIgZWxlbWVudCAoaS5lLiA8c3Bhbj4pIGlzIHJlY29tbWVuZGVkLlxuICAgIGlmIChnZXRDdXJyZW50VGFyZ2V0KCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25TaG93JywgW2luc3RhbmNlXSwgZmFsc2UpO1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3coaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlU3R5bGVzKCk7XG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIElmIGZsaXBwaW5nIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGFmdGVyIGhpZGluZyBhdCBsZWFzdCBvbmNlLCB0aGVcbiAgICAvLyBhbmltYXRpb24gd2lsbCB1c2UgdGhlIHdyb25nIHBsYWNlbWVudCB3aXRob3V0IHJlc2V0dGluZyB0aGUgZHVyYXRpb25cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCAwKTtcbiAgICB9XG5cbiAgICBvbkZpcnN0VXBkYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgfHwgaWdub3JlT25GaXJzdFVwZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAvLyByZWZsb3dcbiAgICAgIHZvaWQgcG9wcGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBpbnN0YW5jZS5wcm9wcy5tb3ZlVHJhbnNpdGlvbjtcblxuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgICBwdXNoSWZVbmlxdWUobW91bnRlZEluc3RhbmNlcywgaW5zdGFuY2UpO1xuXG4gICAgICAvLyBjZXJ0YWluIG1vZGlmaWVycyAoZS5nLiBgbWF4U2l6ZWApIHJlcXVpcmUgYSBzZWNvbmQgdXBkYXRlIGFmdGVyIHRoZVxuICAgICAgLy8gcG9wcGVyIGhhcyBiZWVuIHBvc2l0aW9uZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZT8uZm9yY2VVcGRhdGUoKTtcblxuICAgICAgaW52b2tlSG9vaygnb25Nb3VudCcsIFtpbnN0YW5jZV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uICYmIGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgKCkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIGludm9rZUhvb2soJ29uU2hvd24nLCBbaW5zdGFuY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZScpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeUhpZGRlbiA9ICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAxLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChpc0FscmVhZHlIaWRkZW4gfHwgaXNEZXN0cm95ZWQgfHwgaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uSGlkZScsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25IaWRlKGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gZmFsc2U7XG4gICAgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgaGFuZGxlU3R5bGVzKHRydWUpO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBpbnN0YW5jZS51bm1vdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCxcbiAgICAgICAgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGVXaXRoSW50ZXJhY3Rpdml0eScpXG4gICAgICApO1xuICAgIH1cblxuICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIHB1c2hJZlVuaXF1ZShtb3VzZU1vdmVMaXN0ZW5lcnMsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bm1vdW50KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygndW5tb3VudCcpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8vIElmIGEgcG9wcGVyIGlzIG5vdCBpbnRlcmFjdGl2ZSwgaXQgd2lsbCBiZSBhcHBlbmRlZCBvdXRzaWRlIHRoZSBwb3BwZXJcbiAgICAvLyB0cmVlIGJ5IGRlZmF1bHQuIFRoaXMgc2VlbXMgbWFpbmx5IGZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBidXQgd2Ugc2hvdWxkXG4gICAgLy8gZmluZCBhIHdvcmthcm91bmQgaWYgcG9zc2libGVcbiAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICBuZXN0ZWRQb3BwZXIuX3RpcHB5IS51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBpZiAocG9wcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgbW91bnRlZEluc3RhbmNlcyA9IG1vdW50ZWRJbnN0YW5jZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbnN0YW5jZSk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnZva2VIb29rKCdvbkhpZGRlbicsIFtpbnN0YW5jZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2Rlc3Ryb3knKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW5zdGFuY2UudW5tb3VudCgpO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBkZWxldGUgcmVmZXJlbmNlLl90aXBweTtcblxuICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGludm9rZUhvb2soJ29uRGVzdHJveScsIFtpbnN0YW5jZV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IGJpbmRHbG9iYWxFdmVudExpc3RlbmVycywge1xuICBjdXJyZW50SW5wdXQsXG59IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBjcmVhdGVUaXBweSwge21vdW50ZWRJbnN0YW5jZXN9IGZyb20gJy4vY3JlYXRlVGlwcHknO1xuaW1wb3J0IHtnZXRBcnJheU9mRWxlbWVudHMsIGlzRWxlbWVudCwgaXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgc2V0RGVmYXVsdFByb3BzLCB2YWxpZGF0ZVByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7SGlkZUFsbCwgSGlkZUFsbE9wdGlvbnMsIEluc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3ZhbGlkYXRlVGFyZ2V0cywgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmZ1bmN0aW9uIHRpcHB5KFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBvcHRpb25hbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICBjb25zdCBwbHVnaW5zID0gZGVmYXVsdFByb3BzLnBsdWdpbnMuY29uY2F0KG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVRhcmdldHModGFyZ2V0cyk7XG4gICAgdmFsaWRhdGVQcm9wcyhvcHRpb25hbFByb3BzLCBwbHVnaW5zKTtcbiAgfVxuXG4gIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuXG4gIGNvbnN0IHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHsuLi5vcHRpb25hbFByb3BzLCBwbHVnaW5zfTtcblxuICBjb25zdCBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGNvbnN0IGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgY29uc3QgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50cy5sZW5ndGggPiAxO1xuICAgIHdhcm5XaGVuKFxuICAgICAgaXNTaW5nbGVDb250ZW50RWxlbWVudCAmJiBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIFtcbiAgICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsXG4gICAgICAgICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsXG4gICAgICAgICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsXG4gICAgICAgICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJyxcbiAgICAgICAgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlcyA9IGVsZW1lbnRzLnJlZHVjZTxJbnN0YW5jZVtdPihcbiAgICAoYWNjLCByZWZlcmVuY2UpOiBJbnN0YW5jZVtdID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgYWNjLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcHB5O1xuXG5leHBvcnQgY29uc3QgaGlkZUFsbDogSGlkZUFsbCA9ICh7XG4gIGV4Y2x1ZGU6IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSxcbiAgZHVyYXRpb24sXG59OiBIaWRlQWxsT3B0aW9ucyA9IHt9KSA9PiB7XG4gIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICBsZXQgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSkge1xuICAgICAgaXNFeGNsdWRlZCA9IGlzUmVmZXJlbmNlRWxlbWVudChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpXG4gICAgICAgID8gaW5zdGFuY2UucmVmZXJlbmNlID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2VcbiAgICAgICAgOiBpbnN0YW5jZS5wb3BwZXIgPT09IChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UgYXMgSW5zdGFuY2UpLnBvcHBlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlzRXhjbHVkZWQpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9ufSk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9uOiBvcmlnaW5hbER1cmF0aW9ufSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7ZGl2fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2luZ2xldG9uLFxuICBQbHVnaW4sXG4gIENyZWF0ZVNpbmdsZXRvblByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxuICBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZSxcbiAgSW5zdGFuY2UsXG4gIFByb3BzLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcbmltcG9ydCB7YXBwbHlTdHlsZXMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5cbi8vIFRoZSBkZWZhdWx0IGBhcHBseVN0eWxlc2AgbW9kaWZpZXIgaGFzIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkXG4vLyBldmVyeSB0aW1lIHRoZSBwb3BwZXIgaXMgZGVzdHJveWVkIChpLmUuIGEgbmV3IHRhcmdldCksIHJlbW92aW5nIHRoZSBzdHlsZXNcbi8vIGFuZCBjYXVzaW5nIHRyYW5zaXRpb25zIHRvIGJyZWFrIGZvciBzaW5nbGV0b25zIHdoZW4gdGhlIGNvbnNvbGUgaXMgb3BlbiwgYnV0XG4vLyBtb3N0IG5vdGFibHkgZm9yIG5vbi10cmFuc2Zvcm0gc3R5bGVzIGJlaW5nIHVzZWQsIGBncHVBY2NlbGVyYXRpb246IGZhbHNlYC5cbmNvbnN0IGFwcGx5U3R5bGVzTW9kaWZpZXI6IE1vZGlmaWVyPCdhcHBseVN0eWxlcycsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IHtcbiAgLi4uYXBwbHlTdHlsZXMsXG4gIGVmZmVjdCh7c3RhdGV9KSB7XG4gICAgY29uc3QgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9XG5cbiAgICAvLyBpbnRlbnRpb25hbGx5IHJldHVybiBubyBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgLy8gcmV0dXJuICgpID0+IHsgLi4uIH1cbiAgfSxcbn07XG5cbmNvbnN0IGNyZWF0ZVNpbmdsZXRvbjogQ3JlYXRlU2luZ2xldG9uID0gKFxuICB0aXBweUluc3RhbmNlcyxcbiAgb3B0aW9uYWxQcm9wcyA9IHt9XG4pID0+IHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhQXJyYXkuaXNBcnJheSh0aXBweUluc3RhbmNlcyksXG4gICAgICBbXG4gICAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVNpbmdsZXRvbigpIG11c3QgYmUgYW4gYXJyYXkgb2YnLFxuICAgICAgICAndGlwcHkgaW5zdGFuY2VzLiBUaGUgcGFzc2VkIHZhbHVlIHdhcycsXG4gICAgICAgIFN0cmluZyh0aXBweUluc3RhbmNlcyksXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgaW5kaXZpZHVhbEluc3RhbmNlcyA9IHRpcHB5SW5zdGFuY2VzO1xuICBsZXQgcmVmZXJlbmNlczogQXJyYXk8UmVmZXJlbmNlRWxlbWVudD4gPSBbXTtcbiAgbGV0IHRyaWdnZXJUYXJnZXRzOiBBcnJheTxFbGVtZW50PiA9IFtdO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudCB8IG51bGw7XG4gIGxldCBvdmVycmlkZXMgPSBvcHRpb25hbFByb3BzLm92ZXJyaWRlcztcbiAgbGV0IGludGVyY2VwdFNldFByb3BzQ2xlYW51cHM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIGxldCBzaG93bk9uQ3JlYXRlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0VHJpZ2dlclRhcmdldHMoKTogdm9pZCB7XG4gICAgdHJpZ2dlclRhcmdldHMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzXG4gICAgICAubWFwKChpbnN0YW5jZSkgPT5cbiAgICAgICAgbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IGluc3RhbmNlLnJlZmVyZW5jZSlcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjLmNvbmNhdChpdGVtKSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICByZWZlcmVuY2VzID0gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5yZWZlcmVuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlSW5zdGFuY2VzKGlzRW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b246IEluc3RhbmNlKTogQXJyYXk8KCkgPT4gdm9pZD4ge1xuICAgIHJldHVybiBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBpbnN0YW5jZS5zZXRQcm9wcztcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICAgICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHNpbmdsZXRvbi5zZXRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzID0gb3JpZ2luYWxTZXRQcm9wcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBoYXZlIHRvIHBhc3Mgc2luZ2xldG9uLCBhcyBpdCBtYXliZSB1bmRlZmluZWQgb24gZmlyc3QgY2FsbFxuICBmdW5jdGlvbiBwcmVwYXJlSW5zdGFuY2UoXG4gICAgc2luZ2xldG9uOiBJbnN0YW5jZSxcbiAgICB0YXJnZXQ6IFJlZmVyZW5jZUVsZW1lbnRcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0cmlnZ2VyVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAvLyBiYWlsLW91dFxuICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVQcm9wczogUGFydGlhbDxQcm9wcz4gPSAob3ZlcnJpZGVzIHx8IFtdKVxuICAgICAgLmNvbmNhdCgnY29udGVudCcpXG4gICAgICAucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgKGFjYyBhcyBhbnkpW3Byb3BdID0gaW5kaXZpZHVhbEluc3RhbmNlc1tpbmRleF0ucHJvcHNbcHJvcF07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe1xuICAgICAgLi4ub3ZlcnJpZGVQcm9wcyxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6XG4gICAgICAgIHR5cGVvZiBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgICAgIDogKCk6IENsaWVudFJlY3QgPT4gcmVmZXJlbmNlc1tpbmRleF0/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgc2V0UmVmZXJlbmNlcygpO1xuICBzZXRUcmlnZ2VyVGFyZ2V0cygpO1xuXG4gIGNvbnN0IHBsdWdpbjogUGx1Z2luID0ge1xuICAgIGZuKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdXRzaWRlKGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hvdyhpbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCByZWZlcmVuY2VzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJpZ2dlcihpbnN0YW5jZSwgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2luZ2xldG9uID0gdGlwcHkoZGl2KCksIHtcbiAgICAuLi5yZW1vdmVQcm9wZXJ0aWVzKG9wdGlvbmFsUHJvcHMsIFsnb3ZlcnJpZGVzJ10pLFxuICAgIHBsdWdpbnM6IFtwbHVnaW4sIC4uLihvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pXSxcbiAgICB0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0cyxcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5vcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKG9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSxcbiAgICAgICAgYXBwbHlTdHlsZXNNb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSkgYXMgQ3JlYXRlU2luZ2xldG9uSW5zdGFuY2U8Q3JlYXRlU2luZ2xldG9uUHJvcHM+O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2hvdyA9IHNpbmdsZXRvbi5zaG93O1xuXG4gIHNpbmdsZXRvbi5zaG93ID0gKHRhcmdldD86IFJlZmVyZW5jZUVsZW1lbnQgfCBJbnN0YW5jZSB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIG9yaWdpbmFsU2hvdygpO1xuXG4gICAgLy8gZmlyc3QgdGltZSwgc2hvd09uQ3JlYXRlIG9yIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zXG4gICAgLy8gZGVmYXVsdCB0byBzaG93aW5nIGZpcnN0IGluc3RhbmNlXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1swXSk7XG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlcmVkIGZyb20gZXZlbnQgKGRvIG5vdGhpbmcgYXMgcHJlcGFyZUluc3RhbmNlIGFscmVhZHkgY2FsbGVkIGJ5IG9uVHJpZ2dlcilcbiAgICAvLyBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtcyB3aGVuIGFscmVhZHkgdmlzaWJsZSAoZG8gbm90aGluZyBhZ2FpbilcbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBpbmRleCBvZiBpbnN0YW5jZVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcmVmZXJlbmNlc1t0YXJnZXRdICYmIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbdGFyZ2V0XSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgY2hpbGQgdGlwcHkgaW5zdGFuY2VcbiAgICBpZiAoaW5kaXZpZHVhbEluc3RhbmNlcy5pbmRleE9mKHRhcmdldCBhcyBJbnN0YW5jZSkgPj0gMCkge1xuICAgICAgY29uc3QgcmVmID0gKHRhcmdldCBhcyBJbnN0YW5jZSkucmVmZXJlbmNlO1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZik7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgUmVmZXJlbmNlRWxlbWVudFxuICAgIGlmIChyZWZlcmVuY2VzLmluZGV4T2YodGFyZ2V0IGFzIFJlZmVyZW5jZUVsZW1lbnQpID49IDApIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCB0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93TmV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IHJlZmVyZW5jZXNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3coMCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIHNpbmdsZXRvbi5zaG93KHJlZmVyZW5jZXNbaW5kZXggKyAxXSB8fCBmaXJzdCk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dQcmV2aW91cyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcmVmZXJlbmNlc1tyZWZlcmVuY2VzLmxlbmd0aCAtIDFdO1xuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KGxhc3QpO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXQgPSByZWZlcmVuY2VzW2luZGV4IC0gMV0gfHwgbGFzdDtcbiAgICBzaW5nbGV0b24uc2hvdyh0YXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBzaW5nbGV0b24uc2V0UHJvcHM7XG5cbiAgc2luZ2xldG9uLnNldFByb3BzID0gKHByb3BzKTogdm9pZCA9PiB7XG4gICAgb3ZlcnJpZGVzID0gcHJvcHMub3ZlcnJpZGVzIHx8IG92ZXJyaWRlcztcbiAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2V0SW5zdGFuY2VzID0gKG5leHRJbnN0YW5jZXMpOiB2b2lkID0+IHtcbiAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG5cbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzID0gbmV4dEluc3RhbmNlcztcblxuICAgIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gICAgc2V0UmVmZXJlbmNlcygpO1xuICAgIHNldFRyaWdnZXJUYXJnZXRzKCk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe3RyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzfSk7XG4gIH07XG5cbiAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgcmV0dXJuIHNpbmdsZXRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpbmdsZXRvbjtcbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtUT1VDSF9PUFRJT05TfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHN9IGZyb20gJy4uL3Byb3BzJztcbmltcG9ydCB7SW5zdGFuY2UsIFByb3BzLCBUYXJnZXRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0xpc3RlbmVyT2JqZWN0fSBmcm9tICcuLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcblxuY29uc3QgQlVCQkxJTkdfRVZFTlRTX01BUCA9IHtcbiAgbW91c2VvdmVyOiAnbW91c2VlbnRlcicsXG4gIGZvY3VzaW46ICdmb2N1cycsXG4gIGNsaWNrOiAnY2xpY2snLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVsZWdhdGUgaW5zdGFuY2UgdGhhdCBjb250cm9scyB0aGUgY3JlYXRpb24gb2YgdGlwcHkgaW5zdGFuY2VzXG4gKiBmb3IgY2hpbGQgZWxlbWVudHMgKGB0YXJnZXRgIENTUyBzZWxlY3RvcikuXG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBwcm9wczogUGFydGlhbDxQcm9wcz4gJiB7dGFyZ2V0OiBzdHJpbmd9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICEocHJvcHMgJiYgcHJvcHMudGFyZ2V0KSxcbiAgICAgIFtcbiAgICAgICAgJ1lvdSBtdXN0IHNwZWNpdHkgYSBgdGFyZ2V0YCBwcm9wIGluZGljYXRpbmcgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG1hdGNoaW5nJyxcbiAgICAgICAgJ3RoZSB0YXJnZXQgZWxlbWVudHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBhIHRpcHB5LicsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBjaGlsZFRpcHB5SW5zdGFuY2VzOiBJbnN0YW5jZVtdID0gW107XG4gIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHt0YXJnZXR9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmF0aXZlUHJvcHMgPSByZW1vdmVQcm9wZXJ0aWVzKHByb3BzLCBbJ3RhcmdldCddKTtcbiAgY29uc3QgcGFyZW50UHJvcHMgPSB7Li4ubmF0aXZlUHJvcHMsIHRyaWdnZXI6ICdtYW51YWwnLCB0b3VjaDogZmFsc2V9O1xuICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgIHRvdWNoOiBkZWZhdWx0UHJvcHMudG91Y2gsXG4gICAgLi4ubmF0aXZlUHJvcHMsXG4gICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gdGlwcHkodGFyZ2V0cywgcGFyZW50UHJvcHMpO1xuICBjb25zdCBub3JtYWxpemVkUmV0dXJuVmFsdWUgPSBub3JtYWxpemVUb0FycmF5KHJldHVyblZhbHVlKTtcblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldmVudC50YXJnZXQgfHwgZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXROb2RlID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5jbG9zZXN0KHRhcmdldCk7XG5cbiAgICBpZiAoIXRhcmdldE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgcmVsZXZhbnQgdHJpZ2dlciB3aXRoIGZhbGxiYWNrczpcbiAgICAvLyAxLiBDaGVjayBgZGF0YS10aXBweS10cmlnZ2VyYCBhdHRyaWJ1dGUgb24gdGFyZ2V0IG5vZGVcbiAgICAvLyAyLiBGYWxsYmFjayB0byBgdHJpZ2dlcmAgcGFzc2VkIHRvIGBkZWxlZ2F0ZSgpYFxuICAgIC8vIDMuIEZhbGxiYWNrIHRvIGBkZWZhdWx0UHJvcHMudHJpZ2dlcmBcbiAgICBjb25zdCB0cmlnZ2VyID1cbiAgICAgIHRhcmdldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXRyaWdnZXInKSB8fFxuICAgICAgcHJvcHMudHJpZ2dlciB8fFxuICAgICAgZGVmYXVsdFByb3BzLnRyaWdnZXI7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHRhcmdldE5vZGUuX3RpcHB5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiB0eXBlb2YgY2hpbGRQcm9wcy50b3VjaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZXZlbnQudHlwZSAhPT0gJ3RvdWNoc3RhcnQnICYmXG4gICAgICB0cmlnZ2VyLmluZGV4T2YoKEJVQkJMSU5HX0VWRU5UU19NQVAgYXMgYW55KVtldmVudC50eXBlXSkgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aXBweSh0YXJnZXROb2RlLCBjaGlsZFByb3BzKTtcblxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IGNoaWxkVGlwcHlJbnN0YW5jZXMuY29uY2F0KGluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBub2RlOiBFbGVtZW50LFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgbGlzdGVuZXJzLnB1c2goe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc30pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIG9uKHJlZmVyZW5jZSwgJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIFRPVUNIX09QVElPTlMpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ21vdXNlb3ZlcicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnZm9jdXNpbicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnY2xpY2snLCBvblRyaWdnZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU11dGF0aW9ucyhpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBpbnN0YW5jZS5kZXN0cm95O1xuICAgIGNvbnN0IG9yaWdpbmFsRW5hYmxlID0gaW5zdGFuY2UuZW5hYmxlO1xuICAgIGNvbnN0IG9yaWdpbmFsRGlzYWJsZSA9IGluc3RhbmNlLmRpc2FibGU7XG5cbiAgICBpbnN0YW5jZS5kZXN0cm95ID0gKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICAgIGlmIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBbXTtcblxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5lbmFibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbEVuYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZW5hYmxlKCkpO1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZGlzYWJsZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG9yaWdpbmFsRGlzYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGlzYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpO1xuICB9XG5cbiAgbm9ybWFsaXplZFJldHVyblZhbHVlLmZvckVhY2goYXBwbHlNdXRhdGlvbnMpO1xuXG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZWdhdGU7XG4iLCAiaW1wb3J0IHtCQUNLRFJPUF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBzZXRWaXNpYmlsaXR5U3RhdGV9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuLi90ZW1wbGF0ZSc7XG5pbXBvcnQge0FuaW1hdGVGaWxsfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGFuaW1hdGVGaWxsOiBBbmltYXRlRmlsbCA9IHtcbiAgbmFtZTogJ2FuaW1hdGVGaWxsJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHkpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGVycm9yV2hlbihcbiAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCxcbiAgICAgICAgICAnVGhlIGBhbmltYXRlRmlsbGAgcGx1Z2luIHJlcXVpcmVzIHRoZSBkZWZhdWx0IHJlbmRlciBmdW5jdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldENoaWxkcmVuKGluc3RhbmNlLnBvcHBlcik7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsXG4gICAgICA/IGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpXG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJveC5pbnNlcnRCZWZvcmUoYmFja2Ryb3AsIGJveC5maXJzdEVsZW1lbnRDaGlsZCEpO1xuICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZWZpbGwnLCAnJyk7XG4gICAgICAgICAgYm94LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7YXJyb3c6IGZhbHNlLCBhbmltYXRpb246ICdzaGlmdC1hd2F5J30pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgY29uc3Qge3RyYW5zaXRpb25EdXJhdGlvbn0gPSBib3guc3R5bGU7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTtcblxuICAgICAgICAgIC8vIFRoZSBjb250ZW50IHNob3VsZCBmYWRlIGluIGFmdGVyIHRoZSBiYWNrZHJvcCBoYXMgbW9zdGx5IGZpbGxlZCB0aGVcbiAgICAgICAgICAvLyB0b29sdGlwIGVsZW1lbnQuIGBjbGlwLXBhdGhgIGlzIHRoZSBvdGhlciBhbHRlcm5hdGl2ZSBidXQgaXMgbm90XG4gICAgICAgICAgLy8gd2VsbC1zdXBwb3J0ZWQgYW5kIGlzIGJ1Z2d5IG9uIHNvbWUgZGV2aWNlcy5cbiAgICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke01hdGgucm91bmQoZHVyYXRpb24gLyAxMCl9bXNgO1xuXG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZUZpbGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGJhY2tkcm9wID0gZGl2KCk7XG4gIGJhY2tkcm9wLmNsYXNzTmFtZSA9IEJBQ0tEUk9QX0NMQVNTO1xuICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICByZXR1cm4gYmFja2Ryb3A7XG59XG4iLCAiaW1wb3J0IHtnZXRPd25lckRvY3VtZW50LCBpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0ZvbGxvd0N1cnNvciwgSW5zdGFuY2V9IGZyb20gJy4uL3R5cGVzJztcblxubGV0IG1vdXNlQ29vcmRzID0ge2NsaWVudFg6IDAsIGNsaWVudFk6IDB9O1xubGV0IGFjdGl2ZUluc3RhbmNlczogQXJyYXk8e2luc3RhbmNlOiBJbnN0YW5jZTsgZG9jOiBEb2N1bWVudH0+ID0gW107XG5cbmZ1bmN0aW9uIHN0b3JlTW91c2VDb29yZHMoe2NsaWVudFgsIGNsaWVudFl9OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIG1vdXNlQ29vcmRzID0ge2NsaWVudFgsIGNsaWVudFl9O1xufVxuXG5mdW5jdGlvbiBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5jb25zdCBmb2xsb3dDdXJzb3I6IEZvbGxvd0N1cnNvciA9IHtcbiAgbmFtZTogJ2ZvbGxvd0N1cnNvcicsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIGNvbnN0IGRvYyA9IGdldE93bmVyRG9jdW1lbnQoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgd2FzRm9jdXNFdmVudCA9IGZhbHNlO1xuICAgIGxldCBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNJbml0aWFsQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsfSk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBpcyBpbnRlcmFjdGl2ZSwgYXZvaWQgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHVubGVzcyBpdCdzXG4gICAgICAvLyBvdmVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgY29uc3QgaXNDdXJzb3JPdmVyUmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0XG4gICAgICAgID8gcmVmZXJlbmNlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICAgICA6IHRydWU7XG4gICAgICBjb25zdCB7Zm9sbG93Q3Vyc29yfSA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG5cbiAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByZWxhdGl2ZVggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgY29uc3QgcmVsYXRpdmVZID0gY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICBpZiAoaXNDdXJzb3JPdmVyUmVmZXJlbmNlIHx8ICFpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGNsaWVudFg7XG4gICAgICAgICAgICBsZXQgeSA9IGNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgICB4ID0gcmVjdC5sZWZ0ICsgcmVsYXRpdmVYO1xuICAgICAgICAgICAgICB5ID0gcmVjdC50b3AgKyByZWxhdGl2ZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC50b3AgOiB5O1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LnJpZ2h0IDogeDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5ib3R0b20gOiB5O1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QubGVmdCA6IHg7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHdpZHRoOiByaWdodCAtIGxlZnQsXG4gICAgICAgICAgICAgIGhlaWdodDogYm90dG9tIC0gdG9wLFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgICBib3R0b20sXG4gICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goe2luc3RhbmNlLCBkb2N9KTtcbiAgICAgICAgYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBhY3RpdmVJbnN0YW5jZXMgPSBhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKFxuICAgICAgICAoZGF0YSkgPT4gZGF0YS5pbnN0YW5jZSAhPT0gaW5zdGFuY2VcbiAgICAgICk7XG5cbiAgICAgIGlmIChhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKChkYXRhKSA9PiBkYXRhLmRvYyA9PT0gZG9jKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogY3JlYXRlLFxuICAgICAgb25EZXN0cm95OiBkZXN0cm95LFxuICAgICAgb25CZWZvcmVVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgfSxcbiAgICAgIG9uQWZ0ZXJVcGRhdGUoXywge2ZvbGxvd0N1cnNvcn0pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9sbG93Q3Vyc29yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwcmV2UHJvcHMuZm9sbG93Q3Vyc29yICE9PSBmb2xsb3dDdXJzb3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVzdHJveSgpO1xuXG4gICAgICAgICAgaWYgKGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgICAgY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgICAgICF3YXNGb2N1c0V2ZW50ICYmXG4gICAgICAgICAgICAgICFnZXRJc0luaXRpYWxCZWhhdmlvcigpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgJiYgIXdhc0ZvY3VzRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlKG1vdXNlQ29vcmRzIGFzIE1vdXNlRXZlbnQpO1xuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWdldElzSW5pdGlhbEJlaGF2aW9yKCkpIHtcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25UcmlnZ2VyKF8sIGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WX07XG4gICAgICAgIH1cbiAgICAgICAgd2FzRm9jdXNFdmVudCA9IGV2ZW50LnR5cGUgPT09ICdmb2N1cyc7XG4gICAgICB9LFxuICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93Q3Vyc29yO1xuIiwgImltcG9ydCB7TW9kaWZpZXIsIFBsYWNlbWVudH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0Jhc2VQbGFjZW1lbnQsIElubGluZVBvc2l0aW9uaW5nLCBQcm9wc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcnJheUZyb20sIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0UHJvcHMocHJvcHM6IFByb3BzLCBtb2RpZmllcjogTW9kaWZpZXI8YW55LCBhbnk+KTogUGFydGlhbDxQcm9wcz4ge1xuICByZXR1cm4ge1xuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLnByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKHByb3BzLnBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSkuZmlsdGVyKFxuICAgICAgICAgICh7bmFtZX0pID0+IG5hbWUgIT09IG1vZGlmaWVyLm5hbWVcbiAgICAgICAgKSxcbiAgICAgICAgbW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IGlubGluZVBvc2l0aW9uaW5nOiBJbmxpbmVQb3NpdGlvbmluZyA9IHtcbiAgbmFtZTogJ2lubGluZVBvc2l0aW9uaW5nJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMuaW5saW5lUG9zaXRpb25pbmc7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlbWVudDogUGxhY2VtZW50O1xuICAgIGxldCBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB0cmllZFBsYWNlbWVudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGNvbnN0IG1vZGlmaWVyOiBNb2RpZmllcjxcbiAgICAgICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgPiA9IHtcbiAgICAgIG5hbWU6ICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICBpZiAodHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYWNlbWVudCAhPT0gc3RhdGUucGxhY2VtZW50ICYmXG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpID09PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLnB1c2goc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Qoc3RhdGUucGxhY2VtZW50KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsYWNlbWVudCA9IHN0YXRlLnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBhcnRpYWw8RE9NUmVjdD4ge1xuICAgICAgcmV0dXJuIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgICAgICAgZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpLFxuICAgICAgICByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGFycmF5RnJvbShyZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSksXG4gICAgICAgIGN1cnNvclJlY3RJbmRleFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnRlcm5hbFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMocGFydGlhbFByb3BzKTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNb2RpZmllcigpOiB2b2lkIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBzZXRJbnRlcm5hbFByb3BzKGdldFByb3BzKGluc3RhbmNlLnByb3BzLCBtb2RpZmllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvbkFmdGVyVXBkYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uVHJpZ2dlcihfLCBldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIGNvbnN0IHJlY3RzID0gYXJyYXlGcm9tKGluc3RhbmNlLnJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKTtcbiAgICAgICAgICBjb25zdCBjdXJzb3JSZWN0ID0gcmVjdHMuZmluZChcbiAgICAgICAgICAgIChyZWN0KSA9PlxuICAgICAgICAgICAgICByZWN0LmxlZnQgLSAyIDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC5yaWdodCArIDIgPj0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICByZWN0LnRvcCAtIDIgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICByZWN0LmJvdHRvbSArIDIgPj0gZXZlbnQuY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZWN0cy5pbmRleE9mKGN1cnNvclJlY3QpO1xuICAgICAgICAgIGN1cnNvclJlY3RJbmRleCA9IGluZGV4ID4gLTEgPyBpbmRleCA6IGN1cnNvclJlY3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZVBvc2l0aW9uaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KFxuICBjdXJyZW50QmFzZVBsYWNlbWVudDogQmFzZVBsYWNlbWVudCB8IG51bGwsXG4gIGJvdW5kaW5nUmVjdDogRE9NUmVjdCxcbiAgY2xpZW50UmVjdHM6IERPTVJlY3RbXSxcbiAgY3Vyc29yUmVjdEluZGV4OiBudW1iZXJcbik6IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufSB7XG4gIC8vIE5vdCBhbiBpbmxpbmUgZWxlbWVudCwgb3IgcGxhY2VtZW50IGlzIG5vdCB5ZXQga25vd25cbiAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA8IDIgfHwgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgLy8gVGhlcmUgYXJlIHR3byByZWN0cyBhbmQgdGhleSBhcmUgZGlzam9pbmVkXG4gIGlmIChcbiAgICBjbGllbnRSZWN0cy5sZW5ndGggPT09IDIgJiZcbiAgICBjdXJzb3JSZWN0SW5kZXggPj0gMCAmJlxuICAgIGNsaWVudFJlY3RzWzBdLmxlZnQgPiBjbGllbnRSZWN0c1sxXS5yaWdodFxuICApIHtcbiAgICByZXR1cm4gY2xpZW50UmVjdHNbY3Vyc29yUmVjdEluZGV4XSB8fCBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICBzd2l0Y2ggKGN1cnJlbnRCYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICBjb25zdCBmaXJzdFJlY3QgPSBjbGllbnRSZWN0c1swXTtcbiAgICAgIGNvbnN0IGxhc3RSZWN0ID0gY2xpZW50UmVjdHNbY2xpZW50UmVjdHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpc1RvcCA9IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAndG9wJztcblxuICAgICAgY29uc3QgdG9wID0gZmlyc3RSZWN0LnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IGxhc3RSZWN0LmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBpc1RvcCA/IGZpcnN0UmVjdC5sZWZ0IDogbGFzdFJlY3QubGVmdDtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gaXNUb3AgPyBmaXJzdFJlY3QucmlnaHQgOiBsYXN0UmVjdC5yaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgY29uc3QgbWluTGVmdCA9IE1hdGgubWluKC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLmxlZnQpKTtcbiAgICAgIGNvbnN0IG1heFJpZ2h0ID0gTWF0aC5tYXgoLi4uY2xpZW50UmVjdHMubWFwKChyZWN0cykgPT4gcmVjdHMucmlnaHQpKTtcbiAgICAgIGNvbnN0IG1lYXN1cmVSZWN0cyA9IGNsaWVudFJlY3RzLmZpbHRlcigocmVjdCkgPT5cbiAgICAgICAgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0J1xuICAgICAgICAgID8gcmVjdC5sZWZ0ID09PSBtaW5MZWZ0XG4gICAgICAgICAgOiByZWN0LnJpZ2h0ID09PSBtYXhSaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgdG9wID0gbWVhc3VyZVJlY3RzWzBdLnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IG1lYXN1cmVSZWN0c1ttZWFzdXJlUmVjdHMubGVuZ3RoIC0gMV0uYm90dG9tO1xuICAgICAgY29uc3QgbGVmdCA9IG1pbkxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IG1heFJpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICAgIHJldHVybiB7dG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQge1ZpcnR1YWxFbGVtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFN0aWNreX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBzdGlja3k6IFN0aWNreSA9IHtcbiAgbmFtZTogJ3N0aWNreScsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZSwgcG9wcGVyfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCk6IFJlZmVyZW5jZUVsZW1lbnQgfCBWaXJ0dWFsRWxlbWVudCB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucG9wcGVySW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5zdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2VcbiAgICAgICAgOiByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdWxkQ2hlY2sodmFsdWU6ICdyZWZlcmVuY2UnIHwgJ3BvcHBlcicpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHRydWUgfHwgaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldlJlZlJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcHJldlBvcFJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgY3VycmVudFJlZlJlY3QgPSBzaG91bGRDaGVjaygncmVmZXJlbmNlJylcbiAgICAgICAgPyBnZXRSZWZlcmVuY2UoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBjdXJyZW50UG9wUmVjdCA9IHNob3VsZENoZWNrKCdwb3BwZXInKVxuICAgICAgICA/IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGN1cnJlbnRSZWZSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZSZWZSZWN0LCBjdXJyZW50UmVmUmVjdCkpIHx8XG4gICAgICAgIChjdXJyZW50UG9wUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UG9wUmVjdCwgY3VycmVudFBvcFJlY3QpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG4gICAgICBwcmV2UG9wUmVjdCA9IGN1cnJlbnRQb3BSZWN0O1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zdGlja3kpIHtcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3k7XG5cbmZ1bmN0aW9uIGFyZVJlY3RzRGlmZmVyZW50KFxuICByZWN0QTogQ2xpZW50UmVjdCB8IG51bGwsXG4gIHJlY3RCOiBDbGllbnRSZWN0IHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmIChyZWN0QSAmJiByZWN0Qikge1xuICAgIHJldHVybiAoXG4gICAgICByZWN0QS50b3AgIT09IHJlY3RCLnRvcCB8fFxuICAgICAgcmVjdEEucmlnaHQgIT09IHJlY3RCLnJpZ2h0IHx8XG4gICAgICByZWN0QS5ib3R0b20gIT09IHJlY3RCLmJvdHRvbSB8fFxuICAgICAgcmVjdEEubGVmdCAhPT0gcmVjdEIubGVmdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4vc3JjJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuLi9zcmMvdGVtcGxhdGUnO1xuXG50aXBweS5zZXREZWZhdWx0UHJvcHMoe3JlbmRlcn0pO1xuXG5leHBvcnQge2RlZmF1bHQsIGhpZGVBbGx9IGZyb20gJy4uL3NyYyc7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlU2luZ2xldG9ufSBmcm9tICcuLi9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbic7XG5leHBvcnQge2RlZmF1bHQgYXMgZGVsZWdhdGV9IGZyb20gJy4uL3NyYy9hZGRvbnMvZGVsZWdhdGUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFuaW1hdGVGaWxsfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9sbG93Q3Vyc29yfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9mb2xsb3dDdXJzb3InO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlubGluZVBvc2l0aW9uaW5nfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9pbmxpbmVQb3NpdGlvbmluZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RpY2t5fSBmcm9tICcuLi9zcmMvcGx1Z2lucy9zdGlja3knO1xuZXhwb3J0IHtST1VORF9BUlJPVyBhcyByb3VuZEFycm93fSBmcm9tICcuLi9zcmMvY29uc3RhbnRzJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSw4RUFBQUUsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsb0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElB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UUFBUUM7UUFDeEIvRCxNQUFNO1FBQ05ILEtBQUs7UUFDTG1FLFFBQVE7TUFKRjtNQU1SQyxPQUFPO1FBQ0xKLFVBQVU7TUFETDtNQUdQckQsV0FBVyxDQUFBO0lBVlM7QUFhdEJxQyxXQUFPUSxPQUFPVCxNQUFNRyxTQUFTeEMsT0FBTzJDLE9BQU9VLGNBQWNyRCxNQUF6RDtBQUNBcUMsVUFBTU8sU0FBU1M7QUFFZixRQUFJaEIsTUFBTUcsU0FBU2tCLE9BQU87QUFDeEJwQixhQUFPUSxPQUFPVCxNQUFNRyxTQUFTa0IsTUFBTWYsT0FBT1UsY0FBY0ssS0FBeEQ7SUFDRDtFQUlGO0FBekJ3RSxDQUFBO0FNaEIzRXpFLE1BQU1tb0IsZ0JBQWdCO0VBQUNOO0FBQUQsQ0FBdEI7OyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImZuIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJuYXZpZ2F0b3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImZuIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlN5bWJvbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImRvY3VtZW50IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm1heCIsICJtaW4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibWluIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImZuIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlNldCIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJTZXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibWF4IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlNldCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJTZXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJhY3RpdmVYRG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJUaXBweV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRpcHB5IiwgInRpcHB5X2VzbV9kZWZhdWx0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0b3AiLCAiYm90dG9tIiwgInJpZ2h0IiwgImxlZnQiLCAiYXV0byIsICJiYXNlUGxhY2VtZW50cyIsICJzdGFydCIsICJlbmQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInZpZXdwb3J0IiwgInBvcHBlciIsICJyZWZlcmVuY2UiLCAidmFyaWF0aW9uUGxhY2VtZW50cyIsICJyZWR1Y2UiLCAiYWNjIiwgInBsYWNlbWVudCIsICJjb25jYXQiLCAicGxhY2VtZW50cyIsICJiZWZvcmVSZWFkIiwgInJlYWQiLCAiYWZ0ZXJSZWFkIiwgImJlZm9yZU1haW4iLCAibWFpbiIsICJhZnRlck1haW4iLCAiYmVmb3JlV3JpdGUiLCAid3JpdGUiLCAiYWZ0ZXJXcml0ZSIsICJtb2RpZmllclBoYXNlcyIsICJnZXROb2RlTmFtZSIsICJlbGVtZW50IiwgIm5vZGVOYW1lIiwgInRvTG93ZXJDYXNlIiwgImdldFdpbmRvdyIsICJub2RlIiwgIndpbmRvdyIsICJ0b1N0cmluZyIsICJvd25lckRvY3VtZW50IiwgImRlZmF1bHRWaWV3IiwgImlzRWxlbWVudCIsICJPd25FbGVtZW50IiwgIkVsZW1lbnQiLCAiaXNIVE1MRWxlbWVudCIsICJIVE1MRWxlbWVudCIsICJpc1NoYWRvd1Jvb3QiLCAiU2hhZG93Um9vdCIsICJhcHBseVN0eWxlcyIsICJfcmVmIiwgInN0YXRlIiwgIk9iamVjdCIsICJrZXlzIiwgImVsZW1lbnRzIiwgImZvckVhY2giLCAibmFtZSIsICJzdHlsZSIsICJzdHlsZXMiLCAiYXR0cmlidXRlcyIsICJhc3NpZ24iLCAibmFtZTIiLCAidmFsdWUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QiLCAiX3JlZjIiLCAiaW5pdGlhbFN0eWxlcyIsICJwb3NpdGlvbiIsICJvcHRpb25zIiwgInN0cmF0ZWd5IiwgIm1hcmdpbiIsICJhcnJvdyIsICJzdHlsZVByb3BlcnRpZXMiLCAiaGFzT3duUHJvcGVydHkiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlc19kZWZhdWx0IiwgImVuYWJsZWQiLCAicGhhc2UiLCAiZm4iLCAicmVxdWlyZXMiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJtYXgiLCAiTWF0aCIsICJtaW4iLCAicm91bmQiLCAiZ2V0VUFTdHJpbmciLCAidWFEYXRhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnREYXRhIiwgImJyYW5kcyIsICJBcnJheSIsICJpc0FycmF5IiwgIm1hcCIsICJpdGVtIiwgImJyYW5kIiwgInZlcnNpb24iLCAiam9pbiIsICJ1c2VyQWdlbnQiLCAiaXNMYXlvdXRWaWV3cG9ydCIsICJ0ZXN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpbmNsdWRlU2NhbGUiLCAiaXNGaXhlZFN0cmF0ZWd5IiwgImNsaWVudFJlY3QiLCAic2NhbGVYIiwgInNjYWxlWSIsICJvZmZzZXRXaWR0aCIsICJ3aWR0aCIsICJvZmZzZXRIZWlnaHQiLCAiaGVpZ2h0IiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJvZmZzZXRMZWZ0IiwgInkiLCAib2Zmc2V0VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImNvbnRhaW5zIiwgInBhcmVudCIsICJjaGlsZCIsICJyb290Tm9kZSIsICJnZXRSb290Tm9kZSIsICJuZXh0IiwgImlzU2FtZU5vZGUiLCAicGFyZW50Tm9kZSIsICJob3N0IiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNUYWJsZUVsZW1lbnQiLCAiaW5kZXhPZiIsICJnZXREb2N1bWVudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgImdldFRydWVPZmZzZXRQYXJlbnQiLCAib2Zmc2V0UGFyZW50IiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAid2luZG93MiIsICJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCAid2l0aGluIiwgIm1pbjIiLCAibWF4MiIsICJ3aXRoaW5NYXhDbGFtcCIsICJ2IiwgImdldEZyZXNoU2lkZU9iamVjdCIsICJtZXJnZVBhZGRpbmdPYmplY3QiLCAicGFkZGluZ09iamVjdCIsICJleHBhbmRUb0hhc2hNYXAiLCAiaGFzaE1hcCIsICJrZXkiLCAidG9QYWRkaW5nT2JqZWN0IiwgInRvUGFkZGluZ09iamVjdDIiLCAicGFkZGluZyIsICJyZWN0cyIsICJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCAiYXJyb3dFbGVtZW50IiwgInBvcHBlck9mZnNldHMyIiwgIm1vZGlmaWVyc0RhdGEiLCAicG9wcGVyT2Zmc2V0cyIsICJiYXNlUGxhY2VtZW50IiwgImF4aXMiLCAiaXNWZXJ0aWNhbCIsICJsZW4iLCAiYXJyb3dSZWN0IiwgIm1pblByb3AiLCAibWF4UHJvcCIsICJlbmREaWZmIiwgInN0YXJ0RGlmZiIsICJhcnJvd09mZnNldFBhcmVudCIsICJjbGllbnRTaXplIiwgImNsaWVudEhlaWdodCIsICJjbGllbnRXaWR0aCIsICJjZW50ZXJUb1JlZmVyZW5jZSIsICJjZW50ZXIiLCAib2Zmc2V0MiIsICJheGlzUHJvcCIsICJjZW50ZXJPZmZzZXQiLCAiZWZmZWN0MiIsICJfb3B0aW9ucyRlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXJyb3dfZGVmYXVsdCIsICJyZXF1aXJlc0lmRXhpc3RzIiwgImdldFZhcmlhdGlvbiIsICJ1bnNldFNpZGVzIiwgInJvdW5kT2Zmc2V0c0J5RFBSIiwgIndpbiIsICJkcHIiLCAiZGV2aWNlUGl4ZWxSYXRpbyIsICJtYXBUb1N0eWxlcyIsICJfT2JqZWN0JGFzc2lnbjIiLCAicG9wcGVyMiIsICJwb3BwZXJSZWN0IiwgInZhcmlhdGlvbiIsICJvZmZzZXRzIiwgImdwdUFjY2VsZXJhdGlvbiIsICJhZGFwdGl2ZSIsICJyb3VuZE9mZnNldHMiLCAiaXNGaXhlZCIsICJfb2Zmc2V0cyR4IiwgIl9vZmZzZXRzJHkiLCAiX3JlZjMiLCAiaGFzWCIsICJoYXNZIiwgInNpZGVYIiwgInNpZGVZIiwgImhlaWdodFByb3AiLCAid2lkdGhQcm9wIiwgIm9mZnNldFkiLCAib2Zmc2V0WCIsICJjb21tb25TdHlsZXMiLCAiX3JlZjQiLCAiX09iamVjdCRhc3NpZ24iLCAiY29tcHV0ZVN0eWxlcyIsICJfcmVmNSIsICJfb3B0aW9ucyRncHVBY2NlbGVyYXQiLCAiX29wdGlvbnMkYWRhcHRpdmUiLCAiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwgImNvbXB1dGVTdHlsZXNfZGVmYXVsdCIsICJkYXRhIiwgInBhc3NpdmUiLCAiZWZmZWN0MyIsICJpbnN0YW5jZSIsICJfb3B0aW9ucyRzY3JvbGwiLCAic2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAic2Nyb2xsUGFyZW50cyIsICJzY3JvbGxQYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ1cGRhdGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudExpc3RlbmVyc19kZWZhdWx0IiwgImhhc2giLCAiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCAicmVwbGFjZSIsICJtYXRjaGVkIiwgImhhc2gyIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImdldFdpbmRvd1Njcm9sbCIsICJzY3JvbGxMZWZ0IiwgInBhZ2VYT2Zmc2V0IiwgInNjcm9sbFRvcCIsICJwYWdlWU9mZnNldCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldFZpZXdwb3J0UmVjdCIsICJodG1sIiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJfZWxlbWVudCRvd25lckRvY3VtZW4iLCAid2luU2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJpc1Njcm9sbFBhcmVudCIsICJfZ2V0Q29tcHV0ZWRTdHlsZSIsICJvdmVyZmxvdyIsICJvdmVyZmxvd1giLCAib3ZlcmZsb3dZIiwgImdldFNjcm9sbFBhcmVudCIsICJsaXN0U2Nyb2xsUGFyZW50cyIsICJsaXN0IiwgImlzQm9keSIsICJ0YXJnZXQiLCAidXBkYXRlZExpc3QiLCAicmVjdFRvQ2xpZW50UmVjdCIsICJyZWN0IiwgImdldElubmVyQm91bmRpbmdDbGllbnRSZWN0IiwgImNsaWVudFRvcCIsICJjbGllbnRMZWZ0IiwgImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwgImNsaXBwaW5nUGFyZW50IiwgImdldENsaXBwaW5nUGFyZW50cyIsICJjbGlwcGluZ1BhcmVudHMyIiwgImNhbkVzY2FwZUNsaXBwaW5nIiwgImNsaXBwZXJFbGVtZW50IiwgImdldENsaXBwaW5nUmVjdCIsICJib3VuZGFyeSIsICJyb290Qm91bmRhcnkiLCAibWFpbkNsaXBwaW5nUGFyZW50cyIsICJmaXJzdENsaXBwaW5nUGFyZW50IiwgImNsaXBwaW5nUmVjdCIsICJhY2NSZWN0IiwgImNvbXB1dGVPZmZzZXRzIiwgInJlZmVyZW5jZTIiLCAiY29tbW9uWCIsICJjb21tb25ZIiwgIm1haW5BeGlzIiwgImRldGVjdE92ZXJmbG93IiwgIl9vcHRpb25zIiwgIl9vcHRpb25zJHBsYWNlbWVudCIsICJfb3B0aW9ucyRzdHJhdGVneSIsICJfb3B0aW9ucyRib3VuZGFyeSIsICJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCAiX29wdGlvbnMkZWxlbWVudENvbnRlIiwgImVsZW1lbnRDb250ZXh0IiwgIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwgImFsdEJvdW5kYXJ5IiwgIl9vcHRpb25zJHBhZGRpbmciLCAiYWx0Q29udGV4dCIsICJjbGlwcGluZ0NsaWVudFJlY3QiLCAiY29udGV4dEVsZW1lbnQiLCAicmVmZXJlbmNlQ2xpZW50UmVjdCIsICJwb3BwZXJDbGllbnRSZWN0IiwgImVsZW1lbnRDbGllbnRSZWN0IiwgIm92ZXJmbG93T2Zmc2V0cyIsICJvZmZzZXREYXRhIiwgIm9mZnNldCIsICJtdWx0aXBseSIsICJjb21wdXRlQXV0b1BsYWNlbWVudCIsICJmbGlwVmFyaWF0aW9ucyIsICJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCAiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwgInBsYWNlbWVudHMyIiwgInBsYWNlbWVudDIiLCAiYWxsb3dlZFBsYWNlbWVudHMiLCAibGVuZ3RoIiwgIm92ZXJmbG93cyIsICJzb3J0IiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIk1hcCIsICJtYWtlRmFsbGJhY2tDaGVja3MiLCAiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwgImkiLCAiX2Jhc2VQbGFjZW1lbnQiLCAiaXNTdGFydFZhcmlhdGlvbiIsICJtYWluVmFyaWF0aW9uU2lkZSIsICJhbHRWYXJpYXRpb25TaWRlIiwgImNoZWNrcyIsICJwdXNoIiwgImV2ZXJ5IiwgImNoZWNrIiwgInNldCIsICJudW1iZXJPZkNoZWNrcyIsICJfbG9vcCIsICJfbG9vcDIiLCAiX2kyIiwgImZpdHRpbmdQbGFjZW1lbnQiLCAiZmluZCIsICJjaGVja3MyIiwgImdldCIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgInJlc2V0IiwgImZsaXBfZGVmYXVsdCIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzb21lIiwgInNpZGUiLCAiaGlkZSIsICJwcmV2ZW50T3ZlcmZsb3ciLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlX2RlZmF1bHQiLCAiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCAiaW52ZXJ0RGlzdGFuY2UiLCAic2tpZGRpbmciLCAiZGlzdGFuY2UiLCAiX29wdGlvbnMkb2Zmc2V0IiwgIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsICJvZmZzZXRfZGVmYXVsdCIsICJwb3BwZXJPZmZzZXRzX2RlZmF1bHQiLCAiZ2V0QWx0QXhpcyIsICJfb3B0aW9ucyR0ZXRoZXIiLCAidGV0aGVyIiwgIl9vcHRpb25zJHRldGhlck9mZnNldCIsICJ0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0VmFsdWUiLCAibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwgIm9mZnNldE1vZGlmaWVyU3RhdGUiLCAiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwgIm1haW5TaWRlIiwgImFsdFNpZGUiLCAiYWRkaXRpdmUiLCAibWluTGVuIiwgIm1heExlbiIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX2xlbiIsICJfbWluIiwgIl9tYXgiLCAiaXNPcmlnaW5TaWRlIiwgIl9vZmZzZXRNb2RpZmllclZhbHVlIiwgIl90ZXRoZXJNaW4iLCAiX3RldGhlck1heCIsICJfcHJldmVudGVkT2Zmc2V0IiwgInByZXZlbnRPdmVyZmxvd19kZWZhdWx0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiaXNFbGVtZW50U2NhbGVkIiwgImdldENvbXBvc2l0ZVJlY3QiLCAiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCAiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCAib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgInZpc2l0ZWQiLCAiU2V0IiwgInJlc3VsdCIsICJtb2RpZmllciIsICJhZGQiLCAiZGVwIiwgImhhcyIsICJkZXBNb2RpZmllciIsICJvcmRlck1vZGlmaWVycyIsICJvcmRlcmVkTW9kaWZpZXJzIiwgImRlYm91bmNlIiwgImZuMiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiREVGQVVMVF9PUFRJT05TIiwgImFyZVZhbGlkRWxlbWVudHMiLCAiYXJndW1lbnRzIiwgImFyZ3MiLCAiX2tleSIsICJwb3BwZXJHZW5lcmF0b3IiLCAiZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJkZWZhdWx0TW9kaWZpZXJzMiIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwgImRlZmF1bHRPcHRpb25zIiwgImNyZWF0ZVBvcHBlcjIiLCAiZWZmZWN0Q2xlYW51cEZucyIsICJpc0Rlc3Ryb3llZCIsICJzZXRPcHRpb25zIiwgInNldE9wdGlvbnNBY3Rpb24iLCAib3B0aW9uczIiLCAiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsICJtIiwgInJ1bk1vZGlmaWVyRWZmZWN0cyIsICJmb3JjZVVwZGF0ZSIsICJfc3RhdGUkZWxlbWVudHMiLCAicmVmZXJlbmNlMyIsICJwb3BwZXIzIiwgImluZGV4IiwgIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZSIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwgImRlc3Ryb3kiLCAic3RhdGUyIiwgIm9uRmlyc3RVcGRhdGUiLCAiX3JlZiRvcHRpb25zIiwgImVmZmVjdDUiLCAiY2xlYW51cEZuIiwgIm5vb3BGbiIsICJub29wRm4yIiwgImNyZWF0ZVBvcHBlciIsICJCT1hfQ0xBU1MiLCAiQ09OVEVOVF9DTEFTUyIsICJCQUNLRFJPUF9DTEFTUyIsICJBUlJPV19DTEFTUyIsICJTVkdfQVJST1dfQ0xBU1MiLCAiVE9VQ0hfT1BUSU9OUyIsICJjYXB0dXJlIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPMiIsICJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsICJkZWZhdWx0VmFsdWUiLCAiaXNUeXBlIiwgInR5cGUiLCAic3RyIiwgImNhbGwiLCAiaW52b2tlV2l0aEFyZ3NPclJldHVybiIsICJhcHBseSIsICJkZWJvdW5jZTIiLCAibXMiLCAidGltZW91dCIsICJhcmciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAic3BsaXRCeVNwYWNlcyIsICJCb29sZWFuIiwgIm5vcm1hbGl6ZVRvQXJyYXkiLCAicHVzaElmVW5pcXVlIiwgImFyciIsICJ1bmlxdWUiLCAiZ2V0QmFzZVBsYWNlbWVudDIiLCAiYXJyYXlGcm9tIiwgInJlbW92ZVVuZGVmaW5lZFByb3BzIiwgIm9iaiIsICJkaXYiLCAiY3JlYXRlRWxlbWVudCIsICJpc0VsZW1lbnQyIiwgImlzTm9kZUxpc3QiLCAiaXNNb3VzZUV2ZW50IiwgImlzUmVmZXJlbmNlRWxlbWVudCIsICJfdGlwcHkiLCAiZ2V0QXJyYXlPZkVsZW1lbnRzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwgImVscyIsICJlbCIsICJ0cmFuc2l0aW9uRHVyYXRpb24iLCAic2V0VmlzaWJpbGl0eVN0YXRlIiwgImdldE93bmVyRG9jdW1lbnQiLCAiZWxlbWVudE9yRWxlbWVudHMiLCAiX25vcm1hbGl6ZVRvQXJyYXkiLCAiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCAicG9wcGVyVHJlZURhdGEiLCAiZXZlbnQiLCAiY2xpZW50WCIsICJjbGllbnRZIiwgInBvcHBlclN0YXRlIiwgInByb3BzIiwgImludGVyYWN0aXZlQm9yZGVyIiwgInRvcERpc3RhbmNlIiwgImJvdHRvbURpc3RhbmNlIiwgImxlZnREaXN0YW5jZSIsICJyaWdodERpc3RhbmNlIiwgImV4Y2VlZHNUb3AiLCAiZXhjZWVkc0JvdHRvbSIsICJleGNlZWRzTGVmdCIsICJleGNlZWRzUmlnaHQiLCAidXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImJveCIsICJhY3Rpb24iLCAibGlzdGVuZXIiLCAibWV0aG9kIiwgImFjdHVhbENvbnRhaW5zIiwgIl90YXJnZXQkZ2V0Um9vdE5vZGUiLCAiY3VycmVudElucHV0IiwgImlzVG91Y2giLCAibGFzdE1vdXNlTW92ZVRpbWUiLCAib25Eb2N1bWVudFRvdWNoU3RhcnQiLCAicGVyZm9ybWFuY2UiLCAib25Eb2N1bWVudE1vdXNlTW92ZSIsICJub3ciLCAib25XaW5kb3dCbHVyIiwgImFjdGl2ZUVsZW1lbnQiLCAiYmx1ciIsICJpc1Zpc2libGUiLCAiYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzIiwgImlzQnJvd3NlciIsICJpc0lFMTEiLCAibXNDcnlwdG8iLCAicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCAicGx1Z2luUHJvcHMiLCAiYW5pbWF0ZUZpbGwiLCAiZm9sbG93Q3Vyc29yIiwgImlubGluZVBvc2l0aW9uaW5nIiwgInN0aWNreSIsICJyZW5kZXJQcm9wcyIsICJhbGxvd0hUTUwiLCAiYW5pbWF0aW9uIiwgImNvbnRlbnQiLCAiaW5lcnRpYSIsICJtYXhXaWR0aCIsICJyb2xlIiwgInRoZW1lIiwgInpJbmRleCIsICJkZWZhdWx0UHJvcHMiLCAiYXBwZW5kVG8iLCAiYXJpYSIsICJleHBhbmRlZCIsICJkZWxheSIsICJkdXJhdGlvbiIsICJnZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImhpZGVPbkNsaWNrIiwgImlnbm9yZUF0dHJpYnV0ZXMiLCAiaW50ZXJhY3RpdmUiLCAiaW50ZXJhY3RpdmVEZWJvdW5jZSIsICJtb3ZlVHJhbnNpdGlvbiIsICJvbkFmdGVyVXBkYXRlIiwgIm9uQmVmb3JlVXBkYXRlIiwgIm9uQ3JlYXRlIiwgIm9uRGVzdHJveSIsICJvbkhpZGRlbiIsICJvbkhpZGUiLCAib25Nb3VudCIsICJvblNob3ciLCAib25TaG93biIsICJvblRyaWdnZXIiLCAib25VbnRyaWdnZXIiLCAib25DbGlja091dHNpZGUiLCAicGx1Z2lucyIsICJwb3BwZXJPcHRpb25zIiwgInJlbmRlciIsICJzaG93T25DcmVhdGUiLCAidG91Y2giLCAidHJpZ2dlciIsICJ0cmlnZ2VyVGFyZ2V0IiwgImRlZmF1bHRLZXlzIiwgInNldERlZmF1bHRQcm9wcyIsICJzZXREZWZhdWx0UHJvcHMyIiwgInBhcnRpYWxQcm9wcyIsICJ2YWxpZGF0ZVByb3BzIiwgImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCAicGFzc2VkUHJvcHMiLCAicGx1Z2luUHJvcHMyIiwgInBsdWdpbiIsICJfbmFtZSIsICJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCAicHJvcEtleXMiLCAidmFsdWVBc1N0cmluZyIsICJnZXRBdHRyaWJ1dGUiLCAidHJpbSIsICJKU09OIiwgInBhcnNlIiwgImUiLCAiZXZhbHVhdGVQcm9wcyIsICJvdXQiLCAiaW5uZXJIVE1MIiwgImlubmVySFRNTDIiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiY3JlYXRlQXJyb3dFbGVtZW50IiwgImFycm93MiIsICJjbGFzc05hbWUiLCAiYXBwZW5kQ2hpbGQiLCAic2V0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJnZXRDaGlsZHJlbiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJib3hDaGlsZHJlbiIsICJjaGlsZHJlbiIsICJjbGFzc0xpc3QiLCAiYmFja2Ryb3AiLCAib25VcGRhdGUiLCAicHJldlByb3BzIiwgIm5leHRQcm9wcyIsICJfZ2V0Q2hpbGRyZW4iLCAiYm94MiIsICJjb250ZW50MiIsICJyZW1vdmVDaGlsZCIsICIkJHRpcHB5IiwgImlkQ291bnRlciIsICJtb3VzZU1vdmVMaXN0ZW5lcnMiLCAibW91bnRlZEluc3RhbmNlcyIsICJjcmVhdGVUaXBweSIsICJzaG93VGltZW91dCIsICJoaWRlVGltZW91dCIsICJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsICJpc1Zpc2libGVGcm9tQ2xpY2siLCAiZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24iLCAiZGlkVG91Y2hNb3ZlIiwgImlnbm9yZU9uRmlyc3RVcGRhdGUiLCAibGFzdFRyaWdnZXJFdmVudCIsICJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImxpc3RlbmVycyIsICJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsICJvbk1vdXNlTW92ZSIsICJjdXJyZW50VGFyZ2V0IiwgImlkIiwgInBvcHBlckluc3RhbmNlIiwgImlzRW5hYmxlZCIsICJpc01vdW50ZWQiLCAiaXNTaG93biIsICJjbGVhckRlbGF5VGltZW91dHMiLCAic2V0UHJvcHMiLCAic2V0Q29udGVudDIiLCAic2hvdyIsICJoaWRlMiIsICJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCAiZW5hYmxlIiwgImRpc2FibGUiLCAidW5tb3VudCIsICJlcnJvcldoZW4iLCAiX3Byb3BzJHJlbmRlciIsICJwbHVnaW5zSG9va3MiLCAiaGFzQXJpYUV4cGFuZGVkIiwgImhhc0F0dHJpYnV0ZSIsICJhZGRMaXN0ZW5lcnMiLCAiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwgImhhbmRsZVN0eWxlcyIsICJpbnZva2VIb29rIiwgInNjaGVkdWxlU2hvdyIsICJnZXREb2N1bWVudCIsICJnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncyIsICJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCAiZ2V0SXNEZWZhdWx0UmVuZGVyRm4iLCAiX2luc3RhbmNlJHByb3BzJHJlbmRlIiwgImdldEN1cnJlbnRUYXJnZXQiLCAiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCAiZ2V0RGVsYXkiLCAiaXNTaG93IiwgImZyb21IaWRlIiwgInBvaW50ZXJFdmVudHMiLCAiaG9vayIsICJzaG91bGRJbnZva2VQcm9wc0hvb2siLCAicGx1Z2luSG9va3MiLCAiX2luc3RhbmNlJHByb3BzIiwgImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwgImF0dHIiLCAiaWQyIiwgIm5vZGVzIiwgImN1cnJlbnRWYWx1ZSIsICJuZXh0VmFsdWUiLCAiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCAib25Eb2N1bWVudFByZXNzIiwgImFjdHVhbFRhcmdldCIsICJjb21wb3NlZFBhdGgiLCAicmVtb3ZlRG9jdW1lbnRQcmVzcyIsICJvblRvdWNoTW92ZSIsICJvblRvdWNoU3RhcnQiLCAiYWRkRG9jdW1lbnRQcmVzcyIsICJkb2MiLCAib25UcmFuc2l0aW9uZWRPdXQiLCAiY2FsbGJhY2siLCAib25UcmFuc2l0aW9uRW5kIiwgIm9uVHJhbnNpdGlvbmVkSW4iLCAib24iLCAiZXZlbnRUeXBlIiwgImhhbmRsZXIiLCAib25UcmlnZ2VyMiIsICJvbk1vdXNlTGVhdmUiLCAib25CbHVyT3JGb2N1c091dCIsICJyZW1vdmVMaXN0ZW5lcnMiLCAiX2xhc3RUcmlnZ2VyRXZlbnQiLCAic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCAiaXNFdmVudExpc3RlbmVyU3RvcHBlZCIsICJ3YXNGb2N1c2VkIiwgInNjaGVkdWxlSGlkZSIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsICJnZXROZXN0ZWRQb3BwZXJUcmVlIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsICJpbnN0YW5jZTIiLCAic2hvdWxkQmFpbCIsICJyZWxhdGVkVGFyZ2V0IiwgImNyZWF0ZVBvcHBlckluc3RhbmNlIiwgImRlc3Ryb3lQb3BwZXJJbnN0YW5jZSIsICJfaW5zdGFuY2UkcHJvcHMyIiwgImNvbXB1dGVkUmVmZXJlbmNlIiwgInRpcHB5TW9kaWZpZXIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwgIm1vdW50IiwgIndhcm5XaGVuIiwgIm5leHRFbGVtZW50U2libGluZyIsICJfZ2V0Tm9ybWFsaXplZFRvdWNoU2UiLCAidG91Y2hWYWx1ZSIsICJ0b3VjaERlbGF5IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsICJuZXN0ZWRQb3BwZXIiLCAiaXNBbHJlYWR5VmlzaWJsZSIsICJpc0Rpc2FibGVkIiwgImlzVG91Y2hBbmRUb3VjaERpc2FibGVkIiwgInZpc2liaWxpdHkiLCAidHJhbnNpdGlvbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyIiwgIm9uRmlyc3RVcGRhdGUyIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMyIsICJfYm94IiwgIl9jb250ZW50IiwgImlzQWxyZWFkeUhpZGRlbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0IiwgInRhcmdldHMiLCAib3B0aW9uYWxQcm9wcyIsICJ2YWxpZGF0ZVRhcmdldHMiLCAiaXNTaW5nbGVDb250ZW50RWxlbWVudCIsICJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsICJpbnN0YW5jZXMiLCAiYXBwbHlTdHlsZXNNb2RpZmllciIsICJlZmZlY3Q0Il0KfQo=
