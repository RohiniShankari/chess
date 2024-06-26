//pawns possible moves
function possiblePathsPawn(row,col,piece){
    if(piece.classList.contains('pawn')){
        let arr=new Array();
        if(findColor(piece)=="black"){
            if(row==7){
                let temp1=document.querySelector(`.r-${row-1}.c-${col}`);
                let temp2=document.querySelector(`.r-${row-2}.c-${col}`);
                if(temp1.classList.contains("containswhite")||temp1.classList.contains("containsblack")){
                   //pass
                }
                else if(temp2.classList.contains("containswhite")||temp2.classList.contains("containsblack")){
                    arr.push(document.querySelector(`.r-${row-1}.c-${col}`));
                }
                else{
                    arr.push(document.querySelector(`.r-${row-1}.c-${col}`));
                    arr.push(document.querySelector(`.r-${row-2}.c-${col}`));
                }
            }
            else{
                let temp1=document.querySelector(`.r-${row-1}.c-${col}`);
                
               if(row<=1||temp1.classList.contains("containswhite")||temp1.classList.contains("containsblack")){
                    //pass
                }
                else{
                    arr.push(document.querySelector(`.r-${row-1}.c-${col}`));
                }
            }
            if(row-1>0&&col-1>0){
                let temp1=document.querySelector(`.r-${row-1}.c-${col-1}`);
                if(temp1.classList.contains("containswhite")){
                    arr.push(temp1);
                }
            }
            if(row-1>0&&col+1<9){
                let temp1=document.querySelector(`.r-${row-1}.c-${col+1}`);
                if(temp1.classList.contains("containswhite")){
                    arr.push(temp1);
                }
            }
            
        }
        else if(findColor(piece)=="white"){
            if(row==2){
                let temp1=document.querySelector(`.r-${row+1}.c-${col}`);
                let temp2=document.querySelector(`.r-${row+2}.c-${col}`);
                if(temp1.classList.contains("containswhite")||temp1.classList.contains("containsblack")){
                   //pass
                }
                else if(temp2.classList.contains("containswhite")||temp2.classList.contains("containsblack")){
                    arr.push(document.querySelector(`.r-${row+1}.c-${col}`));
                }
                else{
                    arr.push(document.querySelector(`.r-${row+1}.c-${col}`));
                    arr.push(document.querySelector(`.r-${row+2}.c-${col}`));
                }
            }
            else{
                let temp1=document.querySelector(`.r-${row+1}.c-${col}`);
                if(row>=8||temp1.classList.contains("containswhite")||temp1.classList.contains("containsblack")){
                    //pass
                }
                else{
                    arr.push(document.querySelector(`.r-${row+1}.c-${col}`));
                }

                if(row<8){
                    if(col>1){
                    let left=document.querySelector(`.r-${row+1}.c-${col-1}`);
                    }
                    if(col<8){
                        let right=document.querySelector(`.r-${row+1}.c-${col+1}`);
                    }
                }
            }
            if(row+1<9&&col-1>0){
                let temp1=document.querySelector(`.r-${row+1}.c-${col-1}`);
                if(temp1.classList.contains("containsblack")){
                    arr.push(temp1);
                }
            }
            if(row+1<9&&col+1<9){
                let temp1=document.querySelector(`.r-${row+1}.c-${col+1}`);
                if(temp1.classList.contains("containsblack")){
                    arr.push(temp1);
                }
            }
        }
        
        setHighLight(arr);
        return arr;
    }
}

