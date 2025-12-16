const canvas = document.getElementById("designCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#000";
ctx.font = "24px Inter";
// ctx.fillText("Createc AI Canvas", 30, 50);

let isDrawing = false;

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";

  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});
