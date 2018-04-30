<template>    
    <div class="navbar-fixed">

<!--nav>
    <div class="nav-wrapper">
      <a href="#" data-target="mobile-demo" class="button-collapse show-on-large"><i class="material-icons">menu</i></a>
      <a href="#" data-activates="mobile-demo" class="button-collapse show-on-large"><i class="material-icons">menu</i></a>
      <a href="https://codepen.io/collection/nbBqgY/" class="brand-logo" target="_blank">Materialize Framework</a>
      <ul class="right">
        <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Sass</a></li>
        <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Components</a></li>
        <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Javascript</a></li>
        <li><a href="https://codepen.io/collection/nbBqgY/" target="_blank">Mobile</a></li>
      </ul>
      
      <ul class="side-nav grey darken-2" id="mobile-demo">
        
        
        <li class="sidenav-header blue">
          <div class="row">
            <div class="col s4">
                <img src="https://gravatar.com/avatar/961997eb7fd5c22b3e12fb3c8ca14e11?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" width="48px" height="48px" alt="" class="circle responsive-img valign profile-image">
            </div>
            <div class="col s8">
                <a class="btn-flat dropdown-button waves-effect waves-light white-text" href="#" data-activates="profile-dropdown">Jay<i class="mdi-navigation-arrow-drop-down right"></i></a>
                <ul id="profile-dropdown" class="dropdown-content">
                    <li><a href="#"><i class="material-icons">person</i>Profile</a></li>
                    <li><a href="#"><i class="material-icons">settings</i>Setting</a></li>
                    <li><a href="#"><i class="material-icons">help</i>Help</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="material-icons">lock</i>Lock</a></li>
                    <li><a href="#"><i class="material-icons">exit_to_app</i>Logout</a></li>
                </ul>
            </div>
          </div>
        </li>
        
        <li class="blue">
          <ul class="collapsible collapsible-accordion">
              <li>
                <a class="collapsible-header white-text waves-effect waves-blue "><i class="material-icons white-text">language</i>Language <i class="material-icons right white-text" style="margin-right:0;">arrow_drop_down</i></a>
                <div class="collapsible-body z-depth-3">
                  <ul>
                    <li><a class="waves-effect waves-blue" href="#">English</a></li>                    
                    <li><a class="waves-effect waves-blue" href="#">Nederlands</a></li>
                    <li><a class="waves-effect waves-blue" href="#">Français</a></li>
                    <li><a class="waves-effect waves-blue" href="#">Deutsch</a></li>                    
                    <li><a class="waves-effect waves-blue" href="#">Português</a></li>                    
                    <li><a class="waves-effect waves-blue" href="#">Español</a></li>
                    <li><a class="waves-effect waves-blue" href="#">Svenska</a></li>                
                    <li><a class="waves-effect waves-blue" href="#">Türkçe</a></li>
                    <li><div class="divider"></div></li>
                  </ul>
                </div>
              </li>
          </ul>
        </li>
        
        
        
        <li class="white">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_special</i>Layouts <i class="material-icons right" style="margin-right:0;">arrow_drop_down</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a class="waves-effect waves-blue" href="#"><i class="material-icons">fullscreen</i>Full Screen<span class="new badge right yellow grey lighten-1" data-badge-caption="updated"></span></a></li>
                  <li><a class="waves-effect waves-blue" href="#"><i class="material-icons">swap_horiz</i>Horizontal Menu<span class="new badge right yellow darken-3"></span></a></li>
                  <li><div class="divider"></div></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li class="white">
          <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header waves-effect waves-blue"><i class="material-icons">folder_open</i>A submenu <i class="material-icons right" style="margin-right:0;">arrow_drop_down</i></a>
              <div class="collapsible-body">
                <ul>
                  <li><a class="waves-effect waves-blue" href="#"><i class="material-icons">fullscreen</i>Full Screen</a></li>
                  <li><a class="waves-effect waves-blue" href="#"><i class="material-icons">swap_horiz</i>Horizontal Menu</a></li>
                  <li><div class="divider"></div></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        
        <li class="white"><a href="#" class="waves-effect waves-blue"><i class="material-icons">mail</i>Menu item</a></li>
        <li class="white"><a href="#" class="waves-effect waves-blue"><i class="material-icons">call</i> Menu item</a></li>
        <li class="white"><a href="#" class="waves-effect waves-blue"><i class="material-icons">android</i> Menu item</a></li>
        <li class="white"><a href="#" class="waves-effect waves-blue"><i class="material-icons">dialpad</i> Menu item</a></li>
        <li class="white"><div class="divider"></div></li>
        <li class="white"><a href="#" class="waves-effect waves-blue"><i class="material-icons">language</i> Menu item<span class="new badge right yellow darken-3"></span></a></li>
        
        <li class="sidenav-footer grey darken-2">
          <div class="row">  
            <div class="social-icons">
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-linkedin-square"></i></a>
              </div>
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-facebook-official"></i></a>
              </div>
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-twitter"></i></a>
              </div>
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-google-plus"></i></a>
              </div>
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-pinterest"></i></a>
              </div>
              <div class="col s2">
                <a href="#"><i class="fa fa-lg fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      
    </div>
  </nav-->




  <nav class="white">
    <div class="nav-wrapper">
      <div class="row">
        <div class="col s12">
          <a href="#"><img class="responsive-img" width="60px" id="logo" src="@/assets/GrupoG.png"/></a>
          <a href="#" data-target="nav-mobile" class="right sidenav-trigger"><i class="material-icons icon-red">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
            <li v-if="isLoggedIn"><router-link to="/"><span class="red-text">HOME</span></router-link></li>
            <li v-if="isLoggedIn"><router-link to="/map"><span class="red-text">MAP</span></router-link></li>
            <li v-if="isLoggedIn"><router-link to="/page"><span class="red-text">ADMISSION</span><i class="material-icons right icon-red">touch_app</i></router-link></li>
            <li v-if="isLoggedIn"><router-link to="/course"><span class="red-text">COURSES</span><i class="material-icons right icon-red">search</i></router-link></li>
            <li v-if="isLoggedIn"><button v-on:click="logout" class="btn btn-flat white"><span class="red-text">LOGOUT</span><i class="material-icons right icon-red">exit_to_app</i></button></li>
            <li v-if="!isLoggedIn"><router-link to="/login"><span class="red-text">LOGIN</span></router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/register"><span class="red-text">REGISTER</span></router-link></li>                        
          </ul>        
        </div>
      </div>

        <!--li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li-->
    </div>
  </nav>  

  <ul id="nav-mobile" class="side-nav hide-on-large-only">
    <div class="row">
      <div class="col s8">                              
        <ul class="sidenav-header cyan">
          <hr>
          <li>            
            <!--a href="#"><img width="100px" class="circle responsive-img valign profile-image" src="@/assets/GrupoG.png"></a-->
            <a href="#name"><span class="black-text name">WebShore</span></a>            
          </li>
          <li>                        
            <a href="#email"><span class="black-text email">{{currentUser}}</span></a>
          </li>
        </ul>
        <ul class="sidenav-footer white">                              
          <li v-if="isLoggedIn"><router-link to="/"><span class="red-text">HOME</span></router-link></li>
          <li v-if="isLoggedIn"><router-link to="/map"><span class="red-text">MAP</span></router-link></li>
          <li v-if="isLoggedIn"><router-link to="/page"><span class="red-text">ADMISSION</span></router-link></li>
          <li v-if="isLoggedIn"><router-link to="/course"><span class="red-text">COURSES</span></router-link></li>
          <li v-if="isLoggedIn"><button v-on:click="logout" class="btn btn-flat"><span class="dark red-text text-darken-5">LOGOUT</span><i class="material-icons right icon-red">exit_to_app</i></button></li>
          <li v-if="!isLoggedIn"><router-link to="/login"><span class="red-text">LOGIN</span></router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/register"><span class="red-text">REGISTER</span></router-link></li>                                                    
        </ul>
      </div>
    </div>
  </ul>

  
  <!-- Gitter Chat Link -->
  <div class="fixed-action-btn"><a class="btn-floating btn-large red" href="https://gitter.im/Dogfalo/materialize" target="_blank"><i class="large material-icons">chat</i></a></div>
  </div>
  
