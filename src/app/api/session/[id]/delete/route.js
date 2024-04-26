import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { id } = params
        console.log('this is my id', id)

        const deleteSession = await prisma.session.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ message: 'Session deleted successfully.', status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.error({ message: 'Error deleting session. Please try again.', status: 400 }) 
    }
}