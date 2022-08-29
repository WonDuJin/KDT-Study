import clickEvent from "./clickEvent.js"

window.addEventListener("load", () => {

  const h1 = document.querySelector('h1');
  console.log(h1);
  clickEvent(h1, "black");


});