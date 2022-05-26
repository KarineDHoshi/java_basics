function transferRNA(codon){
    if(codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC"){
        return "Sérine";
    }else if(codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG"){
        return "Proline";
    }else if(codon === "UUA" || codon === "UUG"){
        return "Leucine";
    }else if(codon === "UUU" || codon === "UUC"){
        return "Phénylalanine";
    }else if(codon === "CGU" ||codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){
        return "Arginine";
    }else if(codon === "UAU" || codon === "UAC"){
        return "Tyrosine";
    }
}

function ribosome(rna){
    let proteinChaine = [];

    for(let index = 0; index <= (rna.length - 3); index += 3){
        proteinChaine.push(transferRNA(rna[index] + rna[index + 1] + rna[index + 2]));
    }

    console.log(`La molécule d'ARN "${rna}" code pour la chaine protéique suivante :`);
    console.log(proteinChaine.join("-"));
}


ribosome("UUACCGUCGUUGCGCUACAGC")
console.log()
ribosome("CCUCGCCGGUACUUCUCG")