let jmeno = prompt('Jak se jmenuješ?');
let vek = Number(prompt('Kolik je ti let?'));
let cekat = 18 - vek;

if (vek >= 18) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je vám ' +
      vek +
      ' let a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je vám ' +
      vek +
      ' let a tak musíte počkat ještě ' +
      cekat +
      ' let, než budete moci řídit auto.'
  );
}
