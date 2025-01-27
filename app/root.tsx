import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

import styles from "./tailwind.css?url";
import Navbar from "./Controllers/Navbar";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-VPVC945BG2`;
    script.async = true;

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      window.gtag("js", new Date());
      window.gtag("config", "G-VPVC945BG2");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
              gtag('config', 'G-VPVC945BG2');
            `,
          }}
        />
      </head>
      <body>
        <div className="flex relative w-full h-screen">
          <div className="w-2/4 md:w-1/4 justify-center items-center bg-blue-900 h-full">
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
