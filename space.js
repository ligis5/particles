import Gravity from "./gravity.js";
import Attractor from "./attractor.js";
import Particle from "./particles.js";

const par1 = new Particle(1);
const par2 = new Particle(2);
const attract = new Attractor();

const gravity = new Gravity({ par1, par2, attract });
