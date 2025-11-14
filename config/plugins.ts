import type { Core } from "@strapi/types";

export default ({ env }: { env: (key: string, def?: any) => any }) => ({
  publisher: {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({
          strapi,
          uid,
          entity,
        }: {
          strapi: Core.Strapi;
          uid: string;
          entity: any;
        }) => {
          // Return false to prevent publish; any other value (or no return) allows it
          console.log("beforePublish");
          // return false
        },
        afterPublish: async ({
          strapi,
          uid,
          entity,
        }: {
          strapi: Core.Strapi;
          uid: string;
          entity: any;
        }) => {
          console.log("afterPublish");
          // Post-publish side effects
        },
        beforeUnpublish: async ({
          strapi,
          uid,
          entity,
        }: {
          strapi: Core.Strapi;
          uid: string;
          entity: any;
        }) => {
          // Return false to prevent unpublish; any other value (or no return) allows it
          console.log("beforeUnpublish");
          // return false
        },
        afterUnpublish: async ({
          strapi,
          uid,
          entity,
        }: {
          strapi: Core.Strapi;
          uid: string;
          entity: any;
        }) => {
          console.log("afterUnpublish");
        },
      },
    },
  },
});
