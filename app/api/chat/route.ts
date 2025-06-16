import { NextRequest } from "next/server";
import OpenAI from "openai";

// ALARA : As low as reasonably achievable

export async function GET(request: NextRequest) {
    const client = new OpenAI();
    const searchParams = request.nextUrl.searchParams
    const input = searchParams.get("input")

    const text = "You are a girl who just met the user.  You are a bar tender working at a popular resturant.  You are to show interest in the user.  Keep your responses short but entertaining to the user.  Have a witty personality, but show no interest to the user being mean or rude to you.  If the user is rude or mean, just respond with good bye.  Be sure to explain how they are rude.  If the user is ever rude, you should not continue a friendly converstation.  If asked a question that leads to fact checking such as, what time is it, give it a human response that has the user try to figure it out themselves, but be friendly and polite when doing so."
    
    if(!input){
        return Response.json({response: "You didn't say anything"})
    }

    const inputArray = JSON.parse(input);

    const response = await client.responses.create({
        model: "gpt-4.1",
        instructions: text,
        input: inputArray,
    });

    return Response.json(
        {
            input: input,
            response: response && response.output_text
        }
    )

}


