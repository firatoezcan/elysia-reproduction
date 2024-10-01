import swagger from "@elysiajs/swagger";
import { Elysia, RouteSchema, t } from "elysia";

const findManyParams = t.Object({
  limit: t.Number({ default: 25 }),
  offset: t.Number({ default: 0 }),
  filter: t.Optional(t.Object({})),
}) satisfies RouteSchema["query"];

export default new Elysia({
  aot: true, // fails in a different way for `aot: false` as well
})
  .use(
    swagger({
      path: "/swagger",
      autoDarkMode: true,
      documentation: {
        info: {
          title: "Application Title",
          version: "0.0.1",
        },
        servers: [
          ...(process.env.NODE_ENV === "development"
            ? [
                {
                  url: "http://localhost:3000",
                  description: "Localhost",
                },
              ]
            : []),
        ],
      },
    })
  )
  .onError((ctx) => {
    if (ctx.code === "NOT_FOUND") return;
    console.error(ctx.error.stack);
  })
  .get(
    "/",
    async (ctx) => {
      const result = [
        {
          id: "Blabla",
          email: "whatever",
          username: "firatoezcan",
        },
      ];
      return {
        data: result,
      };
    },
    {
      response: {
        200: t.Object(
          {
            data: t.Array(
              t.Object({
                id: t.String(),
                email: t.String(),
                username: t.String(),
              })
            ),
          },
          { description: "OK" }
        ),
      },
      query: findManyParams,
    }
  );
