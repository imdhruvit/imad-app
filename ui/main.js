console.log('Loaded!');
// Change the text of main-text id
var element=document.getElementById('main-text');

element.innerHTML='New Value';
//Move Image

var img=document.getElementById('move');
img.onclick = function() {
    img.style.marginLeft='500px';
};