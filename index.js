// This is the image
var img = document.getElementById("plus");

// Boolean set to true at all times
let toggle = true;
// add a click event so when the user clicks it it will change image per click
img.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    img.src = `assets\\images\\icon-plus.svg`;
  } else {
    img.src = `assets\\images\\icon-minus.svg`;
  }
});
