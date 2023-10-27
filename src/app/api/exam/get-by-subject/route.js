import connectToDB from "@/database";
import Question from "@/models/question";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();


    const { searchParams } = new URL(req.url);
    const subject = searchParams.get("subject");
    const extractUser = await Question.findOne({ exam_name: subject })
    if (extractUser) {
      return NextResponse.json({
        success: true,
        data: extractUser,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to get question not found  info ! Please try again",
      });
    }


  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
