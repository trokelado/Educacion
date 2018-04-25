<template>  
  <div class="content">
    <div class="container-fluid">

      <div class="background">        
        <div class="row">
          <div class="col s12 m8">
            <div class="sp"></div>                        
            <h5 class="flow-text light grey-text text-lighten-3">ADMISSION 18</h5>
            <h1 class="light grey-text text-lighten-3">ARE YOU READY TO APPLY?</h1>
            <p class="flow-text light grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">GET STARTED NOW</span></button>
          </div>
        </div>
      </div>
      <blockquote>
        <p class="flow-text light black-text text-lighten-1">Featured Courses.</p>        
      </blockquote>
      <p class="flow-text light grey-text text-lighten-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      <!--div class="slider">
        <ul class="slides">
          <li>
            <img src="@/assets/banner.png"> 
            <div class="caption left-align">
              <h5>ADMISSION 18</h5>
              <h1>ARE YOU READY</h1>
              <h1>TO APPLY?</h1>
              <h5 class="light grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</h5>
              <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">GET STARTED NOW</span></button>
            </div>
          </li>
          <li>
            <img src="@/assets/Chano.jpg"> 
            <div class="caption left-align">
              <h5>ADMISSION 18</h5>
              <h1>ARE YOU READY</h1>
              <h1>TO APPLY?</h1>
              <h5 class="light grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</h5>
              <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">GET STARTED NOW</span></button>
            </div>
          </li>
          <li>
            <img src="@/assets/BienvenidosB.jpg"> 
            <div class="caption left-align">
              <h5>ADMISSION 18</h5>
              <h1>ARE YOU READY</h1>
              <h1>TO APPLY?</h1>
              <h5 class="light grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</h5>
              <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">GET STARTED NOW</span></button>
            </div>
          </li>          
        </ul>
      </div-->

      <div class="slider">
        <ul class="slides">
          <li>
            <div class="row">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Courses10-570x360.jpg">
                    <span class="card-title">Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Computing and Arts</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Courses16-570x360.jpg">
                    <span class="card-title">Agricultural Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Agro Management</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Campuslife2.png">
                    <span class="card-title">Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Electrical Engineering</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
            </div>  
          </li>
          <li>
            <div class="row">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/blog8-380x180.jpg">
                    <span class="card-title">Marine Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Oceanography</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/blog9-380x180.jpg">
                    <span class="card-title">Earth Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Geology</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/blog10-380x180.jpg">
                    <span class="card-title">Science</span>
                  </div>
                  <div class="card-content">
                    <h5>Mathematics</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
            </div>           
          </li>
          <li>
            <div class="row">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Courses2-570x360.jpg">
                    <span class="card-title">Art</span>
                  </div>
                  <div class="card-content">
                    <h5>Sculture</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Courses3-570x360.jpg">
                    <span class="card-title">Art</span>
                  </div>
                  <div class="card-content">
                    <h5>Painting</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img src="@/assets/Courses4-570x360.jpg">
                    <span class="card-title">Art</span>
                  </div>
                  <div class="card-content">
                    <h5>Music</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                  </div>
                  <div class="card-action">
                    <!--a href="#">This is a link</a-->
                    <button v-on:click="apply" class="btn btn-flat red"><span class="white-text">APPLY NOW</span></button>                    
                  </div>
                </div>
              </div>
            </div>            
          </li>          
        </ul>
      </div> 

    </div>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l3 s12">                
                <router-link to="/about"><span class="white-text">ABOUT EDUCON</span></router-link>
                <p class="grey-text text-lighten-4">23621 15 mail Road C104 Clinton MI. 48035 New York, USA</p>
              </div>
              <div class="col l3 s12">                
                <router-link to="/page"><span class="white-text">ADMISSION</span></router-link>
                <p class="grey-text text-lighten-4">Forms and Admission materials Guidance Documents</p>                
              </div>
              <div class="col l3 s12">                
                <router-link to="/course"><span class="white-text">COURSES</span></router-link>
                <p class="grey-text text-lighten-4">Forms and Admission materials Guidance Documents</p>
              </div>
              <div class="col l3 s12">              
                <router-link to="/news"><span class="white-text">NEWSLETTER</span></router-link>
                <p class="grey-text text-lighten-4">Enter your Email and we´ll send you more information</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © Copyright EDUCON 2018
            <!--a class="grey-text text-lighten-4 right" href="#!">More Links</a-->
            </div>
          </div>
        </footer>

  </div>
</template>

<script>
//Slider
/*
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 5000
});
*/

// iniciacion de jquery para el slider de materializecss
$(document).ready(function(){
  $('.slider').slider({    
    interval: 4000    
  });
});

// iniciacion de jquery para materialbox de materializecss
$(document).ready(function(){
    $('.materialboxed').materialbox();
});

export default {
  name: 'HelloWorld',
    
  data () {
    return {
      //msg: 'Welcome',
      //slides: 7
    }
  },
  methods: {
    apply: function() {        
        this.$router.push('/page'); //ve a la pagina de admision
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0 10px;
  padding: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.background {
    background-image: url("../assets/banner.png");
    font-weight: bold;
    font-family: 'Arial Black', 'Times New Roman', 'Verdana';    
    height: 500px;
}
.slider .slides li .caption {
    position:absolute;
    height: 800px;
    top: 20%;
}
.card { 
 height: 500px; 
 margin-top: 2%; 
}
.card-image { 
 height: 180px;
}
.sp {    
    height: 50px;
}
.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

</style>
