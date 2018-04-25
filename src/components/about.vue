<template>  
  <div class="content">
    <div class="container-fluid">      

      <div class="parallax-container">
        <div class="parallax"><img src="@/assets/banner.png"></div>
      </div>
      <div class="section white">
        <div class="row container">
          <h2 class="header">EDUCON</h2>
          <h4 class="header">Studying at EDUCON University makes a difference</h4>
          <p class="grey-text text-darken-3 lighten-3">EDUCON University is one of the 100 highest ranked universities in the world
               and USA’s largest institution for higher education with top quality education and outstanding research in a wide
                variety of fields. 34 000 students are currently studying here and we offer 75 master’s programmes taught 
                in English within Science and Human science.</p>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img src="@/assets/BienvenidosB.jpg"></div>
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


// iniciacion de jquery para el parallax de materializecss
$(document).ready(function(){
  $('.parallax').parallax();
});

/*
// iniciacion de jquery para materialbox de materializecss
$(document).ready(function(){
    $('.materialboxed').materialbox();
});
  */
export default {
  name: 'About',
    
  data () {
    return {
      msg: 'Welcome',
      //slides: 7
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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