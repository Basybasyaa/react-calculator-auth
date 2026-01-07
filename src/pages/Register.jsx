import { useState } from "react";

function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      password, 
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Register berhasil");
    onBack();
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Register</button>
      </form>

      <br />
      <button onClick={onBack}>Kembali ke Login</button>
    </div>
  );
}

export default Register;
