import React, { useEffect, useState } from "react";

const Stage = (props) => {
  const [letters, setLetters] = useState([]);

  // random
  useEffect(() => {
    const randomLetter = Math.floor(Math.random() * props.stage);
    const letterList = [];
    for (let i = 0; i < props.stage; i++) {
      if (i === randomLetter) {
        letterList.push("먽");
      } else {
        letterList.push("멵");
      }
    }
    setLetters(letterList);
  }, [props.stage]);

  // find letter result
  const findLetterHandler = (event) => {
    const content = event.target.textContent;
    if (content === "먽") {
      props.showNextStepButton();
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          width: "100px",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: "14px",
        }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              cursor: "pointer",
            }}
            onClick={findLetterHandler}
          >
            {letter}
          </span>
        ))}
      </div>
      <br />
      {props.isNextStage && (
        <button onClick={props.nextStepHendler}>next</button>
      )}
    </>
  );
};

export default Stage;
