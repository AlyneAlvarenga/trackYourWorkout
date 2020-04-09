import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class MainPage extends Component {

  render() {
    return (
      <main>
        {
          this.props.state.isSignedIn && this.props.state.currentUser ?
          <Fragment>
            <Header 
              currentUserEmail={this.props.state.currentUserEmail} 
              handleLogOut={this.props.handleLogOut}
            />
            <div className="flexContainerSignedIn">
              <div className="mainPage">
                <h1>Track Your Workouts</h1>
                <div>
                  <p>Keep track of all your workout plans! Create multiple cards with as many exercises as you need. You can keep track of how many times you've completed the plan in each card, so you know when it's time to change your routine.</p>
                  <p>Click on "Create/View Workout Plan" to create your first card. To see how many times you've completed a specific plan, click on "See Logged Workout Plans".</p>
                </div>
                <Link to="/workouts/" className="mainPageLinks">Create/View Workout Plan</Link>
                <Link to="/logs/" className="mainPageLinks">See Logged Workout Plans</Link>
              </div>
            </div>
          </Fragment>
          : 
            <div className="flexContainerLoggedOut">
              <main className="mainPage">
                <h1>Track Your Workouts</h1>
                <p>Keep track of all your workout plans! Create multiple cards with as many exercises as you need. You can keep track of how many times you've completed the plan in each card, so you know when it's time to change your routine.</p>
                <p>Log in or sign up to get started.</p>
                <div className="formPage">
                  <div className="signUpContainer">
                    <h2>Sign Up</h2>
                    <form onSubmit={this.props.handleSignUp} className="signUpSignInForm">
                      <label htmlFor="signUpEmail" className="visuallyhidden">Email address</label>
                      <input id="signUpEmail" type="email" placeholder="Email" value={this.props.state.signUpEmail} name="signUpEmail" onChange={this.props.handleChange} required />
    
                      <label htmlFor="signUpPassword" className="visuallyhidden">Password</label>
                      <input id="signUpPassword" type="password" placeholder="Password" value={this.props.state.signUpPassword} name="signUpPassword" onChange={this.props.handleChange} required />
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
    
                  <div className="signInContainer">
                    <h2>Sign In</h2>
                    <form onSubmit={this.props.handleSignIn} className="signUpSignInForm">
                      <label htmlFor="signInEmail" className="visuallyhidden">Email address</label>
                      <input id="signInEmail" type="email" placeholder="Email" value={this.props.state.signInEmail} name="signInEmail" onChange={this.props.handleChange} required />
    
                      <label htmlFor="signInPassword" className="visuallyhidden">Password</label>
                      <input id="signInPassword" type="password" placeholder="Password" value={this.props.state.signInPassword} name="signInPassword" onChange={this.props.handleChange} required />
                      <button type="submit">Sign In</button>
                    </form>
                  </div>
  
                </div> {/* /.formPage */}
              </main>
            </div> //.flexContainer
        }
      </main>
    )
  }
}

export default MainPage;