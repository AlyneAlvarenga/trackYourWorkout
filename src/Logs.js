import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";

class Logs extends Component {
  render() {
      return (
        <div className="flexContainer">
          <div className="logWrapper">
          <h1>Log Counts</h1>
            <div className="backToHomeWrapper">
              <IconContext.Provider value={{ className: 'reactIcons' }}>
                <Link to="/" className="backToHomeLink"><FaArrowCircleLeft /> Back</Link>
              </IconContext.Provider>
            </div>
            {this.props.userObjects.map((obj) => {
              return (
                <div key={obj.id} id={obj.id} className="eachLog">
                  <h2>{obj.title}</h2>
                  <p>This workout plan has been logged {obj.counter} time(s).</p>
                </div>
              )
              
            })}
          </div>
        </div>
      )
  }
}

export default Logs;