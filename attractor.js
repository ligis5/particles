function Attractor() {
  let rV = Math.random();
  let mass = Math.ceil(rV * 50);
  this.mass = mass < 5 ? 5 : mass;
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

  this.currentLocation = { x, y };
  this.cordinates = {
    x: this.currentLocation.x - centerW,
    y: centerH - this.currentLocation.y,
  };

  let place = function () {
    particle.style.top = `${y}px`;
    particle.style.left = `${x}px`;
  };
  place();
}
