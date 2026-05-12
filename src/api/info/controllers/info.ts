/**
 * info controller
 */

import { factories } from "@strapi/strapi";

const buildDeepPopulate = (uid: string) => {
  const { attributes } = strapi.contentType(uid as any);
  const populate: Record<string, any> = {};

  for (const [name, attr] of Object.entries(attributes) as [string, any][]) {
    if (attr.private) continue;
    if (attr.type === "relation" && attr.target === "admin::user") continue;

    if (
      attr.type === "relation" ||
      attr.type === "media" ||
      attr.type === "dynamiczone" ||
      attr.type === "component"
    ) {
      populate[name] = { populate: "*" };
    }
  }

  return populate;
};

export default factories.createCoreController(
  "api::info.info",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate:
          ctx.query.populate ?? (buildDeepPopulate("api::info.info") as any),
      };

      return await super.find(ctx);
    },
  }),
);
