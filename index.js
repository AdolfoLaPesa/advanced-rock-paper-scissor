
// Import 
const prompt = require("prompt");
const RockPaperScissor = require("./RockPaperScissor");


prompt.start();

// Call the method of prompt to wait an imput from user, using the callback's function MorraCinese
console.log("Chose your moves: ");
prompt.get(["move"], RockPaperScissor);


