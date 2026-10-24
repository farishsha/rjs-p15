import React from "react";
import useToggle from "./useToggle";

function App() {

  const [isOn, toggle] = useToggle(false);

  return (
    <div className="container">

      <h1>Custom Toggle Hook</h1>

      <div className="card">

        <h2>
          Status:
          <span data-testid="status">
            {isOn ? " ON" : " OFF"}
          </span>
        </h2>

        <button onClick={toggle}>
          Toggle
        </button>

      </div>

    </div>
  );
}

export default App;
