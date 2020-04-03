window.onload = function () {
  var canvas = document.getElementById("dboard");
  var context = canvas.getContext('2d');

  // //basic line
  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(400, 100);
  // context.lineWidth = 20;
  // context.strokeStyle = 'blue';
  // context.stroke();

  //envelope
  // context.beginPath();
  // context.moveTo(0,0);
  // context.lineTo(400, 300);
  // context.lineTo(800, 0);
  // context.lineTo(0,0);
  // context.closePath();
  // context.fillStyle = 'red';
  // context.fill();
  // context.lineJoin = 'miter';
  // context.lineWidth = 20;
  // context.stroke();

  // context.beginPath();
  // context.moveTo(0, 500);
  // context.lineTo(370, 270);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(800, 500);
  // context.lineTo(430, 270);
  // context.stroke();

  context.beginPath();
  // context.translate(100, 100);
  context.rotate(Math.PI / 180 * 45);
  context.rect(150, 0, 300, 200);
  context.fillStyle = 'green';
  context.fill();
  context.stroke();
};
