//knight possible moves

function possiblePathsknight(row,col,piece){
    let arr=new Array();
    let pieceColor=findColor(piece);
    if(row-2>=1&&col-1>=1){
        let temp = document.querySelector(`.r-${row-2}.c-${col-1}`);
            
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
    if(row-2>=1&&col+1<=8){
        let temp = document.querySelector(`.r-${row-2}.c-${col+1}`);
            
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
    if(row-1>=1&&col+2<=8){
        let temp = document.querySelector(`.r-${row-1}.c-${col+2}`);
            
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
    if(row+1<=8&&col+2<=8){
        let temp = document.querySelector(`.r-${row+1}.c-${col+2}`);
            
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
    if(row+2<=8&&col+1<=8){
        let temp = document.querySelector(`.r-${row+2}.c-${col+1}`);
            
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
    if(row+2<=8&&col-1>=1){
        let temp = document.querySelector(`.r-${row+2}.c-${col-1}`);
            
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
    if(row+1<=8&&col-2>=1){
        let temp = document.querySelector(`.r-${row+1}.c-${col-2}`);
            
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
    if(row-1>=1&&col-2>=1){
        let temp = document.querySelector(`.r-${row-1}.c-${col-2}`);
            
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