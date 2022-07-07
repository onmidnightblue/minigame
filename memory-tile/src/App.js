import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [computerSelect, setComputerSelect] = useState([]);
  const [userSelect, setUserSelect] = useState([]);

  // tiles
  const tiles = [];
  let tileLayout;
  const tilesLength = 9;
  for (let i = 0; i < tilesLength; i++) {
    tiles.push(i);
  }

  // random number
  const randomNumber = () => {
    return Math.floor(Math.random() * tilesLength);
  };

  // computer's pick
  useEffect(() => {
    const newComputersTile = randomNumber();
    setComputerSelect([...computerSelect, newComputersTile]);
  }, []);

  // user's pick
  const getIndexHandler = (event) => {
    const userSelectTile = event.target.id;
    setUserSelect([...userSelect, +userSelectTile]);
  };

  console.log(computerSelect, userSelect);

  // show computer's pick....
  useEffect(() => {
    for (let i of computerSelect) {
      for (let k of tiles) {
        if (i === k) {
          // code
        }
      }
    }
  }, [computerSelect, tiles, tileLayout]);

  // next stage
  if (computerSelect.length === userSelect.length) {
    const setNext =
      JSON.stringify(computerSelect) === JSON.stringify(userSelect);
    if (setNext) {
      // code
    }
    if (!setNext) {
      // code
    }
  }

  // tiles map
  tileLayout = tiles.map((tile, index) => (
    <Styles.Tile
      key={index}
      id={index}
      className={""}
      onClick={getIndexHandler}
    />
  ));

  return <Styles.Wrap>{tileLayout}</Styles.Wrap>;
}

// styled
const Styles = {
  Wrap: styled.div`
    display: grid;
    height: 300px;
    max-width: 400px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    gap: 10px;
  `,
  Tile: styled.button`
    border: 1px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &:active,
    &.lightOn {
      background-color: #444;
    }
  `,
};

export default App;
