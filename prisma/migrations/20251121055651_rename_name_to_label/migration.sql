/*
  Warnings:

  - You are about to drop the column `name` on the `menu_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_item" DROP COLUMN "name",
ADD COLUMN     "label" TEXT;
