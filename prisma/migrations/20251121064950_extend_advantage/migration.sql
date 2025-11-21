/*
  Warnings:

  - You are about to drop the `ButtonProps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ButtonProps" DROP CONSTRAINT "ButtonProps_advantageId_fkey";

-- DropTable
DROP TABLE "ButtonProps";

-- CreateTable
CREATE TABLE "button_props" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT DEFAULT 'neutral',
    "variant" TEXT DEFAULT 'subtle',
    "trailingIcon" TEXT,
    "advantageId" INTEGER,

    CONSTRAINT "button_props_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "button_props" ADD CONSTRAINT "button_props_advantageId_fkey" FOREIGN KEY ("advantageId") REFERENCES "advantage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
