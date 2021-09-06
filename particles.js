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
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  this.currentPosition = {
    x,
    y,
  };
  let multiplier = 5;
  this.velocity = {
    x: Math.random() * multiplier,
    y: Math.random() * multiplier,
  };

  this.force;
  // console.log(Gravity);
  this.move = function () {
    setInterval(() => {
      particle.style.left = `${this.currentPosition.x}px`;
      particle.style.top = `${this.currentPosition.y}px`;
    }, 1000 / 60);
    this.moveLeft = () => {
      let time = setTimeout(() => {
        this.currentPosition.x -= this.velocity.x;
        this.moveLeft();
      }, 1000 / 60);
      if (this.currentPosition.x <= 0) {
        clearTimeout(time);
        this.moveRight();
      }
    };
    this.moveRight = () => {
      let time = setTimeout(() => {
        this.currentPosition.x += this.velocity.x;
        this.moveRight();
      }, 1000 / 60);
      if (this.currentPosition.x >= main.clientWidth) {
        clearTimeout(time);
        this.moveLeft();
      }
    };
    this.moveBottom = () => {
      let time = setTimeout(() => {
        this.currentPosition.y += this.velocity.x;
        this.moveBottom();
      }, 1000 / 60);
      if (this.currentPosition.y >= main.clientHeight) {
        clearTimeout(time);
        this.moveTop();
      }
    };
    this.moveTop = () => {
      let time = setTimeout(() => {
        this.currentPosition.y -= this.velocity.x;
        this.moveTop();
      }, 1000 / 60);
      if (this.currentPosition.y <= 0) {
        clearTimeout(time);
        this.moveBottom();
      }
    };

    if (rV <= 0.25) {
      this.moveLeft();
      this.moveBottom();
    }
    if (rV <= 0.5 && rV > 0.25) {
      this.moveRight();
      this.moveTop();
    }
    if (rV <= 0.75 && rV > 0.5) {
      this.moveBottom();
      this.moveRight();
    }
    if (rV <= 1 && rV > 0.75) {
      this.moveTop();
      this.moveLeft();
    }
  };
  this.move();
}
export default Particle;
