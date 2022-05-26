console.log("Il fait tout comme un vrai adolescent ! ");
console.log("Ton Acné-Bot va te répondre. ");

while(true){
    talk = prompt("Que veux tu dires à ton Acné-Bot?");
    
    if(talk[talk.length - 1] === "?"){
        console.log("Ouais Ouais...");
    }else if(talk === talk.toUpperCase() && talk !== ""){
        console.log("Pwa, calme-toi...");
    }else if(talk.indexOf("Fortnite") >= 0){
        console.log("On s' fait une partie soum-soum ?");
    }else if(talk === ""){
        console.log("T'es en PLS ?");
    }else {
        console.log("Balek");
    };

};