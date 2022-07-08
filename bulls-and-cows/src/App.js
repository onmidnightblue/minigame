import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// validate function
const isDuplicate = (element) => {
  for (let i = 0; i < element.length; i++) {
    if (element.indexOf(element[i]) === element.lastIndexOf(element[i])) {
      return false;
    }
    return true;
  }
};

function App() {
  const [computerSelects, setComputerSelects] = useState([]);
  const [userSelects, setUserSelects] = useState([]);
  const [authText, setAuthText] = useState("");
  const [result, setResult] = useState(false);
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  // computerSelects
  useEffect(() => {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Math.floor(Math.random() * 9 + 1);
      if (numbers.indexOf(number) < 0) {
        numbers.push(number);
      }
    }
    setComputerSelects(numbers);
  }, []);

  // auth, userSelects
  const submitHandler = (event) => {
    event.preventDefault();
    auth(inputRef.current.value);
    setCount((prev) => {
      return prev + 1;
    });
    inputRef.current.value = "";
  };

  const auth = (string) => {
    const notAuthPass =
      isNaN(string) || isDuplicate(string) || string.length < 3;
    if (notAuthPass) {
      setUserSelects([]);
      setAuthText("please enter 3 numbers that are not duplicated");
    }
    if (!notAuthPass) {
      setAuthText("");

      const getUserInput = string.split("").map((i) => {
        return parseInt(i);
      });
      return setUserSelects(getUserInput);
    }
  };
  console.log(computerSelects, userSelects);

  // ball or strike
  useEffect(() => {
    if (count === 0) {
      return;
    }
    if (count > 0) {
      computerSelects.forEach((cElement, cIndex) => {
        userSelects.forEach((uElement, uIndex) => {
          if (cElement === uElement) {
            if (cIndex !== uIndex) {
              setBall((prev) => {
                return prev + 1;
              });
            }
            if (cIndex === uIndex) {
              setStrike((prev) => {
                return prev + 1;
              });
            }
          }
        });
      });
    }
    return () => {
      setBall(0);
      setStrike(0);
    };
  }, [computerSelects, userSelects, count]);

  // win
  useEffect(() => {
    if (strike === 3) {
      setResult(true);
    }
  }, [strike]);

  return (
    <Styles.Wrap>
      {result ? (
        <p>perfect</p>
      ) : (
        <>
          <div>
            <h3>computer's</h3>
            <p>
              {ball} ball {strike} strike
            </p>
          </div>
          <p>count: {count}</p>
          <div>
            <h3>user's</h3>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                ref={inputRef}
                placeholder="Press the Enter key or Submit button"
              />
              <button type="submit">submit</button>
            </form>
            <p>{authText}</p>
          </div>
        </>
      )}
    </Styles.Wrap>
  );
}

const Styles = {
  Wrap: styled.div`
    max-width: 400px;
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
    div {
      margin-bottom: 40px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      padding: 20px;
      form {
        input {
          margin-bottom: 4px;
        }
        input,
        button {
          width: 100%;
          padding: 6px;
          box-sizing: border-box;
        }
      }
    }
  `,
};

export default App;
