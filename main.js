console.log('Hi')
/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const api_url = 'https://flynn.boolean.careers/exercises/api/random/mail';
axios.get(api_url)
    .then(response => {
        //codice per far qualcosa con la risposta
        console.log(response);
        const result = response.data;
        console.log(result);
    })
    .catch(error =>{
        //codice da eseguir in caso di errore
        console.log(error);
    });