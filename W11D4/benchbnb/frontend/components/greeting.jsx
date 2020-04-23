import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const greetingMessage = (currentUser)
    ? (
      <div>
        <p>
          Welcome,
          {currentUser.username}
        </p>
        <button type="button" onClick={logout}>Log Out</button>
      </div>
    )
    : (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  return (
    <div>
      {greetingMessage}
    </div>
  );
};

export default Greeting;
