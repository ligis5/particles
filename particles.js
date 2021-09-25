const main = document.querySelector(".main");
const centerW = main.clientWidth / 2;
const centerH = main.clientHeight / 2;
import Vector from "./vector.js";
import gui from "./gui.js";

function Particle(id) {
  let dataObj = {
    mass: Math.ceil(Math.random() * 50),
  };
  gui.add(dataObj, "mass").min(1).max(50).step(0.1);
  this.mass = dataObj.mass < 5 ? 5 : dataObj.mass;
  let particle = document.createElement("img");
  particle.setAttribute("alt", "dot");
  particle.setAttribute("id", id);
  particle.setAttribute("class", "particle");
  particle.setAttribute("width", `${this.mass}px`);
  particle.setAttribute("height", `${this.mass}px`);
  particle.src = "./particle.png";
  main.appendChild(particle);
  let x = Math.floor(Math.random() * main.clientWidth);
  let y = Math.floor(Math.random() * main.clientHeight);
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  this.currentPosition = new Vector(x, y);

  this.velocity = new Vector(2, 2);

  this.acc = new Vector(0, 0);
  // console.log(Gravity);
  this.move = function () {
    setInterval(() => {
      this.velocity.x += this.acc.x;
      this.velocity.y += this.acc.y;
      this.currentPosition.x += this.velocity.x;
      this.currentPosition.y += this.velocity.y;
      particle.style.left = `${this.currentPosition.x}px`;
      particle.style.top = `${this.currentPosition.y}px`;
      this.acc.x = 0;
      this.acc.y = 0;
      if (
        this.currentPosition.x <= 0 ||
        this.currentPosition.x >= main.clientWidth
      ) {
        this.velocity.x = this.velocity.x * -1;
      }
      if (
        this.currentPosition.y <= 0 ||
        this.currentPosition.y >= main.clientHeight
      ) {
        this.velocity.y = this.velocity.y * -1;
      }
    }, 1000 / 60);
  };
  this.move();
}
export default Particle;
