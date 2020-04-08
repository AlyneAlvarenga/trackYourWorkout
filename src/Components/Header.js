import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {useLocation} from 'react-router-dom';

function Header(props) {

  let location = useLocation();

  return (
    <header>
      <div className="headerWrapper">
        {
          location.pathname !== '/trackYourWorkout' ?
            <div className="backToHomeWrapper">
              <IconContext.Provider value={{ className: 'reactIcons' }}>
                <Link to="/trackYourWorkout" className="backToHomeLink"><FaArrowCircleLeft /> Back</Link>
              </IconContext.Provider>
            </div>
          : null
        }
        <h3>You are logged in as {props.currentUserEmail}</h3>
        <button onClick={props.handleLogOut}>Log Out</button>
      </div>
    </header>
  )
}

export default Header;