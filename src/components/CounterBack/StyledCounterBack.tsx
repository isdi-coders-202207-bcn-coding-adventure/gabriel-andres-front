import styled from "styled-components";
import "@fontsource/oxanium";

const StyledCounterBack = styled.div`
  font-family: oxanium;
  background-color: #243342;
  font-size: 36px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .counter-list__number {
    background-color: #ffc700;
    color: #243342;
    border-radius: 30%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .counter-list__word {
    color: #e8eef1;
  }
`;

export default StyledCounterBack;
