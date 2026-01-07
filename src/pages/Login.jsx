import { useState } from "react";

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setError("User tidak ditemukan, silakan register terlebih dahulu");
      return;
    }

    const user = JSON.parse(storedUser);

    if (username === user.username && password === user.password) {
      onLogin();
    } else {
      setError("Username atau password salah");
    }
  };

  return (
<div className="container">
  <div className="card">
    <h2>Login</h2>

    {error && <p className="error">{error}</p>}

    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button type="submit" className="btn primary">
        Login
      </button>

      <button type="button" className="btn link" onClick={onRegister}>
        Belum punya akun? Register
      </button>
    </form>
  </div>
</div>

  );
}

export default Login;
