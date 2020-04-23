import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './MainPage.css';

const MainPage = (props) => {
  return (
    <main>
      {
        props.state.isSignedIn && props.state.currentUser ?
        <Fragment>
          <Header 
            currentUserEmail={props.state.currentUserEmail} 
            handleLogOut={props.handleLogOut}
          />
          <div className="MainPage-signedInContainer">
            <div className="MainPage">
              <h1>Track Your Workouts</h1>
              <div>
                <p>Keep track of all your workout plans! Create multiple cards with as many exercises as you need. You can keep track of how many times you've completed the plan in each card, so you know when it's time to change your routine.</p>
                <p>Click on "Create/View Workout Plan" to create your first card. To see how many times you've completed a specific plan, click on "See Logged Workout Plans".</p>
              </div>
              <Link to="/workouts/" className="MainPage-links">Create/View Workout Plan</Link>
              <Link to="/logs/" className="MainPage-links">See Logged Workout Plans</Link>
            </div>
          </div>
        </Fragment>
        : 
          <div className="MainPage-loggedOutContainer">
            <section className="MainPage">
              <h1>Track Your Workouts</h1>
              <p>Keep track of all your workout plans! Create multiple cards with as many exercises as you need. You can keep track of how many times you've completed the plan in each card, so you know when it's time to change your routine.</p>
              <p>Log in or sign up to get started. To log in as a guest, <button className="MainPage-guestLogInButton" onClick={props.handleAnonSignIn}>click here</button>.</p>
              <div className="MainPage-formsContainer">
                <div className="MainPage-signUpFormContainer">
                  <h2>Sign Up</h2>
                  <form onSubmit={props.handleSignUp} className="MainPage-form">
                    <label htmlFor="signUpEmail" className="visuallyhidden">Email address</label>
                    <input id="signUpEmail" type="email" placeholder="Email" value={props.state.signUpEmail} name="signUpEmail" onChange={props.handleChange} required />
  
                    <label htmlFor="signUpPassword" className="visuallyhidden">Password</label>
                    <input id="signUpPassword" type="password" placeholder="Password" value={props.state.signUpPassword} name="signUpPassword" onChange={props.handleChange} required />
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
  
                <div className="MainPage-signInFormContainer">
                  <h2>Sign In</h2>
                  <form onSubmit={props.handleSignIn} className="MainPage-form">
                    <label htmlFor="signInEmail" className="visuallyhidden">Email address</label>
                    <input id="signInEmail" type="email" placeholder="Email" value={props.state.signInEmail} name="signInEmail" onChange={props.handleChange} required />
  
                    <label htmlFor="signInPassword" className="visuallyhidden">Password</label>
                    <input id="signInPassword" type="password" placeholder="Password" value={props.state.signInPassword} name="signInPassword" onChange={props.handleChange} required />
                    <button type="submit">Sign In</button>
                  </form>
                </div>

              </div> {/* /.MainPage-formsContainer */}
            </section>
          </div> //.MainPage-loggedOutContainer
      }
    </main>
  )
}

export default MainPage;