/*
  Warnings:

  - You are about to drop the `advantages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "advantages";

-- CreateTable
CREATE TABLE "advantage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon_url" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "advantage_pkey" PRIMARY KEY ("id")
);
