"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import MessageRequest from "./messageRequest";
import { Bartender } from "./bartender";
type Messages = [{
    role: string;
    content: string;
}];
interface ChatboxProps {
  girl: number;
}

function Chatbox({girl}: ChatboxProps) {
  const [inputText, setInputText] = useState("");
  
  const [messages, setMessages] = useState<Messages>(
        [{
            role:"system",
            content: "How can I help you!?",
        }]);
  const [loading, setLoading] = useState(false);
  const bartenders = Bartender();
  const bargirl = bartenders[girl];
  const myElementRef = useRef<null | HTMLDivElement>(null);

const scrollToElement = () => {
      myElementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Avoid rapid questions and empty text field
    if (loading) return;
    if (!inputText) return;

    // Set loading state and empty text field
    setLoading(true);
    setInputText("");
    setTimeout(()=>scrollToElement(),100);

    // Add users message to history and request for response
    messages.push({role:"user",content: inputText});
    const systemResponse = await MessageRequest(messages, bargirl.name || "Alara", bargirl.personality || "witty");

    // Add response to history
    messages.push(systemResponse);

    // Publish to page
    setMessages(messages);

    console.log("convo", JSON.stringify(messages));

    setLoading(false);
    setTimeout(()=>scrollToElement(),100);

  };

  return (
    <div className="2xl:min-h-screen flex flex-col items-center py-4 px-8">
      <div id="chatBox" className="flex flex-col gap-8 w-full max-w-4xl overflow-auto">

        {messages.length && messages.map((message, index, row) => {
          return (
            <div
              key={index}
              ref={index+1===row.length ? myElementRef : null}
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

        {loading && <div ref={myElementRef}><Image src="/images/loading.gif" alt="alt" width={50} height={50} /></div>}

      </div>

      <div className="sticky bottom-0 py-12 bg-black w-[100%] mask-t-from-90%">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-4"
        >
          <input
            className="rounded-lg p-4 bg-gray-300 drop-shadow-xl/25 border-solid border-amber-50 border-4 text-gray-600 w-[500px]"
            placeholder={`Say something to ${bargirl.name}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className={`bg-gray-300 drop-shadow-xl/25 border-solid border-amber-50 border-4 p-4 rounded-lg text-gray-600 ${
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