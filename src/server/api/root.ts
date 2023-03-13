import { exampleRouter } from "~/server/api/routers/example";
import { noteRouter } from "~/server/api/routers/note";
import { topicRouter } from "~/server/api/routers/topic";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  note: noteRouter,
  topic: topicRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
