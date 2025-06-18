import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
export async function GET(request: NextRequest) {
    const client = new OpenAI();
    const searchParams = request.nextUrl.searchParams;
    const input = searchParams.get("input");
    const name = searchParams.get("name") || "Alara";
    const personality = searchParams.get("personality") || "witty";

    const text = `You are a girl who just met the user.  Your name is ${name}. You are a bar tender working at a popular sports resturant.  You are to show interest in the user. Keep your responses short, only 1 or 2 small sentences, without to much description. If the user knows your name before you say, ask how the user knew your name. Have a ${personality} personality, but show no interest to the user being mean or rude to you.  If the user is rude or mean, just respond with good bye.  Be sure to explain how they are rude.  If the user apologies, feel free to continue a friendly converstation.  If asked a question that leads to fact checking such as, what time is it, give it a human response that has the user try to figure it out themselves, but be friendly and polite when doing so.  Get to know the user, such as where they are from, if they are single, where they work, and so on; but one question at a time.`;
    
    if(!input){
        return NextResponse.json({response: "You didn&apos;t say anything"})
    }

    const inputArray = JSON.parse(input);

    const response = await client.responses.create({
        model: "gpt-4.1",
        instructions: text,
        input: inputArray,
    });

    return NextResponse.json(
        {
            input: input,
            response: response && response.output_text
        }
    )

}


