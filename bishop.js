//bishop possible moves
function possiblePathsBishop(row,col,piece){
    let arr=new Array();
    let pieceColor=findColor(piece);
    for(let i=row-1,j=col-1;i>=1&&j>=1;i--,j--){
        let temp = document.querySelector(`.r-${i}.c-${j}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("blackPiece")&&pieceColor=="black"
            ||child.classList.contains("whitePiece")&&pieceColor=="white"){
                break;
            }
            else if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
                break;
            }
           }
            else{
                arr.push(temp);
            }
    }
    for(let i=row-1,j=col+1;i>=1&&j<=8;i--,j++){
        let temp = document.querySelector(`.r-${i}.c-${j}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("blackPiece")&&pieceColor=="black"
            ||child.classList.contains("whitePiece")&&pieceColor=="white"){
                break;
            }
            else if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
                break;
            }
           }
            else{
                arr.push(temp);
            }
    }
    for(let i=row+1,j=col-1;i<=8&&j>=1;i++,j--){
        let temp = document.querySelector(`.r-${i}.c-${j}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("blackPiece")&&pieceColor=="black"
            ||child.classList.contains("whitePiece")&&pieceColor=="white"){
                break;
            }
            else if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
                break;
            }
           }
            else{
                arr.push(temp);
            }
    }
    for(let i=row+1,j=col+1;i<=8&&j<=8;i++,j++){
        let temp = document.querySelector(`.r-${i}.c-${j}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("blackPiece")&&pieceColor=="black"
            ||child.classList.contains("whitePiece")&&pieceColor=="white"){
                break;
            }
            else if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
                break;
            }
           }
            else{
                arr.push(temp);
            }
    }
    setHighLight(arr);
    return arr;
}