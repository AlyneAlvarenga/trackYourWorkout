import React, {Fragment} from 'react';
import Header from './Header';

function Logs(props) {
  return (
    <Fragment>
      <Header 
        handleLogOut={props.handleLogOut}
        currentUserEmail={props.currentUserEmail}
      />
      <div className="flexContainerSignedIn">
        <div className="logWrapper">
        <h1>Log Counts</h1>
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