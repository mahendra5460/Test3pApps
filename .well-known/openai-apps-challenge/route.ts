import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    "AIoP_R6STqSRPySYC-pSOB-88psw-p5ewTFN9Fj_SUU",
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
