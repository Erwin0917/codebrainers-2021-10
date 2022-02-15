document.querySelector('.square').addEventListener("click", () => {
    document.getElementById("2").style.backgroundColor = "black";
    console.log("aaaaaa");
})


function createArray(columns, rows){
    let squares = new Array(columns)
    for(let i = 0; i < columns; i++)
    {
        squares[i] = new Array(rows);
    }

    return squares
}





function createField(){
    let squares = createArray(10, 10);
    for(let i = 0; i < columns; i++)
    {
        for(let j = 0; j < rows; j++)
        {
            squares[i][j] = 0;

        }
    }

    console.log(squares)

    const squareContainer = document.getElementById("container");
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');

    squareContainer.append(newSquare);
}

// for(let i = 0; i<25; i++)
// {
//     for (let j = 0;j<20;j++)
//     {
//         createField();
//     }
//
// }

createField()