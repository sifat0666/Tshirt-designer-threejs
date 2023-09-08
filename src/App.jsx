import { useState } from "react";
import { useSnapshot } from "valtio";
import CavasModel from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import state from "./store";
import { CustomButton } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const [changePosition, setChangePosition] = useState(false);

  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {/* <img src="./threejs.png " alt="logo" className="w-8 h-8 object-contain" /> */}
      <Home />

      <button
        onClick={() => {
          setChangePosition((prv) => !prv);
        }}
        className="p-3 rouded-xl bg-yellow-500 fixed top-20 right-10"
      >
        move logo
      </button>

      <CavasModel />
      <Customizer />
    </main>
  );
}

export default App;
