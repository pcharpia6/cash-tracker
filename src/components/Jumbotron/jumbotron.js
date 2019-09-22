import React from "react";

function Jumbotron({children}) {
  return (
    <div className="jumbotron text-center">
      <h1> jumbotron</h1>
    {children}
    </div>
  );
}

export default Jumbotron;
