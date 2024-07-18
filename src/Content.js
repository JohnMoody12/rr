import { useState } from "react";

export const Content = () => {
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Joe", "John"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const z = "z";

  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked!`);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };
  //const name = handleNameChange();
  return (
    <main>
      <p onDoubleClick={handleNameChange}>Hello {name} </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Update count</button>
      {/*z is the value defined above */}
      <button onClick={() => handleClick2(z)}>Click It Z</button>
      {/*z is the event object */}
      <button onClick={(z) => handleClick3(z)}>Click It Z</button>
      {/*event object added */}
      <button onClick={handleClick3}>Click It</button>
    </main>
  );
};

// style={{
//   fontWeight: "bold",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-around",
//   height: "20vh",
//   alignItems: "center",
//   background: "teal",
//   width: "100vw",
// }}
