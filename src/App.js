import React, {Component, Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from './firebase';
import WorkoutCard from './Components/WorkoutCard.js';
import Logs from './Components/Logs';
import FormAndCards from './Components/FormAndCards';
import MainPage from './Components/MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        signUpEmail: '',
        signUpPassword: '',
        signInEmail: '',
        signInPassword: '',
        isSignedIn: false,
        currentUser: null,
        currentUserEmail: '',
      }
    };
  

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isSignedIn: true,
          currentUser: user.uid,
          currentUserEmail: user.email,
        }, () => {
            const dbRef = firebase.database().ref(`${this.state.currentUser}`);
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
        })

      } else {
        console.log('logged out');
        
      }
      
    })

    
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
      dbRef.ref(`${this.state.currentUser}`).push({ exercises: this.state.tempObjects, counter: 0, isLogged: false});
  
      this.setState({
        isDisabled: false,
      })
    } else {
      alert('Please add at least one exercise to your card!');
    }

  }

  removeCheckmark = (obj) => {
    setTimeout(() => {
      const updatedUserObjects = this.state.userObjects.map(userObject => {
        if (userObject.id === obj.id) {
          const id = userObject.id;

          firebase.database().ref(`${this.state.currentUser}/${id}`).update({isLogged: false})
          return {
            ...userObject,
            isLogged: false,
          }
        }
        return userObject;
      })
      this.setState({
        userObjects: updatedUserObjects,
      })
    }, 2000)
  }

  updateCounter = (objInState) => {
    const updatedUserObjects = this.state.userObjects.map(userObject => {
      const id = userObject.id;

      if(userObject.id === objInState.id) {
        firebase.database().ref(`${this.state.currentUser}/${id}`).update({counter: userObject.counter + 1, isLogged: true});

        return {
          ...userObject, 
          counter: userObject.counter += 1,
          isLogged: true
        }
      }
      return userObject;
    });
    
    this.setState({
      userObjects: updatedUserObjects,
    }, () => {
        this.removeCheckmark(objInState);
    })
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
    const dbRef = firebase.database().ref(`${this.state.currentUser}`);

    dbRef.child(card).remove();
  }

  handleSignUp = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword).then( (response) => {

      this.setState({
        signUpEmail: '',
        signUpPassword: '',
      })
    });
  }

  handleSignIn = (e) => {
    e.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(this.state.signInEmail, this.state.signInPassword).then(response => {
      
      this.setState({
        signInEmail: '',
        signInPassword: '',
      })
    })

  }

  handleLogOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();

    this.setState({
      isSignedIn: false,
      currentUserEmail: '',
      currentUser: null,
      userObjects: [],
    })
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
        <Route exact path="/trackYourWorkout" render={() => {
          return (
            <MainPage 
              state={this.state}
              handleChange={this.handleChange}
              handleSignUp={this.handleSignUp}
              handleLogOut={this.handleLogOut}
              handleSignIn={this.handleSignIn}
            />
          )
        }} />
          
          <Route path="/workouts/" render={() => {
            return (
              <Fragment>
                <FormAndCards 
                  state={this.state}
                  handleChange={this.handleChange}
                  handleAddExercise={this.handleAddExercise}
                  handleSubmit={this.handleSubmit}
                  handleLogOut={this.handleLogOut}
                />
                <WorkoutCard
                  userObjects={this.state.userObjects}
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
                handleLogOut={this.handleLogOut}
                currentUserEmail={this.state.currentUserEmail}
              />
            )}} 
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
