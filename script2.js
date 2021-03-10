const imgs = document.querySelectorAll('img');
var btn = document.querySelector('button');
var link = document.querySelector('a');
       btn.style.display = 'none';
imgs.forEach(img=>{
	img.addEventListener('click',()=>myfunc(img));
});
function myfunc(img){

   btn.style.display = 'block';

	for(var i = 0; i < imgs.length; i++){
		imgs[i].classList.remove('active');
	}
	img.classList.add('active');
	for(var j = 0; j < imgs.length; j++){
		if(imgs[j].classList.contains('active')){
			j = j+3
				link.setAttribute('href','puzzle'+j+'.html');
		}
	}
}



