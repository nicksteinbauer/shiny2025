var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/nicksm1/Documents/_ShinyWindows/shinywindows/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react");

// app/components/Logo.jsx
function Logo() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "shinyLogo"
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 237.53 60.53"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M0,18.65l7.99-0.5c0.17,1.3,0.52,2.29,1.06,2.97c0.87,1.1,2.1,1.65,3.71,1.65c1.2,0,2.12-0.28,2.77-0.84
                s0.97-1.21,0.97-1.96c0-0.7-0.31-1.33-0.93-1.89c-0.62-0.56-2.05-1.08-4.3-1.58c-3.68-0.83-6.31-1.93-7.88-3.3
                c-1.58-1.37-2.37-3.12-2.37-5.25c0-1.4,0.4-2.72,1.21-3.96c0.81-1.24,2.03-2.22,3.65-2.93C7.51,0.36,9.74,0,12.57,0
                c3.47,0,6.12,0.65,7.94,1.94c1.82,1.29,2.91,3.35,3.25,6.17l-7.92,0.46c-0.21-1.22-0.65-2.11-1.33-2.67
                c-0.67-0.56-1.6-0.83-2.79-0.83c-0.98,0-1.71,0.21-2.21,0.62C9.04,6.1,8.79,6.6,8.79,7.19c0,0.43,0.2,0.82,0.61,1.17
                c0.4,0.36,1.33,0.69,2.82,1c3.67,0.79,6.3,1.59,7.89,2.4c1.59,0.81,2.74,1.81,3.47,3.01s1.08,2.54,1.08,4.02
                c0,1.74-0.48,3.35-1.45,4.82c-0.96,1.47-2.31,2.59-4.04,3.35c-1.73,0.76-3.91,1.14-6.54,1.14c-4.62,0-7.82-0.89-9.6-2.67
                C1.24,23.66,0.23,21.4,0,18.65z`
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M28.92,0.46h8.4v9.51h9.18V0.46h8.44v27.18H46.5V16.65h-9.18v10.99h-8.4V0.46z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M60.85,0.46h8.42v27.18h-8.42V0.46z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M75.35,0.46h7.84L93.43,15.5V0.46h7.92v27.18h-7.92L83.25,12.72v14.92h-7.9V0.46z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M104.18,0.46h9.33l5.48,9.17l5.49-9.17h9.28l-10.57,15.8v11.38h-8.42V16.26L104.18,0.46z"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M28.67,32.88h7.98l2.87,15.22l4.2-15.22h7.95l4.21,15.2l2.88-15.2h7.94L60.7,60.07h-8.24L47.7,42.95
                l-4.75,17.11h-8.24L28.67,32.88z`
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M69.77,32.88h8.42v27.18h-8.42V32.88z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: "M84.27,32.88h7.84l10.23,15.04V32.88h7.92v27.18h-7.92L92.17,45.14v14.92h-7.9V32.88z"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M115.96,32.88h12.48c2.46,0,4.45,0.33,5.96,1c1.51,0.67,2.77,1.63,3.75,2.87c0.99,1.25,1.71,2.7,2.15,4.36
                c0.45,1.66,0.67,3.41,0.67,5.27c0,2.9-0.33,5.16-0.99,6.76c-0.66,1.6-1.58,2.94-2.75,4.02s-2.43,1.8-3.78,2.16
                c-1.84,0.49-3.51,0.74-5.01,0.74h-12.48V32.88z M124.35,39.04v14.85h2.06c1.75,0,3-0.19,3.75-0.58c0.74-0.39,1.32-1.07,1.74-2.04
                s0.63-2.54,0.63-4.72c0-2.88-0.47-4.85-1.41-5.91s-2.5-1.59-4.67-1.59H124.35z`
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M144.32,46.49c0-4.44,1.24-7.89,3.71-10.37c2.47-2.47,5.91-3.71,10.33-3.71c4.52,0,8.01,1.21,10.46,3.64
                c2.45,2.43,3.67,5.83,3.67,10.21c0,3.18-0.54,5.78-1.6,7.81c-1.07,2.03-2.61,3.62-4.63,4.75c-2.02,1.13-4.54,1.7-7.56,1.7
                c-3.06,0-5.6-0.49-7.61-1.46s-3.64-2.52-4.89-4.63C144.95,52.32,144.32,49.67,144.32,46.49z M152.72,46.53
                c0,2.74,0.51,4.71,1.53,5.91s2.41,1.8,4.16,1.8c1.8,0,3.2-0.59,4.19-1.76c0.99-1.17,1.48-3.28,1.48-6.32
                c0-2.56-0.52-4.43-1.55-5.61c-1.03-1.18-2.43-1.77-4.2-1.77c-1.69,0-3.05,0.6-4.08,1.8S152.72,43.76,152.72,46.53z`
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M173.56,32.88h7.98l2.87,15.22l4.2-15.22h7.95l4.21,15.2l2.88-15.2h7.94l-5.99,27.18h-8.24l-4.77-17.11
                l-4.75,17.11h-8.24L173.56,32.88z`
  }), /* @__PURE__ */ React.createElement("path", {
    className: "shinyBlue",
    d: `M212.87,51.07l7.99-0.5c0.17,1.3,0.53,2.29,1.06,2.97c0.87,1.1,2.1,1.65,3.71,1.65c1.2,0,2.12-0.28,2.77-0.84
                c0.65-0.56,0.97-1.21,0.97-1.96c0-0.7-0.31-1.33-0.93-1.89s-2.05-1.08-4.3-1.58c-3.68-0.83-6.31-1.93-7.88-3.3
                c-1.58-1.37-2.37-3.12-2.37-5.25c0-1.4,0.41-2.72,1.21-3.96s2.03-2.22,3.65-2.93c1.62-0.71,3.85-1.07,6.68-1.07
                c3.47,0,6.12,0.65,7.94,1.94c1.82,1.29,2.91,3.35,3.25,6.17l-7.92,0.46c-0.21-1.22-0.65-2.11-1.33-2.67
                c-0.67-0.56-1.6-0.83-2.79-0.83c-0.98,0-1.71,0.21-2.21,0.62s-0.74,0.92-0.74,1.51c0,0.43,0.2,0.82,0.61,1.17
                c0.4,0.36,1.33,0.69,2.82,1c3.67,0.79,6.3,1.59,7.89,2.4s2.74,1.81,3.47,3.01c0.72,1.2,1.08,2.54,1.08,4.02
                c0,1.74-0.48,3.35-1.45,4.82c-0.96,1.47-2.31,2.59-4.04,3.35s-3.91,1.14-6.54,1.14c-4.62,0-7.82-0.89-9.6-2.67
                C214.11,56.08,213.1,53.82,212.87,51.07z`
  }))));
}
var Logo_default = Logo;

// app/components/NavBar.jsx
function NavBar() {
  return /* @__PURE__ */ React.createElement("header", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo_default, null)))));
}

// app/styles/app.css
var app_default = "/build/_assets/app-R534XSDF.css";

// route:/Users/nicksm1/Documents/_ShinyWindows/shinywindows/app/root.jsx
var meta = () => ({
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
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto pt-8 sm:pt-16"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement("footer", {
    className: ""
  }), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}

// route:/Users/nicksm1/Documents/_ShinyWindows/shinywindows/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

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
    }`)).json()).data.projectsCollection.items.map(async (project) => {
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
  });
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
async function getPage(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            content{
              json
            }
            
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = { getProjects, getTalks, getAllBlogs, getSingleBlog, getPage };

// route:/Users/nicksm1/Documents/_ShinyWindows/shinywindows/app/routes/index.jsx
async function loader() {
  return (0, import_node.json)(await client.getPage("Home"));
}
function Index() {
  let { title } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, title);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bfb6abb6", entry: { module: "/build/entry.client-YQFQA6W4.js", imports: ["/build/_shared/chunk-CFOPZWQU.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6NS6IDYF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-T6GNC3FW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BFB6ABB6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=server.js.map
