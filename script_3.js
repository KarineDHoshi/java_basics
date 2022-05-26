
function Loop(floors){ 
  for(let count = floors; count != 0; count--){
    console.log(" ".repeat(count - 1) + "#".repeat(floors - (count - 1)));
  }
}

Input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if(!parseInt(Input)){
  console.log("Nombre incorrect?, essaie de rafraichir la page.");
}else{
    console.log(Loop(Input));
  }