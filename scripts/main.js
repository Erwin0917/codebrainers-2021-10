let rows = 15;
let columns = 30;

function createArray(rows, columns){
    let squares = new Array(rows)
    for(let i = 0; i < rows; i++)
    {
        squares[i] = new Array(columns);
    }

    return squares
}

let squaresValues = createArray(rows, columns);
let squares = createArray(rows, columns);
let neighbours = createArray(rows, columns);

function fillArray(){
    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < columns; j++)
        {
            squaresValues[i][j] = Math.floor(Math.random()*2);
            // squaresValues[i][j] = 0
            neighbours[i][j] = 0

        }
    }
    // console.log(squaresValues)
}

function createField(){
    fillArray();

    const squareContainer = document.getElementById("container");

    for(let i = 0; i < rows; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        squareContainer.append(row);

        for(let j = 0; j < columns; j++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            row.append(newSquare);
            squares[i][j] = newSquare;
        }

    }

    // console.log(squares)

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < columns; j++)
        {
            if(squaresValues[i][j] === 1){
                squares[i][j].classList.add("blacked");
            }

        }
    }

}

createField()

document.querySelectorAll('.square').forEach(item => {
   item.addEventListener("click", ()=>{
       if(item.classList.contains("blacked")){
           item.classList.remove("blacked");
       }else
       {
           item.classList.add("blacked");
       }

   });
});

    //if(i === 0 || i === rows || j === 0 || j === columns ){
    //
    // }
console.log(squaresValues)
function neighboursCount(){
    for(let i = 1; i < rows-1; i++)
    {

        for(let j = 1 ; j < columns-1; j++)
        {
            let tempNeighborsCount = 0;

            for(let x = -1; x <= 1; x++){
                for(let y = -1; y <=1; y++){

                    tempNeighborsCount += squaresValues[x+i][y+j];
                }

            }
            tempNeighborsCount-=squaresValues[i][j];



            console.log(tempNeighborsCount);
            neighbours[i][j] = tempNeighborsCount;

        }


    }
    console.log(neighbours)

}
neighboursCount()

function startGame(){

}