// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
       emails: [],
    },
    mounted() {
       this.generate10Emails();
    },
    methods: {
       addEmail() {
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=> {
                this.emails.push(result.data.response);
            })
       },
       generate10Emails() {
          for (let i = 0; i < 10; i++){
              this.addEmail();
          }
       },
    }
 });