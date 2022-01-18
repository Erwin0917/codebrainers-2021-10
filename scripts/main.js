//Zapytaj ile ma subskrybcji
//100 - srebrna, 1000 - złota, 10000 - diamentowa

//Ile subów przybywa w ciągu miesiąca
//Obliczyć ile przybędzie w ciągu roku
//Ile wyświetleń w miesiąc i ile zarobi per rok - 1 wyświetlenie = 1gr

const subscribtion = prompt("Hello! How many sub's do You have?");
console.log(subscribtion);
if (subscribtion < 100) {
    alert("You don't have award - keep going!");
    const x = 100 - subscribtion;
    alert(`You need to have ${x} subs to achive first award!`) //tylda a nie pojedynczy
} else if (subscribtion >= 100 && subscribtion < 1000) {
    alert("You have silver award");
} else if (subscribtion >= 1000 && subscribtion < 10000) {
    alert("You have gold award");
} else {
    alert("You have diamond award");
}



