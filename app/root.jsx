import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from './components/NavBar'

import styles from "./styles/app.css";

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
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <main className="container mx-auto pt-8 sm:pt-16">
          <Outlet />
        </main>
        
        <footer className="">
            
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
