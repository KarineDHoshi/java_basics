function factorial(input){
    if(input == 1){
    return 1;
    }
    else if(input < 1){
      return 0;
    }
    else{
      return input * factorial(input - 1);
    }
  }
  
  Input = prompt("De quel nombre veux-tu connaitre la factorielle ?")
  console.log(`Le résultat est : ${factorial(Input)}`);