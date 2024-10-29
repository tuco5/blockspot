create sequence "public"."Post_id_seq";

create table "public"."Post" (
    "id" integer not null default nextval('"Post_id_seq"'::regclass),
    "name" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


create table "public"."_prisma_migrations" (
    "id" character varying(36) not null,
    "checksum" character varying(64) not null,
    "finished_at" timestamp with time zone,
    "migration_name" character varying(255) not null,
    "logs" text,
    "rolled_back_at" timestamp with time zone,
    "started_at" timestamp with time zone not null default now(),
    "applied_steps_count" integer not null default 0
);


alter sequence "public"."Post_id_seq" owned by "public"."Post"."id";

CREATE INDEX "Post_name_idx" ON public."Post" USING btree (name);

CREATE UNIQUE INDEX "Post_pkey" ON public."Post" USING btree (id);

CREATE UNIQUE INDEX _prisma_migrations_pkey ON public._prisma_migrations USING btree (id);

alter table "public"."Post" add constraint "Post_pkey" PRIMARY KEY using index "Post_pkey";

alter table "public"."_prisma_migrations" add constraint "_prisma_migrations_pkey" PRIMARY KEY using index "_prisma_migrations_pkey";


