import { useState, useEffect } from "react";
import Stage from "./Stage";

const STAGE_LENGTH = [{ first: 32 }, { second: 48 }, { third: 64 }];
const data = STAGE_LENGTH;

// key array
const getKeyList = data.reduce((accumulate, current) => {
  return accumulate.concat(Object.keys(current));
}, []);

const App = () => {
  const [stageIndex, setStageIndex] = useState(0);
  const [stage, setStage] = useState(getKeyList[0]);
  const [isNextStage, setIsNextStage] = useState(false);
  const [isGaming, setIsGaming] = useState(true);

  // initial
  useEffect(() => {
    setStage(getKeyList[stageIndex]);
  }, [stageIndex]);

  // find value
  const thisStage = data.find((i) => {
    return i[stage];
  });
  const letterLength = thisStage[stage];

  // show next step button
  const showNextStepButton = () => {
    if (stageIndex === data.length - 1) {
      setIsGaming(false);
      setIsNextStage(false);
    }
    console.log(isNextStage);
    setIsNextStage(true);
  };

  // go to next step
  const nextStepHendler = () => {
    setIsNextStage(false);
    setStageIndex(stageIndex + 1);
  };

  return (
    <>
      {isGaming ? (
        <>
          <p>stage: {stageIndex + 1}</p>
          <Stage
            stage={letterLength}
            nextStepHendler={nextStepHendler}
            showNextStepButton={showNextStepButton}
            isNextStage={isNextStage}
          />
        </>
      ) : (
        <p>perfect</p>
      )}
    </>
  );
};

export default App;

/**
 * const getKeyList = [];
 * data.forEach((element) => {
 *   const getKey = Object.keys(element);
 *   getKeyList.push(getKey[0]);
 *   const getValue = element[getKey];
 *   console.log(getValue);
 * });
 * console.log(getKeyList); // ['first', 'second', 'third']
 */

/**
 * reduce를 이용해 더 짧게 작성
 * const getKeyList = data.reduce((accumulate, current) => {
 *   return accumulate.concat(Object.keys(current));
 * }, []);
 * console.log(getKeyList); // ['first', 'second', 'third']
 */
