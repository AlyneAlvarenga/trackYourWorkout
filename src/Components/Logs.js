import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Header from './Header';

function Logs(props) {
  return (
    <Fragment>
      <Header 
        handleLogOut={props.handleLogOut}
        currentUserEmail={props.currentUserEmail}
      />
      <div className="flexContainer">
        <div className="logWrapper">
        <h1>Log Counts</h1>
          <div className="backToHomeWrapper">
            <IconContext.Provider value={{ className: 'reactIcons' }}>
              <Link to="/trackYourWorkout" className="backToHomeLink"><FaArrowCircleLeft /> Back</Link>
            </IconContext.Provider>
          </div>
          {props.userObjects.map((obj) => {
            return (
              <div key={obj.id} id={obj.id} className="eachLog">
                <h2>{obj.title}</h2>
                <p>This workout plan has been logged {obj.counter} time(s).</p>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Logs;