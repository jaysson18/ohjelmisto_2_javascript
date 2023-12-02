'use strict'
document.addEventListener("DOMContentLoaded", function() {
    // array of names
    const names = ["John", "Paul", "Jones"];

    const targetElement = document.getElementById("target");

    const ulElement = document.createElement("ul");

    for (let i = 0; i < names.length; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = names[i];
        ulElement.appendChild(liElement);
    }

    targetElement.innerHTML = ulElement.outerHTML;
});
