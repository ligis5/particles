import Vector from "./vector.js";
import gui from "./gui.js";

function Gravity(particles) {
  const { att, ...remainingP } = particles;
  const attract = att;

  // creating object for controls
  let dataObj = {
    G: 0.1,
    min: 200,
    max: 800,
  };
  gui
    .add(dataObj, "G")
    .min(0)
    .max(5)
    .step(0.001)
    .name(att.name + "G");
  gui
    .add(dataObj, "min")
    .min(0)
    .max(1000)
    .step(10)
    .name(att.name + "Min");
  gui
    .add(dataObj, "max")
    .min(800)
    .max(10000)
    .step(10)
    .name(att.name + "Max");

  this.force = function () {
    Object.entries(remainingP).forEach((p) => {
      let vectorParticle = new Vector(
        p[1].currentPosition.x,
        p[1].currentPosition.y
      );

      let vectorAttractor = new Vector(
        attract.currentPosition.x,
        attract.currentPosition.y
      );

      let v = new Vector(
        vectorParticle.x - vectorAttractor.x,
        vectorParticle.y - vectorAttractor.y
      );

      let distanceSq = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
      let dSqMax = distanceSq > dataObj.max ? dataObj.max : distanceSq;
      let dSqMin = dSqMax < dataObj.min ? dataObj.min : distanceSq;

      let F = dataObj.G * ((p[1].mass * attract.mass) / dSqMin);

      let normalized = new Vector(v.x / dSqMin, v.y / dSqMin);

      p[1].acc.x -= normalized.x * F;
      p[1].acc.y -= normalized.y * F;
    });
  };

  setInterval(() => {
    this.force();
  }, 1000 / 60);
  this.force();
}
export default Gravity;
