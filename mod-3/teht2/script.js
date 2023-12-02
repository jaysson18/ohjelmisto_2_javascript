'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const ulElement = document.createElement("ul");


    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li1.textContent = "First item";
    li2.textContent = "Second item";
    li3.textContent = "Third item";

    li2.classList.add("my-item");


    ulElement.appendChild(li1);
    ulElement.appendChild(li2);
    ulElement.appendChild(li3);

    const targetElement = document.getElementById("target");

    targetElement.appendChild(ulElement);
});