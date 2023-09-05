-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'shipped', 'delivered');

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "orderedBooks" JSON NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;