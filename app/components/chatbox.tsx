"use client";

import { useState } from "react";
import MessageRequest from "./messageRequest";

function Chatbox() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
        {
            role:"system",
            content: "How can I help you!?",
        }
    ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Avoid rapid questions and empty text field
    if (loading) return;
    if (!inputText) return;

    // Set loading state and empty text field
    setLoading(true);
    setInputText("");

    // Move to bottom of screen, showing users message
    setTimeout(()=>{window.scrollTo(0, document.body.scrollHeight)},100);

    // Add users message to history and request for response
    messages.push({role:"user",content: inputText});
    const systemResponse = await MessageRequest(messages);

    // Add response to history
    messages.push(systemResponse);

    // Publish to page
    setMessages(messages);

    setLoading(false);

    // Move to the bottom of screen to show response
    setTimeout(()=>{window.scrollTo(0, document.body.scrollHeight)},100);

    
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 pb-36">
      <div className="flex flex-col gap-8 w-full max-w-4xl">

        {messages.length && messages.map((message, index) => {
          return (
            <div
              key={index}
              className={`messages p-4 rounded-2xl max-w-[70%] text-shadow-lg drop-shadow-xl/25 border-solid border-amber-50 border-4 ${
                message.role === "user"
                  ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white ml-auto"
                  : "bg-violet-500 bg-linear-to-bl rom-violet-500 to-fuchsia-500 text-gray-200 mr-auto"
              }`}
            >
              {message.content as string}
            </div>
          );
        })}

        {loading && <div>Loading...</div>}
        
      </div>

      <div className="fixed bottom-0 w-auto py-6">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4"
        >
          <input
            className="rounded-lg p-4 bg-gray-300 drop-shadow-xl/25 border-solid border-amber-50 border-4 w-[500px]"
            placeholder="Say something to Alara..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className={`bg-gray-300 drop-shadow-xl/25 border-solid border-amber-50 border-4 p-4 rounded-lg ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;