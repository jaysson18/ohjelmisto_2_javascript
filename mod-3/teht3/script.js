'use strict';

const targetElement = document.getElementById('target');

const names = ['John', 'Paul', 'Jones'];

var htmlCode = '';

for (var i = 0; i < names.length; i++) {
    htmlCode += '<li>' + names[i] + '</li>';
}

targetElement.innerHTML = htmlCode;