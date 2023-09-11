import { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import Win from "./components/Win/Win";

function App() {
  const [winner, setWinner] = useState({ win: false, name: "" });

  return (
    <div className={`${winner && "win"} App`}>
      <Game nameOne={"Player 1"} nameTwo={"Player 2"} setWinner={setWinner} />
      {winner.win && 
      <Win winner={winner.name}/>}
    </div>
  );
}

export default App;
