import React, {Component, Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from './firebase';
import WorkoutCard from './WorkoutCard.js';
import Logs from './Logs';
import FormAndCards from './FormAndCards';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { FaCheckCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";

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
        isDisabled: false,
        isClicked: false,
      }
    };
  

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const cardArray = [];
      
      response.forEach(item => {
        cardArray.push({
          id: item.key,
          exercises: item.val().exercises,
          title: item.val().exercises[0].workoutPlanName,
          counter: item.val().counter,
        })
      })

      this.setState({
        userObjects: cardArray,
        tempObjects: [],
        workoutPlanName: '',
      })
    });
  }

  handleAddExercise = (e) => {
    e.preventDefault();

    if (this.state.workoutPlanName !== '' && this.state.exerciseName !== '' && this.state.sets !== '' && this.state.reps !== '' && this.state.weight !== '' && this.state.rest !== '') {
      const singleExerciseObj = {
        exerciseName: this.state.exerciseName,
        workoutPlanName: this.state.workoutPlanName,
        reps: this.state.reps,
        sets: this.state.sets,
        weight: this.state.weight,
        rest: this.state.rest,
        id: uuidv4(),
      }
  
      this.setState({
        tempObjects: [...this.state.tempObjects, singleExerciseObj],
        exerciseName: '',
        reps: '',
        sets: '',
        weight: '',
        rest: '',
        isDisabled: true,
      })
    } else {
      alert('Please fill out all fields before clicking "Add Exercise"!');
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const dbRef = firebase.database();

    if (this.state.tempObjects.length >= 1) {
      dbRef.ref().push({ exercises: this.state.tempObjects, counter: 0});
  
      this.setState({
        isDisabled: false,
      })
    } else {
      alert('Please add at least one exercise to your card!');
    }

  }

  showCheckmark = (obj) => {
    this.state.userObjects.map(userObject => {
      return (
        userObject.id === obj.id ?
          <IconContext.Provider value={{ className: 'checkmarkIcon' }}>
            <FaCheckCircle />
          </IconContext.Provider>
        : null
      )      
    })

    setTimeout(() => {
      this.setState({
        isClicked: false,
      })
    }, 3000)
  }

  updateCounter = (objInState) => {
    const updatedUserObjects = this.state.userObjects.map(userObject => {
      if(userObject.id === objInState.id) {
        firebase.database().ref(`${userObject.id}`).update({counter: userObject.counter + 1});

        // this.showCheckmark(userObject.id);

        return {
          ...userObject, 
          counter: userObject.counter += 1
        }
      }
      return userObject;
      // return (
      //   <p>Check</p>
      // )
    });
    
    this.setState({
      userObjects: updatedUserObjects,
      isClicked: true,
    }, () => {
        this.showCheckmark(objInState);
    })
    
    // setTimeout(() => {
    //   this.setState({
    //     isClicked: false,
    //   })
    // }, 3000)
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
  }


  render() {
    return (
      <Router basename="/">
        <Switch>
        <Route exact path="/trackYourWorkout" component={MainPage} />
          
          <Route path="/workouts/" render={() => {
            return (
              <Fragment>
                <FormAndCards 
                  state={this.state}
                  handleChange={this.handleChange}
                  handleAddExercise={this.handleAddExercise}
                  handleSubmit={this.handleSubmit}
                />
                <WorkoutCard
                  userObjects={this.state.userObjects}
                  isClicked={this.state.isClicked}
                  removeCard={this.removeCard}
                  updateCounter={this.updateCounter}
                />
              </Fragment>
            )}}
          />

          <Route path="/logs/" render={() => {
            return (
              <Logs
                userObjects={this.state.userObjects}
              />
            )}} 
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
