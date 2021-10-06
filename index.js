const a = +prompt('Введіть значення параметру а'); // Запрошуємо ввід параметру а
const b = +prompt('Введіть значення параметру b'); // Запрошуємо ввід параметру b
const c = +prompt('Введіть значення параметру c'); // Запрошуємо ввід параметру c
const xp = +prompt('Введіть х початкове'); // Запрошуємо ввід x початкового
const xk = +prompt('Введіть х кінцеве'); // Запрошуємо ввід х кінцевого
const dx = +prompt('Введіть крок'); // Запрошуємо ввід кроку

console.log('---------------------------');
console.log('|\tx\t|\tF\t|');
console.log('---------------------------');

for (let x = xp; x <= xk; x += dx) {
  let F;

  if (x < 0.6 && b + c !== 0) {
    F = a * x ** 2 + b ** 2 + c;
  } else if (x > 0.6 && b + c === 0) {
    F = (x - a) / (x - c);
  } else {
    F = x / c + x / a;
  }

  console.log(`|\t${x.toFixed(2)}\t|\t${F.toFixed(3)}\t|`);
}
