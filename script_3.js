var num = Number(prompt("Une pyramide avec combien d'étages?"));


function pyramid(num){
    brick = "#";
    while(brick.length <= num){
      console.log(brick.padStart(num," "));
      brick += "#";
    }
};

pyramid(num);
alert("done");

