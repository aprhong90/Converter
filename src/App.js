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
function LengthConverter() {
  const [lengthAmount, setLengthAmount] = useState();
  const [flipped, setFlipped] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setLengthAmount(0);
  };
  const onFlip = (e) => {
    e.preventDefault();
    reset(e);
    setFlipped((curr) => !curr);
  };
  return (
    <form>
      <label htmlFor="mile">Mile</label>
      <input
        type="number"
        name="mile"
        id="mile"
        value={flipped ? Math.round(lengthAmount / 1.6) : lengthAmount}
        onChange={(e) => setLengthAmount(e.target.value)}
        disabled={flipped}
      />
      <label htmlFor="kilometer">Kilometer</label>
      <input
        type="number"
        name="kilometer"
        id="kilometer"
        value={!flipped ? Math.round(lengthAmount * 1.6) : lengthAmount}
        disabled={!flipped}
        onChange={(e) => setLengthAmount(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>Flip</button>
    </form>
  );
}
function VolumeConverter() {
  const [volumeAmount, setVolumeAmount] = useState();
  const [flipped, setFlipped] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setVolumeAmount(0);
  };
  const onFlip = (e) => {
    e.preventDefault();
    reset(e);
    setFlipped((curr) => !curr);
  };
  return (
    <form>
      <label htmlFor="ounce">US fluid ounce</label>
      <input
        type="number"
        name="ounce"
        id="ounce"
        value={flipped ? Math.round(volumeAmount * 29.57) : volumeAmount}
        onChange={(e) => setVolumeAmount(e.target.value)}
        disabled={flipped}
      />
      <label htmlFor="ml">Milliliter</label>
      <input
        type="number"
        name="ml"
        id="ml"
        value={!flipped ? Math.round(volumeAmount / 29.57) : volumeAmount}
        disabled={!flipped}
        onChange={(e) => setVolumeAmount(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>Flip</button>
    </form>
  );
}
function TemperatureConverter() {
  const [tempAmount, setTempAmount] = useState();
  const [flipped, setFlipped] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setTempAmount(0);
  };
  const onFlip = (e) => {
    e.preventDefault();
    reset(e);
    setFlipped((curr) => !curr);
  };
  return (
    <form>
      <label htmlFor="fahrenheit">Farenheight</label>
      <input
        type="number"
        name="fahrenheit"
        id="fahrenheit"
        value={flipped ? Math.round((tempAmount - 32) * 0.5556) : tempAmount}
        onChange={(e) => setTempAmount(e.target.value)}
        disabled={flipped}
      />
      <label htmlFor="celsius">Celsius</label>
      <input
        type="number"
        name="celsius"
        id="celsius"
        value={!flipped ? Math.round(tempAmount / 0.5556 + 32) : tempAmount}
        disabled={!flipped}
        onChange={(e) => setTempAmount(e.target.value)}
      />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>Flip</button>
    </form>
  );
}

function App() {
  const [selected, setSelected] = useState("");

  console.log(selected);

  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select
        name="converter"
        id="converter"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="XX">Select the Unit</option>
        <option value="time">Minute & Hour</option>
        <option value="length">Mile & Kilometer</option>
        <option value="volume">US fluid ounce & Milliliter</option>
        <option value="temperature">Fahrenheit & Celsius</option>
      </select>
      {selected === "time" ? <TimeConverter /> : null}
      {selected === "length" ? <LengthConverter /> : null}
      {selected === "volume" ? <VolumeConverter /> : null}
      {selected === "temperature" ? <TemperatureConverter /> : null}
    </div>
  );
}

export default App;
