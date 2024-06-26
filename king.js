function possiblePathsKing(row,col,piece){
    let arr=new Array();
    let pieceColor=findColor(piece);
    if(row-1>=1&&col-1>=1){
        let temp = document.querySelector(`.r-${row-1}.c-${col-1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row-1>=1&&col>=1){
        let temp = document.querySelector(`.r-${row-1}.c-${col}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row-1>=1&&col+1<=8){
        let temp = document.querySelector(`.r-${row-1}.c-${col+1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row>=1&&col-1>=1){
        let temp = document.querySelector(`.r-${row}.c-${col-1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row>=1&&col+1<=8){
        let temp = document.querySelector(`.r-${row}.c-${col+1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row+1<=8&&col-1>=1){
        let temp = document.querySelector(`.r-${row+1}.c-${col-1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row+1<=8&&col>=1){
        let temp = document.querySelector(`.r-${row+1}.c-${col}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    if(row+1<=8&&col+1<=8){
        let temp = document.querySelector(`.r-${row+1}.c-${col+1}`);
            
        let child=temp.firstElementChild;
        if(temp.hasChildNodes()){
            if(child.classList.contains("whitePiece")&&pieceColor=="black"||
            child.classList.contains("blackPiece")&&pieceColor=="white"){
                arr.push(temp);
            }
        }
        else{
            arr.push(temp);
        }
    }
    setHighLight(arr);
    return arr;
}