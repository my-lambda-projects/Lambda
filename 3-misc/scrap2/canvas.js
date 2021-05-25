const canvas = document.getElementById( 'canvas' );
const ctx = canvas.getContext( '2d' );

// var canv = {};

ctx.Particle = function( opt ) {
  this.radius = 7;
  this.x = opt.x;
  this.y = opt.y;
  this.angle = opt.angle;
  this.speed = opt.speed;
  this.accel = opt.accel;
  this.decay = 0.01;
  this.life = 1;
};

ctx.Particle.prototype.step = function( i ) {
  this.speed += this.accel;
  this.x += Math.cos( this.angle ) * this.speed;
  this.y += Math.sin( this.angle ) * this.speed;
  this.angle += ctx.PI / 64;
  this.accel *= 1.01;
  this.life -= this.decay;
  
  if( this.life <= 0 ) {
    ctx.particles.splice( i, 1 );
  }
};

ctx.Particle.prototype.draw = function( i ) {
  ctx.ctx.fillStyle = ctx.ctx.strokeStyle = `hsla(${ctx.tick + ( this.life * 120 )}, 100%, 60%, ${this.life})`;
  ctx.ctx.beginPath();
  if( ctx.particles[ i - 1 ] ) {
    ctx.ctx.moveTo( this.x, this.y );
    ctx.ctx.lineTo( ctx.particles[ i - 1 ].x, ctx.particles[ i - 1 ].y );
  }
  ctx.ctx.stroke();
  
  ctx.ctx.beginPath();
  ctx.ctx.arc( this.x, this.y, Math.max( 0.001, this.life * this.radius ), 0, ctx.TWO_PI );
  ctx.ctx.fill();
  
  const size = Math.random() * 1.25;
  ctx.ctx.fillRect( ~~( this.x + ( ( Math.random() - 0.5 ) * 35 ) * this.life ), ~~( this.y + ( ( Math.random() - 0.5 ) * 35 ) * this.life ), size, size );
}

ctx.step = () => {
  ctx.particles.push( new ctx.Particle({
    x: ctx.width / 2 + Math.cos( ctx.tick / 20 ) * ctx.min / 2,
    y: ctx.height / 2 + Math.sin( ctx.tick / 20 ) * ctx.min / 2,
    angle: ctx.globalRotation + ctx.globalAngle,
    speed: 0,
    accel: 0.01
  }));
  
  ctx.particles.forEach( (elem, index) => {
    elem.step( index );
  });
  
  ctx.globalRotation += ctx.PI / 6;
  ctx.globalAngle += ctx.PI / 6;
};

ctx.draw = () => {
  ctx.ctx.clearRect( 0, 0, ctx.width, ctx.height );
  
  ctx.particles.forEach( (elem, index) => {
    elem.draw( index );
  });
};

ctx.init = () => {
  ctx.ctxas = document.createElement( 'ctxas' );
  ctx.ctx = ctx.ctxas.getContext( '2d' );
  ctx.width = 300;
  ctx.height = 300;
  ctx.ctxas.width = ctx.width * window.devicePixelRatio;
  ctx.ctxas.height = ctx.height * window.devicePixelRatio;
  ctx.ctxas.style.width = `${ctx.width}px`;
  ctx.ctxas.style.height = `${ctx.height}px`;
  ctx.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  ctx.min = ctx.width * 0.5;
  ctx.particles = [];
  ctx.globalAngle = 0;
  ctx.globalRotation = 0;
  ctx.tick = 0;
  ctx.PI = Math.PI;
  ctx.TWO_PI = ctx.PI * 2;
  ctx.ctx.globalCompositeOperation = 'lighter';
  document.body.appendChild( ctx.ctxas );
  ctx.loop();
};

ctx.loop = () => {
  requestAnimationFrame( ctx.loop );
  ctx.step();
  ctx.draw();
  ctx.tick++;
};

ctx.init();
