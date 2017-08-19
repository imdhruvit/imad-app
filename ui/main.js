console.log('Loaded!');
// Change the text of main-text id
var element=document.getElementById('main-text');

element.innerHTML='New Value';
//Move Image

var img=document.getElementById('move');
function moveRight(){
    marginLeft=marginLeft+10;
    image.style.marginLeft=marginLeft+'px';
}
img.onclick = function() {
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='500px';
};