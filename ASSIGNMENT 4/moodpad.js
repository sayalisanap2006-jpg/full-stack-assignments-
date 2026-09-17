const button = document.getElementById("changeBtn");
const text = document.getElementById("text");

button.addEventListener("click", function() {

    document.body.style.backgroundColor = "lightgreen";

    text.innerHTML = "Background color changed!";

});