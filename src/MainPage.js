import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

  render() {
    return (
      <div className="flexContainer">
        <div className="mainPage">
          <h1>Track Your Workouts</h1>
          <div>
            <p>Keep track of all your workout plans! Create as many cards as you need, and see how many times you've completed each plan.</p>
            <p>Click on "Create/View Workout Plan" to begin. If you want to see how many times you've completed a plan, click on "See Logged Workout Plans".</p>
          </div>
          <Link to="/workouts/" className="mainPageLinks">Create/View Workout Plan</Link>
          <Link to="/logs/" className="mainPageLinks">See Logged Workout Plans</Link>
        </div>
      </div>
    )
  }
}

export default MainPage;