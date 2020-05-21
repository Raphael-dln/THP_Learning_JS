let arn = ""
function protein(arn){
  let arrayArn = [];
  arrayArn = arn.match(/.{1,3}/g);
  let arrayProtein = []
  arrayArn.forEach(n => {
    if ((n === "UCU") || (n === "UCC") || (n === "UCA") || (n === "UCG") || (n === "AGU") || (n === "AGC")){
      arrayProtein.push("Sérine");
    } else if ((n === "CCU") || (n === "CCC") || (n === "CCA") || (n === "CCG")) {
      arrayProtein.push("Proline");
    } else if ((n === "UUA") || (n === "UUG")){
      arrayProtein.push("Leucine");
    } else if ((n === "UUU") || (n === "UUC")){
      arrayProtein.push("Phénylalanine");
    } else if ((n === "CGU") || (n === "CGC") || (n === "CGA") || (n === "CGG") || (n === "AGA") || (n === "AGG")){
      arrayProtein.push("Arginine");
    } else if ((n === "UAU") || (n === "UAC")){
      arrayProtein.push("Tyrosine");
    }
  })
console.log(arrayProtein.join('-'));
}

console.log(" ARN CCGUCGUUGCGCUACAGC donne les protéines suivantes :");
arn = 'CCGUCGUUGCGCUACAGC';
console.log(protein(arn));

console.log(" ARN CCUCGCCGGUACUUCUCG donne les protéines suivantes :");
arn = 'CCUCGCCGGUACUUCUCG';
console.log(protein(arn));