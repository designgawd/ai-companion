export default async function MessageRequest(input:any){
    console.log(input);
    const res = await fetch(
        "/api/chat?input=" + JSON.stringify(input),
        {cache: "no-store"}
    );

    const data = await res.json();
    return {
        role: "system",
        content: data.response,
    };
}