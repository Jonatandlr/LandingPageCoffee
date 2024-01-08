import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { Name, Email, Message } = body
        // console.log(body)

        const {data,error} = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ['jonatand.larosa@gmail.com'],
            subject: "Cafe Cacao Contacto",
            text: `name: ${Name} \nemail: ${Email} \nmessage: ${Message}`
        });
        // console.log(error)
        if (error?.name === 'validation_error') {
           throw new Error()
        }
        return NextResponse.json({ status: 'ok' });

    } catch (err) {
        // console.log('desde el error')
        return NextResponse.json({ status: 'error' })
    }

}