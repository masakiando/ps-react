import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block stying */
function Label({htmlFor, label, required}) {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> * </span> }
    </label>
  );
}

Label.propTypes = {
  /** HTML ID for assoceated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterickk after */
  required: PropTypes.bool
}

export default Label;
