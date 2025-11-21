/*
  Warnings:

  - You are about to drop the column `orientation` on the `button_props` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "advantage" ADD COLUMN     "orientation" TEXT DEFAULT 'horizontal';

-- AlterTable
ALTER TABLE "button_props" DROP COLUMN "orientation";
