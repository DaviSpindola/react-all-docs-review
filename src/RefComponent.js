const { useState, useRef } = require("react");

const RefComponent = () => {
  const [numberState, setNumber] = useState(0); // numeric state
  const numberRef = useRef(0);

  function incrementAndDelayLoggin() {
    setNumber(numberState + 1);
    numberRef.current++;

    setTimeout(
      () =>
        alert(
          `Number state: ${numberState} | Number Ref: ${numberRef.current}`
        ),
      2000
    );
  }

  return (
    <div className="example-column">
      <button onClick={incrementAndDelayLoggin}>increment</button>
      <span>Number state: {numberState}</span>
      <span>Number ref: {numberRef.current}</span>
    </div>
  );
};

export default RefComponent;
