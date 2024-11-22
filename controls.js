document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    player.dx = player.speed;
    player.facing = "right";
  }
  if (e.key === "ArrowLeft") {
    player.dx = -player.speed;
    player.facing = "left";
  }
  if (e.key === " " && !player.isJumping) {
    player.dy = player.jumpStrength;
    player.isJumping = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") player.dx = 0;
});
