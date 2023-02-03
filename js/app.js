// ESERCIZIO EMAIL 



// CREARE UNA VARIABILE DI COLLEMENTO PER  ARRAY
// CREZIONE ARRAY CON TOT EMAIL DELL'UTENTE    
// ESTRAPOLARE I DATI CREATI E RIPORTARLI FUORI ARRAY  IN UNA STRINGA (NELLA CONSOLE)


// FARE UN PROMPT CHE CHIEDE ALL'UTENTE DELLA PAGINA LA SUA EMAIL 
// RIPORTARE I DATI DEL PROMPT  IN UNA STRINGA



// FARE IL CONFRONTO DEI DATI CREATI DALL'ARRAY E DEI DATI INVIATI DAL PROMPT, CON LA VERIFICA DELL'UGUAGLIANZA    
// DOPO AVER VERIFICO L'ESITO POSITIVO O NEGATIVO STAMPALO NELLA CONSOLE  L'ESITO



// CREZIONE ARRAY CON TOT EMAIL DELL'UTENTE   
const emailUtenteArray = ['gianluca@gmail.com','riccardo@gmail.com','giuseppe@gmail.com','emanuele@gmail.com','andriano@gmail.com','giovanni@gmail.com']
console.log(emailUtenteArray)

// SOSTITUIAMO I VALORI DELL'INDECE

emailUtenteArray[0] = 'gianluca@gmail.com'
emailUtenteArray[1] = 'riccardo@gmail.com'
emailUtenteArray[2] = 'giuseppe@gmail.com'
emailUtenteArray[3] = 'emanuele@gmail.com'
emailUtenteArray[4] = 'andriano@gmail.com'
emailUtenteArray[5] = 'giovanni@gmail.com'

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
    console.log('E falso')
}



// ESERCIZIO 