import React, { useState, useEffect } from "react";
import Header from "./Header";
import rad from "../assets/landing-tobi.jpg";
import About from "./About";
import Sponsors from "./Sponsors";

const PITS = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-25") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <section>
        <Header />
      </section>
      <section className="landing">
        <div className="pits">
          <div className="pits_text">
            <p>Priests in the system 2024</p>
          </div>
          <div className="countdown">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
        </div>
        <div className="rad">
          <img src={rad} alt="Convener" />
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Sponsors />
      </section>
    </div>
  );
};

export default PITS;
