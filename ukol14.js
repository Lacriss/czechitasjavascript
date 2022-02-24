let pole = [1, 2, 3, 4543, 4, 34, -45];

let nejmensi = pole[0];

for (let i = 0; i < pole.length; i++) {
  if (pole[i] < nejmensi) {
    nejmensi = pole[i];
  }
}

console.log(nejmensi);
