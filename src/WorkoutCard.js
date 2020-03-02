import React, {Component} from 'react';

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
                <button onClick={() => { this.props.removeCard(obj.id) }}>Delete Card</button>
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