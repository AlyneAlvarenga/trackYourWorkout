import React, {Component} from 'react';
import { FaRegTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

class WorkoutCard extends Component {

  render() {
    //map over user objects array. each index holds an object
    //access the unique key under obj.id
    //access the exercises key which holds an array of exercises
    //map over the exercises array to display all exercises on the page

    return (
      <div className="workoutCards">
        { 
          this.props.userObjects.map(obj => {
            return (
              <div key={obj.id} id={obj.id} className="singleCard">
                <h2>{obj.title}</h2>
                {
                  obj.exercises.map(exercise => {
                    return (
                      <div key={exercise.id} className="exercisesInCard">
                        <h3>{exercise.exerciseName}</h3>
                        <p>{exercise.sets} x {exercise.reps}</p>
                        <p>{exercise.weight}lbs</p>
                        <p>{exercise.rest}"</p>
                      </div>
                    )
                  })
                }
                <IconContext.Provider value={{ className: 'deleteIcon' }}><button className="deleteButton" onClick={() => { this.props.removeCard(obj.id) }}><FaRegTimesCircle /></button></IconContext.Provider>
                <button className="logButton" onClick={() => { this.props.updateCounter(obj) }}>Log this workout</button>
                {
                  obj.isLogged ?
                    <div className="checkmarkIcon">
                      <IconContext.Provider value={{ className: 'checkmarkIcon' }}>
                        <FaCheckCircle />
                      </IconContext.Provider>
                    </div>
                    : null
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WorkoutCard;