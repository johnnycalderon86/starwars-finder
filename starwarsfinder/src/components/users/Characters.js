import React from "react";

import CharacterItems from "./CharacterItems";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Characters = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <CharacterItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Characters.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3, 1fr)",
    gridGap:"1rem"
}


export default Characters;
