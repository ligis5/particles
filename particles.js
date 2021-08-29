const main = document.querySelector(".main");
const centerW = main.clientWidth / 2;
const centerH = main.clientHeight / 2;

function Particle(id) {
  let rV = Math.random();
  let mass = Math.ceil(rV * 50);
  this.mass = mass < 5 ? 5 : mass;
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

  this.velocity = 1;

  this.cordinates = {
    x: x - centerW,
    y: centerH - y,
  };
  let cordinates = this.cordinates;
  let place = function () {
    particle.style.top = `${cordinates.y + centerH}px`;
    particle.style.left = `${cordinates.x + centerW}px`;
  };
  console.log(this.cordinates);
  setInterval(() => {
    place();
  }, 10);

  this.moveLeft = () => {
    let time = setTimeout(() => {
      this.cordinates.x += this.velocity;
      this.moveLeft();
    }, 10);
    if (this.cordinates.x >= centerW) {
      clearTimeout(time);
      this.moveRight();
    }
  };
  this.moveRight = () => {
    let time = setTimeout(() => {
      this.cordinates.x -= this.velocity;
      this.moveRight();
    }, 10);
    if (this.cordinates.x <= 0 - centerW) {
      clearTimeout(time);
      this.moveLeft();
    }
  };
  this.moveTop = () => {
    let time = setTimeout(() => {
      this.cordinates.y += this.velocity;
      this.moveTop();
    }, 10);
    if (this.cordinates.y >= centerH) {
      clearTimeout(time);
      this.moveBottom();
    }
  };
  this.moveBottom = () => {
    let time = setTimeout(() => {
      this.cordinates.y -= this.velocity;
      this.moveBottom();
    }, 10);
    if (this.cordinates.y <= 0 - centerH) {
      clearTimeout(time);
      this.moveTop();
    }
  };

  // if (rV <= 0.25) {
  //   this.moveLeft();
  //   this.moveBottom();
  // }
  // if (rV <= 0.5 && rV > 0.25) {
  //   this.moveRight();
  //   this.moveTop();
  // }
  // if (rV <= 0.75 && rV > 0.5) {
  //   this.moveBottom();
  //   this.moveRight();
  // }
  // if (rV <= 1 && rV > 0.75) {
  //   this.moveTop();
  //   this.moveLeft();
  // }
}
