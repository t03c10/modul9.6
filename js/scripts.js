

var list = document.getElementById('list');
var addBtn = document.getElementById('addElem');

addBtn.addEventListener('click', function() {
var element = document.createElement('li');
element.innerHTML = 'item ' + (document.getElementsByTagName('li').length);
list.appendChild(element)});