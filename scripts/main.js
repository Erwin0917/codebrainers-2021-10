import { BattleGame } from './battleGame.js';

export function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min * 1) + min);
}

const game = new BattleGame();
game.init();
// game.init(); - odpalenie gry


// const promise1 = new Promise((resolve, reject) => {
//     const response = fetch('www.image.jpg');
//
//     if (response.code === 200) {
//         resolve(response.body);
//     } else {
//         reject('Error', response.code);
//     }
// });
//
// promise1
//     .then((response) => {
//         console.log(response);
//     });
//