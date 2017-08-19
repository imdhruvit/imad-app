console.log('Loaded!');
// Change the text of main-text id
var element=document.getElementById('main-text');

element.innerHTML='New Value';
//Move Image

var img=document.getElementById('move');
function moveRight(){
    marginLeft=marginleft+10;
    image.style.marginleft=marginleft+'px';
};
img.onclick = function() {
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='500px';
};