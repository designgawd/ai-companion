type ChatInput = {
    message: string;
    context?: Record<string, unknown>;
};

type ChatResponse = {
    role: "system";
    content: string;
};

export default async function MessageRequest(
    input: ChatInput,
    name: string,
    personality: string
): Promise<ChatResponse> {
    try {
        console.log(input);

        const query = new URLSearchParams({
            input: JSON.stringify(input),
            name,
            personality
        });

        const res = await fetch(`/api/chat?${query.toString()}`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        return {
            role: "system",
            content: data.response,
        };
    } catch (error) {
        console.error("MessageRequest error:", error);
        return {
            role: "system",
            content: "An error occurred while processing your request."
        };
    }
}
