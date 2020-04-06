import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

  render() {
    return (
      <div className="flexContainer">
        <div className="signUpContainer">
          <form onSubmit={this.props.handleSignUp}>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" value={this.props.state.signUpEmail} name="email" onChange={this.props.handleChange}/>
            <input type="password" placeholder="Password" value={this.props.state.signUpPassword} name="password" onChange={this.props.handleChange}/>
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={this.props.handleLogOut}>Log Out</button>
        </div>
        <div className="signInContainer">
          <h2>Sign In</h2>
          <form>
            <input type="email" placeholder="Email" value={this.props.state.email} name="email" onChange={this.props.handleChange} />
            <input type="password" placeholder="Password" value={this.props.state.password} name="password" onChange={this.props.handleChange} />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="mainPage">
          <h1>Track Your Workouts</h1>
          <div>
            <p>Keep track of all your workout plans! Create as many cards as you need, and see how many times you've completed each plan.</p>
            <p>Click on "Create/View Workout Plan" to begin. If you want to see how many times you've completed a plan, click on "See Logged Workout Plans".</p>
          </div>
          <Link to="/workouts/" className="mainPageLinks">Create/View Workout Plan</Link>
          <Link to="/logs/" className="mainPageLinks">See Logged Workout Plans</Link>
        </div>
      </div>
    )
  }
}

export default MainPage;