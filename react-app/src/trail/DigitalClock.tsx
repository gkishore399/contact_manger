import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const inervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(inervalId);
    };
  }, []);
  console.log("hi");

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
