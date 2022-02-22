let a = Number(prompt('Strana a :'));
let b = Number(prompt('Strana b :'));
let c = Number(prompt('Strana c :'));
let vetsi = 0;
let soucet = 0;
let mensi = 0;

if (a > b) {
  vetsi = a;
  mensi = b;
} else {
  vetsi = b;
  mensi = a;
}
if (vetsi > c) {
  soucet = c + mensi;
} else {
  soucet = vetsi + mensi;
  vetsi = c;
}

if (soucet > vetsi) {
  console.log('Trojúhelník lze sestroji ');
} else {
  console.log('Trojúhelník nelze sestrojit ');
}
