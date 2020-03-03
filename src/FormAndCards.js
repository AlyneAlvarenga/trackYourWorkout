import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";

class FormAndCards extends Component {


  render() {
    return(
      <Fragment>
        <div className="backToHomeWrapper">
          <IconContext.Provider value={{ className: 'reactIcons' }}>
            <Link to="/" className="backToHomeLink"><FaArrowCircleLeft /> Back</Link>
          </IconContext.Provider>
        </div>
      <div className="wrapper">
        <h1>Workout Plans</h1>
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
  
            <button onClick={this.props.handleAddExercise} className="addExerciseButton">Add another exercise</button>
            <button type="submit">Create Card</button>
          </form>
          {
            this.props.state.tempObjects.map((obj, index) => {
              return (
                <div key={index} className="exerciseLine">
                  <p>{obj.exerciseName}</p>
                  <p>{obj.sets}</p>
                  <p>{obj.reps}</p>
                  <p>{obj.weight}</p>
                  <p>{obj.rest}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      </Fragment>
    )
  }
}

export default FormAndCards;