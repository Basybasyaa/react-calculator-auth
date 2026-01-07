import { useState } from "react";
import { add } from "../utils/calculate";

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h2>Kalkulator</h2>

      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <p>Hasil: {add(a, b)}</p>
    </div>
  );
}

export default Calculator;
