/*
  Warnings:

  - You are about to drop the column `icon_url` on the `advantage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "advantage" DROP COLUMN "icon_url",
ADD COLUMN     "image_url" TEXT;

-- CreateTable
CREATE TABLE "ButtonProps" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT DEFAULT 'neutral',
    "variant" TEXT DEFAULT 'subtle',
    "trailingIcon" TEXT,
    "advantageId" INTEGER,

    CONSTRAINT "ButtonProps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ButtonProps" ADD CONSTRAINT "ButtonProps_advantageId_fkey" FOREIGN KEY ("advantageId") REFERENCES "advantage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
