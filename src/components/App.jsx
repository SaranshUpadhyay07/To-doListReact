import React, { useState } from "react";

function App() {
  const [items, setItems] = useState("");
  const [added, setAdded] = useState([]);

  function handleChange(event) {
    setItems(event.target.value);
    console.log(items);
  }
  function onClicked(event) {
    event.preventDefault();
    if (items.trim() !== "") {
      setAdded((prevItems) => [...prevItems, items]);
      setItems("");
    }
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-do List</h1>
        </div>
        <div>
          <form className="form" onSubmit={onClicked}>
            <input type="text" onChange={handleChange} placeholder={items} />
            <button type="submit">
              <span>Add</span>
            </button>
          </form>
        </div>
        <div>
          <ul>
            {added.map((items) => (
              <li>{items}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
