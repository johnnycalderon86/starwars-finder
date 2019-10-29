//CREATING A NAVBAR

//IMPORTING REACT
import React from "react";

//IMPORTING PROPTYPES
import PropTypes from "prop-types";

//Arrow function component
const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Star Wars",
  icon: "fab fa-old-republic"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
