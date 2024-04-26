-- DropForeignKey
ALTER TABLE "SessionMember" DROP CONSTRAINT "SessionMember_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "SessionMember" ADD CONSTRAINT "SessionMember_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
