import { useState } from "react";
import { add, subtract, multiply } from "../utils/calculate";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const NumA = Number(a);
  const NumB = Number(b);

  const clearinput = () => {
    setA("");
    setB("");
    setResult(null);
  }

  return (
    <div>
      <h2>Kalkulator</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <button onClick={() => setResult(add(NumA, NumB))}>
        Tambah
      </button>
      
      <button onClick={() => setResult(subtract(NumA, NumB))}>
        Kurang
      </button>

      <button onClick={() => setResult(multiply(NumA, NumB))}>
        Kali
      </button>

      <button onClick={clearinput}>
        Clear
      </button>

      {/* Result from calculation */}
      {result !== null && (
        <p>Hasil: {result}</p>
      )}



    </div>
  );
}

export default Calculator;
