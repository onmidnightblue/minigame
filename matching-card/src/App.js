import React, { useEffect, useState } from "react";
import styled from "styled-components";

// data
const cards = [
  {
    image: "🦢",
    isOpen: false,
  },
  {
    image: "🐳",
    isOpen: false,
  },
  {
    image: "🐢",
    isOpen: false,
  },
  {
    image: "🐇",
    isOpen: false,
  },
  {
    image: "🌻",
    isOpen: false,
  },
  {
    image: "🌼",
    isOpen: false,
  },
];

const cloneCards = cards.concat(JSON.parse(JSON.stringify(cards)));
const shakeCards = cloneCards.sort(() => Math.random() - 0.5);

const App = () => {
  const [firstSelectCard, setfirstSelectCard] = useState("");
  const [secondSelectCard, setSecondSelectCard] = useState("");
  const [count, setCount] = useState(0);

  // flip, select card
  const flipHandler = (event) => {
    setCount(count + 1);
    shakeCards[event.target.id].isOpen = true;

    if (count === 0) {
      setfirstSelectCard(event.target.textContent);
      return;
    }
    if (count === 1) {
      setSecondSelectCard(event.target.textContent);
      return;
    }
  };

  // select result
  useEffect(() => {
    if (count === 2) {
      if (firstSelectCard === secondSelectCard) {
        console.log("success");
      }
      if (firstSelectCard !== secondSelectCard) {
        console.log("fail");
      }
      setCount(0);
      setfirstSelectCard(null);
      setSecondSelectCard(null);
    }
  }, [count, firstSelectCard, secondSelectCard]);
  console.log(count, firstSelectCard, secondSelectCard);

  return (
    <Styles.Wrap>
      {shakeCards.map((card, index) => (
        <Styles.Card key={index} id={index} onClick={flipHandler}>
          {card.isOpen ? card.image : ""}
        </Styles.Card>
      ))}
    </Styles.Wrap>
  );
};

// styled
const Styles = {
  Wrap: styled.div`
    display: grid;
    height: 400px;
    max-width: 400px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    gap: 10px;
  `,
  Card: styled.div`
    border: 1px solid #444;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
};

export default App;
