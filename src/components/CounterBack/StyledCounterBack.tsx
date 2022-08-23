import styled from "styled-components";
import "@fontsource/oxanium";

const StyledCounterBack = styled.div`
  font-family: oxanium;
  background-color: #243342;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 5%;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .counter-list {
      &__number {
        background-color: #ffc700;
        color: #243342;
        border-radius: 30%;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
      }
      &__word {
        color: #e8eef1;
        font-size: 20px;
      }
    }
  }
`;

export default StyledCounterBack;
