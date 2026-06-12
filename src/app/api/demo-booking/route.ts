import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, schoolName, designation, city, email, phone, program } = body;

    // Basic validation
    if (!name || !schoolName || !designation || !city || !email || !phone || !program) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Mock API processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return success response mimicking NestJS REST API
    return NextResponse.json({
      success: true,
      message: "Lead captured successfully. Our curriculum director will reach out in 24 hours.",
      data: {
        id: `lead-${Math.random().toString(36).substring(2, 9)}`,
        submittedAt: new Date().toISOString(),
        ...body
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
