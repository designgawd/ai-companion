"use client"

import Chatbox from "./components/chatbox";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/images/Alara---Desktop-logo.png";
import logoNextJS from "../public/images/Alara---Desktop-nextJS.png";
import logoOpenAI from "../public/images/Alara---Desktop-OpenAI.png";
import logoOpenArt from "../public/images/Alara---Desktop-openArt.png";
import { Bartender } from "./components/bartender";


export default function HomePage() {

  const [getStarted, setGetStarted] = useState(false);
  const [chatting, setChatting] = useState(false);
  const [girl, setGirl] = useState(0);
  const bartenders = Bartender();

  function randomNumber(min:number,max:number) {
    return Math.floor(Math.random() * (max-min+1)) + min;
  }

  function handleGetStarted() {
    if(!getStarted) { setGetStarted(true) } else { setGetStarted(false) };
  }

  function startChatting() {
    setGirl(randomNumber(0,4));
    setChatting(true);
  }



  return (
    <div className="bg-[url(/images/Alara---Desktop-BG.jpg)] bg-cover min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 overflow-hidden relative">

      <div className={`z-[0] mask-l-from-50% bg-[url(/images/Alara---Desktop-girl1.jpg)] bg-cover min-h-screen min-w-screen absolute top-0 left-50 ${chatting ? "goaway right" : "showup"}`}></div>

      <div className="min-h-screen min-w-screen fixed">
      <Image
        src={bartenders[girl].image}
        alt={bartenders[girl].name}
        fill
        className={`min-h-screen min-w-screen absolute top-0 left-50 ${!chatting ? "goaway right" : "showup"}`}/>
      </div>

      <Image alt="" src={logo} className={`fixed top-8 w-[12%] left-right ${chatting ? "right-pos" : "left-pos"}`} />

      <div className={`z-[1] absolute right-[-50px] top-50 bg-black p-4 px-24 rounded-2xl w-1/4 text-amber-50 text-2xl ${chatting ? "showup" : "goaway right"}`}>
        {bartenders[girl].name}</div>
        <div className="main-content">

          <div className={`mask-r-from-70% w-1/2 fixed left-[-50px] top-1/6 ${getStarted ? "goaway left" : "showup"}`}>

            <div className={`bg-black rounded-2xl p-8 pl-20`}>
              <h1 className="text-amber-50 text-8xl min-[2400px]:text-9xl">Artificial <br/> Intelligent for  <br/> Rasing Your Bar</h1>
            </div>

            <div className="p-8 pl-20 text-amber-50 text-2xl min-[2400px]:text-4xl">Practice you skills on closing the deal, when meeting a girl at a bar... <br/> Try your favorite pickup lines and see how they would land.</div>

            <div className="p-8 pl-20 grid grid-cols-2 gap-4 w-3/4">
              <div><button className="bg-blue-500 hover:bg-blue-700 font-medium text-2xl text-white py-2 px-20 rounded-2xl">Learn More</button>
              </div>
              <div><button onClick={handleGetStarted} className="bg-blue-500 hover:bg-blue-700 font-medium text-2xl text-white py-2 px-20 rounded-2xl">Get Started</button>
              </div>
            </div>

          </div>

          <div className={`bg-amber-50 rounded-2xl w-1/2 fixed bottom-30 right-[-50px] ${chatting ? "goaway right" : "showup"}`}>
            <div className="grid grid-cols-3 gap-4 w-3/4 ">
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoNextJS} style={{width:"125px"}} /></div>
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoOpenAI} style={{width:"125px"}} /></div>
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoOpenArt} style={{width:"125px"}} /></div>
            </div>
          </div>

          <div className={`get-started w-3/8 fixed left-[-50px] top-1/6  ${!getStarted ? "goaway left" : "showup"} ${chatting ? "goaway left" : ""}`}>
            <div className={`bg-black rounded-2xl p-8 pl-20`}>
              <p className="text-amber-50 py-4 text-xl min-[2400px]:text-4xl">
                Here is the scenario.  You just arrived to a bar solo.  You have a seat at the bar and notice the bartender noticing you.  No matter if you are shy or always ready for social interactions, it is time for you to wow this girl and see where things go.
              </p>
              <p className="text-amber-50 py-4 text-xl min-[2400px]:text-4xl">
                You will meet a random girl.  Each girl can have a different personality.  This will give you the challenges of meeting different type of girls each time you use this service.
              </p>
              <p className="text-amber-50 py-4 text-xl min-[2400px]:text-4xl">
                You will only have 3 minutes... she is busy, so she doesn&apos;t have much time and there is plenty of competition around you!  Don&apos;t forget to order your drink before you lose her.
              </p>
              <p className="text-amber-50 py-4 text-xl min-[2400px]:text-4xl">
                If you are not interseted in your bartender you wait for the next on by refreshing the page and starting over.  Luck you, not many people get that chance!
              </p>
            </div>
            <div className="p-8 pl-20 grid grid-cols-2 gap-4">
              <div><button onClick={handleGetStarted} className="bg-blue-500 hover:bg-blue-700 font-medium text-2xl text-white py-2 px-20 rounded-2xl">Go Back</button>
              </div>
              <div><button onClick={startChatting} className="bg-blue-500 hover:bg-blue-700 font-medium text-2xl text-white py-2 px-20 rounded-2xl">Start Chatting</button>
              </div>
            </div>
          </div>

          <div className={`chat-section w-7/16 h-screen overflow-x-auto ${!chatting ? "goaway left" : "showup"}`}>
            <div className={`bg-black rounded-2xl mask-r-from-90% pr-12`}><Chatbox girl={girl} /></div>
          </div>
        </div>

    </div>
  );
}