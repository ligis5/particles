const gravity = () => {
  let part = [par1, par2];
  part.forEach((p) => {
    let vectorParticle = { x: p.cordinates.x, y: p.cordinates.y };

    let vectorAttractor = {
      x: Math.floor(attract.cordinates.x),
      y: Math.floor(attract.cordinates.y),
    };

    let v = {
      x: vectorParticle.x - vectorAttractor.x,
      y: vectorParticle.y - vectorAttractor.y,
    };

    let magnitude = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
    let normalized = { x: v.x / magnitude, y: v.y / magnitude };
    p.cordinates.x -= normalized.x;
    p.cordinates.y -= normalized.y;
    let G = 1;
    let F = G * ((p.mass * attract.mass) / Math.pow(magnitude, 2));

    // console.log(p.cordinates);
  });
};
setInterval(() => {
  gravity();
}, 10);
