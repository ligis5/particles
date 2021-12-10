import Vector from "./vector.js";

function Particle(ctx, color, type, width, height) {

   let mass = Math.ceil(Math.random() * 25);
  this.mass = mass < 10 ? 10 : mass;
  this.name = color;
  this.type = type;
  this.width = width;
  this.height = height;
  let x = Math.floor(type == 'attractor' ? this.width / 2 : Math.random() * this.width);
  let y = Math.floor(type == 'attractor' ? this.height /2 : Math.random() * this.height);

  let drawParticle = (x,y) => {
    ctx.beginPath();
  ctx.arc(x, y, this.mass, 0, 2 * Math.PI);
  ctx.fillStyle = color;
      ctx.fill();
  }

  this.currentPosition = new Vector(x, y);
  drawParticle(this.currentPosition.x, this.currentPosition.y)
  this.velocity = new Vector(type == 'attractor' ? 0 : 2, type == 'attractor' ? 0 : 2);

  this.acc = new Vector(0, 0);

  this.move = function () {
      this.velocity.x += this.acc.x;
      this.velocity.y += this.acc.y;
      this.currentPosition.x += this.velocity.x;
      this.currentPosition.y += this.velocity.y;
      drawParticle(this.currentPosition.x, this.currentPosition.y)
      this.acc.x = 0;
      this.acc.y = 0;
      
  };
}
export default Particle;
