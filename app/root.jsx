import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "@remix-run/react";
import { json } from "@remix-run/node";
import NavBar from './components/NavBar'
import styles from "./styles/app.css";
import ContactForm from "./components/ContactForm";

function slugFromPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "home";
}

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const slug = slugFromPath(url.pathname);
  return json({ bodyClass: `route-${slug}` });
};

export const meta = () => ({
  charset: "utf-8",
  title: "Shiny Windows Window Cleaning",
  description:
    "Shiny Windows has been the leading residential window washing and cleaning company in Erie and Ottawa county Ohio",
  viewport: "width=device-width,initial-scale=1",
  "apple-mobile-web-app-title": "ShinyWindows",
});

export const links = () => [
  {rel: "stylesheet", href: styles},
  { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "manifest", href: "/site.webmanifest" },
]

export default function App() {
  const { bodyClass } = useLoaderData();
  const location = useLocation();

  // Keep SSR class for first paint, then sync on client navigations
  useEffect(() => {
    const slug = slugFromPath(location.pathname);
    const next = `route-${slug}`;

    // remove any previous route-* class, then add the new one
    document.body.classList.forEach((c) => {
      if (c.startsWith("route-")) document.body.classList.remove(c);
    });
    document.body.classList.add(next);
  }, [location.pathname]);


  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={bodyClass}>
        <NavBar />
        <main className="mainContent">
          <Outlet />
        </main>
        <footer id="contact" className="mainFooter">
            <div className="inside-lg">
              <section>
                <h2>Contact Shiny Windows</h2>
                <p>Have Questions? Want an Estimate? Use the form below to contact <a href="mailto:tim@shiny-windows.com">tim@shiny-windows.com</a> or call at <a href="tel:419-202-2380">(419) 202-2380</a></p>
                
              </section>
              <section>
                <ContactForm />
              </section>
              
            </div>
        </footer>
        <footer className="subFooter">
          <div className="inside-lg">
            <section className="flex-sm gap20">
              <img
                src={`https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=1500`}
                srcSet={`
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=800 800w,
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=1500 1500w,
                  https://images.ctfassets.net/avt9hyd25nka/5tFMhOAGGu44JLE4mgFeI4/2064d4831abf0e78d78a806bcce3f922/Shiny-Windows-Notebook-Graphic-expanded.png?w=2500 2500w
                `}
                sizes="(max-width: 800px) 800px, (max-width: 1500px) 1500px, 2500px"
                alt={"Shiny Windows Footer Logo"}
                width="328"
                height="409"
                className="footerLogo"
              />
              <div className="flex-vertical">
                  <div>
                    <h3>Shiny Windows Window Cleaning</h3>
                    <h4>Serving Erie, Ottawa and North Central Ohio
                      <br/>
                      <a href="mailto:tim@shiny-windows.com">tim@shiny-windows.com</a><br/>
                      <a href="tel:419-202-2380">(419) 202-2380</a>
                    </h4>
                    
                  </div>
              </div>
            </section>
          </div>
        </footer>
         <script async defer src="https://www.google.com/recaptcha/api.js"></script>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
