import connectDB from "@/app/lib/mongodb"
import users from "@/app/models/users"
import { NextResponse } from "next/server"

// import connectDB from "@/lib/mongodb"
// import User from "@/models/User"
export async function POST(req: Request) {
    debugger

    try {

        await connectDB()

        console.log('connect sucss>>');


        const body = await req.json()

        const user = await users.create(body)

        return NextResponse.json({
            success: true,
            user
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json({
            success: false
        })
    }
}