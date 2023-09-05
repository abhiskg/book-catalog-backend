/*
  Warnings:

  - You are about to drop the column `createdAt` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `review_and_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "review_and_ratings" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt";
