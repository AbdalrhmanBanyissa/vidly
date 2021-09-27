import React from "react";
import PropTypes from "prop-types";

function Like({ liked, onLikeMovie }) {
  return (
    <i
      onClick={onLikeMovie}
      style={{ cursor: "pointer" }}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
    ></i>
  );
}

Like.propTypes = {
  onLikeMovie: PropTypes.func.isRequired,
};

export default Like;
