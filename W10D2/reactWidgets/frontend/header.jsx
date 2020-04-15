import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ fn, title, id }) => (
  <h1 onClick={() => fn(id)}>
    {title}
  </h1>
);

Header.propTypes = {
  fn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Header;
