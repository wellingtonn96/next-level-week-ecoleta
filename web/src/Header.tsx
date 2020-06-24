import React from "react";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      {props.title}
      <h1>Ecoleta do App</h1>
    </header>
  );
};

export default Header;
