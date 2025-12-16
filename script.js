const canvas = document.getElementById("designCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#000";
ctx.font = "24px Inter";
ctx.fillText("Createc AI Canvas", 30, 50);
