import { useState } from "react";
import date from "../../utils/date/dateVariable";
import { timer } from "../../utils/timerFunction";
import StyledCounterBack from "./StyledCounterBack";

const CounterBack = (): JSX.Element => {
  const [countTime, setCountTime] = useState({
    total: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });
  //

  setTimeout(() => {
    setCountTime(timer(date.toDateString()));
  }, 1000);

  return (
    <StyledCounterBack>
      <ul className="counter-list">
        <li className="counter-list__item">
          <span className="counter-list__number">{countTime.days}</span>
          <span className="counter-list__word">days</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">{countTime.hours}</span>
          <span className="counter-list__word">hours</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">{countTime.minutes}</span>
          <span className="counter-list__word">minutes</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">{countTime.seconds}</span>
          <span className="counter-list__word">seconds</span>
        </li>
      </ul>
    </StyledCounterBack>
  );
};

export default CounterBack;
