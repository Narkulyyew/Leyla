const sur = document.querySelectorAll('.images div');
sur[8].classList.add("empty");
var i,a,b,c,d,z,temp = -1;
var clicked = false;
var solved = false;
var btn = document.querySelector(".button");
btn.addEventListener('click',shuffle);

sur[7].style.position = 'absolute';
sur[7].style.left = '161px';
sur[7].style.top = '315px';

sur[6].style.position = 'absolute';
sur[6].style.left = '7px';
sur[6].style.top = '315px'

sur[5].style.position = 'absolute';
sur[5].style.left = '315px';
sur[5].style.top = '161px';

sur[4].style.position = 'absolute';
sur[4].style.left = '161px';
sur[4].style.top = '161px';

sur[3].style.position = 'absolute';
sur[3].style.left = '7px';
sur[3].style.top = '161px';

sur[2].style.position = 'absolute';
sur[2].style.left = '315px';
sur[2].style.top = '7px';

sur[1].style.position = 'absolute';
sur[1].style.left = '161px';
sur[1].style.top = '7px';

sur[0].style.position = 'absolute';
sur[0].style.left = '7px';
sur[0].style.top = '7px';


sur[8].style.position = 'absolute';
sur[8].style.left = '315px';
sur[8].style.top = '315px';

for(let z = 0; z < 9; z++){
	sur[z].setAttribute("data-id",z);
}

for(let z = 0; z < 9; z++){
	sur[z].setAttribute("data-id2",z);
}




sur[0].addEventListener('click',()=>move1(sur[0]));
sur[1].addEventListener('click',()=>move1(sur[1]));
sur[2].addEventListener('click',()=>move1(sur[2]));
sur[3].addEventListener('click',()=>move1(sur[3]));
sur[4].addEventListener('click',()=>move1(sur[4]));
sur[5].addEventListener('click',()=>move1(sur[5]));
sur[6].addEventListener('click',()=>move1(sur[6]));
sur[7].addEventListener('click',()=>move1(sur[7]));
sur[8].addEventListener('click',()=>move1(sur[8]));






//shuffle move
function move(x){ 
	if(clicked == true){
		i = x.getAttribute("data-id");

		var n = 8;
		var j = sur[n].getAttribute("data-id");

		if(((i-j==1) && (i!=3 && j!=2) && (i!=6 && j!=5)) || ((j-i==1) && (j!=3 && i!=2) && 
			(j!=6 && i!=5)) || (i-j == 3) || (j-i==3) ){

		a = x.offsetTop;
		b = x.offsetLeft;
		c = sur[n].offsetTop;
		d = sur[n].offsetLeft;

		x.animate([{left:b+'px',top:a+'px'},{left:d+'px',top:c+'px'}],{duration:150,fill:'forwards'});


		sur[n].style.left = b + 'px';
		sur[n].style.top = a + 'px';
		x.setAttribute("data-id",j);
		sur[n].setAttribute("data-id",i);
	}
}
}

//move

function move1(x){ 
	if(clicked == true){
		i = x.getAttribute("data-id");

		var n = 8;
		var j = sur[n].getAttribute("data-id");

		if(((i-j==1) && (i!=3 && j!=2) && (i!=6 && j!=5)) || ((j-i==1) && (j!=3 && i!=2) && (j!=6 && i!=5)) || (i-j == 3) || (j-i==3) ){
			a = x.offsetTop;
			b = x.offsetLeft;
			c = sur[n].offsetTop;
			d = sur[n].offsetLeft;

			x.animate([{left:b+'px',top:a+'px'},{left:d+'px',top:c+'px'}],{duration:150,fill:'forwards'});


			sur[n].style.left = b + 'px';
			sur[n].style.top = a + 'px';
			x.setAttribute("data-id",j);
			sur[n].setAttribute("data-id",i);
			window.setTimeout(check,200);
			window.setTimeout(issolved,250);


		}

	}

}

//check
function check(){


	if(sur[0].offsetLeft == 7 && sur[0].offsetTop == 7)
		if(sur[1].offsetLeft == 161 && sur[1].offsetTop == 7)
			if(sur[2].offsetLeft == 315 && sur[2].offsetTop == 7)
				if(sur[3].offsetLeft == 7 && sur[3].offsetTop == 161)
					if(sur[4].offsetLeft == 161 && sur[4].offsetTop == 161)
						if(sur[5].offsetLeft == 315 && sur[5].offsetTop == 161)
							if(sur[6].offsetLeft == 7 && sur[6].offsetTop == 315)
								if(sur[7].offsetLeft == 161 && sur[7].offsetTop == 315)
									if(sur[8].offsetLeft == 315 && sur[8].offsetTop == 315) solved = true;
							}

