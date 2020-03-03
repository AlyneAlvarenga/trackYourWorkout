import React, {Component} from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
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
                {/* <h3>COUNTER: {obj.counter}</h3> */}
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
                <button onClick={() => { this.props.updateCounter(obj) }}>Log this workout</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WorkoutCard;