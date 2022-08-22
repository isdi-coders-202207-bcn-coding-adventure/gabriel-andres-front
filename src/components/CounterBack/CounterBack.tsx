const CounterBack = (): JSX.Element => {
  return (
    <div className="counter-container">
      <ul className="counter-list">
        <li className="days item">
          <span className="days number">02</span>
          <span className="days words">days</span>
        </li>
        <li className="hours item">
          <span className="hours number">20</span>
          <span className="hours word">hours</span>
        </li>
        <li className="minutes item">
          <span className="minutes number">34</span>
          <span className="minutes word">minutes</span>
        </li>
        <li className="seconds item">
          <span className="seconds number">09</span>
          <span className="seconds word">seconds</span>
        </li>
      </ul>
    </div>
  );
};

export default CounterBack;
