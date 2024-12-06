platforms.forEach((platform) => {
  if (
    player.y + player.height <= platform.y &&
    player.y + player.height + player.dy >= platform.y &&
    player.x + player.width > platform.x &&
    player.x < platform.x + platform.width
  ) {
    player.isJumping = false;
    player.dy = 0;
    player.y = platform.y - player.height;
  }
});
