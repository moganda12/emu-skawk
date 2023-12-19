import createMemory from './memary.js';

let screenel = document.getElementById("screen");

let screen = screenel.getContext("2d");

let vram = Array(screenel.width/2).fill(Array(screenel.height/2).fill("#000000"));

let on = true;

let row = vram[4];

row[5] = "#FF0000";

console.log(vram);

let computer = setInterval(() => {
	vram.forEach((collum, x) => {
		collum.forEach((pixel, y) => {
			if (pixel == "#FF0000") {
				console.log(x);
				console.log(y);
			}
			let vramc = vram[x];
			screen.fillstyle = vramc[y];
			screen.fillRect(y*2, x*2, y*2+2, x*2+2);
		});
	});
	console.log("frame done");
}, 1000/30);


function stop() {
	if (on) {
		alert("stopped")
	}
	on = false;
	clearInterval(computer);
}

document.getElementById("stop").addEventListener("click",stop)