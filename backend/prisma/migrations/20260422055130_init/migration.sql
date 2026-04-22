/*
  Warnings:

  - Added the required column `receiverId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "receiverId" INTEGER NOT NULL,
ALTER COLUMN "chatid" DROP DEFAULT;
DROP SEQUENCE "Chat_chatid_seq";

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
