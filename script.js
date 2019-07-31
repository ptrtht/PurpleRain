const maxParts = 400;

window.onload=function() {
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//canvas + styles
if(canvas.getContext) {
  var ctx = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  ctx.strokeStyle = '#8B008B';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  var init = [];
  for(var a = 0; a < maxParts; a++) {
    init.push({
      x: Math.random() * w,
      y: Math.random() * h,
      lenght: Math.random() * 4,
      xspeed: 0,
      yspeed: Math.random() * 15
    });
  }

   var particles = [];
  for(var b = 0; b < maxParts; b++) {
    particles[b] = init[b];
  }


  // draws a rain drop

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for(var c = 0; c < particles.length; c++) {
      var p = particles[c];
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.lenght * p.xspeed, p.y + p.lenght * p.yspeed);
      ctx.stroke();
    }
    move();
  }


//self explainatory
  function move() {
    for(var b = 0; b < particles.length; b++) {
      var p = particles[b];
      p.x += p.xspeed;
      p.y += p.yspeed;
      if(p.x > w || p.y > h) {
        p.x = Math.random() * w;
        p.y = -20;
      }
    }
  }

  setInterval(draw, 20);

}
};
