const main = document.querySelector(".main");

function Particle(id) {
  let rV = Math.random();
  let mass = Math.ceil(rV * 50);
  this.mass = mass < 5 ? 5 : mass;
  console.log(this.mass);
  let particle = document.createElement("img");
  particle.setAttribute("alt", "dot");
  particle.setAttribute("id", id);
  particle.setAttribute("class", "particle");
  particle.setAttribute("width", `${this.mass}px`);
  particle.setAttribute("height", `${this.mass}px`);
  particle.src = "./particle.png";
  main.appendChild(particle);
  let cWidth = main.clientWidth;
  let cHeight = main.clientHeight;
  let x = Math.floor(Math.random() * cWidth);
  let y = Math.floor(Math.random() * cHeight);
  let defaultLocation = {
    x,
    y,
  };
  this.defaultLocation = defaultLocation;
  this.currentLocation = { x, y };
  this.velocity = 10;

  this.pullF = Math.ceil(this.mass / 10);
  this.distanceOfpull = Math.ceil(this.mass * 5);
  let place = function () {
    particle.style.top = `${defaultLocation.y}px`;
    particle.style.left = `${defaultLocation.x}px`;
  };
  place();

  this.move = function (x, y, velocity) {
    let moveLeft = () => {
      let time = setTimeout(
        () => {
          this.currentLocation.x = x;
          particle.style.left = `${x}px`;
          moveLeft((x = x - 1));
        },
        !velocity ? this.velocity : velocity
      );
      if (x <= 0) {
        clearTimeout(time);
        moveRight(x);
      }
    };
    let moveRight = () => {
      let time = setTimeout(
        () => {
          this.currentLocation.x = x;
          particle.style.left = `${x}px`;
          moveRight((x = x + 1));
        },
        !velocity ? this.velocity : velocity
      );
      if (x >= main.clientWidth) {
        clearTimeout(time);
        moveLeft(x);
      }
    };
    let moveTop = () => {
      let time = setTimeout(
        () => {
          this.currentLocation.y = y;
          particle.style.top = `${y}px`;
          moveTop((y = y + 1));
        },
        !velocity ? this.velocity : velocity
      );
      if (y >= main.clientHeight) {
        clearTimeout(time);
        moveBottom(y);
      }
    };
    let moveBottom = () => {
      let time = setTimeout(
        () => {
          this.currentLocation.y = y;
          particle.style.top = `${y}px`;
          moveBottom((y = y - 1));
        },
        !velocity ? this.velocity : velocity
      );
      if (y <= 0) {
        clearTimeout(time);
        moveTop(y);
      }
    };
    // x counted from left, y counted from top.
    if (this.defaultLocation.x > cWidth / 2) {
      moveLeft(x);
    }
    if (this.defaultLocation.x <= cWidth / 2) {
      moveRight(x);
    }
    if (this.defaultLocation.y > cHeight / 2) {
      moveBottom(y);
    }
    if (this.defaultLocation.y <= cHeight / 2) {
      moveTop(y);
    }
  };
}
