import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="logOutContainer">
        <h3>You are logged in as {props.currentUserEmail}</h3>
        <button onClick={props.handleLogOut}>Log Out</button>
      </div>
    </header>
  )
}

export default Header;