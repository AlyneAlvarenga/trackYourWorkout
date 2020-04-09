import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useLocation, useHistory } from 'react-router-dom';

function Header(props) {

  let location = useLocation();

  const history = useHistory();

  const startLogOut = () => {
    history.push('/trackYourWorkout');
    props.handleLogOut();
  }

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
        <button onClick={startLogOut}>Log Out</button>
      </div>
    </header>
  )
}

export default Header;