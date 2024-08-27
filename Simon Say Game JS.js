//Simon game
let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","blue","darkblue"];

let started=false;
let level=0;


let h3= document.querySelector("h3");

let divs= document.querySelectorAll(".btn");

document.addEventListener("keypress",function(){
	if(started==false){
		console.log("game started");
		started=true;
		levelUp();
	}	
});

function gameFlash(btn){
	btn.classList.add("flash");
	setTimeout(function(){
		btn.classList.remove("flash")
	},250);
}

function userFlash(btn){
	btn.classList.add("userflash");
	setTimeout(function(){
		btn.classList.remove("userflash")
	},250);
}

function levelUp(){
	userSeq=[];
	level++;
	h3.innerText= `Level ${level}`;
	
	let randomIndx=Math.floor(Math.random()*4);
	let randomColor=btns[randomIndx];
	let randomBtn= document.querySelector(`.${randomColor}`);
	
	//console.log(randomIndx);
	//console.log(randomColor);
	//console.log(randomBtn);
	gameFlash(randomBtn);
	gameSeq.push(randomColor);
	console.log("game seq:",gameSeq);
}

function checkAns(indx){
	//console.log(`Level: ${level}`);
	if(gameSeq[indx] === userSeq[indx]){
		if(gameSeq.length==userSeq.length){
			setTimeout(levelUp,1000);
		}
	}
	else{
		document.querySelector("body").style.backgroundColor="red";
		setTimeout(function(){
			document.querySelector("body").style.backgroundColor="white";
		},150);
		h3.innerHTML= (`GAME OVER! Your score was <b>${level}</b> <br>Press any key to start`);
	    reset();
	}
}

function btnPress(){
	//console.log("Button was pressed");
	let btn=this;
	userFlash(btn);
	userColor=btn.getAttribute("id");
	userSeq.push(userColor);
	//console.log("User seq:",userSeq);
	
	checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(Btn of allBtns){
		Btn.addEventListener("click",btnPress);
}

function reset(){
	started = false;
	gameSeq=[];
	userSeq=[];
	level=0;
}