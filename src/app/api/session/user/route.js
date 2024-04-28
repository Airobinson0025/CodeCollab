import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// get all sessions by user id
export async function GET( req ) {

    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    if(!userId) {
        return NextResponse.json({ message: 'You must be logged in to view your sessions.', status: 401 })
    }

    try {
        // find all sessions by user id
        const sessionsByUserId = await prisma.session.findMany({
            where: {
                userId: userId
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true
                            }
                        }
                    }
                }
            }
        })
        
        return NextResponse.json({ sessions: sessionsByUserId, message: 'Sessions fetched by user Id' ,status: 200 })

    } catch (error) {
        
        console.error(error)
        return NextResponse.error({ message: 'Error fetching sessions. Please try again.', status: 400 })
    }
}