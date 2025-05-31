// Your script here.
let text=document.getElementById("text");
let utterance;
document.getElementById("speak").addEventListener('click',function(){
	let sent=text.value.trim();
	if(sent !== ''){
		window.speechSynthesis.cancel();
		utterance=new SpeechSynthesisUtterance(sent);
		window.speechSynthesis.speak(utterance);
	}
});
document.getElementById("stop").addEventListener('click', () => {
      window.speechSynthesis.cancel();
    });