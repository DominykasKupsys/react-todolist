import React from "react";

function LevelUp({ level, currentExp, requiredExp }) {
  const ProgressBar = Math.round((currentExp / requiredExp) * 100);
  console.log(ProgressBar);
  return (
    <>
      <div>
        <p>level {level}</p>
        <p>
          progress {currentExp}/{requiredExp}
        </p>
      </div>
      <div className="progressbar " style={{ width: `${ProgressBar}%` }}></div>
    </>
  );
}

export default LevelUp;
