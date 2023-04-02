import { useState } from "react";
import { useSnapshot } from "valtio";
import Cavas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import state from "./store";

function App() {
  const [count, setCount] = useState(0);

  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {/* <img src="./threejs.png " alt="logo" className="w-8 h-8 object-contain" /> */}
      <Home />
      <Cavas />
      <Customizer />
    </main>
  );
}

export default App;
