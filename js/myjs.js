
//app部分的js代码
var ma = document.getElementsByClassName('ma')[0];
var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
ma.onmouseover = function(){
	img1.style.display = 'none';
	img2.style.display = 'inline-block';
}
ma.onmouseout = function(){
	img1.style.display = 'inline-block';
	img2.style.display = 'none';
}


//footer部分的代码
var erweima = document.getElementsByClassName('erweima')[0];
var footer_header_2 = document.getElementsByClassName('footer_header_2')[0];
footer_header_2.onmouseover = function(){
	erweima.style.visibility = 'visible'
}
footer_header_2.onmouseout = function(){
	erweima.style.visibility = 'hidden';
}