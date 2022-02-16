let rows = 15+2;
let columns = 30+2;

function createArray(rows, columns){
    let array = new Array(rows)
    for(let i = 0; i < rows; i++)
    {
        array[i] = new Array(columns);
    }

    return array
}
function createLargerArray(rows, columns){
    let array = new Array(rows)
    for(let i = 0; i < rows; i++)
    {
        array[i] = new Array(columns);
    }

    return array
}

let squaresValues = createLargerArray(rows, columns);
let squares = createArray(rows, columns);
let neighbours = createArray(rows, columns);

// console.log(squaresValues)
// console.log(neighbours)

function fillArray(){

    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < columns; j++)
        {
            squaresValues[i][j] = Math.floor(Math.random()*2);
            // squaresValues[i][j] = 1;


        }
    }

    for(let i = 0; i< columns;i++)
    {
        squaresValues[0][i] = 0;
        squaresValues[rows-1][i] = 0;


    }
    for(let i = 0; i< rows;i++)
    {
        squaresValues[i][0] = 0;
        squaresValues[i][columns-1] = 0;
    }
    // console.log(squaresValues)
}

// columns-=2;
// rows-=2;

function createField(){
    fillArray();

    const squareContainer = document.getElementById("container");

    for(let i = 1; i < rows-1; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        squareContainer.append(row);

        for(let j = 1; j < columns-1; j++){
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
            // if(squaresValues[i][j] === 0){
            //     squares[i][j].classList.add("blacked");
            // }


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
// console.log(squaresValues)
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



            // console.log(tempNeighborsCount);
            neighbours[i][j] = tempNeighborsCount;

        }


    }

}
neighboursCount()
console.log(squaresValues);
const newSquaresValues = squaresValues.map(function(arr) {
    return arr.slice();
});

function changeStateOfCell(){
    for(let i = 1; i < rows-1; i++){

        for(let j = 1; j < columns-1; j++){
            if(neighbours[i][j] < 2){
                squaresValues[i][j] = 0;
            }

        }

    }


}

console.log(newSquaresValues);

function startGame(){
    changeStateOfCell()
        for(let i = 0; i < rows; i++)
        {
            for(let j = 0; j < columns; j++)
            {
                if(squaresValues[i][j] === 1)
                {
                    squares[i][j].classList.remove("blacked");
                }

            }
        }
}

document.querySelector('.start').addEventListener('click', () => {
    startGame();
    console.log("start");
});