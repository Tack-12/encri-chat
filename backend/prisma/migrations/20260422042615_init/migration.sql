/*
  Warnings:

  - You are about to drop the column `sentToId` on the `Messages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_sentToId_fkey";

-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "sentToId";
