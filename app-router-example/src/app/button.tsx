"use client";

export default function CustomButton () {
    const handleButtonClick = async () => {
        try {
          const response = await fetch("/api/appRouterGoodbye", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Rohan Das",
            }),
          });
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          // Handle the response data here
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("There was a problem with your fetch operation:", error);
        }
      };
      return (
            <button
              onClick={handleButtonClick}
              className="mt-4 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700"
            >
              Send APP ROUTER Goodbye2
            </button>);
}