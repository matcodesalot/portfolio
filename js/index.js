const pressed = [];
const aestheticCode = "aesthetic";
const memeCode = "memes";
const audio = new Audio("./assets/MACINTOSHPLUS.mp3");
const saying = document.querySelector("#saying h3");
const imgs = document.querySelectorAll("img");

window.addEventListener("keyup", (e) => {
	pressed.push(e.key);
	pressed.splice(-aestheticCode.length - 1, pressed.length - aestheticCode.length);
	if(pressed.join("").includes(aestheticCode)) {
		playSong();
		updateTitle("MACINTOSH PLUS - リサフランク420 / 現代のコンピュー");
	}
	if(pressed.join("").includes(memeCode)) {
		updateImg();
		updateTitle("Feels Good Man");
	}
});

function playSong() {
	console.log("MACINTOSH PLUS - リサフランク420 / 現代のコンピュー");
	audio.volume = 0.2;
	audio.play();
}

function updateTitle(text) {
	saying.textContent = text;
}

function updateImg() {
	imgs.forEach(img => img.src = "./assets/pepe.jpg");
}