var contact = document.getElementById("Contact");

var modalContact = document.getElementById("modalContact");

var closeButton = document.getElementById("CloseButton");

contact.onclick = function () {
  modalContact.style.display = "block";
};

closeButton.onclick = function () {
  modalContact.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalContact) {
    modalContact.style.display = "none";
  }
};
