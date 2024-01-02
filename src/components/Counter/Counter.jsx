import { useEffect, useState } from "react";

const CounterLogo = "/public/pictures/icons/hamac.png";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const deadlineDate = new Date("2024-07-13");
      const currentDate = new Date();
      const timeRemaining = Math.max(0, deadlineDate - currentDate);

      const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor(
        (timeRemaining % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="counter-container">
      <img src={CounterLogo} alt="logo counter vacances" />
      <p>
        J-{timeLeft.days}
        <span>
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </p>
    </div>
  );
};
