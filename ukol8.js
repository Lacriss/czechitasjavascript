let cislo = Number(prompt('zadej číslo odlišné od 0 a zjisti součet:'));
let soucet = 0;

while (cislo !== 0) {
  console.log('vstup: ' + cislo);
  soucet = soucet + cislo;
  console.log('naakumulovany soucet: ' + soucet);
  cislo = Number(prompt('zadej další číslo:'));
}

console.log('vas součet všech čísel je : ' + soucet);
