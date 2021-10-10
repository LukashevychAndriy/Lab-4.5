const R = +prompt('R = '); // Запрошуємо ввід значення вхідного параметру R

for (let i = 0; i < 10; i++) {
  const x = +prompt('Введіть значення х'); // Запрошуємо ввід значення вхідного параметру х
  const y = +prompt('Введіть значення у'); // Запрошуємо ввід значення вхідного параметру у
  
  if ((x + R) ** 2 + (y - R) ** 2 >= R ** 2 && y <= R && x >= -R && y >= 0 && x <= 0 || (x - R) ** 2 + (y + R) ** 2 >= R ** 2 && y >= -R && x <= R && y <= 0 && x >= 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

for (let i = 0; i < 10; i++) {
  const x = 2 * R * Math.random() - R;
  const y = 2 * R * Math.random() - R;
  
  if ((x + R) ** 2 + (y - R) ** 2 >= R ** 2 && y <= R && x >= -R && y >= 0 && x <= 0 || (x - R) ** 2 + (y + R) ** 2 >= R ** 2 && y >= -R && x <= R && y <= 0 && x >= 0) {
    console.log(`${x.toFixed(2)}\t${y.toFixed(3)}\tyes`);
  } else {
    console.log(`${x.toFixed(2)}\t${y.toFixed(3)}\tno`);
  }
}
