import React, { useState } from "react";
// Since we don't HAVE to import React explicitly, we can also just type this:
// import { useState } from "react";

function AngryButton(props) {

  const [anger, setAnger] = useState();

  return (
    <button className="AngryButton">
      {/* If you have NOT reached the maximum */}
      <span>Don't click me too much! </span>
      {/* If you HAVE reached the maximum */}
      <span>Rawr!</span>
    </button>
  );
}

export default AngryButton;