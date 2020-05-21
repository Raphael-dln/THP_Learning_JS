var chooseNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");

n= 1
i = 1

if (chooseNumber === 0){
console.log (`La factorielle de ${chooseNumber} est 1.`);
}

else {
  while (i <= chooseNumber){
    n = n * i;
    i ++
  }
}
console.log (`La factorielle de ${chooseNumber} est ${n}.`);