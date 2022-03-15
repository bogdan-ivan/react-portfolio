import React from "react";
import { Counter } from "./components/Counter";
import TextField from "./components/TextField";

function App() {
  return (
    <div>
      <TextField text="Hello" handleChange={(e) => {}} />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
