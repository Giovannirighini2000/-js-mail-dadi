// ESERCIZIO EMAIL 

// CREZIONE ARRAY CON TOT EMAIL DELL'UTENTE    
// ESTRAPOLARE I DATI CREATI E VEDERLI (NELLA CONSOLE)

// FARE UN PROMPT CHE CHIEDE ALL'UTENTE DELLA PAGINA LA SUA EMAIL 

// FARE IL CONFRONTO DEI DATI CREATI DALL'ARRAY E DEI DATI INVIATI DAL PROMPT, CON LA VERIFICA DELL'UGUAGLIANZA    
// DOPO AVER VERIFICO L'ESITO POSITIVO O NEGATIVO STAMPALO NELLA CONSOLE  L'ESITO

// CREZIONE ARRAY CON TOT EMAIL DELL'UTENTE   
const emailUtenteArray = ['gianluca@gmail.com','riccardo@gmail.com','giuseppe@gmail.com','emanuele@gmail.com','andriano@gmail.com','giovanni@gmail.com']
console.log(emailUtenteArray)

// // VEDIAMO I VALORI DELL'INDECE DELLA CONSOLE

// emailUtenteArray[0] = 'gianluca@gmail.com'
// emailUtenteArray[1] = 'riccardo@gmail.com'
// emailUtenteArray[2] = 'giuseppe@gmail.com'
// emailUtenteArray[3] = 'emanuele@gmail.com'
// emailUtenteArray[4] = 'andriano@gmail.com'
// emailUtenteArray[5] = 'giovanni@gmail.com'

// FARE UN PROMPT CHE CHIEDE ALL'UTENTE DELLA PAGINA LA SUA EMAIL 
const emailUtentePropmt = prompt('Inserisci la tua email')
console.log(emailUtentePropmt)

// ESEGUIRE IL CONFRONTO DEI DATI
if (emailUtenteArray[0] === emailUtentePropmt){
    console.log('true')
}
else if (emailUtenteArray[1] === emailUtentePropmt){
    console.log('true')
}
else if (emailUtenteArray[2] === emailUtentePropmt){
    console.log('true')
}
else if (emailUtenteArray[3] === emailUtentePropmt){
    console.log('true')
}
else if (emailUtenteArray[4] === emailUtentePropmt){
    console.log('true')
}
else if (emailUtenteArray[5] === emailUtentePropmt){
    console.log('true')
}
else{
    console.log('false')
}

// ESERCIZIO GIOCO DEI DADI 
// GENERARE I NUMERI IN DUE VARIABILI
// STABILIRE LE CONDIZIONI 

// GENERARE DUE NUMERI RANDOM PER DUE GIOCATORI DA 1 A 6
// MEMORIZZARE I DUE NUMERI USCITI IN DUE VARIABILI   
    const num1Pc = Math.round(Math.random()*5+1);
	const num2Player = Math.round(Math.random()*5+1);
    // vediamo i risultati
    console.log(num1Pc)
    console.log(num2Player)
    // CONFRONTARE I DUE NUMERI USCITI   
    // STABILIRE IL VINCITORE  
    if(num1Pc>num2Player){
        console.log('VINCE IL PC')
    }
    else if(num1Pc<num2Player){
        console.log('VINCE IL PLAYER')
    }
    else{
        console.log('PAREGGIO')
    }



 





