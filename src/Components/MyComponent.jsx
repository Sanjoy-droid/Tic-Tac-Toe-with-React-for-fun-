import { useState } from "react";

const MyComponent = () => {
  // Declare a state variable to hold the queue
  const [queue, setQueue] = useState([]);
  const [num, setNum] = useState(0);
  const limit = 6;

  // Function to enqueue an item
  const enqueue = (item) => {
    setQueue([...queue, item]);
  };

  // Example usage
  const [index, setIndex] = useState(0);

  const handleEnqueue = () => {
    enqueue(num);
    setNum(num + 1);
    if (queue.length > limit) {
      setIndex(index + 1);
      //  return index;
    }
  };

  return (
    <>
      <button onClick={handleEnqueue}>Enqueue</button>
      <div>Queue implementation</div>
      {/* <div>{queue}</div> */}

      <div>{index}</div>
    </>
  );
};

export default MyComponent;
