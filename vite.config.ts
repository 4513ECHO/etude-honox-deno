import deno from "@deno/vite-plugin";
import build from "@hono/vite-build/deno";
import adapter from "@hono/vite-dev-server/node";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: "node_modules/.vite",
  ssr: { external: ["react", "react-dom"] },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
  plugins: [
    deno(),
    honox({
      devServer: { adapter },
      client: { jsxImportSource: "react", input: ["/app/style.css"] },
    }),
    build({ external: ["hono"], staticRoot: "dist" }),
    tailwindcss(),
  ],
});
