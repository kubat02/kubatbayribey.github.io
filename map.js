<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Super Boo World</title>
  <style>
    canvas {
      display: block;
      margin: 0 auto;
      background: black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="800" height="400"></canvas>
  <script src="player.js"></script>
  <script src="map.js"></script>
  <script src="enemy.js"></script>
  <script src="collision.js"></script>
  <script src="main.js"></script>
</body>
</html>
2. player.js
javascript
Kodu kopyala
export const player = {
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
  lives: 2, // Stage içindeki can
};

export function drawPlayer(ctx) {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Kahverengi yön göstergesi
  ctx.fillStyle = "brown";
  if (player.facing === "right") {
    ctx.fillRect(player.x + player.width - 5, player.y + 5, 5, 5);
  } else {
    ctx.fillRect(player.x, player.y + 5, 5, 5);
  }
}

export function updatePlayer(platforms) {
  player.x += player.dx;
  player.y += player.dy;
  player.dy += player.gravity;

  platforms.forEach((p) => {
    if (
      player.y + player.height <= p.y &&
      player.y + player.height + player.dy >= p.y &&
      player.x + player.width > p.x &&
      player.x < p.x + p.width
    ) {
      player.isJumping = false;
      player.dy = 0;
      player.y = p.y - player.height;
    }
  });

  if (player.x < 0) player.x = 0;
  if (player.x + player.width > 800) player.x = 800 - player.width; // Canvas genişliği
}
