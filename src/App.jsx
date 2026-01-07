import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Calculator from "./pages/Calculator";
import Navbar from "./components/navbar";

function App() {
  const [page, setPage] = useState("login");
  const [isLogin, setIsLogin] = useState(false);

  
  const handleLogout = () => {
    setIsLogin(false);
    setPage("login");
  };
  
  let content;

  if (isLogin) {
    content = <Calculator />;
  } else if (page === "register") {
    content = 
    <Register 
    onBack={() => setPage("login")} 
    />;
  } else {
    content = (
      <Login
        onLogin={() => setIsLogin(true)}
        onRegister={() => setPage("register")}
      />
    );
  }

  return (
    <>
      <Navbar 
      isLogin={isLogin} 
      onLogout={handleLogout}
      />
      {content}
    </>
  );
}

export default App;
