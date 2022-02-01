export class UiController {
    constructor() {
        const nameInput = document.querySelector('#name');
        const nameRandomButton = document.querySelector('#random-name');
        const weaponInput = document.querySelector('#weapon');
        const weaponRandomButton = document.querySelector('#random-weapon');
        const strengthInput = document.querySelector('#strength');
        const strengthRandomButton = document.querySelector('#random-strength');
        const hitpointsInput = document.querySelector('#hitpoints');
        const hitpointsRandomButton = document.querySelector('#random-hitpoints');
        const startBattleButton = document.querySelector('#start-battle');
        const addCharacterButton = document.querySelector('#add-character');
        const randomDataButton = document.querySelector('#random-character');
        // const selectTeam = document.querySelector();


        //Sekcja z inputem////////////////////////////////////////////////////////////////////////
        nameInput.addEventListener('change', () => {
            console.log('Name input was change');
        })
        weaponInput.addEventListener('change', () => {
            console.log('Weapon input was changed');
        })
        strengthInput.addEventListener('change', () => {
            console.log('Strength input was changed');
        })
        hitpointsInput.addEventListener('change', () => {
            console.log('hp input was changed');
        })

      //TODO: na click uzupełnij nameInput losowym imieniem

        //Sekcja z kliknięciem//////////////////////////////////////////////////////////////

        nameRandomButton.addEventListener('click', () => {
            console.log('Random Name button click');

                const names = ['Ala', 'Ola', 'Ela']
                const randomName = names[Math.floor(Math.random() * names.length)];
                console.log(randomName);

        })
        weaponRandomButton.addEventListener('click', () => {
            console.log('Random Weapon button click');
        })
        strengthRandomButton.addEventListener('click', () => {
            console.log('Random Strength button click');
        })
        hitpointsRandomButton.addEventListener('click', () => {
            console.log('Random hp button click');
        })
        startBattleButton.addEventListener('click', () => {
            console.log('Start Battle clicked')
        })
        addCharacterButton.addEventListener('click', () => {
            console.log('Add Character clicked')
        })
        randomDataButton.addEventListener('click', () => {
            console.log('Random Data clicked')
        })


    }
}
