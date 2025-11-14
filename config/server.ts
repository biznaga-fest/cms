import type { Core } from "@strapi/types";

export default ({ env }): Core.Config.Server => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  cron: {
    enabled: true,
  },
});
