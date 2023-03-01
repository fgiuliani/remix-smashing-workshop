import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Link from "./components/Link";
import Page from "./components/Page";
import Teaser from "./components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  link: Link,
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: "UXVyS7kr6TKvbuAGuXUVCgtt",
  use: [apiPlugin],
  components,
});

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
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
