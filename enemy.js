function drawEnemies(ctx) {
  currentMap.enemies.forEach((enemy) => {
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
}

function updateEnemies() {
  // Düşman davranışları eklenecek
}
