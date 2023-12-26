import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/app/email/email";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const POST = async (req: Request) => {
  try {
    const { email, date } = await req.json();
    if (!email || !date) {
      return NextResponse.json(
        { error: "Insufficient data provided" },
        { status: 403 }
      );
    }
    await prisma.$connect();
    const entry = await prisma.entry.create({ data: { email, date } });
    if (!entry) {
      return NextResponse.json(
        { error: "Failed to create entry" },
        { status: 403 }
      );
    }
    const responseEmail = await resend.emails.send({
      from: "devteam@reactifytechnologies.com",
      to: email,
      subject: "Hello world",
      react: Email(),
    });
    if (!responseEmail) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 403 }
      );
    }
    return NextResponse.json({ entry }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
