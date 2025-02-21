import { createRoute } from "honox/factory";
import Counter from "../islands/counter.tsx";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div className="p-6">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
      <Counter />
    </div>,
    { title: name },
  );
});
