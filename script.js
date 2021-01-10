var timerStatus = 'resume';
var totalSeconds = 0;
function pauseTimer(event){
	if(event.keyCode === 32){
		timerStatus = 'stoped';
	}else if(event.keyCode === 13){
		timerStatus = 'reset'
	}
	else if(event.keyCode === 82){
		timerStatus = 'resume'; 
	}
}

function increment(){
	switch(timerStatus){
		case 'stoped' : break;
		case 'reset' : totalSeconds = 0;
					   timerStatus = 'resume'; 
					   break;
		case 'resume' : totalSeconds+=1;
						timerStatus = 'resume';
						break;
		default: totalSeconds+=1;
	}
	seconds = (totalSeconds)%60;
	if(seconds < 10){
		time = '0'+seconds;
	}else {
		time = seconds;
	}
	mins = parseInt(totalSeconds/60);
	document.getElementById('sec').innerHTML = mins+'&#58;'+time;
}
document.addEventListener('keypress', pauseTimer);
setInterval(increment, 1000);