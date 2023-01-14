

const MOVES = Object.keys(MAPPING);

function MorrraCinese (error, result){

    let  playerMoves;
    let  npcMoves;

    if(error){
        console.log("C'è stato un errore: " + error.message);
        process.exit(1);
    }

    playerMoves = result.move.toLowerCase();

    
    npcMoves = MOVES[Math.floor(Math.random() * MOVES.length)];
    console.log("La mossa del computer: " + npcMoves[0].toUpperCase() + npcMoves.slice(1));
    
    
    console.log("Result: " + launchCompare(playerMoves, npcMoves));

    function launchCompare (playerMoves, npcMoves) {

       let result = MAPPING[playerMoves][npcMoves];
       result = result === 0 ? 
       "Draw" : 
       (result > 0 ? "You Win" : "You Lose");

        return result;
    }
}

module.exports = MorrraCinese;