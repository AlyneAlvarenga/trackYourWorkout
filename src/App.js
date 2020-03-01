import React, {Component, Fragment} from 'react';
import './App.css';
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

      // here we use Firebase's .val() method to parse our database info the way we want it
      // console.log(response.val());
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
    }
    
    this.setState({
      tempObjects: [...this.state.tempObjects, singleExerciseObj],
      exerciseName: '',
      reps: '',
      sets: '',
      weight: '',
      rest: '',
    }, () => {
      console.log('this is temp state', this.state);
      
    })
    //TODO: maybe disable the workout plan name input so that it's not changed?
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const dbRef = firebase.database().ref();
    
    const thisKey = dbRef.push(this.state.tempObjects).key;
    console.log('the unique key', thisKey);
    
    const newDbRef = firebase.database().ref(thisKey);
    console.log(newDbRef);
    
    
    dbRef.on('value', (response) => {
      const data = response.val();

      console.log('data from firebase i hope is one obj', data);
      
      // let newState = [];
      // newState.push(data);

      // const newObj = this.state.userObjects.concat(data);

      this.setState({
        userObjects: [...this.state.userObjects, data],
        // userObjects: newObj,
        tempObjects: [],
        workoutPlanName: '',
      }, () => {
        console.log('this is all of state after submit', this.state);
        
      })
      

        // newState.push({
        //   exerciseName: data[key].exerciseName,
        //   reps: data[key].reps,
        //   rest: data[key].rest,
        //   sets: data[key].sets,
        //   weight: data[key].weight,
        //   workoutPlanName: data[key].workoutPlanName,
        //   key: key,
        // })

      // this.setState({
      //   userObjects: newState,
      //   workoutPlanName: '',
      //   exerciseName: '',
      //   reps: '',
      //   sets: '',
      //   weight: '',
      //   rest: '',
      // })
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
