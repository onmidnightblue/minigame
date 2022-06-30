import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userChoice, setUserChoice] = useState("?");
  const [result, setResult] = useState("Press the button");
  const hands = ["rock", "scissors", "paper"];
  const ref = useRef(null);

  // timer
  let i = 0;
  const timer = () => {
    return setInterval(() => {
      setComputerChoice(hands[i++]);
      if (i === hands.length) {
        i = 0;
      }
    }, 1000);
  };

  useEffect(() => {
    ref.current = timer();
    return () => clearInterval(ref.current);
  }, []);

  // user
  const userHandler = (value) => {
    setUserChoice(value);
    randomComputerChoice();
    clearInterval(ref.current);
  };

  // computer
  const randomComputerChoice = () => {
    const randomChoice = hands[Math.floor(Math.random() * hands.length)];
    setComputerChoice(randomChoice);
  };

  // result
  useEffect(() => {
    const battleChoice = computerChoice + userChoice;
    const userWin = ["rockpaper", "scissorsrock", "paperscissors"];
    const draw = ["rockrock", "scissorsscissors", "paperpaper"];
    const userlose = ["paperrock", "rockscissors", "scissorspaper"];
    if (userWin.includes(battleChoice)) {
      return setResult("you win");
    }
    if (draw.includes(battleChoice)) {
      return setResult("draw");
    }
    if (userlose.includes(battleChoice)) {
      return setResult("you lose");
    }
  }, [userChoice, computerChoice]);

  return (
    <>
      <div>
        <h3>computer's choice</h3>
        <p>{computerChoice}</p>
      </div>
      <div>
        <h3>user's choice</h3>
        <p>{userChoice}</p>
      </div>
      <div>
        {hands.map((hand, index) => (
          <button key={index} onClick={() => userHandler(hand)}>
            {hand}
          </button>
        ))}
      </div>
      <br />
      <div>result: {result}</div>
    </>
  );
}

export default App;
