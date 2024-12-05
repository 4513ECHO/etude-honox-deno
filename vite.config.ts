import deno from "@deno/vite-plugin";
import build from "@hono/vite-build/deno";
import adapter from "@hono/vite-dev-server/node";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: "node_modules/.vite",
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "hono/jsx",
  },
  plugins: [
    deno(),
    honox({ devServer: { adapter } }),
    build({ external: ["hono"], staticRoot: "dist" }),
  ],
});
