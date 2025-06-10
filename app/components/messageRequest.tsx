export default async function MessageRequest(input:string){
    console.log(input);
    const res = await fetch(
        "/api/chat?input=" + input,
        {cache: "no-store"}
    );

    const data = await res.json();
    return {
        role: "system",
        content: data.response
    };
}