import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css?url";
import Navbar from "./Controllers/Navbar";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
         {/* Google Analytics Script */}
         <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-VPVC945BG2`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VPVC945BG2', {
        page_path: window.location.pathname,
        });
    `,
          }}
        />
      </head>
      <body>
        <div className="flex w-full h-dvh">
          <div className="w-2/4 md:w-1/4 flex justify-center items-center bg-blue-900 ">
            <Navbar />
          </div>
          <div className="w-full ml-[0.6667%]">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
