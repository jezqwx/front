import { useState } from "react";
import "./App.css"

export default function App(){
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlighted = () => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <div style={{padding: 16}}>
      <button onClick={toggleHighlighted}>Toggle Highlighted</button>

      <p className={isHighlighted ? "highlight" : ""} style={{marginTop: 12}}>
        React — JavaScript-библиотека для создания пользовательских интерфейсов; отвечает только за слой отображения (view layer).
      </p>
    </div>
  );
}