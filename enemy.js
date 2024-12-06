function updateEnemies() {
  currentMap.enemies.forEach((enemy) => {
    enemy.x += enemy.dx; // Yatay hareket
    if (enemy.x < 0 || enemy.x + enemy.width > 800) {
      enemy.dx *= -1; // Ekran sınırlarında yön değiştir
    }
  });
}
