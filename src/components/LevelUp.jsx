import React from "react";

function LevelUp({ level, currentExp, requiredExp }) {
  return (
    <>
      <div>{level}</div>
      <div className="progressbarWrapper">
        <div className="progressbar " style={{ width: `${currentExp}%` }}>
          {currentExp}/{requiredExp}
        </div>
      </div>
    </>
  );
}

export default LevelUp;
