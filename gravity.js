import Vector from "./vector.js";
function Gravity(width, height) {
  // creating object for controls
  this.width = width;
  this.height = height;
  let dataObj = {
    G: 1,
    min: this.width / 10,
    max: this.width / 2,
  };
  
  this.force = function (p1, p2) {
      let vectorParticle = new Vector(
        p1.currentPosition.x,
        p1.currentPosition.y
      );

      let vectorAttractor = new Vector(
        p2.currentPosition.x,
        p2.currentPosition.y
      );

      let v = new Vector(
        vectorParticle.x - vectorAttractor.x,
        vectorParticle.y - vectorAttractor.y
      );

      let distanceSq = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
      let dSqMax = distanceSq > dataObj.max ? dataObj.max : distanceSq;
      let dSqMin = dSqMax < dataObj.min ? dataObj.min : distanceSq;

      let F = dataObj.G * ((p1.mass * p2.mass) / dSqMin);

      let normalized = new Vector(v.x / dSqMin, v.y / dSqMin);

      p1.acc.x -= normalized.x * F;
      p1.acc.y -= normalized.y * F;
  };
}
export default Gravity;
