import { Router } from "../../deps.ts";
import { Context } from "../../types/context.ts";

export const router = new Router({ prefix: "/template" });

router.get("/", (ctx: Context) => {
  ctx.response.body = "template";
});

export default router;
