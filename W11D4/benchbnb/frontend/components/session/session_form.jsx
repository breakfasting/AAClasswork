import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, history } = this.props;
    processForm({ ...this.state })
      .then(() => history.push('/'));
  }

  render() {
    const { username, password } = this.state;
    const { formType, errors } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formType}</h1>
        <ul className="errors">
          {errors.map((error) => <li>{error}</li>)}
        </ul>
        <label htmlFor="username">
          <input type="text" id="username" onChange={this.handleChange('username')} value={username} />
        </label>
        <label htmlFor="password">
          <input type="password" id="password" onChange={this.handleChange('password')} value={password} />
        </label>
        <button type="submit">{formType}</button>
      </form>
    );
  }
}

export default SessionForm;
