/*
  Warnings:

  - You are about to drop the column `order` on the `advantage` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `menu_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "advantage" DROP COLUMN "order";

-- AlterTable
ALTER TABLE "menu_item" DROP COLUMN "order",
ADD COLUMN     "active" BOOLEAN,
ADD COLUMN     "to" TEXT;
