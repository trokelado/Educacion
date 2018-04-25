<template>    
    <div class="navbar-fixed">
        <nav class="white">
            <div class="container-fluid">
                <div class="nav-wrapper">
                    <div class="left">                        
                        <a href="" class="brand-logo"><img class="responsive-img" id="logo" src="@/assets/logo.png"/></a>
                        <!--router-link to="/" class="brand-logo" >Webshore</router-link-->
                        <!--a href="#" data-target="mobil-nav" class="sidenav-trigger"></a>
                        <i class="material-icons">menu</i-->
                    </div>
                    <ul class="right">
                        <li v-if="isLoggedIn"><span class="email black-text hide-on-med-and-down">{{currentUser}}</span></li>
                        <li class="hide-on-med-and-down" v-if="isLoggedIn"><router-link to="/"><span class="red-text">HOME</span></router-link></li>
                        <li class="hide-on-med-and-down" v-if="isLoggedIn"><router-link to="/map"><span class="red-text">MAP</span></router-link></li>
                        <li class="hide-on-med-and-down" v-if="isLoggedIn"><router-link to="/page"><span class="red-text">ADMISSION</span><i class="material-icons right icon-red">touch_app</i></router-link></li>
                        <li class="hide-on-med-and-down" v-if="isLoggedIn"><router-link to="/course"><span class="red-text">COURSES</span><i class="material-icons right icon-red">search</i></router-link></li>
                        <li v-if="!isLoggedIn"><router-link to="/login"><span class="red-text">LOGIN</span></router-link></li>
                        <li v-if="!isLoggedIn"><router-link to="/register"><span class="red-text">REGISTER</span></router-link></li>
                        <li v-if="isLoggedIn"><button v-on:click="logout" class="btn btn-flat white"><span class="red-text">LOGOUT</span></button></li>
                    </ul>                
                </div>            
            </div>
        </nav>
        <!--div>
            <ul class="sidenav" id="mobile-nav">        
                <li v-if="isLoggedIn"><router-link to="/">Home</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/map">Map</router-link></li>        
            </ul>
        </div--> 
    </div>
    
</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';
//Sidenav inicializador no me funciono
//const sideNav = document.querySelector('.sidenav');
//M.Sidenav.init(sideNav, {});

export default {
  name: 'navbar',
  data: function() {
    return{
        isLoggedIn: false,
        currentUser: false
    }
  },
  created() {
    if(Firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = Firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {        
        Firebase
        .auth()
        .signOut()
        .then(() => {                        
            //this.$router.push('/login');            
            this.$router.go({path: this.$router.push}); //ve a la pagina de inicio haciendo reload
        });        
    }
  }
}
</script>

<style scoped>
.email {
    padding-right: 10px;
}
i.icon-red {
    color: red;
}
.nav-wrapper .brand-logo img {
  height: 50px;
  padding: 10px 0px 0px 0px;
}
</style>