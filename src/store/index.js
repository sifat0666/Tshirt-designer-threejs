import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  changePosition: "",
  setChangePosition: "",
});

export default state;
