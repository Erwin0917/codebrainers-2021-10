let columns = 10;
let rows = 10;

function createArray(columns, rows){
    let squares = new Array(columns)
    for(let i = 0; i < columns; i++)
    {
        squares[i] = new Array(rows);
    }

    return squares
}

function createField(){
    let squares = createArray(columns, rows);
    for(let i = 0; i < columns; i++)
    {
        for(let j = 0; j < rows; j++)
        {
            squares[i][j] = 0;

        }
    }

    console.log(squares)

    const squareContainer = document.getElementById("container");

    for(let i = 0; i < rows; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        squareContainer.append(row);
        for(let i = 0; i < columns; i++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            row.append(newSquare);

        }

    }



}

createField()

document.querySelectorAll('.square').forEach(item => {
   item.addEventListener("click", ()=>{
       item.classList.add("blacked");
   });
});