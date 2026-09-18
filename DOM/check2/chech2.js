document.addEventListener("DOMContentLoaded", function () {
  var colorBox = document.getElementById("color-box");
  var changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16);
      console.log(random);
      color += letters[random];
    }
    return color;
  }

  changeColorBtn.addEventListener("click", function () {
    var newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});