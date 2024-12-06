function checkCollisions() {
  currentMap.enemies.forEach((enemy) => {
    if (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ) {
      alert("Çarptınız! Bir can kaybettiniz.");
      player.x = 50;
      player.y = 300;
    }
  });
}