<!-- -->
<!--header>
	<nav>
		<div class="nav-wrapper">
			<div class="row">
				<div class="col s12">
					<a id="burger-icon-1" href="#" data-target="sidebar-1" class="left sidenav-trigger show-on-medium"><i class="material-icons">menu</i></a>
					<a id="burger-icon-2" href="#" data-target="sidebar-2" class="right sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
					<a href="https://codepen.io/collection/nbBqgY" target="_blank" class="brand-logo">Materialize Framework</a>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li><a href="https://codepen.io/collection/nbBqgY" target="_blank" >Menu item</a></li>
						<li><a href="https://codepen.io/collection/nbBqgY" target="_blank" >Menu item</a></li>
						<li><a href="https://codepen.io/collection/nbBqgY" target="_blank" >Menu item</a></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header-->


<!-- SIDEBAR 1 - HAS .SIDENAV-FIXED -->
<!--ul id="sidebar-1" class="sidenav sidenav-fixed">
	<li>
		<div class="user-view">
			<div class="background">
				<img src="http://placehold.it/640x480/555">
			</div>
			<a href="#!user"><img class="circle" src="http://placehold.it/512x512/333"></a>
			<a href="#!name"><span class="white-text name">John Doe</span></a>
			<a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
		</div>
	</li>
	<li><a href="https://github.com/dogfalo/materialize/" target="_blank">Github</a></li>
	<li><a href="https://twitter.com/MaterializeCSS" target="_blank">Twitter</a></li>
	<li><a href="http://next.materializecss.com/getting-started.html" target="_blank">Docs</a></li>
