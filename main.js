console.log('Hi')
/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const listEl = document.getElementById("list");
let email_arr = [];


for (let i = 0; i < 10; i++) {
  const api_url = 'https://flynn.boolean.careers/exercises/api/random/mail';
    axios.get(api_url)
    .then(response => {
        const email = response.data.response;
        email_arr.push(email);
        //creo un nuovo elemento <li> con le classi di bootstrap

        const li = document.createElement('li');
        li.className = 'list-group-item'
        li.textContent = email;

        //inserisco l`elemento nella lista
        listEl.appendChild(li);
        console.log(email_arr)
    })
    .catch(error =>{
        //codice da eseguir in caso di errore
        console.log(error);
    });  
}
