# Blockspot:

This readme is to help the team to set their local env easily.

# Learn more:

This is an [Next.js](https://nextjs.org/docs) App Router with [Supabase](https://supabase.com/docs) as a backend database. To learn more check the tech stack that includes:

- Base: [React](https://es.react.dev/reference/react)
- Style: [Tailwindcss](https://tailwindcss.com/docs/installation)
- Components: [ShadcUI](https://ui.shadcn.com/docs)
- i18n: [next-intl](https://next-intl-docs.vercel.app/docs/getting-started)
- Documentation: [Storybook](https://storybook.js.org/docs)
- Database: [Supabase](https://supabase.com/docs)
- ORM: [Prisma](https://www.prisma.io/docs/orm/overview/introduction)
- Auth: [Supabase](https://supabase.com/docs)
- ... And more, full dependency list in package.json

## How to start:

1. After cloning the repo, make sure to have all the .env variables.
2. Start Local development with `pnpm dev` or `pnpm turbo`
3. Navigate to [localhost:3000](http://localhost:3000)

## Environments:

We will try to make small changes but frequently.

`branch` Name the branch as you like but, create the branch with `main` as base. When you are done with your change, open a PR (Pull Request) to `staging` as base, after review and aproval **squash merge** and delete your branch.

`staging` In this environment all developers push their changes. Every week we deploy those changes to production.

`main` is the production environment and no one can push to it, use it as the base of your `branch`
