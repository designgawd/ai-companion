export default async function MessageRequest(input:any, name:string, personality:string){
    console.log(input);
    const res = await fetch(
        "/api/chat?input=" + JSON.stringify(input) + "&name=" + name + "&personality=" + personality,
        {cache: "no-store"}
    );

    const data = await res.json();
    return {
        role: "system",
        content: data.response,
    };
}