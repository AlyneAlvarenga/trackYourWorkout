import React, {Component} from 'react';

class MainPage extends Component {
  goToWorkout = () => {
    this.props.history.push(`/workouts/`);
  }
  
  render() {
    return (
      <div className="flexContainer">
      	<div className="mainPage">
      	  <h1>Track Your Workouts</h1>
      	  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, doloribus. Voluptates modi repellendus dolores nobis in officia fuga suscipit necessitatibus!</p>
      	  <button onClick={this.goToWorkout}>Create/View Workout Plan</button>
      	</div>
      </div>
    )
  }
}

export default MainPage;