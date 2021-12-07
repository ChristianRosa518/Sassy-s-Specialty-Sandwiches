var brooklynChopModal = document.getElementById('modal_brooklynChop');
var sassinatorModal = document.getElementById('modal_Sassinator');
var modalCrispy6 = document.getElementById('modal_#6');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');

var brooklynChopButton = document.getElementById('brooklynChop');
var sassinatorButton = document.getElementById('Sassinator');
var crispy6Button = document.getElementById('#6');
var modal4B = document.getElementById('angusCheeseBurger');
var modal5B = document.getElementById('baconStack');

var modal = document.getElementsByClassName('modal');
var close = document.getElementsByClassName('closeButton');

brooklynChopButton.onclick = function () {
  brooklynChopModal.style.display = 'block';
};

sassinatorButton.onclick = function () {
  sassinatorModal.style.display = 'block';
};

crispy6Button.onclick = function () {
  modalCrispy6.style.display = 'block';
};

modal4B.onclick = function () {
  modal4.style.display = 'block';
};

modal5B.onclick = function () {
  modal5.style.display = 'block';
};

close[0].onclick = function () {
  brooklynChopModal.style.display = 'none';
};

close[1].onclick = function () {
  sassinatorModal.style.display = 'none';
};

close[2].onclick = function () {
  modalCrispy6.style.display = 'none';
};
close[3].onclick = function () {
  modal4.style.display = 'none';
};
close[4].onclick = function () {
  modal5.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == brooklynChopModal) {
    brooklynChopModal.style.display = 'none';
  }
  if (event.target == sassinatorModal) {
    sassinatorModal.style.display = 'none';
  }
  if (event.target == modalCrispy6) {
    modalCrispy6.style.display = 'none';
  }
  if (event.target == modal4) {
    modal4.style.display = 'none';
  }
  if (event.target == modal5) {
    modal5.style.display = 'none';
  }
  if (event.target == modalContact) {
    modalContact.style.display = 'none';
  }
};
