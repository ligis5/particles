import Gravity from "./gravity.js";
import Particle from "./particles.js";
const canvas = document.getElementById('canvas');
const body = document.getElementById('body')
const ctx = canvas.getContext('2d');
canvas.width = body.clientWidth;
      canvas.height = body.clientHeight;
      let particles = [];
      const createParticles = () => {
        for(let i = 0; i <= 2; i++){
          let type;
          if(i == 2) type = 'attractor';
          else type = 'mover'
          let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
          })`;
          particles.push(new Particle(ctx, color, type,body.clientWidth, body.clientHeight))
        }
      }
      createParticles()

  const gravity = new Gravity(canvas.width, canvas.height);
  window.addEventListener("resize", () => {
    let oldWidth = canvas.width;
    let oldHeight = canvas.height;
    particles.forEach(par => {
      let difx = oldWidth / par.currentPosition.x;
      let dify = oldHeight / par.currentPosition.y;
      canvas.width = body.clientWidth;
      canvas.height = body.clientHeight;
      par.currentPosition = {x: canvas.width / difx, y: canvas.height /dify};
      gravity.width = canvas.width;
      gravity.height = canvas.height;
    })
  });
  let fps = 60;
      let now;
      let then = performance.now();
      let delta;
      const getForce = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        for(let i = 0; i < particles.length; i++){
          particles[i].move()
          if(particles[i].type != 'attractor'){
            if(i < particles.length - 1){
              let next = i + 1;
              gravity.force(particles[i], particles[next])
              if(i > 0)gravity.force(particles[i], particles[i - 1])
            }else{
              let next = i - 1;
              gravity.force(particles[i], particles[next])
            }
          }
        }
      }

  const draw = () => {
    let interval = 1000 / fps;
        
        now = performance.now();
        delta = now - then;
        if(delta > interval) {
          then = now - (delta % interval);
          getForce()
        }
    

    window.requestAnimationFrame(draw)
  }
  window.requestAnimationFrame(draw)
