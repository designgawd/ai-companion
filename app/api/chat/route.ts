import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function GET(request: NextRequest) {
    const client = new OpenAI();
    const searchParams = request.nextUrl.searchParams
    const input = searchParams.get("input")
    if(!input){
        return Response.json({response: "You didn't ask anything"})
    }

    const response = await client.responses.create({
        model: "gpt-4.1",
        input: [
            {role: "system", content: ""},
            {role:"user", content: input}
        ],
    });

    return Response.json(
        {
            input: input,
            response: response.output_text
        }
    )

    // console.log(response.output_text);
}


