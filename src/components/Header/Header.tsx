import StyledHeader from "./StyledHeader";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <header className="main-header">
        <h1 className="app-title">Coding Adventure</h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
