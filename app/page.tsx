"use client"

import Chatbox from "./components/chatbox";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/images/Alara---Desktop-logo.png";
import logoNextJS from "../public/images/Alara---Desktop-nextJS.png";
import logoOpenAI from "../public/images/Alara---Desktop-OpenAI.png";
import logoOpenArt from "../public/images/Alara---Desktop-openArt.png";
import { Bartender } from "./components/bartender";


export default function HomePage() {

  const [getStarted, setGetStarted] = useState(false);
  const [chatting, setChatting] = useState(false);
  const [girl, setGirl] = useState(0);
  const [end, setEnd] = useState(false);
  const bartenders = Bartender();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Retrieve data from sessionStorage on component mount
      const storedData = sessionStorage.getItem('end');
      if (storedData) {setEnd(true);}
    }
  }, []);

  function randomNumber(min:number,max:number) {
    return Math.floor(Math.random() * (max-min+1)) + min;
  }

  function handleGetStarted() {
    if(!getStarted) { setGetStarted(true) } else { setGetStarted(false) };
  }

  function resetAll() {
    setChatting(false);
    setGetStarted(false);
  }

  function startChatting() {
    setGirl(randomNumber(0,4));
    setChatting(true);
  }

  function timesUp(end:boolean) {
    if(end) {
      setChatting(false);
      setEnd(true);
      sessionStorage.setItem('end', 'true');
    }
  }



  return (
    <div className="2xl:bg-[url(/images/Alara---Desktop-BG.jpg)] bg-cover min-h-screen bg-linear-to-r bg-black overflow-hidden relative">

      <div className={`z-[0] mask-l-from-50% bg-[url(/images/Alara---Desktop-girl1.jpg)] bg-center bg-cover min-h-screen min-w-screen absolute top-0 2xl:left-50 ${chatting ? "goaway right" : "showup"}`}></div>
      <div className="fixed w-[300px] bg-red-600 rotate-45 md:text-2xl font-medium shadow-2xl shadow-black right-[-115px] md:right-[-75px] top-5 md:top-15 z-[2] text-center">DEMO</div>
      <div className="min-h-screen min-w-screen fixed 2xl:left-50">
        <Image
          src={bartenders[girl].image}
          alt={bartenders[girl].name}
          width={3840}
          height={2160}
          className={` min-w-screen absolute mask-b-from-70%  top-0 ${!chatting ? "goaway right" : "2xl:absolute showup"}`}/>
      </div>

      <Image onClick={resetAll} alt="" src={logo} className={`fixed top-8 w-[30%] md:w-[20%] left-right ${chatting ? "right-pos" : "left-pos"}`} />

      <div className={`z-[1] absolute right-[-5px] 2xl:right-[-50px] top-20 2xl:top-50 bg-black p-4 2xl:px-24 md:rounded-2xl w-1/4 text-amber-50 text-2xl ${chatting ? "showup" : "goaway right"}`}>
        {bartenders[girl].name}</div>
        <div className="main-content">

          <div className={`mask-r-from-70% 2xl:w-1/2 fixed top-[20%] 2xl:left-[-50px] 2xl:top-1/6 ${getStarted || end ? "goaway left" : "showup"}`}>

            <div className={`bg-black/75 2xl:bg-black rounded-2xl p-8 2xl:pl-20`}>
              <h1 className="text-amber-50 text-4xl 2xl:text-9xl">Artificial <br/> Intelligent for  <br/> Rasing Your Bar</h1>
            </div>

            <div className="p-8 2xl:pl-20 text-amber-50 text-l 2xl:text-2xl">Practice you skills on closing the deal, when meeting a girl at a bar... <br/> Try your favorite pickup lines and see how they would land.</div>

            <div className="p-8 2xl:pl-20 grid grid-cols-2 gap-4 w-[100%] 2xl:w-3/4">
              <div><button className="bg-blue-500 hover:bg-blue-700 p-8 2xl:font-medium 2xl:text-2xl text-white py-2 2xl:px-20 rounded-2xl">Learn More</button>
              </div>
              <div><button onClick={handleGetStarted} className="bg-blue-500 hover:bg-blue-700 p-8 2xl:font-medium 2xl:text-2xl text-white py-2 2xl:px-20 rounded-2xl">Get Started</button>
              </div>
            </div>

          </div>

          <div className={`bg-amber-50 2xl:rounded-2xl w-[100%] 2xl:w-1/2 fixed bottom-0 2xl:bottom-30 2xl:right-[-50px] ${chatting || end ? "goaway right" : "showup"}`}>
            <div className="grid grid-cols-3 gap-4 2xl:w-3/4 ">
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoNextJS} style={{width:"125px"}} /></div>
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoOpenAI} style={{width:"125px"}} /></div>
              <div className="p-4 content-center justify-items-center"><Image alt="" src={logoOpenArt} style={{width:"125px"}} /></div>
            </div>
          </div>

          <div className={`get-started md:w-7/8 2xl:w-3/8 fixed left-[-50px] top-[10%] md:top-[20%] 2xl:top-1/6  ${!getStarted ? "goaway left" : "showup"} ${chatting || end ? "goaway left" : ""}`}>
            <div className={`bg-black/75 md:rounded-2xl p-8 pl-20`}>
              <p className="text-amber-50 py-1 md:py-4 text-sm 2xl:text-xl">
                Here is the scenario.  You just arrived to a bar solo.  You have a seat at the bar and notice the bartender noticing you.  No matter if you are shy or always ready for social interactions, it is time for you to wow this girl and see where things go.
              </p>
              <p className="text-amber-50 py-1 md:py-4 text-sm 2xl:text-xl">
                You will meet a random girl.  Each girl can have a different personality.  This will give you the challenges of meeting different type of girls each time you use this service.
              </p>
              <p className="text-amber-50 py-1 md:py-4 text-sm 2xl:text-xl">
                You will only have 3 minutes... she is busy, so she doesn&apos;t have much time and there is plenty of competition around you!  Don&apos;t forget to order your drink before you lose her.
              </p>
              <p className="text-amber-50 py-1 md:py-4 text-sm 2xl:text-xl">
                If you are not interseted in your bartender you wait for the next on by refreshing the page and starting over.  Luck you, not many people get that chance!
              </p>
            </div>
            <div className="p-8 pl-20 grid grid-cols-2 gap-4">
              <div><button onClick={handleGetStarted} className="bg-blue-500 hover:bg-blue-700 p-8 2xl:font-medium 2xl:text-2xl text-white py-2 2xl:px-16 rounded-2xl">Go Back</button>
              </div>
              <div><button onClick={startChatting} className="bg-blue-500 hover:bg-blue-700 p-8 2xl:font-medium 2xl:text-2xl text-white py-2 2xl:px-16 rounded-2xl">Start</button>
              </div>
            </div>
          </div>

          <div className={`get-started md:w-7/8 2xl:w-3/8 fixed left-[-50px] top-[10%] md:top-[20%] 2xl:top-1/6  ${!end ? "goaway left" : "showup"}`}>
            <div className={`bg-black/75 md:rounded-2xl p-8 pl-20`}>
              <p className="text-amber-50 py-4 text-l 2xl:text-xl">
                Apologies! However, you have used up all your time for now!
              </p>
              <p className="text-amber-50 py-4 text-l 2xl:text-xl">
                I hope you were able to accomplish a shared connection with our amazing Bartender.  Feel free to come back another time to give it a try.
              </p>
            </div>

          </div>

          <div className={`chat-section w-[100%] absolute top-[25%] 2xl:top-0 h-[75%] 2xl:w-7/16 2xl:h-screen overflow-x-auto ${!chatting ? "goaway left" : "showup"}`}>
            <div className={`bg-black rounded-2xl 2xl:mask-r-from-90% 2xl:pr-12 h-1/2 2xl:h-auto`}><Chatbox girl={girl} callback={timesUp} /></div>
          </div>
        </div>

    </div>
  );
}