//issolved
function issolved(){
	if(solved==true){
		document.getElementById('body2').style.display = "block";
		document.getElementById("win").style.display = 'block';
		document.getElementById("win").animate([{fontSize:'0rem'},{fontSize:"7rem"}],{duration:2000,fill:"forwards"});
		document.getElementById("win").animate([{fontSize:'7rem'},{fontSize:"6rem"}],{duration:2000,delay:2000,fill:"forwards"});
		document.getElementById("restart").style.display = 'block';
		document.getElementById("restart").animate([{fontSize:'0rem'},{fontSize:"3.5rem"}],{duration:2000,fill:"forwards"});
		document.getElementById("restart").animate([{fontSize:'3.5rem'},{fontSize:"3rem"}],{duration:2000,delay:2000,fill:"forwards"});
		document.getElementById('solve').style.display = 'none';
	}
}

//shuffle
function shuffle(){

	var sayla = document.getElementById('solve');
	sayla.style.display = 'block';

	function slide() {
		sayla.animate([{opacity:0},{opacity:1}],{duration:3000});
		sayla.animate([{opacity:1},{opacity:0}],{duration:3000,delay:3000});
		setTimeout(slide,6000);
	}


	slide();


	document.getElementById('sayla').style.display = 'none';
	var value = document.getElementById('select').value;
	document.getElementById("select").style.display = 'none';
	document.querySelector(".btn").style.display = 'none';
	clicked = true;
	var time = 150;
	for(var goch = 0; goch < value; goch ++){
		setTimeout(shuffle3,time); 
		time = time + 300;
		
	}
}



function shuffle3(){
	var id,q;
	console.log(sur[8]);

	while(1 > 0){
		q = Math.floor(Math.random()*9);

		if(temp == q){
			continue;
		}

		id=sur[q].getAttribute("data-id");
		var jq = sur[8].getAttribute("data-id");
		if(((id-jq==1) && (id!=3 && jq!=2) && (id!=6 && jq!=5)) || ((jq-id==1) && (jq!=3 && id!=2) && (jq!=6 && id!=5)) || (id-jq == 3) || (jq-id==3) ){
			temp = q;
			move(sur[q]);
			break;
		}

	}

}


document.addEventListener("keydown", event => {
	if (event.keyCode == 115) {
		document.getElementById('sayla').style.display = 'block';
		document.getElementById('solve').style.display = 'none';
		document.getElementById('body2').style.display = "none";
		document.getElementById("win").style.display = 'none';
		document.getElementById("restart").style.display = 'none';
		document.getElementById("select").style.display = 'block';
		document.querySelector(".btn").style.display = 'block';
		clicked = false;
		solved = false;
	}


});


window.setInterval(()=>{
	let x = document.getElementById('select').value;
	if(x == 3||x==15||x==30){
		document.getElementById("button").style.display = 'block';
	}
},1);

window.setInterval(()=>{
	for(let u = 0; u < 8; u++){
if(sur[u].id - 1 == sur[u].getAttribute("data-id")){
	sur[u].style.border = '1px solid green';
	}
else{
	sur[u].style.border = '1px solid red';
}
}
},1);


function mouse(){
	if(clicked == true){
	let x = sur[8].getAttribute("data-id");
	for(let i = 0; i < 9; i++){
		let j = sur[i].getAttribute('data-id');
		if(((x-j==1) && (x!=3 && j!=2) && (x!=6 && j!=5)) || ((j-x==1) && (j!=3 && x!=2) &&
		 (j!=6 && x!=5)) || (x-j == 3) || (j-x==3) ){
			sur[i].style.opacity = '1';
		}
		else{
			sur[i].style.opacity = '0.5';
		}
	}
}	
}



sur[0].addEventListener('mouseover',()=>mouse());
sur[1].addEventListener('mouseover',()=>mouse());
sur[2].addEventListener('mouseover',()=>mouse());
sur[3].addEventListener('mouseover',()=>mouse());
sur[4].addEventListener('mouseover',()=>mouse());
sur[5].addEventListener('mouseover',()=>mouse());
sur[6].addEventListener('mouseover',()=>mouse());
sur[7].addEventListener('mouseover',()=>mouse());

sur[0].addEventListener('mouseout',()=>mouse2());
sur[1].addEventListener('mouseout',()=>mouse2());
sur[2].addEventListener('mouseout',()=>mouse2());
sur[3].addEventListener('mouseout',()=>mouse2());
sur[4].addEventListener('mouseout',()=>mouse2());
sur[5].addEventListener('mouseout',()=>mouse2());
sur[6].addEventListener('mouseout',()=>mouse2());
sur[7].addEventListener('mouseout',()=>mouse2());


function mouse2(){
	for(let i = 0; i < 9; i++){
		sur[i].style.opacity = '1';
	}
}

