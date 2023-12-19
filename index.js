import createMemory from './memary.js';

let screenel = document.getElementById("screen");

let screen = screenel.getContext("2d");

let vram = Array(screenel.width/2).fill(Array(screenel.height/2).fill("#000000"));
