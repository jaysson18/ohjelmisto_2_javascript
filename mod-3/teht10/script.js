'use strict';
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('source');

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.querySelector('input[name="firstname"]').value.trim();
        const lastName = document.querySelector('input[name="lastname"]').value.trim();
        const targetParagraph = document.getElementById('target');

        if (!firstName || !lastName) {
            alert("Please enter both first name and last name.");
            return;
        }

        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    });
});
