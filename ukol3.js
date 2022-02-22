let jmenoMuze = 'Martin Malý';
let jmenoZeny = 'Martina Malá';
let rokMuze = 1990;
let mesicMuze = 1;
let rokZeny = 1993;
let mesicZeny = 5;

let vysledek = (rokZeny - rokMuze) * 12 + (mesicZeny - mesicMuze);

console.log(
  jmenoMuze +
    ' a ' +
    jmenoZeny +
    ' jsou od sebe věkově vzdáleni ' +
    vysledek +
    ' měsíců.'
);
