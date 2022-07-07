import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function App() {
  const [computerSelect, setComputerSelect] = useState([]);
  const [userSelect, setUserSelect] = useState([]);
  const [stage, setStage] = useState(1);
  const [fail, setFail] = useState(false);
  const tileRef = useRef();

  // tile layout
  const tiles = [];
  const tilesLength = 9;
  for (let i = 0; i < tilesLength; i++) {
    tiles.push(i);
  }

  // random number function
  const randomNumber = () => {
    return Math.floor(Math.random() * tilesLength);
  };

  // light function
  const lightOn = (index) => {
    tileRef.current.children[index].className += " lightOn";
  };
  const lightOff = (index) => {
    tileRef.current.children[index].className = tileRef.current.children[
      index
    ].className.replace("lightOn", "");
  };

  // computer's random pick
  useEffect(() => {
    for (let i = 0; i < stage; i++) {
      const newComputersTile = randomNumber();
      setComputerSelect((prev) => {
        return [...prev, newComputersTile];
      });
    }
  }, [stage]);

  // start. show computer's pick
  useEffect(() => {
    computerSelect.forEach((element, index) => {
      setTimeout(() => {
        lightOn(element);
      }, 300 + 300 * index);
      setTimeout(() => {
        lightOff(element);
      }, 600 + 300 * index);
    });
  }, [computerSelect]);

  // user's pick
  const getIndexHandler = (event) => {
    const i = event.target.id;
    setUserSelect([...userSelect, +i]);
    lightOn(i);
    setTimeout(() => {
      lightOff(i);
    }, 500);
  };

  // result
  useEffect(() => {
    const goToNext =
      JSON.stringify(computerSelect) === JSON.stringify(userSelect);

    if (computerSelect.length === 0) {
      return;
    }
    if (computerSelect.length === userSelect.length) {
      if (goToNext) {
        setTimeout(() => {
          setStage(stage + 1);
          setUserSelect([]);
          setComputerSelect([]);
        }, 2000);
      }
      if (!goToNext) {
        setFail(true);
      }
    }
  }, [computerSelect, userSelect, stage]);

  return (
    <Styles.Wrap>
      <p>stage: {stage}</p>
      <Styles.Tiles ref={tileRef}>
        {tiles.map((tile, index) => (
          <Styles.Tile
            key={index}
            id={index}
            className={""}
            onClick={getIndexHandler}
          />
        ))}
      </Styles.Tiles>
      {fail && (
        <Styles.GameOver>
          <p>GameOver</p>
        </Styles.GameOver>
      )}
    </Styles.Wrap>
  );
}

// styled
const Styles = {
  Wrap: styled.div`
    position: relative;
    p {
      height: 40px;
      margin: 0;
    }
  `,
  Tiles: styled.div`
    display: grid;
    height: 300px;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    gap: 10px;
  `,
  Tile: styled.div`
    border: 1px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &.lightOn {
      background-color: #444;
    }
  `,
  GameOver: styled.div`
    width: 100%;
    bottom: 0;
    height: calc(100% - 40px);
    background-color: #444;
    position: absolute;
    opacity: 0.9;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 30px;
      color: #fff;
      transform: translateX(-50%) translateY(-50%) rotate(405deg);
    }
  `,
};

export default App;
