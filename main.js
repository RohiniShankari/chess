const board=document.querySelector(".board");
let game=1;
let removed;
//0-black,1-white
let allBlocks=new Array();

for(var i=1;i<=8;i++){
    for(var j=1;j<=8;j++){
        let block=document.createElement('div');
        block.classList.add(`r-${i}`);
        block.classList.add(`c-${j}`);
        block.classList.add('block');
        if((i+j)%2==0){
            block.classList.add('white-block');
        }
        else{
            block.classList.add('black-block');
        }
        if(i==1||i==2){
            placePiece(i,j,block);
            block.classList.add("containswhite");
        }
        else if(i==7||i==8){
            placePiece(i,j,block);
            block.classList.add("containsblack");
        }
        allBlocks.push(block);
        board.append(block);
        }
 }


//all pieces
let pieces=document.querySelectorAll('.piece');
for(p of pieces){
    p.addEventListener("click",function(event){
        if(game==0&&findColor(this)=="black"||game==1&&findColor(this)=="white"){
        let selectedPiece=this;
        let selectedParent=selectedPiece.parentNode;
        let row=parseInt(selectedParent.classList[0].substring(2));
        let col=parseInt(selectedParent.classList[1].substring(2));
        reSetHighLight(allBlocks);
        let arr=allPossiblePathsOfPiece(row,col,selectedPiece);
        for (let el of arr) {
            el.addEventListener("click", function(event) {
                removed=el.firstElementChild
                selectedParent.removeChild(selectedPiece);
                if(el.hasChildNodes()){
                    
                    el.replaceChild(selectedPiece,el.firstElementChild);
                    
                }
                else{
                    el.appendChild(selectedPiece);
                }
                
                
                el.classList.add("contains"+findColor(selectedPiece));
                selectedParent.classList.remove("contains"+findColor(selectedPiece));
                
                reSetHighLight(arr);
                changePlayer();
                event.stopPropagation();
            },true);
        }
        event.stopPropagation();
        }
    },true);
}
