const player = {
  x: 50,
  y: 300,
  width: 20,
  height: 20,
  color: "white",
  speed: 3,
  dx: 0,
  dy: 0,
  gravity: 0.5,
  jumpStrength: -10,
  isJumping: false,
  facing: "right",
};

function drawPlayer(ctx) {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
  player.x += player.dx;
  player.y += player.dy;
  player.dy += player.gravity;

  if (player.y > 400) {
    alert("Bir can kaybettiniz!");
    player.x = 50;
    player.y = 300;
  }
}
