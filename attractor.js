import Vector from "./vector.js";

function Attractor() {
  const main = document.querySelector(".main");
  const centerW = main.clientWidth / 2;
  const centerH = main.clientHeight / 2;
  let rV = Math.random();
  let mass = Math.ceil(rV * 50);
  this.mass = mass < 5 ? 5 : mass;
  this.name = "attractor";
  let particle = document.createElement("img");
  particle.setAttribute("alt", "dot");
  particle.setAttribute("id", "attractor");
  particle.setAttribute("class", "particle");
  particle.setAttribute("width", `${this.mass}px`);
  particle.setAttribute("height", `${this.mass}px`);
  particle.src = "./particle.png";
  main.appendChild(particle);
  let x = centerW;
  let y = centerH;

  this.currentPosition = new Vector(x, y);

  let place = function () {
    particle.style.top = `${y}px`;
    particle.style.left = `${x}px`;
  };
  place();
}
export default Attractor;
