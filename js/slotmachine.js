/**
 * Created by ShinKenDo on 07.09.14.
 */
var images = [
	'slot1.png',
	'slot2.png',
	'slot3.png',
	'slot4.png',
	'slot5.png',
	'slot6.png'
];
var slots = [];
var score = 10;
var status = 0;
function startGame(){
	var seconds = 1000; //miliseconds
	if (status == 0) {
		status = 1;
		document.getElementById('score').innerHTML='Rolling!';
		shuffle();
		document.getElementById('arm').src='img/arm-2.png';
		setTimeout(function(){document.getElementById('arm').src='img/arm-1.png';},4*seconds);
		setTimeout(function(){rollDice(1);},4*seconds);
		setTimeout(function(){rollDice(2);},5*seconds);
		setTimeout(function(){rollDice(3);},6*seconds);
		setTimeout(function(){checkWinCondition();},6.5*seconds);
		setTimeout(function(){status=0;},7*seconds);
	}

}
function shuffle(){
	document.getElementById('window1').src='img/slot_rot1.gif';
	document.getElementById('window2').src='img/slot_rot2.gif';
	document.getElementById('window3').src='img/slot_rot3.gif';
}
function rollDice(window){
		var rollDice = Math.round(Math.random() * 5);
		document.getElementById('window'+window).src='img/'+images[rollDice];
		slots[window] = rollDice;
}
function checkWinCondition(){
	if((slots[1] === slots[2]) && (slots[2] === slots[3])){
		alert("Jackpot" + score);
	} else if(slots[1] === slots[2] || slots[2] === slots[3] || slots[3] == slots[1]) {
		document.getElementById('score').innerHTML=score+" - Try again for free!";
	} else {
		score --;
		if (score < 1) {alert("Game Over");}
		else{
			document.getElementById('score').innerHTML=score+" - Try again! Insert Coin!";
		}
	}
}