var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react");

// app/components/Logo.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "shinyLogo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 237.53 60.53", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M0,18.65l7.99-0.5c0.17,1.3,0.52,2.29,1.06,2.97c0.87,1.1,2.1,1.65,3.71,1.65c1.2,0,2.12-0.28,2.77-0.84
                s0.97-1.21,0.97-1.96c0-0.7-0.31-1.33-0.93-1.89c-0.62-0.56-2.05-1.08-4.3-1.58c-3.68-0.83-6.31-1.93-7.88-3.3
                c-1.58-1.37-2.37-3.12-2.37-5.25c0-1.4,0.4-2.72,1.21-3.96c0.81-1.24,2.03-2.22,3.65-2.93C7.51,0.36,9.74,0,12.57,0
                c3.47,0,6.12,0.65,7.94,1.94c1.82,1.29,2.91,3.35,3.25,6.17l-7.92,0.46c-0.21-1.22-0.65-2.11-1.33-2.67
                c-0.67-0.56-1.6-0.83-2.79-0.83c-0.98,0-1.71,0.21-2.21,0.62C9.04,6.1,8.79,6.6,8.79,7.19c0,0.43,0.2,0.82,0.61,1.17
                c0.4,0.36,1.33,0.69,2.82,1c3.67,0.79,6.3,1.59,7.89,2.4c1.59,0.81,2.74,1.81,3.47,3.01s1.08,2.54,1.08,4.02
                c0,1.74-0.48,3.35-1.45,4.82c-0.96,1.47-2.31,2.59-4.04,3.35c-1.73,0.76-3.91,1.14-6.54,1.14c-4.62,0-7.82-0.89-9.6-2.67
                C1.24,23.66,0.23,21.4,0,18.65z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M28.92,0.46h8.4v9.51h9.18V0.46h8.44v27.18H46.5V16.65h-9.18v10.99h-8.4V0.46z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M60.85,0.46h8.42v27.18h-8.42V0.46z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M75.35,0.46h7.84L93.43,15.5V0.46h7.92v27.18h-7.92L83.25,12.72v14.92h-7.9V0.46z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M104.18,0.46h9.33l5.48,9.17l5.49-9.17h9.28l-10.57,15.8v11.38h-8.42V16.26L104.18,0.46z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M28.67,32.88h7.98l2.87,15.22l4.2-15.22h7.95l4.21,15.2l2.88-15.2h7.94L60.7,60.07h-8.24L47.7,42.95
                l-4.75,17.11h-8.24L28.67,32.88z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M69.77,32.88h8.42v27.18h-8.42V32.88z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: "M84.27,32.88h7.84l10.23,15.04V32.88h7.92v27.18h-7.92L92.17,45.14v14.92h-7.9V32.88z" }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M115.96,32.88h12.48c2.46,0,4.45,0.33,5.96,1c1.51,0.67,2.77,1.63,3.75,2.87c0.99,1.25,1.71,2.7,2.15,4.36
                c0.45,1.66,0.67,3.41,0.67,5.27c0,2.9-0.33,5.16-0.99,6.76c-0.66,1.6-1.58,2.94-2.75,4.02s-2.43,1.8-3.78,2.16
                c-1.84,0.49-3.51,0.74-5.01,0.74h-12.48V32.88z M124.35,39.04v14.85h2.06c1.75,0,3-0.19,3.75-0.58c0.74-0.39,1.32-1.07,1.74-2.04
                s0.63-2.54,0.63-4.72c0-2.88-0.47-4.85-1.41-5.91s-2.5-1.59-4.67-1.59H124.35z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M144.32,46.49c0-4.44,1.24-7.89,3.71-10.37c2.47-2.47,5.91-3.71,10.33-3.71c4.52,0,8.01,1.21,10.46,3.64
                c2.45,2.43,3.67,5.83,3.67,10.21c0,3.18-0.54,5.78-1.6,7.81c-1.07,2.03-2.61,3.62-4.63,4.75c-2.02,1.13-4.54,1.7-7.56,1.7
                c-3.06,0-5.6-0.49-7.61-1.46s-3.64-2.52-4.89-4.63C144.95,52.32,144.32,49.67,144.32,46.49z M152.72,46.53
                c0,2.74,0.51,4.71,1.53,5.91s2.41,1.8,4.16,1.8c1.8,0,3.2-0.59,4.19-1.76c0.99-1.17,1.48-3.28,1.48-6.32
                c0-2.56-0.52-4.43-1.55-5.61c-1.03-1.18-2.43-1.77-4.2-1.77c-1.69,0-3.05,0.6-4.08,1.8S152.72,43.76,152.72,46.53z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M173.56,32.88h7.98l2.87,15.22l4.2-15.22h7.95l4.21,15.2l2.88-15.2h7.94l-5.99,27.18h-8.24l-4.77-17.11
                l-4.75,17.11h-8.24L173.56,32.88z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { className: "shinyBlue", d: `M212.87,51.07l7.99-0.5c0.17,1.3,0.53,2.29,1.06,2.97c0.87,1.1,2.1,1.65,3.71,1.65c1.2,0,2.12-0.28,2.77-0.84
                c0.65-0.56,0.97-1.21,0.97-1.96c0-0.7-0.31-1.33-0.93-1.89s-2.05-1.08-4.3-1.58c-3.68-0.83-6.31-1.93-7.88-3.3
                c-1.58-1.37-2.37-3.12-2.37-5.25c0-1.4,0.41-2.72,1.21-3.96s2.03-2.22,3.65-2.93c1.62-0.71,3.85-1.07,6.68-1.07
                c3.47,0,6.12,0.65,7.94,1.94c1.82,1.29,2.91,3.35,3.25,6.17l-7.92,0.46c-0.21-1.22-0.65-2.11-1.33-2.67
                c-0.67-0.56-1.6-0.83-2.79-0.83c-0.98,0-1.71,0.21-2.21,0.62s-0.74,0.92-0.74,1.51c0,0.43,0.2,0.82,0.61,1.17
                c0.4,0.36,1.33,0.69,2.82,1c3.67,0.79,6.3,1.59,7.89,2.4s2.74,1.81,3.47,3.01c0.72,1.2,1.08,2.54,1.08,4.02
                c0,1.74-0.48,3.35-1.45,4.82c-0.96,1.47-2.31,2.59-4.04,3.35s-3.91,1.14-6.54,1.14c-4.62,0-7.82-0.89-9.6-2.67
                C214.11,56.08,213.1,53.82,212.87,51.07z` }, void 0, !1, {
        fileName: "app/components/Logo.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/NavBar.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function NavBar() {
  let [mobileMenu, setMobileMenu] = (0, import_react3.useState)(!1), toggle = () => setMobileMenu((m) => !m);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "siteHeader", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "always-flex justify siteHeaderUnder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logoContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo_default, {}, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 21,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 20,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 19,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hamContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: mobileMenu ? "hamburger active" : "hamburger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "ham-trigger flex-vertical",
          onClick: toggle,
          onKeyDown: (e) => {
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle());
          },
          role: "button",
          tabIndex: 0,
          "aria-expanded": mobileMenu,
          "aria-controls": "mobile-nav",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: mobileMenu ? "ham-button active" : "ham-button", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "line line-1" }, void 0, !1, {
              fileName: "app/components/NavBar.jsx",
              lineNumber: 37,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "line line-2" }, void 0, !1, {
              fileName: "app/components/NavBar.jsx",
              lineNumber: 38,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "line line-3" }, void 0, !1, {
              fileName: "app/components/NavBar.jsx",
              lineNumber: 39,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/NavBar.jsx",
            lineNumber: 36,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/NavBar.jsx",
          lineNumber: 27,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 26,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 25,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DesktopNav, { onClose: () => setMobileMenu(!1) }, void 0, !1, {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 44,
        columnNumber: 4
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 18,
      columnNumber: 3
    }, this),
    mobileMenu && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileNav, { onClose: () => setMobileMenu(!1) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 47,
      columnNumber: 23
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function MobileNav({ onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "mobile-nav", className: "panel", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inside-xxl panelUnder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "mobileNav", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Home" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/about", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "About Us" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 66,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/faqs", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "FAQs" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 71,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 70,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 69,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        href: "https://www.paypal.com/paypalme/ShinyWindowsLLC",
        onClick: onClose,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Pay Bill" }, void 0, !1, {
          fileName: "app/components/NavBar.jsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 75,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { className: "linkBlue", to: "/contact", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Contact / Estimates" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 84,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 83,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 82,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function DesktopNav({ onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "", className: "desktopNav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-md justify-center desktopNavSub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "mobileNav always-flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { className: "flex-vertical", to: "/", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Home" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 100,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 99,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 98,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { className: "flex-vertical", to: "/about", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "About Us" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 105,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 104,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 103,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { className: "flex-vertical", to: "/faqs", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "FAQs" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 110,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "a",
      {
        className: "flex-vertical",
        href: "https://www.paypal.com/paypalme/ShinyWindowsLLC",
        onClick: onClose,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Pay Bill" }, void 0, !1, {
          fileName: "app/components/NavBar.jsx",
          lineNumber: 119,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/NavBar.jsx",
        lineNumber: 114,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { className: "linkBlue flex-vertical", to: "/contact", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Contact / Estimates" }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 124,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 123,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.jsx",
      lineNumber: 122,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 97,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-6U2FGGSS.css";

// app/components/ContactForm.jsx
var import_react4 = require("react"), emailjs = __toESM(require("emailjs-com")), import_reactstrap = require("reactstrap"), import_validator = require("validator"), import_react_recaptcha = __toESM(require("react-recaptcha")), import_sweetalert2 = __toESM(require("sweetalert2")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), US_STATES = [
  { code: "OH", name: "Ohio" }
], initialData = {
  firstname: "",
  email: "",
  message: "",
  streetaddress: "",
  city: "",
  state: ""
  // <-- add state
};
function ContactForm() {
  let [data, setData] = (0, import_react4.useState)(initialData), [errors, setErrors] = (0, import_react4.useState)({}), [isVerified, setIsVerified] = (0, import_react4.useState)(!1), recaptchaLoaded = (0, import_react4.useCallback)(() => {
    console.log("Captcha successfully Loaded");
  }, []), verifyCallback = (0, import_react4.useCallback)((response) => {
    response && setIsVerified(!0);
  }, []), handleChange = (0, import_react4.useCallback)((e) => {
    let { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value })), setErrors((err) => ({ ...err, [name]: "" }));
  }, []), validate = (0, import_react4.useCallback)(() => {
    var _a, _b, _c, _d;
    let err = {};
    return (_a = data.firstname) != null && _a.trim() || (err.firstname = "First Name required"), (_b = data.phone) != null && _b.trim() || (err.phone = "Phone required"), (_c = data.email) != null && _c.trim() ? (0, import_validator.isEmail)(data.email) || (err.email = "Email must be valid") : err.email = "Email required", (_d = data.message) != null && _d.trim() || (err.message = "Message required"), err;
  }, [data]), handleSubmit = (0, import_react4.useCallback)(async (e) => {
    e.preventDefault();
    let err = validate();
    if (Object.keys(err).length === 0 && isVerified)
      try {
        await emailjs.sendForm("webnicksteinbauer", "shinycontact", e.target, "user_vOc0ylPHeC2nCdyLQJAiW"), setData(initialData), setIsVerified(!0), import_sweetalert2.default.fire({ title: "Email Successfully Sent to Shiny Windows", icon: "success" });
      } catch {
        import_sweetalert2.default.fire({ title: "Failed to send email", text: "Please try again.", icon: "error" });
      }
    else
      setErrors(err);
  }, [isVerified, validate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: "contact-form", className: "contact-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Form, { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "firstname", children: "Name" }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_reactstrap.Input,
        {
          type: "text",
          id: "firstname",
          name: "firstname",
          placeholder: "Name",
          value: data.firstname,
          invalid: !!errors.firstname,
          onChange: handleChange
        },
        void 0,
        !1,
        {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormFeedback, { children: errors.firstname }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line flex-sm gap10 justify", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "phone", children: "Phone" }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_reactstrap.Input,
          {
            type: "phone",
            id: "phone",
            name: "phone",
            placeholder: "Phone",
            value: data.phone,
            invalid: !!errors.phone,
            onChange: handleChange
          },
          void 0,
          !1,
          {
            fileName: "app/components/ContactForm.jsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormFeedback, { children: errors.phone }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_reactstrap.Input,
          {
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Email",
            value: data.email,
            invalid: !!errors.email,
            onChange: handleChange
          },
          void 0,
          !1,
          {
            fileName: "app/components/ContactForm.jsx",
            lineNumber: 112,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormFeedback, { children: errors.email }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "streetaddress", children: "Street Address" }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_reactstrap.Input,
        {
          type: "text",
          id: "streetaddress",
          name: "streetaddress",
          placeholder: "Address",
          value: data.streetaddress,
          onChange: handleChange
        },
        void 0,
        !1,
        {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 127,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line flex-sm gap10 justify", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "city", children: "City" }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 139,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_reactstrap.Input,
          {
            type: "text",
            id: "city",
            name: "city",
            placeholder: "City",
            value: data.city,
            onChange: handleChange
          },
          void 0,
          !1,
          {
            fileName: "app/components/ContactForm.jsx",
            lineNumber: 140,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "state", children: "State" }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_reactstrap.Input,
          {
            type: "select",
            id: "state",
            name: "state",
            placeholder: "State",
            value: data.state,
            onChange: handleChange,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", children: "Select a state\u2026" }, void 0, !1, {
                fileName: "app/components/ContactForm.jsx",
                lineNumber: 160,
                columnNumber: 15
              }, this),
              US_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: s.code, children: s.name }, s.code, !1, {
                fileName: "app/components/ContactForm.jsx",
                lineNumber: 162,
                columnNumber: 17
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ContactForm.jsx",
            lineNumber: 152,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "zip", children: "Zip Code" }, void 0, !1, {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_reactstrap.Input,
          {
            type: "text",
            id: "zip",
            name: "zip",
            placeholder: "Zip",
            value: data.zip,
            onChange: handleChange
          },
          void 0,
          !1,
          {
            fileName: "app/components/ContactForm.jsx",
            lineNumber: 171,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 169,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 137,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Label, { className: "text-muted", htmlFor: "message", children: "Message" }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_reactstrap.Input,
        {
          type: "textarea",
          id: "message",
          name: "message",
          placeholder: "Message",
          value: data.message,
          invalid: !!errors.message,
          onChange: handleChange
        },
        void 0,
        !1,
        {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 187,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormFeedback, { children: errors.message }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 196,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react_recaptcha.default,
        {
          sitekey: "6LdPaukfAAAAAKLclBIJkpgBtqjCk6EsdtIjMUKe",
          render: "explicit",
          onloadCallback: recaptchaLoaded,
          verifyCallback
        },
        void 0,
        !1,
        {
          fileName: "app/components/ContactForm.jsx",
          lineNumber: 200,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormFeedback, { className: isVerified === !1 ? "feedback-active" : "feedback-inactive", children: "Confirm that you are human." }, void 0, !1, {
        fileName: "app/components/ContactForm.jsx",
        lineNumber: 206,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 199,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.FormGroup, { className: "line", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactstrap.Button, { variant: "primary", type: "submit", children: "Submit" }, void 0, !1, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 212,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ContactForm.jsx",
      lineNumber: 211,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ContactForm.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ContactForm.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function slugFromPath(pathname) {
  let parts = pathname.split("/").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "home";
}
var loader = ({ request }) => {
  let url = new URL(request.url), slug = slugFromPath(url.pathname);
  return (0, import_node.json)({ bodyClass: `route-${slug}` });
}, meta = () => ({
  charset: "utf-8",
  title: "Shiny Windows Window Cleaning",
  description: "Shiny Windows has been the leading residential window washing and cleaning company in Erie and Ottawa county Ohio",
  viewport: "width=device-width,initial-scale=1",
  "apple-mobile-web-app-title": "ShinyWindows"
}), links = () => [
  { rel: "stylesheet", href: app_default },
  { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "manifest", href: "/site.webmanifest" }
];
function App() {
  let { bodyClass } = (0, import_react6.useLoaderData)(), location = (0, import_react6.useLocation)();
  return (0, import_react5.useEffect)(() => {
    let next = `route-${slugFromPath(location.pathname)}`;
    document.body.classList.forEach((c) => {
      c.startsWith("route-") && document.body.classList.remove(c);
    }), document.body.classList.add(next);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { className: bodyClass, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavBar, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "mainContent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "mainFooter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inside-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Contact Shiny Windows" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
            "Have Questions? Want an Estimate? Use the form below to contact ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:tim@shiny-windows.com", children: "tim@shiny-windows.com" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 77,
              columnNumber: 84
            }, this),
            " or call at ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "tel:419-202-2380", children: "(419) 202-2380" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 77,
              columnNumber: 160
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 77,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactForm, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "subFooter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inside-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "flex-sm gap20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: "https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=1500",
            srcSet: `
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=800 800w,
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=1500 1500w,
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=2500 2500w
                `,
            sizes: "(max-width: 800px) 800px, (max-width: 1500px) 1500px, 2500px",
            alt: "Shiny Windows Footer Logo",
            width: "328",
            height: "409",
            className: "footerLogo"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-vertical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: "Shiny Windows Window Cleaning" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 104,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { children: [
            "Serving Erie, Ottawa and North Central Ohio",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 106,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "mailto:tim@shiny-windows.com", children: "tim@shiny-windows.com" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 107,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 107,
              columnNumber: 87
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "tel:419-202-2380", children: "(419) 202-2380" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 108,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 105,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 103,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 102,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/models/contentful.server.js
var import_plaiceholder = require("plaiceholder"), SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function apiJSON(query, variables) {
  let resp = await apiCall(query, variables);
  if (!resp.ok) {
    let text = await resp.text();
    throw new Error(`Contentful HTTP ${resp.status}: ${text}`);
  }
  let json5 = await resp.json();
  return json5.errors && console.error("Contentful GQL errors:", JSON.stringify(json5.errors, null, 2)), json5;
}
async function getProjects() {
  let formattedData = await (await (await apiCall(`
    {
        projectsCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.projectsCollection.items.map(
    async (project) => {
      let { title, desc, releaseDate, link, previewImage } = project, { css, img } = await (0, import_plaiceholder.getPlaiceholder)(previewImage.url);
      return {
        title,
        desc,
        releaseDate,
        link,
        image: img,
        imageAlt: previewImage.description,
        css
      };
    }
  );
  return Promise.all(formattedData);
}
async function getTalks() {
  return await (await (await apiCall(`{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.talksCollection.items;
}
async function getAllBlogs() {
  return await (await (await apiCall(`
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `)).json()).data.blogCollection.items;
}
async function getSingleBlog(slug) {
  return await (await (await apiCall(`
    query($slug: String){
        blogCollection(where: {slug:$slug}) {
            items {
                title
                description
                tag
                canonicalUrl
                blogBody {
                  json
                }
                sys {
                  publishedAt
                }
                openGraphImage {
                  url
                }
              }
            }
    }
    `, {
    slug
  })).json()).data.blogCollection.items[0];
}
async function getPageByTitle(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            secondaryTitle
            pageClass
            content{
              json
            }
            bannersCollection(limit: 2) {
              items {
                imageClass
                image {
                  url
                  width
                  height
                  description
                }
              }
            }
            buttonsCollection(limit: 2) {
              items {
                title
                buttonText
                buttonLink
                buttonClass
              }
            }
            simpleReferenceCollection(limit: 20) {
              items {
                title
                visualTitle
                content {
                  json
                }
              }
            }
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
async function getPageBySlug(slug) {
  var _a, _b, _c;
  let json5 = await apiJSON(
    /* GraphQL */
    `
    query ($slug: String!, $limit: Int = 1) {
      pageCollection(where: { slug: $slug }, limit: $limit) {
        items {
          title
          secondaryTitle
          pageClass
          content { json }
          bannersCollection(limit: 2) {
            items {
              imageClass
              image { url width height description }
            }
          }
          buttonsCollection(limit: 2) {
            items { title buttonText buttonLink buttonClass }
          }
          simpleReferenceCollection(limit: 20) {
            items { title visualTitle content { json } }
          }
        }
      }
    }
  `,
    { slug }
  );
  return ((_c = (_b = (_a = json5 == null ? void 0 : json5.data) == null ? void 0 : _a.pageCollection) == null ? void 0 : _b.items) == null ? void 0 : _c[0]) ?? null;
}
var client = { getProjects, getTalks, getAllBlogs, getSingleBlog, getPageByTitle, getPageBySlug };

// app/components/RichTextRenderer.jsx
var import_rich_text_types = require("@contentful/rich-text-types"), import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function RichTextRenderer({ content }) {
  if (!content)
    return null;
  let options = {
    renderMark: {
      [import_rich_text_types.MARKS.BOLD]: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: text }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 9,
        columnNumber: 31
      }, this),
      [import_rich_text_types.MARKS.ITALIC]: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { children: text }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 10,
        columnNumber: 33
      }, this),
      [import_rich_text_types.MARKS.UNDERLINE]: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("u", { children: text }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 11,
        columnNumber: 36
      }, this),
      [import_rich_text_types.MARKS.CODE]: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("code", { children: text }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 12,
        columnNumber: 31
      }, this)
    },
    // 👇 this is the key bit
    renderText: (text) => text.split(`
`).reduce((acc, segment, i) => (i > 0 && acc.push(/* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, `br-${i}`, !1, {
      fileName: "app/components/RichTextRenderer.jsx",
      lineNumber: 17,
      columnNumber: 29
    }, this)), acc.push(segment), acc), []),
    renderNode: {
      [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 23,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 24,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 25,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 26,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 27,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h5", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 28,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h6", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 29,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 30,
        columnNumber: 45
      }, this),
      [import_rich_text_types.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 31,
        columnNumber: 45
      }, this),
      [import_rich_text_types.BLOCKS.LIST_ITEM]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 32,
        columnNumber: 47
      }, this),
      [import_rich_text_types.BLOCKS.QUOTE]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("blockquote", { children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 33,
        columnNumber: 43
      }, this),
      [import_rich_text_types.BLOCKS.HR]: () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", {}, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 34,
        columnNumber: 26
      }, this),
      [import_rich_text_types.BLOCKS.EMBEDDED_ASSET]: (node) => {
        var _a, _b, _c;
        let asset = (_b = (_a = node == null ? void 0 : node.data) == null ? void 0 : _a.target) == null ? void 0 : _b.fields;
        return (_c = asset == null ? void 0 : asset.file) != null && _c.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            src: asset.file.url,
            alt: asset.title || "Embedded asset",
            loading: "lazy",
            style: { maxWidth: "100%", height: "auto" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/RichTextRenderer.jsx",
            lineNumber: 39,
            columnNumber: 11
          },
          this
        ) : null;
      },
      [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
        let { uri } = node.data;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: uri, target: "_blank", rel: "noreferrer", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this);
      },
      [import_rich_text_types.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: `/${node.data.target.fields.slug}`, children }, void 0, !1, {
        fileName: "app/components/RichTextRenderer.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      [import_rich_text_types.INLINES.ASSET_HYPERLINK]: (node, children) => {
        let url = node.data.target.fields.file.url;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: url, target: "_blank", rel: "noreferrer", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this);
      },
      [import_rich_text_types.INLINES.EMBEDDED_ENTRY]: (node) => {
        let entry2 = node.data.target.fields;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "embedded-entry", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: entry2.title }, void 0, !1, {
            fileName: "app/components/RichTextRenderer.jsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: entry2.summary }, void 0, !1, {
            fileName: "app/components/RichTextRenderer.jsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/RichTextRenderer.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this);
      }
    }
  };
  return (0, import_rich_text_react_renderer.documentToReactComponents)(content, options);
}

// app/components/SimpleImageMap.jsx
var import_react7 = require("react"), import_gsap = require("gsap"), import_ScrollTrigger = __toESM(require("gsap/dist/ScrollTrigger")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SimpleImageMap({ bannersCollection }) {
  var _a;
  let scopeRef = (0, import_react7.useRef)(null);
  return (0, import_react7.useEffect)(() => {
    import_gsap.gsap.registerPlugin(import_ScrollTrigger.default);
    let ctx = import_gsap.gsap.context(() => {
      import_gsap.gsap.utils.toArray(".fadeOut").forEach((el) => {
        import_ScrollTrigger.default.create({
          trigger: el,
          start: "top bottom-=50",
          // fire when top is 50px above viewport bottom
          toggleClass: { targets: el, className: "enable" },
          once: !0
        });
      });
    }, scopeRef), onLoad = () => import_ScrollTrigger.default.refresh();
    return window.addEventListener("load", onLoad), () => {
      window.removeEventListener("load", onLoad), ctx.revert();
    };
  }, [(_a = bannersCollection == null ? void 0 : bannersCollection.items) == null ? void 0 : _a.length]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "imageContainer flex-xs", ref: scopeRef, children: bannersCollection.items.map((block, i) => {
    let { title, image, imageClass } = block || {}, cardClass = ["simpleImg", "fadeOut", "flex-vertical", imageClass].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: cardClass, children: (image == null ? void 0 : image.url) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src: `${image.url}?w=1200&q=75`,
        srcSet: `${image.url}?w=600&q=70 600w, ${image.url}?w=900&q=70 900w, ${image.url}?w=1200&q=70 1200w`,
        sizes: "(max-width: 800px) 100vw, 1200px",
        alt: image.description || image.title || title || "Image",
        width: image.width,
        height: image.height,
        loading: "lazy"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SimpleImageMap.jsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    ) }, title || i, !1, {
      fileName: "app/components/SimpleImageMap.jsx",
      lineNumber: 42,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/SimpleImageMap.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var SimpleImageMap_default = SimpleImageMap;

// app/components/SimpleButtonMap.jsx
var import_react8 = require("react"), import_gsap2 = require("gsap"), import_ScrollTrigger2 = __toESM(require("gsap/dist/ScrollTrigger")), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function SimpleButtonMap({ buttonsCollection }) {
  var _a;
  let scopeRef = (0, import_react8.useRef)(null);
  return (0, import_react8.useEffect)(() => {
    import_gsap2.gsap.registerPlugin(import_ScrollTrigger2.default);
    let ctx = import_gsap2.gsap.context(() => {
      import_gsap2.gsap.utils.toArray(".fadeOut").forEach((el) => {
        import_ScrollTrigger2.default.create({
          trigger: el,
          start: "top bottom-=50",
          // fire when top is 50px above viewport bottom
          toggleClass: { targets: el, className: "enable" },
          once: !0
        });
      });
    }, scopeRef), onLoad = () => import_ScrollTrigger2.default.refresh();
    return window.addEventListener("load", onLoad), () => {
      window.removeEventListener("load", onLoad), ctx.revert();
    };
  }, [(_a = buttonsCollection == null ? void 0 : buttonsCollection.items) == null ? void 0 : _a.length]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "buttonContainer always-flex gap10", ref: scopeRef, children: buttonsCollection.items.map((block, i) => {
    let { title, buttonClass, buttonText, buttonLink } = block || {}, cardClass = `button fadeOut${buttonClass ? ` ${buttonClass}` : ""}`;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { className: cardClass, to: buttonLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: buttonText }, void 0, !1, {
      fileName: "app/components/SimpleButtonMap.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, title || i, !1, {
      fileName: "app/components/SimpleButtonMap.jsx",
      lineNumber: 43,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/SimpleButtonMap.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var SimpleButtonMap_default = SimpleButtonMap;

// app/routes/about.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader2() {
  return (0, import_node2.json)(await client.getPageByTitle("Shiny Windows Window Cleaning"));
}
function Index() {
  var _a, _b;
  let { title, secondaryTitle, content, pageClass, bannersCollection, buttonsCollection } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `flex-sm inside-xl noPadding ${pageClass}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "backWhite sixty flex-vertical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "inside-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: secondaryTitle }, void 0, !1, {
          fileName: "app/routes/about.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        title
      ] }, void 0, !0, {
        fileName: "app/routes/about.jsx",
        lineNumber: 24,
        columnNumber: 5
      }, this),
      (content == null ? void 0 : content.json) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RichTextRenderer, { content: content.json }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 26,
        columnNumber: 6
      }, this),
      ((_a = buttonsCollection == null ? void 0 : buttonsCollection.items) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SimpleButtonMap_default, { buttonsCollection }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 29,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.jsx",
      lineNumber: 23,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 22,
      columnNumber: 3
    }, this),
    ((_b = bannersCollection == null ? void 0 : bannersCollection.items) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "forty flex-vertical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "aboutPadd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SimpleImageMap_default, { bannersCollection }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 39,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 38,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 37,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.jsx",
    lineNumber: 20,
    columnNumber: 2
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader3() {
  return (0, import_node3.json)(await client.getPageByTitle("Window Washing Specialists"));
}
function Index2() {
  var _a, _b;
  let { title, secondaryTitle, content, pageClass, bannersCollection, buttonsCollection } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: pageClass, children: [
    ((_a = bannersCollection == null ? void 0 : bannersCollection.items) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inside-xl no-padd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SimpleImageMap_default, { bannersCollection }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 25,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 24,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "backWhite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "inside-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: secondaryTitle }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        title
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 31,
        columnNumber: 5
      }, this),
      (content == null ? void 0 : content.json) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(RichTextRenderer, { content: content.json }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      ((_b = buttonsCollection == null ? void 0 : buttonsCollection.items) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SimpleButtonMap_default, { buttonsCollection }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 38,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 37,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 30,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 29,
      columnNumber: 3
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 20,
    columnNumber: 2
  }, this);
}

// app/routes/faqs.jsx
var faqs_exports = {};
__export(faqs_exports, {
  default: () => Index3,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/components/FaqsMap.jsx
var import_react12 = require("react"), import_gsap3 = require("gsap"), import_ScrollTrigger3 = __toESM(require("gsap/dist/ScrollTrigger"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function FaqsMap({ simpleReferenceCollection }) {
  var _a;
  let scopeRef = (0, import_react12.useRef)(null);
  return (0, import_react12.useEffect)(() => {
    import_gsap3.gsap.registerPlugin(import_ScrollTrigger3.default);
    let ctx = import_gsap3.gsap.context(() => {
      import_gsap3.gsap.utils.toArray(".fadeOut").forEach((el) => {
        import_ScrollTrigger3.default.create({
          trigger: el,
          start: "top bottom-=50",
          // fire when top is 50px above viewport bottom
          toggleClass: { targets: el, className: "enable" },
          once: !0
        });
      });
    }, scopeRef), onLoad = () => import_ScrollTrigger3.default.refresh();
    return window.addEventListener("load", onLoad), () => {
      window.removeEventListener("load", onLoad), ctx.revert();
    };
  }, [(_a = simpleReferenceCollection == null ? void 0 : simpleReferenceCollection.items) == null ? void 0 : _a.length]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "faqContainer", ref: scopeRef, children: simpleReferenceCollection.items.map((block, i) => {
    let { title, visualTitle, content } = block || {};
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fadeOut faq", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { children: visualTitle }, void 0, !1, {
        fileName: "app/components/FaqsMap.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      (content == null ? void 0 : content.json) && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(RichTextRenderer, { content: content == null ? void 0 : content.json }, void 0, !1, {
        fileName: "app/components/FaqsMap.jsx",
        lineNumber: 46,
        columnNumber: 20
      }, this) }, void 0, !1, {
        fileName: "app/components/FaqsMap.jsx",
        lineNumber: 46,
        columnNumber: 15
      }, this)
    ] }, title || i, !0, {
      fileName: "app/components/FaqsMap.jsx",
      lineNumber: 43,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/FaqsMap.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var FaqsMap_default = FaqsMap;

// app/routes/faqs.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader4() {
  return (0, import_node4.json)(await client.getPageByTitle("Asked Questions"));
}
function Index3() {
  var _a, _b;
  let { title, secondaryTitle, content, pageClass, bannersCollection, simpleReferenceCollection } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: pageClass, children: [
    ((_a = bannersCollection == null ? void 0 : bannersCollection.items) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inside-xl no-padd", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SimpleImageMap_default, { bannersCollection }, void 0, !1, {
      fileName: "app/routes/faqs.jsx",
      lineNumber: 25,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/faqs.jsx",
      lineNumber: 24,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/faqs.jsx",
      lineNumber: 23,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "backWhite", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "inside-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: secondaryTitle }, void 0, !1, {
          fileName: "app/routes/faqs.jsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        title
      ] }, void 0, !0, {
        fileName: "app/routes/faqs.jsx",
        lineNumber: 31,
        columnNumber: 5
      }, this),
      (content == null ? void 0 : content.json) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RichTextRenderer, { content: content == null ? void 0 : content.json }, void 0, !1, {
        fileName: "app/routes/faqs.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/faqs.jsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      ((_b = simpleReferenceCollection == null ? void 0 : simpleReferenceCollection.items) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(FaqsMap_default, { simpleReferenceCollection }, void 0, !1, {
        fileName: "app/routes/faqs.jsx",
        lineNumber: 37,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/faqs.jsx",
        lineNumber: 36,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/faqs.jsx",
      lineNumber: 30,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/routes/faqs.jsx",
      lineNumber: 29,
      columnNumber: 3
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/faqs.jsx",
    lineNumber: 20,
    columnNumber: 2
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KSVQP67G.js", imports: ["/build/_shared/chunk-XEQ4JCD2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SNJQIV4C.js", imports: ["/build/_shared/chunk-IUOSU2OV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-T26E6Y7H.js", imports: ["/build/_shared/chunk-3VMOY2W2.js", "/build/_shared/chunk-OHHI3QHU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/faqs": { id: "routes/faqs", parentId: "root", path: "faqs", index: void 0, caseSensitive: void 0, module: "/build/routes/faqs-QO3FB3TH.js", imports: ["/build/_shared/chunk-OHHI3QHU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-J5VLQWQM.js", imports: ["/build/_shared/chunk-3VMOY2W2.js", "/build/_shared/chunk-OHHI3QHU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "f8c1e002", hmr: void 0, url: "/build/manifest-F8C1E002.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/faqs": {
    id: "routes/faqs",
    parentId: "root",
    path: "faqs",
    index: void 0,
    caseSensitive: void 0,
    module: faqs_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
