let cislo = Number(prompt('zadej číslo odlišné od 0:'));

while (cislo == 0) {
  console.log('prosím zadejte jiné číslo než nula.');
  cislo = Number(prompt('zadej:'));
}

console.log('vase číslo je : ' + cislo);
