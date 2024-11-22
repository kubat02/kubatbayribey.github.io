const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap(ctx);
  drawPlayer(ctx);
  drawEnemies(ctx);
  updatePlayer();
  updateEnemies();
  checkMapCompletion(player);
  requestAnimationFrame(gameLoop);
}

gameLoop();
