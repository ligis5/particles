function Gravity(particles) {
  const { attract, ...remainingP } = particles;
  // console.log(remainingP);

  this.force = function () {
    Object.entries(remainingP).forEach((p) => {
      let vectorParticle = {
        x: p[1].currentPosition.x,
        y: p[1].currentPosition.y,
      };

      let vectorAttractor = {
        x: attract.currentPosition.x,
        y: attract.currentPosition.y,
      };

      let v = {
        x: vectorParticle.x - vectorAttractor.x,
        y: vectorParticle.y - vectorAttractor.y,
      };

      let distanceSq = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
      let dSqMax = distanceSq > 2500 ? 2500 : distanceSq;
      let dSqMin = dSqMax < 50 ? 50 : distanceSq;

      let G = 0.1;
      let F = G * ((p[1].mass * attract.mass) / dSqMin);

      let normalized = { x: v.x / dSqMin, y: v.y / dSqMin };

      p[1].currentPosition.x -= normalized.x * F;
      p[1].currentPosition.y -= normalized.y * F;
    });
  };

  setInterval(() => {
    this.force();
  }, 1000 / 60);
  // this.force();
}
export default Gravity;
