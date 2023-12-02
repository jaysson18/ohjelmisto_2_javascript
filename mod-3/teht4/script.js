'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // Array of students
    const students = [
        {value: "2345768", name: "John"},
        {value: "2134657", name: "Paul"},
        {value: "5423679", name: "Jones"}
    ];

    const targetElement = document.getElementById("target");

    const selectElement = document.createElement("select");

    for (let i = 0; i < students.length; i++) {
        const optionElement = document.createElement("option");
        optionElement.value = students[i].value;
        optionElement.textContent = students[i].name;
        selectElement.appendChild(optionElement);
    }

    targetElement.appendChild(selectElement);
});
