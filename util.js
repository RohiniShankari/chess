
//all the helper functions
function createPiece(pieceClass,i) {
    const piece = document.createElement('div');
    piece.innerHTML = `<i class="fa-solid ${pieceClass}"></i>`;
    piece.classList.add('piece');
    if(i==1||i==2){
        piece.classList.add('whitePiece');
        
    }
    else{
        piece.classList.add('blackPiece');
    }
    piece.classList.add(pieceClass.substring(9));
    return piece;
}
function placePiece(i,j,block){
    if(i==2||i==7){
        
        block.append(createPiece('fa-chess-pawn',i));
    }
    else{
        if((i==1&&j==1)||(i==1&&j==8)||(i==8&&j==1)||(i==8&&j==8)){
            block.append(createPiece('fa-chess-rook',i));
        }
        else if((i==1&&j==2)||(i==1&&j==7)||(i==8&&j==2)||(i==8&&j==7)){
            block.append(createPiece('fa-chess-knight',i));
        }
        else if((i==1&&j==3)||(i==1&&j==6)||(i==8&&j==3)||(i==8&&j==6)){
            block.append(createPiece('fa-chess-bishop',i));
        }
        else if((i==1&&j==4)||(i==8&&j==4)){
            block.append(createPiece('fa-chess-queen',i));
        }
        else{
            block.append(createPiece('fa-chess-king',i));
        }
    }
    
    

}


function changePlayer(){
    let p1=document.querySelector(".player1");
    let p2=document.querySelector(".player2");
    console.log(p1);
    console.log(p2);
    if(game==0){
        game=1;
        p2.classList.remove("currentPlayer");
        p1.classList.add("currentPlayer");
    }
    else{
        game=0;
        p1.classList.remove("currentPlayer");
        p2.classList.add("currentPlayer");
    }
    if(removed.classList.contains("king")){
        let div=document.querySelector("div");
        let divdiv=document.querySelector("div div");
        div.style.visibility='visible';
        divdiv.style.visibility='visible';
        if(game==1){
            
            divdiv.innerHTML='player2 won the game<button class="reset">playAgain</button>';

        }
        else{
           
           divdiv.innerHTML='player1 won the game<button>playAgain</button>';
           
        }
        let btn=document.querySelector(' div div button');
        console.log(btn);
        btn.addEventListener("click",function(){
   
            location.reload();
        });
    }
}

function reSetHighLight(allBlocks){
    for(let b of allBlocks){
        b.classList.remove("highLight");
    }
}
function findColor(element){
    let color=element.classList[1];
    //console.log(element);
    color=color.substring(0,5);
    //console.log(color);
    return color;
 }
 function setHighLight(allBlocks){
    for(el of allBlocks){
        el.classList.add("highLight");
    }
 }
 function allPossiblePathsOfPiece(row,col,piece){
    
    if(piece.classList.contains("pawn")){
        return possiblePathsPawn(row,col,piece);
    }
    else if(piece.classList.contains("rook")){
        return possiblePathsRook(row,col,piece);
    }
    else if(piece.classList.contains("knight")){
        return possiblePathsknight(row,col,piece);
    }
    else if(piece.classList.contains("bishop")){
        return possiblePathsBishop(row,col,piece);
    }
    else if(piece.classList.contains("queen")){
        return possiblePathsQueen(row,col,piece);
    }
    else if(piece.classList.contains("king")){
        return possiblePathsKing(row,col,piece);
    }
    
    
    
 }

 function checkRemoved(element){

 return;
 }
 