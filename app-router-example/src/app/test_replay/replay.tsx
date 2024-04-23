"use client";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { useEffect, useState, useRef } from "react"; // Step 1: Import useRef

export function Replay({ events }: { events: any[] }) {
  const [replayed, setReplayed] = useState(false);
  const replayRef = useRef(null); // Step 2: Create a ref

  useEffect(() => {
    if (!replayed && replayRef.current) {
      console.log("Beginning replay!");
      const replayer = new rrwebPlayer({
        target: replayRef.current, // Step 3: Use the ref as the target
        props: {
          events,
          width: 1480,
          height: 820,
          showController: true,
          tags: {
            "start-recording": "green",
            "stop-recording": "red",
          },
        },
      });
      replayer.play();
      setReplayed(true);
    }
  }, [replayed, events]); // Include events in the dependency array if it's expected to change

  return <div className="myReplay bg-red-500 px-6 w-full h-full" ref={replayRef}></div>; // Assign the ref to the div using Tailwind CSS color and full width and height
}
