import React, { Component, Fragment } from 'react';
import Header from './Header';

class FormAndCards extends Component {
  render() {
    return(
      <Fragment>
        <Header 
          currentUserEmail={this.props.state.currentUserEmail}
          handleLogOut={this.props.handleLogOut}
        />
      <section className="wrapper">
        <h1>Workout Plans</h1>
        <div className="instructions">
          <ul>
            <li>Create a name for your workout plan. This will be the title of your card.</li>
            <li>Type in the first line of exercise, sets, reps, weight and rest, and click on "Add another exercise."</li>
            <li>The exercises you just added will appear just below the form.</li>
            <li>Once you have added all your exercises, click on "Create Card" to create your workout plan.</li>
            <li>On your card, you can click on "Log this workout" every time you complete that workout plan. You can check how many times you've logged your workout on the "See Logged Workout Plans" page.</li>
          </ul>
        </div>
        <div className="createCard">
          <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="workoutPlan" className="workoutPlanLabel">Name of workout plan</label>
            <input type="text" value={this.props.state.workoutPlanName} onChange={this.props.handleChange} disabled={this.props.state.isDisabled} name="workoutPlanName" placeholder="Workout plan" id="workoutPlan" />
  
            <label htmlFor="exercise" className="visuallyhidden">Name of the exercise</label>
            <input type="text" value={this.props.state.exerciseName} onChange={this.props.handleChange} name="exerciseName" placeholder="Name of the exercise" id="exercise" />
  
            <label htmlFor="numberOfSets" className="visuallyhidden">Number of sets</label>
            <input type="number" value={this.props.state.sets} onChange={this.props.handleChange} name="sets" id="numberOfSets" placeholder="Sets" />
  
            <label htmlFor="numberOfReps" className="visuallyhidden">Number of reps</label>
            <input type="number" value={this.props.state.reps} onChange={this.props.handleChange} name="reps" id="numberOfReps" placeholder="Reps" />
  
            <label htmlFor="howMuchWeight" className="visuallyhidden">How much weight are you using</label>
            <input type="number" value={this.props.state.weight} onChange={this.props.handleChange} name="weight" id="howMuchWeight" placeholder="Weight" />
  
            <label htmlFor="restDuration" className="visuallyhidden">How long is your rest</label>
            <input type="number" value={this.props.state.rest} onChange={this.props.handleChange} name="rest" id="restDuration" placeholder="Rest" />
  
            <button onClick={this.props.handleAddExercise} className="addExerciseButton">Add exercise</button>
            <button type="submit">Create Card</button>
          </form>
          {
            this.props.state.tempObjects.map((obj, index) => {
              return (
                <div key={index} className="exerciseLine">
                  <p>{obj.exerciseName}</p>
                  <p>{obj.sets} x {obj.reps}</p>
                  <p>{obj.weight}lbs</p>
                  <p>{obj.rest}"</p>
                </div>
              )
            })
          }
        </div>
      </section>
      </Fragment>
    )
  }
}

export default FormAndCards;