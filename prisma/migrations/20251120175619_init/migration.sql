-- CreateTable
CREATE TABLE "menu_item" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "menu_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advantages" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon_url" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "advantages_pkey" PRIMARY KEY ("id")
);
