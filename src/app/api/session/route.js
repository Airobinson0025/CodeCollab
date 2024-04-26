import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connect } from "socket.io-client";

const formSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters long').max(100, 'Title must be less than 50 characters'),
    description: z.string().min(2, 'Description msut be at leat 2 characters long').max(100, 'Description must be less than 100 characters')
})

// create a new session
export async function POST( req ) {

    const session = await getServerSession(authOptions)

    const userId = session?.user?.id

    if(!userId) {
        return NextResponse.json({ message: 'You must be logged in to create a session.', status: 401 })
    }

    try {
        const body = await req.json()
        const { title, description } = formSchema.parse(body)
        
        
        const newSession = await prisma.session.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        id: userId // Connect the user by their id 
                    }
                },
                members: {
                    create: {
                        user: {
                            connect: {
                                id: userId
                            }
                        }
                    }
                }
            }
        })

        return NextResponse.json({ session: newSession, message: 'Session created successfully.', status: 201 })

    } catch (error) {

        console.error(error)
        return NextResponse.error({ message: 'Error creating session. Please try again.', status: 400 })
    }
}


// get all sessions
export async function GET() {
    try {
        const sessions = await prisma.session.findMany({
            include: {
                user: true
            }
        })

        return NextResponse.json({ sessions, status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.error({ message: 'Error fetching sessions. Please try again.', status: 400 })
        
    }
}