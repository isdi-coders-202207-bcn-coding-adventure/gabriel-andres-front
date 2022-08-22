import StyledCounterBack from "./StyledCounterBack";

const CounterBack = (): JSX.Element => {
  return (
    <StyledCounterBack>
      <ul className="counter-list">
        <li className="counter-list__item">
          <span className="counter-list__number">02</span>
          <span className="counter-list__word">days</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">20</span>
          <span className="counter-list__word">hours</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">34</span>
          <span className="counter-list__word">minutes</span>
        </li>
        <li className="counter-list__item">
          <span className="counter-list__number">09</span>
          <span className="counter-list__word">seconds</span>
        </li>
      </ul>
    </StyledCounterBack>
  );
};

export default CounterBack;
