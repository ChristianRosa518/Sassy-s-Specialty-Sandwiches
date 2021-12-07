/*function changeimg() {
  var card = document.getElementById("card");
  card.style.fontSize = "30em";
} 

function normal() {
  var card = document.getElementById("card");
  card.style.fontSize = "14em";
}
*/

function showChicken() {
  document.getElementById("block_2").className += " active";
  document.getElementById("block_1").classList.remove("active");
}

function unShowChicken() {
  document.getElementById("block_1").className += " active";
  document.getElementById("block_2").classList.remove("active");
}
function showBurgers() {
  document.getElementById("block_3").className += " active";
  document.getElementById("block_1").classList.remove("active");
}

function unShowBurgers() {
  document.getElementById("block_1").className += " active";
  document.getElementById("block_3").classList.remove("active");
}
function showBeef() {
  document.getElementById("block_4").className += " active";
  document.getElementById("block_1").classList.remove("active");
}

function unShowBeef() {
  document.getElementById("block_1").className += " active";
  document.getElementById("block_4").classList.remove("active");
}
