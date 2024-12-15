import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HashRouter basename="/freakyvillescammers/">
        <RemixBrowser />
      </HashRouter>
    </StrictMode>
  );
});
