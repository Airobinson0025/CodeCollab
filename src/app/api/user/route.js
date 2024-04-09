import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod'
import { hash } from 'bcrypt'

const userSchema = z.object({
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
    passwordConfirmation: z.string()
  })

export async function POST(req) {
    try {
        const body = await req.json()
        const { username, email, password } = userSchema.parse(body)

        //checks if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(existingUser) {
            return NextResponse.json({ message: "User already exists"}, { status: 400 })
        }

        //hashes password
        const hashedPassword = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({user: rest }, { message: "User created successfully"}, { status: 201 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "An error occurred creating user"}, { status: 500 })
    }
}