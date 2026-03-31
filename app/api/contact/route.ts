import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendAdmissionEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate with Zod
    const validatedData = contactSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Datos de formulario inválidos", details: validatedData.error.format() },
        { status: 400 }
      );
    }

    // 2. Send emails
    const result = await sendAdmissionEmail(validatedData.data);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Error al enviar el email de solicitud" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
