"use client";
import { useState, useEffect } from "react";
import * as rrweb from "rrweb";

export default function Record() {
  const [showPopup, setShowPopup] = useState(false);
  const [done, setDone] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [events, setEvents] = useState<any[]>([]); // Updated to use useState
  const [stopFn, setStopFn] = useState<() => void>(() => () => {}); // Store the stop function

  useEffect(() => {
    let localEvents: any[] = []; // Initialize local events array to store the events
    let localStopFn = rrweb.record({
      emit(event) {
        localEvents.push(event); // Store each event in local array
        setEvents((prevEvents) => [...prevEvents, event]); // Update state with new event
        if (localEvents.length > 10) {
          // stop after 10 events, corrected from 100 to match the comment
          if (localStopFn) {
            localStopFn();
          }
        }
      },
    });
    setStopFn(() => localStopFn ? localStopFn : () => {}); // Store the stop function in state, ensure it's not undefined
  }, []);

  const handleButtonClick = (content: any) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleStopAndReplay = () => {
    stopFn(); // Stop the recording
    setDone(true);
  };
  
  if (done) {
    console.log("Rendering this");
    // Convert events to a string to copy
    const eventsString = JSON.stringify(events, null, 2);
    // Use the Clipboard API to copy the events string to the clipboard
    navigator.clipboard.writeText(eventsString).then(() => {
      console.log("Events copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy events to clipboard: ", err);
    });
    return (
      <div className="p-5">
        Done! Events are copied to your clipboard.
      </div>
    );
  }
  return (
    <div className="min-h-screen  p-5">
      <header className="bg-blue-500 text-primary p-4 text-2xl font-bold">
        CUSTOM APPLICATION [Decipher is recording]
      </header>
      <main className="mt-5">
        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-3">Actions</h2>
          <button
            className="bg-green-500 hover:bg-green-700 text-primary font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick("Action 1 triggered")}
          >
            Action 1
          </button>
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick("Action 2 triggered")}
          >
            Action 2
          </button>
          <button
            className="ml-2 bg-yellow-500 hover:bg-yellow-700 text-primary font-bold py-2 px-4 rounded"
            onClick={handleStopAndReplay}
          >
            Stop and Replay
          </button>
        </section>
      </main>
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-400 p-5 rounded-lg">
            <h3 className="font-bold">Popup</h3>
            <p>{popupContent}</p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-primary font-bold py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
