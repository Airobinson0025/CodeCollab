import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

// gets userId from session
const formSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 characters long').max(100, 'Title must be less than 50 characters'),
    description: z.string().min(2, 'Description msut be at leat 2 characters long').max(100, 'Description must be less than 100 characters')
})

export async function POST( req ) {
    try {
        const body = await req.json()
        const { title, description, userId } = formSchema.parse(body)
        
        // create a new session
        const newSession = await prisma.session.create({
            data: {
                title,
                description,
                userId: userId
            }
        })

        return NextResponse.json({ session: newSession, message: 'Session created successfully.', status: 201 })

    } catch (error) {

        console.error(error)
        return NextResponse.error({ message: 'Error creating session. Please try again.', status: 400 })
    }
}