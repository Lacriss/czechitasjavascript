let a = Number(prompt('První číslo:'));
let b = Number(prompt('Druhé číslo:'));
let c = Number(prompt('Třetí číslo:'));
let vetsi = 0;

if (a > b) {
  vetsi = a;
} else {
  vetsi = b;
}
if (vetsi > c) {
  console.log('největší číslo je číslo: ' + vetsi);
} else {
  console.log('největší číslo je číslo: ' + c);
}
