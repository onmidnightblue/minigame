import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [computerSelect, setComputerSelect] = useState([]);
  const [userSelect, setUserSelect] = useState([]);
  const [lightOn, setLightOn] = useState(false);

  // tiles
  const tiles = [];
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

  console.log("computer: ", computerSelect);
  console.log("user: ", userSelect);

  // show computer's pick....

  // computerSelect에서 요소 하나씩 꺼내서 돌리기
  useEffect(() => {
    for (let i of computerSelect) {
      // tiles에서 요소 하나씩 꺼내서 돌리기
      for (let k of tiles) {
        if (i === k) {
          // 여기서 시간차가 필요함
          console.log(i, k);
          setLightOn(true);
          setTimeout(() => {
            setLightOn(false);
          }, 500);
        }
      }
    }
  }, []);

  // next stage...
  if (computerSelect.length === userSelect.length) {
    const setNext =
      JSON.stringify(computerSelect) === JSON.stringify(userSelect);
    if (setNext) {
      console.log("next");
    }
    if (!setNext) {
      console.log("fail");
    }
  }

  return (
    <Styles.Wrap>
      {tiles.map((tile, index) => (
        <Styles.Tile
          key={index}
          id={index}
          className={lightOn ? "lightOn" : ""}
          onClick={getIndexHandler}
        />
      ))}
    </Styles.Wrap>
  );
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
