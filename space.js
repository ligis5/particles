import Gravity from "./gravity.js";
import Attractor from "./attractor.js";
import Particle from "./particles.js";

const par1 = new Particle("green");
const par2 = new Particle("yellow");
const attract = new Attractor();

const all = [par1, par2, attract];

for (let i = 0; i <= 2; i++) {
  let att = all[i];
  const gravity = new Gravity({ par1, par2, att });
}
