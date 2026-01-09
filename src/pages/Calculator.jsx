import { useState } from "react";
import { add, subtract, multiply } from "../utils/calculate";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

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

      <button onClick={() => alert(`Hasil: ${add(Number(a), Number(b))}`)}>
        Tambah
      </button>
      
      <button onClick={() => alert(`Hasil: ${subtract(Number(a), Number(b))}`)}>
        Kurang
      </button>

      <button onClick={() => alert(`Hasil: ${multiply(Number(a), Number(b))}`)}>
        Kali
      </button>

    </div>
  );
}

export default Calculator;
