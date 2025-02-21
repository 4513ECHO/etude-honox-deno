import { reactRenderer } from "@hono/react-renderer";
import { Link, Script } from "honox/server";

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="/app/client.ts" async />
        <Link rel="stylesheet" href="/app/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
});
