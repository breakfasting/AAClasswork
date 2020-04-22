import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    const { login, history } = this.props;
    e.preventDefault();
    login(this.state)
      .then(() => history.push('./chirps'));
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="session-form">
        <h2>Sign In!</h2>
        <form>
          <label htmlFor="username">
            Username:
            <input type="text" value={username} id="username" onChange={this.handleInput('username')} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" value={password} id="password" onChange={this.handleInput('password')} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    );
  }
}

export default Signin;
