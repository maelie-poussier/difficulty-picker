import { useState } from "react"
import s from "./style.module.css"
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty.jsx";
import { MenuList } from "./components/MenuList/MenuList.jsx";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("")

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty)
  }
  return <div>
    <h1 className={ s.title }> Select your React difficulty </h1>
    <div className={ s.workspace }>
      <MenuList onItemClick={updateDifficulty} difficulty={currentDifficulty}/>
      <DisplayDifficulty difficulty={currentDifficulty}/>
    </div>
  </div>;
}
