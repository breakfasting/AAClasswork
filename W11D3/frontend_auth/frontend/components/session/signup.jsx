import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    const { createNewUser, history } = this.props;
    e.preventDefault();
    createNewUser(this.state)
      .then(() => history.push('./chirps'));
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <label htmlFor="username">
            Username:
            <input type="text" value={username} id="username" onChange={this.handleInput('username')} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" value={email} id="email" onChange={this.handleInput('email')} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" value={password} id="password" onChange={this.handleInput('password')} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
