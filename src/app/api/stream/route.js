import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";


export async function GET(req) {
    try {
        const session = await getServerSession(authOptions)
        console.log(session.user)

        if(!session) {
            return NextResponse.json({ message: 'no session' })
        }

        const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
        const apiSecret = process.env.NEXT_PUBLIC_STREAM_API_SECRET
        const serverClient = StreamChat.getInstance(apiKey, apiSecret)
        const token = serverClient.createToken(session.user.id)

        return NextResponse.json({ token: token , message: "token fetched" })

        
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'error fetching token', error: error })
    }
}