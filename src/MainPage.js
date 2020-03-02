import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

  render() {
    return (
      <div className="flexContainer">
      	<div className="mainPage">
      	  <h1>Track Your Workouts</h1>
      	  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, doloribus. Voluptates modi repellendus dolores nobis in officia fuga suscipit necessitatibus!</p>
      	  {/* <button onClick={this.goToWorkout}>Create/View Workout Plan</button> */}
          <Link to="/workouts/">Create/View Workout Plan</Link>
          {/* <button onClick={this.goToLogs}>See Logged Workout Plans</button> */}
          <Link to="/logs/">See Logged Workout Plans</Link>
      	</div>
      </div>
    )
  }
}

export default MainPage;