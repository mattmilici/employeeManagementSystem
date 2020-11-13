import React from "react";

function Title(props) {
  return <h1 className="title text-center bg-dark py-5 text-white">{props.children}</h1>;
}

export default Title;