</ul-->




<!-- SIDEBAR 2 - DOES NOT HAVE .SIDENAV-FIXED -->
<!--ul id="sidebar-2" class="sidenav right-aligned">
	<li><a class="subheader">Sidebar 2</a></li>
	<li><a href="https://github.com/dogfalo/materialize/" target="_blank">Github</a></li>
	<li><a href="https://twitter.com/MaterializeCSS" target="_blank">Twitter</a></li>
	<li><a href="http://next.materializecss.com/getting-started.html" target="_blank">Docs</a></li>
	<li><div class="divider"></div></li>
</ul>




<main>
	<div class="container">
		<h1 class="center">Dual sidebars</h1>
		<p>
			On an ultra wide screen (21:9), you may want to have the second sidebar of a dual sidebar setup in Materialize become visible automatically. This method will allow you to do that. The second sidebar behaves like a mobile sidebar until the window is wide enough that it could obviously safely accomodate it in it's fixed state. The class <strong>.sidebar-fixed</strong> is added via Javascript.
		</p>
		<p>
			To see this in action resize your window on a very wide screeen. (The breakpoint is set for 1925px).
		</p>
		<p class="center">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/BDlhSNAuHw8?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</p>
	</div>
</main-->


</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';
//Sidenav inicializador no me funciono
//const sideNav = document.querySelector('.sidenav');
//M.Sidenav.init(sideNav, {});

$(document).ready(function(){
	// SIDENAV
	$('.sidenav').sidenav();
	//$('.sidenav').sidenav('open');
});

/*
// iniciacion de jquery para el sidenav de materializecss
$(document).ready(function(){
    $('.sidenav').sidenav();
});
*/
/*
// SIDEBAR
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      //closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  // START OPEN
  $('.button-collapse').sideNav('show');
});
*/
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

/* FIX SIDENAV SPACING */
.sidenav li>a {
  padding: 0 16px;
}
/*FIX SIDEBAR DIVIDERS */
.side-nav .divider {
  margin:0;
  height:8px;
  border-bottom:1px solid #e0e0e0;
  background-color: transparent;
}

/*SIDENAV HEADER */

.sidenav-header {
  /*background: url("../assets/GrupoG.png") no-repeat center center;
  background-size: cover;
  */
  margin-bottom: 0px;  
  padding: 50px 0px 0px 0px;  
}
.sidenav-header.row {
  margin-bottom: 0;  
}

.sidenav-footer {
  margin-bottom: 0px;
  padding: 0;
}

.sidenav-footer.row {
  margin-bottom: 0;  
}

.sidenav-footer.row.social-icons.a {
  opacity: 0.5;
  padding: 0;
  text-align: center;              
}

.sidenav-footer.row.social-icons.a.hover {
  background-color: inherit;
  opacity: 1;        
}
/*   */

.sidenav {
	background-color: #e0e0e0;
	color: rgba(255,255,255,0.5);
}

.sidenav.subheader {
  color: rgba(255,255,255,0.5);
}
.sidenav.subheader.divider {
  background-color: rgba(255,255,255,0.2);
}
.ul li>a {
  color: rgba(255,255,255,0.5);
  padding: 0;
}
.sidenav li>a>i>material-icons {
  color: rgba(255,255,255,0.5);
}		

</style>