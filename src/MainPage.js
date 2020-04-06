import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

  render() {
    return (
      <div className="flexContainer">
        {
          this.props.state.isSignedIn ?
            <div className="mainPage">
              <h1>Track Your Workouts</h1>
              <div>
                <p>Keep track of all your workout plans! Create as many cards as you need, and see how many times you've completed each plan.</p>
                <p>Click on "Create/View Workout Plan" to begin. If you want to see how many times you've completed a plan, click on "See Logged Workout Plans".</p>
              </div>
              <Link to="/workouts/" className="mainPageLinks">Create/View Workout Plan</Link>
              <Link to="/logs/" className="mainPageLinks">See Logged Workout Plans</Link>
              <button onClick={this.props.handleLogOut}>Log Out</button>
            </div>
          : 
            <Fragment>
            <div className="signUpContainer">
              <form onSubmit={this.props.handleSignUp}>
                <h2>Sign Up</h2>
                <input type="email" placeholder="Email" value={this.props.state.signUpEmail} name="signUpEmail" onChange={this.props.handleChange} />
                <input type="password" placeholder="Password" value={this.props.state.signUpPassword} name="signUpPassword" onChange={this.props.handleChange} />
                <button type="submit">Sign Up</button>
              </form>
            </div>

            <div className="signInContainer">
              <h2>Sign In</h2>
              <form onSubmit={this.props.handleSignIn}>
                <input type="email" placeholder="Email" value={this.props.state.signInEmail} name="signInEmail" onChange={this.props.handleChange} />
                <input type="password" placeholder="Password" value={this.props.state.signInPassword} name="signInPassword" onChange={this.props.handleChange} />
                <button type="submit">Sign In</button>
              </form>
            </div>
            </Fragment>
        }
      </div>
    )
  }
}

export default MainPage;