"use strict";

function addButton() {
  let element = document.getElementById("global_menu");
  let button = document.createElement("li");
  button.add;
  element.append(button[0]);
}

function removeButton() {
  let element = document.getElementById("global_menu");
  let button = document.getElementsByTagName("li");
  button[button.length - 1].remove();
}
