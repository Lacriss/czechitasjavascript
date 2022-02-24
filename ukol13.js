function jePrvocislo(cislo) {
  let jePrvocislo = true;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i == 0) {
      jePrvocislo = false;
      break;
    }
  }
  return jePrvocislo;
}

let cislo = Number(prompt('zadejte cislo'));

if (jePrvocislo(cislo)) {
  console.log('cislo je prvocilo');
} else {
  console.log('cislo neni prvocislo');
}
