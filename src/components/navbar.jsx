function Navbar({ isLogin, onLogout }) {
  return (
    <nav className="navbar">
      <h3>Kalkulator App</h3>

      <div>
        {isLogin && (
          <button onClick={onLogout}>Logout</button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
