import styled from "styled-components";
import CounterBack from "../CounterBack/CounterBack";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <CounterBack />
    </StyledContainer>
  );
};

export default Layout;
