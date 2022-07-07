import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

function App() {
  const [computerSelects, setComputerSelects] = useState([]);
  const [userSelects, setUserSelects] = useState([]);
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
  console.log(computerSelects);

  // submit
  const submitHandler = (event) => {
    event.preventDefault();

    console.log(inputRef.current.value);
  };

  return (
    <Styles.Wrap>
      <div>
        <h3>computer's</h3>
        <p>result</p>
      </div>
      <div>
        <h3>user's</h3>
        <form onSubmit={submitHandler}>
          <input type="text" ref={inputRef} />
          <button type="submit">submit</button>
        </form>
      </div>
    </Styles.Wrap>
  );
}

const Styles = {
  Wrap: styled.div`
    max-width: 400px;
    margin: 0 auto;
    div {
      margin-bottom: 40px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      padding: 20px;
    }
  `,
};

export default App;
