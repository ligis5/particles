const par1 = new Particle(1);
const par2 = new Particle(2);

let a = par1.currentLocation.x;
let b = par2.currentLocation.x;

const distance = a > b ? a - b : b - a;
let x1 = par1.currentLocation.x;
let y1 = par1.currentLocation.y;
let x2 = par2.currentLocation.x;
let y2 = par2.currentLocation.y;

par1.move(x1, y1);
par2.move(x2, y2, 10);

const gravity = () => {};
