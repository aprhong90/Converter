import { useState } from "react";
import "./App.css";

function TimeConverter() {
  const [timeAmount, setTimeAmount] = useState();
  const [flipped, setFlipped] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setTimeAmount(0);
  };
  const onFlip = (e) => {
    e.preventDefault();
    reset(e);
    setFlipped((curr) => !curr);
  };
  return (
    <form>
      <label htmlFor="minutes">Minutes</label>
      <input
        type="number"
        name="minutes"
        id="minutes"
        value={flipped ? timeAmount * 60 : timeAmount}
        onChange={(e) => setTimeAmount(e.target.value)}
        disabled={flipped}
      />
      <label htmlFor="hours">Hours</label>
      <input
        type="number"
        name="hours"
        id="hours"
        value={!flipped ? Math.round(timeAmount / 60) : timeAmount}
        disabled={!flipped}
        onChange={(e) => setTimeAmount(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>Flip</button>
    </form>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <TimeConverter />
    </div>
  );
}

export default App;
