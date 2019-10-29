import React from "react";
import PropTypes from "prop-types";

const CharacterItems = ({ user: { name, birth_year, homeworld } }) => {
  return (
    <div className='card text-center'>
      <h3>{name}</h3>
      <h3>{birth_year}</h3>
      <div>
        <a href={homeworld} className="btn btn-dark btn-sm my-1">Planet</a>
      </div>
    </div>
  );
};

CharacterItems.propTypes={
    user: PropTypes.object.isRequired
}

export default CharacterItems;
