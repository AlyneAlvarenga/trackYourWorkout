import React, {Component} from 'react';

class WorkoutCard extends Component {
  render() {
    return (
      <div className="workoutCards">
        {/* {this.props.userObjects.map((obj) => {
          return (
            <div key={obj.key} id={obj.key}>
              <h2>{obj.workoutPlanName}</h2>
              <p>{obj.exerciseName}</p>
              <p>{obj.sets}</p>
              <p>{obj.reps}</p>
              <p>{obj.weight}</p>
              <p>{obj.rest}</p>
              <button onClick={() => { this.props.removeCard(obj.key) }}>Delete Card</button>
            </div>
          )
        })} */}
        { 
          this.props.userObjects !== [] ?
          this.props.userObjects.map(obj => {
            const key = Object.keys(obj)[0];
            const arrayOfValues = Object.values(obj)[0];
            
            return (
              <div key={key} id={key} className="singleCard">
                <h2>{arrayOfValues[0].workoutPlanName}</h2>
                {
                  arrayOfValues.map((smallobj, index) => {
                    return (
                      <div key={index} className="exercisesInCard">
                        <h3>{smallobj.exerciseName}</h3>
                        <p>{smallobj.sets} x {smallobj.reps}</p>
                        <p>{smallobj.weight}lbs</p>
                        <p>{smallobj.rest}"</p>
                      </div>
                    )
                  })
                }
                <button onClick={() => { this.props.removeCard(key) }}>Delete Card</button>
              </div>
            )
          })
          : <p>Create some cards!</p>
        }
      </div>
    )
  }
}

export default WorkoutCard;