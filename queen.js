//queens possible moves
function possiblePathsQueen(row,col,piece){
    let arr=new Array();
    let pieceColor=findColor(piece);
    let arr1=possiblePathsRook(row,col,piece);
    let arr2=possiblePathsBishop(row,col,piece);
    arr=arr1.concat(arr2);
    return arr;
}