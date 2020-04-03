window.onload = function () {
  var canvas = document.getElementById("dboard");
  var context = canvas.getContext('2d');

  /*Step 1 */
  // var mountain = new Image();
  // mountain.onload = function() {
  // 	context.drawImage(mountain, 30, 30, 680, 544);
  // };
  // mountain.src = "mountain.jpg";

  /*Step 2 */
  // var mountain = new Image();
  // mountain.onload = function() {
  // 	var imgx = 348;
  // 	var imgy = 554;
  // 	var imgw = 2106;
  // 	var imgh = 541;
  // 	var canx = 15;
  // 	var cany = 15;
  // 	var canw = 702;
  // 	var canh = 180;
  // 	context.drawImage(mountain, imgx, imgy, imgw, imgh, canx, cany, canw, canh);
  // };
  // mountain.src = "mountain.jpg";

  /*Step 3 */
  var mountain = new Image();
  mountain.onload = function () {
    context.drawImage(mountain, 30, 30, 680, 544);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    //use for loop to separate and manipulate data
    for (var i = 0; i < data.length; i += 4) {
      var red = data[i];
      var green = data[i + 1];
      var blue = data[i + 2];
      var alpha = data[i + 3];
      // var avg = (red  + green + blue) / 3; //shorthand version using defined vars (not pastable)
      var avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      imageData.data[i] = avg;
      imageData.data[i + 1] = avg;
      imageData.data[i + 2] = avg;
    }
    context.putImageData(imageData, 0, 0);
  };
  mountain.src = "mountain.jpg";
};
