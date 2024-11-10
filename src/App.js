import React, { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  const handleNavigate = () => {
    setShowHomePage(false);
  };

  return (
  <div className="App">
    {showHomePage ? (
      <HomePage onNavigate={handleNavigate} />
    ) : (
      <h1>Bem vindo ao Aplicativo de acessibilidade</h1>
    )}
  </div>
  );
}


export default App;