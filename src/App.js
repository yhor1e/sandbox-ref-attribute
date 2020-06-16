import React, { useState } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState({ value: 0, dummy: true });

  const refCb = (node) => {
    console.log(node);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <p ref={refCb}>counter.value {counter.value}</p>
      <p>counter.dummy {counter.dummy.toString()}</p>
      <button
        onClick={() => {
          setCounter({ value: counter.value + 1, dummy: !counter.dummy });
          console.log(counter);
        }}
      >
        +1
      </button>
    </>
  );
};
export default App;
