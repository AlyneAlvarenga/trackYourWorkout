import React, {Fragment} from 'react';
import Header from './Header';
import './Logs.css';

function Logs(props) {
  return (
    <Fragment>
      <Header 
        handleLogOut={props.handleLogOut}
        currentUserEmail={props.currentUserEmail}
      />
      <div className="MainPage-signedInContainer">
        <div className="logWrapper">
        <h1>Log Counts</h1>
          <main className="logFlexContainer">
          {props.userObjects.map((obj) => {
            return (
              <div key={obj.id} id={obj.id} className="eachLog">
                <h2>{obj.title}</h2>
                <p>This workout plan has been logged {obj.counter} time(s).</p>
              </div>
            )
          })}
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default Logs;