import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class MainPage extends Component {

  render() {
    return (
      <div className="flexContainer">
        {
          this.props.state.isSignedIn ?
            <Fragment>
              <Header 
                currentUserEmail={this.props.state.currentUserEmail} 
                handleLogOut={this.props.handleLogOut}
              />
              <div className="mainPage">
                <h1>Track Your Workouts</h1>
                <div>
                  <p>Keep track of all your workout plans! Create as many cards as you need, and see how many times you've completed each plan.</p>
                  <p>Click on "Create/View Workout Plan" to begin. If you want to see how many times you've completed a plan, click on "See Logged Workout Plans".</p>
                </div>
                <Link to="/workouts/" className="mainPageLinks">Create/View Workout Plan</Link>
                <Link to="/logs/" className="mainPageLinks">See Logged Workout Plans</Link>
                {/* <div className="logOutContainer">
                  <h3>You are logged in as {this.props.state.currentUserEmail}</h3>
                  <button onClick={this.props.handleLogOut}>Log Out</button>
                </div> */}
              </div>
            </Fragment>
          : 
            <div className="mainPage">
              <h1>Track Your Workouts</h1>
              <p>Keep track of all your workout plans! Create as many cards as you need, and see how many times you've completed each plan.</p>
              <p>Log in or sign up to get started.</p>
              <div className="formPage">
                <div className="signUpContainer">
                  <h2>Sign Up</h2>
                  <form onSubmit={this.props.handleSignUp} className="signUpSignInForm">
                    <label htmlFor="signUpEmail" className="visuallyhidden">Email address</label>
                    <input id="signUpEmail" type="email" placeholder="Email" value={this.props.state.signUpEmail} name="signUpEmail" onChange={this.props.handleChange} />
  
                    <label htmlFor="signUpPassword" className="visuallyhidden">Password</label>
                    <input id="signUpPassword" type="password" placeholder="Password" value={this.props.state.signUpPassword} name="signUpPassword" onChange={this.props.handleChange} />
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
  
                <div className="signInContainer">
                  <h2>Sign In</h2>
                  <form onSubmit={this.props.handleSignIn} className="signUpSignInForm">
                    <label htmlFor="signInEmail" className="visuallyhidden">Email address</label>
                    <input id="signInEmail" type="email" placeholder="Email" value={this.props.state.signInEmail} name="signInEmail" onChange={this.props.handleChange} />
  
                    <label htmlFor="signInPassword" className="visuallyhidden">Password</label>
                    <input id="signInPassword" type="password" placeholder="Password" value={this.props.state.signInPassword} name="signInPassword" onChange={this.props.handleChange} />
                    <button type="submit">Sign In</button>
                  </form>
                </div>

              </div>
              {/* /.formPage */}
            </div>
            // /.mainPage
        }
      </div>
    )
  }
}

export default MainPage;