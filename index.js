// gebleven bij les 9 min 5:51
let  game;

function init()
{
    game = new Game(); v
}




class Player
{
    constructor(index)
    {
        this.index = index; 
        this.atTile = 0; 
        this.pawn = document.getElementsByClassName("pawn" + index)[0];
        this.pawn.style.display = "block"; 
    }
}

class Tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1; 
    }
}
class Game
{
    constructor()
    {
        this.selectplayersDiv = document.getElementsByClassName("selectplayers")[0];
        this.winScreenDiv = document.getElementsByClassName("winScreen")[0];
        this.playerTurnDiv = document.getElementsByClassName("playerTurn")[0];
        this.diceRollDIv = document.getElementsByClassName("diceRoll")[0];
        this.mainscreenDiv = document.getElementsByClassName("mainScreen")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardOverlayDiv = document.getElementsByClassName("boardOverlay")[0];

        this.tiles = [];
        this.players = []; 
        this.playerTurn = [];
        this.setupBoard();
    }   
}
setupBoard()
{
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let x = 0;
    let y = 10;
    let tileSize = 55;

    for (var i = 0; i < path.lenght; i++)
    {
        let cmd = path[i];
        if (cmd == 1)
    {
        //right
        x++;
    }
    if (cmd == 3)
    {
        //left
        x--;
    }
    if (cmd == 3)
    {
        //up
        y--;
    }
    this.makeBoardDiv(x, y * tileSize, i+1)

    }
}
setupGotos()
{
    
}
start(amountOfPlayers)
{
    
}
moveToNextPlayer()
{
    
}
draw()
{
    
}
roll()
{
    
}
setPawn(playerI,atTile)
{
    
}
makeBoardDiv(x,y,tileDisplayNumber)
{
    let div = document.createElement("div"); 
    div.clasname = "tile";
}


