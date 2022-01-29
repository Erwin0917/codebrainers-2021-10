export class UiController {
    constructor() {
        const nameInput = document.querySelector('#name');
        const nameRandomButton = document.querySelector('#random-name');

        //TODO: Wyszukać resztę elementów z UI i dodać o nich odpowiednie listenery
        nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        })

        nameRandomButton.addEventListener('click', () => {
            //TODO: na click uzupełnij nameInput losowym imieniem
            console.log('Random Name button click');
        })

    }
}
