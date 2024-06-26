import ReactDOM from "react-dom";

// On import toute les founctions qu'on veut utiliser.
import { App } from "./App"

const divRoot = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(divRoot);

reactRoot.render(<App />);
