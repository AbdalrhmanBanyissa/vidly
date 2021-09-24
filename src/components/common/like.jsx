import React from "react";

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

export default Like;

// <i class="fa fa-heart-o" aria-hidden="true"></i>
