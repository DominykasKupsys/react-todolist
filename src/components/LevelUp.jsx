import React from "react";

function LevelUp({ level, currentExp, requiredExp }) {
  return (
    <>
      <div>
        <p>level {level}</p>
      </div>
      <div className="progressbar " style={{ width: `${currentExp}%` }}>
        {currentExp}/{requiredExp}
      </div>
    </>
  );
}

export default LevelUp;
