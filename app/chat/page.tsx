import Chatbox from "../components/chatbox";

function Chat() {
  

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-3 bg-amber-500">left side content</div>
      <div className="col-span-3 bg-amber-50 col-start-4">
        <Chatbox />
      </div>
      
    </div>
    
  );
}

export default Chat;