//Zapytaj ile ma subskrybcji
//100 - srebrna, 1000 - złota, 10000 - diamentowa

//Ile subów przybywa w ciągu miesiąca
//Obliczyć ile przybędzie w ciągu roku
//Ile wyświetleń w miesiąc i ile zarobi per rok - 1 wyświetlenie = 1gr

function youtubeExercise() {
    let subscribers, subPerMonth, moneyYearly;

    do {
        subscribers = prompt('How many subscribers do you have?');
        console.log(subscribers);
        if (subscribers === null) {
            break;
        }

        subscribers = parseInt(subscribers);
        if (isNaN(subscribers)) {
            alert('Write a number');
        }
    } while (isNaN(subscribers));

    if (subscribers !== null) {
        if (subscribers > 100 && subscribers < 1000) {
            alert('Silver badge');

        } else if (subscribers >= 1000 && subscribers < 10000) {
            alert('Gold badge');


        } else if (subscribers >= 10000) {
            alert('Diamond badge');

        } else {
            const x = 100 - subscribers;
            alert(`You are: ${x} off from the Silver badge `);
        }

        do {
            subPerMonth = parseInt(prompt('How many subscribes arrives every months?'));
            if (isNaN(subPerMonth)) {
                alert('Write a number');
            }
        } while (isNaN(subPerMonth));

        const perYear = 12 * subPerMonth;
        const nextYear = subscribers + perYear;
        alert(`In next year will be ${nextYear} subscribers`);



        const views = parseInt(prompt('How many monthly views you have?'));
        if (!isNaN(views)) {
            const moneyYearly = (views * 12) / 100;
            alert(`In next year you will earn ${moneyYearly}zł from your channel`);
        } else {
            console.log('Wrong value');
        }

    }


//Ilość pytań - 10
//Mnożenie od 1 do 10
//W consoli po każdym pytaniu informacje czy odpowiedź jest poprawna
//Po wszystkich pytaniach podsumowanie ile było poprawnych odpowiedzi
//Test zaliczony jeśli ponad połowa odpowiedzi jest poprawna

// Math.floor Math.ceil Math.round

}

for (let i = 0; i < 10; i++) {
    const firstNumber = Math.ceil(10 * Math.random());
    const secondNumber = Math.ceil(10 * Math.random());
    const answer = parseInt(prompt(`Qestion ${i+1}: How much is: ${firstNumber} * ${secondNumber}?`));
    const checkedAnswer = answer === (firstNumber * secondNumber);
    console.log(`Your answer is ${checkedAnswer}`)
}

