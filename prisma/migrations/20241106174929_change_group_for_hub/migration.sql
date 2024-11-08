/*
  Warnings:

  - You are about to drop the `groups` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_members" DROP CONSTRAINT "_members_A_fkey";

-- DropForeignKey
ALTER TABLE "groups" DROP CONSTRAINT "groups_userId_fkey";

-- DropForeignKey
ALTER TABLE "spots" DROP CONSTRAINT "spots_id_fkey";

-- DropTable
DROP TABLE "groups";

-- CreateTable
CREATE TABLE "hubs" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT,
    "isPrivate" BOOLEAN DEFAULT true,

    CONSTRAINT "hubs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hubs" ADD CONSTRAINT "hubs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spots" ADD CONSTRAINT "spots_id_fkey" FOREIGN KEY ("id") REFERENCES "hubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_members" ADD CONSTRAINT "_members_A_fkey" FOREIGN KEY ("A") REFERENCES "hubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
