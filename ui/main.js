console.log('Loaded!');
// Change the text of main-text id
var element=document.getElementById('main-text');

element.innerHTML='New Value';
//Move Image

var img=document.getElemenrById('move');
img.onClick =function() {
    img.style.marginLeft='100px';
};