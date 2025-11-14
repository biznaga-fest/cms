# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BiznagaFest Backend - A Strapi v5.31.0 headless CMS built with TypeScript, serving as the backend for a festival management system. Uses PostgreSQL in production (configured via pg package) and SQLite for local development.

## Development Commands

```bash
# Start development server with auto-reload
npm run develop
# or
npm run dev

# Build admin panel for production
npm run build

# Start production server (no auto-reload)
npm run start

# Open Strapi console
npm run console

# Check for Strapi upgrades (dry run)
npm run upgrade:dry

# Apply Strapi upgrades
npm run upgrade

# Start PostgreSQL via Docker (for local development with PostgreSQL)
docker-compose up -d
```

## Project Architecture

### Core Structure

- **config/** - Environment-based configuration files

  - `database.ts` - Multi-database support (SQLite/PostgreSQL/MySQL) with SSL configuration
  - `server.ts` - Server configuration (host, port, app keys)
  - `middlewares.ts` - Standard Strapi middleware stack
  - `admin.ts` - Admin panel configuration
  - `api.ts` - API configuration
  - `plugins.ts` - Plugin configuration

- **src/index.ts** - Application entry point with `register()` and `bootstrap()` lifecycle hooks

- **src/api/** - Content type collections

  - Each API requires: controllers, services, routes (TypeScript), and schema (JSON)
  - Structure: `{name}/content-types/{name}/schema.json`, `{name}/controllers/{name}.ts`, `{name}/services/{name}.ts`, `{name}/routes/{name}.ts`
  - Current APIs: host, info, speaker, sponsor, ticket
  - Schemas define collectionTypes with attributes, media relations, and components

- **src/components/** - Reusable content type components

  - Organized by domain: faq, footer, hall-of-fame, last-edition, raffles, schedule, socials, speakers, sponsors, staff, tickets, venue
  - Each component has a JSON schema file defining structure
  - Components can be referenced in content type schemas

- **src/admin/** - Admin panel customization (separate TypeScript config)

### Database Configuration

Database client selected via `DATABASE_CLIENT` env var (defaults to sqlite). Connection details configured per client type:

- PostgreSQL: Uses `DATABASE_URL` or individual connection params
- MySQL: Standard connection parameters
- SQLite: File-based storage in `.tmp/data.db`

All configs support SSL with certificate options and connection pooling.

### Environment Variables

Required in `.env` (see `.env.example`):

- `HOST`, `PORT` - Server binding
- `APP_KEYS` - Comma-separated session keys
- `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET` - Security tokens
- `ENCRYPTION_KEY` - Data encryption
- `DATABASE_CLIENT`, `DATABASE_URL`, `DATABASE_*` - Database configuration

### TypeScript Configuration

- Target: ES2019, Module: CommonJS
- Strict mode disabled
- Compiles to `dist/` directory
- Excludes: admin files, test files, plugins (separate compilation)
- Includes JSON files in src/ for schema definitions

### Content Type Patterns

**Collection Types** (e.g., Host):

```json
{
  "kind": "collectionType",
  "collectionName": "hosts",
  "info": { "singularName": "host", "pluralName": "hosts" },
  "options": { "draftAndPublish": true },
  "attributes": {
    "name": { "type": "string", "required": true },
    "picture": { "type": "media", "allowedTypes": ["images"] },
    "socials": { "type": "component", "component": "socials.socials" }
  }
}
```

**Components** (e.g., Tshirt):

```json
{
  "collectionName": "components_tickets_tshirts",
  "attributes": {
    "type": { "type": "enumeration", "enum": ["image", "video"] },
    "asset": { "type": "media", "allowedTypes": ["images", "videos"] }
  }
}
```

## Adding New Content Types

1. Create folder structure:

   ```
   src/api/{name}/
   ├── content-types/{name}/schema.json
   ├── controllers/{name}.ts
   ├── services/{name}.ts
   └── routes/{name}.ts
   ```

2. Create `schema.json` with collectionType definition (see Content Type Patterns above)

3. Create controller file (`controllers/{name}.ts`):

   ```typescript
   import { factories } from "@strapi/strapi";
   export default factories.createCoreController("api::{name}.{name}");
   ```

4. Create service file (`services/{name}.ts`):

   ```typescript
   import { factories } from "@strapi/strapi";
   export default factories.createCoreService("api::{name}.{name}");
   ```

5. Create routes file (`routes/{name}.ts`):

   ```typescript
   import { factories } from "@strapi/strapi";
   export default factories.createCoreRouter("api::{name}.{name}");
   ```

6. Restart Strapi server to register the new content type

For reusable structures, create components in `src/components/{domain}/`

## Adding New Components

1. Create folder: `src/components/{domain}/{component-name}/`
2. Add JSON schema file defining attributes
3. Reference in content types using `"component": "{domain}.{component-name}"`
