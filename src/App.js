import React, {Component, Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';import './App.css';
import firebase from './firebase';
import WorkoutCard from './WorkoutCard.js';


class App extends Component {
  constructor() {
    super(); 
    
    this.state = {
        userObjects: [],
        tempObjects: [],
        exerciseName: '',
        workoutPlanName: '',
        reps: '',
        sets: '',
        weight: '',
        rest: '',
      }
    };
  

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      // console.log('what is in firebase now', response.val());
      // const data = response.val();

      // for (let key in data) {
      //   this.state.userObjects.push(key);
      //   console.log(key);
        
      // }
    });
  }

  handleAddExercise = (e) => {
    e.preventDefault();

    const singleExerciseObj = {
      exerciseName: this.state.exerciseName,
      workoutPlanName: this.state.workoutPlanName,
      reps: this.state.reps,
      sets: this.state.sets,
      weight: this.state.weight,
      rest: this.state.rest,
      id: uuidv4()
    }
    
    this.setState({
      tempObjects: [...this.state.tempObjects, singleExerciseObj],
      exerciseName: '',
      reps: '',
      sets: '',
      weight: '',
      rest: '',
    }, () => {
      // console.log('this is temp state', this.state);
      
    })
    //TODO: maybe disable the workout plan name input so that it's not changed?
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const dbRef = firebase.database();
    
    dbRef.ref().push(this.state.tempObjects);

    dbRef.ref().on('value', (response) => {

      const cardArray = [];

      response.forEach(item => {
        
        const singleObj = item.val()[0];
        const getTheTitle = singleObj.workoutPlanName;

        cardArray.push({
          id: item.key,
          exercises: item.val(),
          title: getTheTitle,
        })
      })
    
      this.setState({
        userObjects: cardArray,
        tempObjects: [],
        workoutPlanName: '',
      })
      
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  removeCard = (card) => {
    const dbRef = firebase.database().ref();

    dbRef.child(card).remove();
    console.log('this is state after removing card', this.state);
    
  }

  render() {
    return (
      <Fragment>
      <div className="App">
        <h1>Workout Plans</h1>
        <div className="createCard">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="workoutPlan" className="workoutPlanLabel">Name of workout plan</label>
            <input type="text" value={this.state.workoutPlanName} onChange={this.handleChange} name="workoutPlanName" placeholder="Workout plan" id="workoutPlan"/>
  
            <label htmlFor="exercise" className="visuallyhidden">Name of the exercise</label>
            <input type="text" value={this.state.exerciseName} onChange={this.handleChange} name="exerciseName" placeholder="Name of the exercise" id="exercise" />
  
            <label htmlFor="numberOfSets" className="visuallyhidden">Number of sets</label>
            <input type="number" value={this.state.sets} onChange={this.handleChange} name="sets" id="numberOfSets" placeholder="Sets"/>
  
            <label htmlFor="numberOfReps" className="visuallyhidden">Number of reps</label>
            <input type="number" value={this.state.reps} onChange={this.handleChange} name="reps" id="numberOfReps" placeholder="Reps"/>
  
            <label htmlFor="howMuchWeight" className="visuallyhidden">How much weight are you using</label>
            <input type="number" value={this.state.weight} onChange={this.handleChange} name="weight" id="howMuchWeight" placeholder="Weight"/>
  
            <label htmlFor="restDuration" className="visuallyhidden">How long is your rest</label>
            <input type="number" value={this.state.rest} onChange={this.handleChange} name="rest" id="restDuration" placeholder="Rest"/>
  
            <button onClick={this.handleAddExercise} className="addExerciseButton">Add another exercise</button>
            <button type="submit">Create Card</button>
          </form>
          {
            this.state.tempObjects.map((obj, index) => {
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
      <WorkoutCard 
        userObjects={this.state.userObjects}
        removeCard={this.removeCard}
      />
      </Fragment>
    );
  }
}

export default App;
