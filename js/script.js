"use strict";

// Задание 2

function randomValue(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomTask (min, max) {
    let rightAnswer = 0,
        result = 0;

    let x = randomValue(min, max),
        y = randomValue(min, max);

    switch ( Math.floor( randomValue(1, 4) ) ) {
        case 1:
            result = +prompt(`Решите пример: ${x} + ${y} =`);
            rightAnswer = x + y;
            break;
        case 2:
            result = +prompt(`Решите пример: ${x} - ${y} =`);
            rightAnswer = x - y;           
            break;
        case 3:
            result = +prompt(`Решите пример: ${x} * ${y} =`);
            rightAnswer = x * y;
            break;
        case 4:
            result = +prompt(`Решите пример: ${x} : ${y} =`);
            rightAnswer = x / y;
            break;
    }

    if (rightAnswer == result) {
        alert(`Ваш ответ верный - ${result}`);
    } else {
        alert(`Ваш ответ не верный - ${result}. Правильный ответ - ${rightAnswer}`);
    }
}

let a = +prompt("Введите минимальное число", ""),
    b = +prompt("Введите максиальное число", ""),
    amount = +prompt("Сколько примеров вы хотите решить?", "");

for (let i = 0; i < amount; i++) {
    randomTask(a, b);
}