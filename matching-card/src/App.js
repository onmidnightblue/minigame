import React, { useEffect, useState } from "react";
import styled from "styled-components";

// initial data
const initialCards = [
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

// clone & shake data
const cloneCards = initialCards.concat(
  JSON.parse(JSON.stringify(initialCards))
);
const shakeCards = cloneCards.sort(() => Math.random() - 0.5);

const App = () => {
  const [cards, setCards] = useState(shakeCards);
  const [firstSelectCard, setfirstSelectCard] = useState("");
  const [secondSelectCard, setSecondSelectCard] = useState("");
  const [count, setCount] = useState(0);

  // start all open
  useEffect(() => {
    setCards((prevCardsState) => {
      const copy = [...prevCardsState];
      copy.forEach((card) => {
        card.isOpen = true;
      });
      return copy;
    });
    const closeCardTimer = setTimeout(() => {
      setCards((prevCardsState) => {
        const copy = [...prevCardsState];
        copy.forEach((card) => {
          card.isOpen = false;
        });
        return copy;
      });
    }, 3000);
    return () => {
      clearTimeout(closeCardTimer);
    };
  }, []);

  // user select card
  const flipHandler = (event) => {
    const selectCardId = event.target.id;
    const selectCard = cards[selectCardId];

    // already open
    if (selectCard.isOpen === true) {
      return;
    }

    // count++
    setCount(count + 1);
    if (count === 0) {
      selectCard.isOpen = true;
      setfirstSelectCard(selectCardId);
      return;
    }
    if (count === 1) {
      selectCard.isOpen = true;
      setSecondSelectCard(selectCardId);
      return;
    }
  };

  // delay card open
  const delayOpen = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  // result
  useEffect(() => {
    // get select card image
    const firstSelectCardImage = cards[firstSelectCard]?.image;
    const secondSelectCardImage = cards[secondSelectCard]?.image;

    if (count === 2) {
      if (firstSelectCardImage !== secondSelectCardImage) {
        delayOpen().then(() => {
          cards[secondSelectCard].isOpen = false;
          cards[firstSelectCard].isOpen = false;

          // reset
          setfirstSelectCard(null);
          setSecondSelectCard(null);
        });
      }
      setCount(0);
    }
  }, [cards, count, firstSelectCard, secondSelectCard]);

  return (
    <Styles.Wrap>
      {cards.map((card, index) => (
        <Styles.Card key={index} id={index} onClick={flipHandler}>
          {card.isOpen ? card.image : "open"}
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
    &:hover {
      border: 2px solid #444;
    }
  `,
};

export default App;
