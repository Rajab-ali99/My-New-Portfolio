import { sendMail } from "@/lib/sendMail";
import { zSchema } from "@/lib/zodSchema";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function POST(request) {
 try {
     const payload = await request.json();
         const validationSchema = zSchema.pick({
            email: true,
            name: true,
            message: true,
         })
         const validatedData = validationSchema.safeParse(payload);
         const { email, name,message } = validatedData.data;
         if(!validatedData){
            return NextResponse.json({
                success:false,
                message: "Invalid data or missing fields.",
                status:401,

            })
         }
         const results = await sendMail(name, email, message);
         if (!results.success) {
            return NextResponse.json({
                success:false,
                message: 'Failed to send mail',
                status:500,
            })
         }
             return NextResponse.json({ success: true, message: "Email sent successfully!" });

 } catch (error) {
    return NextResponse.json({
        success:false,
        message: error.message,
        status:500,
    })
 }
}