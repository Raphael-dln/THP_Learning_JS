var chooseSentence = prompt("Que veux-tu dire à AcnéBot ?");

while (chooseSentence != "exit") {
  if (chooseSentence.endsWith("?")){
    console.log("Ouais Ouais...");
  } else if (chooseSentence === chooseSentence.toUpperCase() && chooseSentence !== chooseSentence.toLowerCase()){
      console.log("Pwa, calme-toi...");
  } else if ((chooseSentence.includes("Fortnite")) || (chooseSentence.includes("fortnite"))) {
      console.log("on s'fait une partie soum-soum ?");
  } else if (chooseSentence === ""){
    console.log("t'es en PLS ?");
  } else {
    console.log("balek");
  }
  chooseSentence = prompt("Que veux-tu dire à AcnéBot ?");
}