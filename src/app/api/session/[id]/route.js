import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// get session by id
export async function GET(req, { params }) {
    try {
        const { id } = params
        // console.log('this is my id', id)

        if(!id) {
            return NextResponse.error({ message: 'Session not found.', status: 404 })
        }

        // find session by id
        const sessionById = await prisma.session.findUnique({
            where: {
                id: id
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
        
        return NextResponse.json({ session: sessionById,message: 'Session fetched by Id' ,status: 200 })

    } catch (error) {
        
        console.error(error)
        return NextResponse.error({ message: 'Error fetching session. Please try again.', status: 400 })
    }
}