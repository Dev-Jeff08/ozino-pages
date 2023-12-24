import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "../styles/global.css";
/* import favicon from "../public/wine_icon.png"; */

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    /* {
      rel: "icon",
      href: favicon,
      type: "image/png"
    }, */
  ];
}



export const meta = () => {
  return [
    {
      title: "ozino wine | 오지노 와인 |"
    },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
