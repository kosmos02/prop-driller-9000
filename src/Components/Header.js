import React from 'react';

function Header(props) {
  console.log(props)
  return (
    
    <header>
      <img
        onClick={props.displayBots}
        src = {props.logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
