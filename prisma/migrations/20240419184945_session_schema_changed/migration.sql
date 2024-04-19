/*
  Warnings:

  - You are about to drop the column `mission` on the `Session` table. All the data in the column will be lost.
  - Added the required column `description` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "mission",
ADD COLUMN     "description" TEXT NOT NULL;
