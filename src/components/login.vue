<template>
    <div>
        <div class="content">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel cyan white-text center">
                        <h3>login</h3>
                        <form id="login">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>                                                           
                                <input type="text" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>                                 
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>                                                            
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>                                
                            </div>
                            <button v-on:click="login" class="btn btn-large grey lighten-4 black-text">Submit</button>
                        </form>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';

export default {
  name: 'login',
  data: function() {
    return{
        email: '',
        password: ''
    }
  },
  methods: {
    login: function(e) {
        console.log("toy en el login");
        Firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
            //alert('Acount created for ${user.email}');
            alert('You are loged in as ' + user.email);
            //this.$router.push('/'); //ve a la pagina de inicio
            this.$router.go({path: this.$router.push}); //ve a la pagina de inicio haciendo reload
        },
        err => {
            alert(err.message);
        })
        e.preventDefault();
    }
  }
}
</script>

<style scoped>
    .page {
        width: 100%;
        padding: 2rem;
        /*box-shadow: 3rem 0 5rem 3rem #c1f5ff;*/
    }

    .content, .title {
        border-style: none;
        border-radius: 0.25rem;
        border: solid 0px lightgray;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 1.25rem;
/*
        text-align: center;        
        margin-top: 60px;        
        box-shadow: 3rem 0 5rem 3rem #c1f5ff;
        */
    }

    .content:focus, .title:focus {
        outline: 0;
    }

    .content {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        resize: vertical;
        font-size: 1.5rem;
        padding: 0.5rem;
        height: 20rem;
    }

    .title {
        font-size: 2rem;
        padding: 0.5rem 1rem;
    }

    label {
        margin-bottom: 0.5rem;
        display: inline-block;
    }

    button {
        border-style: none;
        padding: 0.5rem 0.75rem;
        background-color: #44abc3;
        margin-right: 1rem;
        border-radius: 0.25rem;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #368ea2;
    }
</style>