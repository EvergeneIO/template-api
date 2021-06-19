import { Router } from "../../deps.ts";
import { Context } from "../../types/context.ts";

export const router = new Router({ prefix: "/user" });

router.get("/", (ctx: Context) => {
  ctx.response.body = { test: true };
});

export default router;
