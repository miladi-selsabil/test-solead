var bigImage = document.getElementById('bigImage');
var small = document.getElementsByClassName('small');

small[0].onclick = function(){
    bigImage.src = small[0].src;
}
small[1].onclick = function(){
    bigImage.src = small[1].src;
}
small[2].onclick = function(){
    bigImage.src = small[2].src;
}
small[3].onclick = function(){
    bigImage.src = small[3].src;
}



