var texts = [' Solve Puzzle and Win ?','by Seydulla Narkulyyev',' Enjoy !'];

var first = document.querySelector('#first');
var i = 0;
function slide() {
	
	first.innerHTML = texts[i];

	if(i<2){
		i++;
	}
	else{
		i = 0;
	}
	first.animate([{opacity:0},{opacity:1}],{duration:3000});
	setTimeout(slide,3000);




}

window.onload = slide;
