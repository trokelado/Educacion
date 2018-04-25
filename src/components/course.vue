<template>  
  <div class="content">
    <div class="container-fluid">
      <!-- Este carousel es de materialize y requiere de inicializacion con jquery -->
      <!--div class="carousel">
        <a class="carousel-item" href="#one!"><img src="@/assets/GrupoG.png"></a>
        <a class="carousel-item" href="#two!"><img src="@/assets/Chano.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="@/assets/Cervantes.png"></a>
        <a class="carousel-item" href="#four!"><img src="@/assets/GrupoG.png"></a>
        <a class="carousel-item" href="#five!"><img src="@/assets/GrupoG.png"></a>
      </div-->

      <!--div class="parallax-container">
        <div class="parallax"><img src="@/assets/banner.png"></div>
      </div>
      <div class="section white">
        <div class="row container">
          <h2 class="header">Parallax</h2>
          <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img src="@/assets/BienvenidosB.jpg"></div>
      </div-->

      <div class="slider">
        <ul class="slides">
          <li>
            <img src="@/assets/Bienvenidos.jpg"> 
            <div class="caption left-align">
              <h3>Wood Engraving !</h3>
              <h5 class="light grey-text text-lighten-3">Upon precious woods.</h5>
            </div>
          </li>
          <li>
            <img src="@/assets/Chano.jpg"> 
            <div class="caption left-align">
              <h3>Wood Engraving !</h3>
              <h5 class="light grey-text text-lighten-3">Upon precious woods.</h5>
            </div>
          </li>
          <li>
            <img src="@/assets/BienvenidosB.jpg"> 
            <div class="caption right-align">
              <h3>Wood Engraving !</h3>
              <h5 class="light grey-text text-lighten-3">Upon precious woods.</h5>
            </div>
          </li>          
        </ul>
      </div> 

      <section id="gallery" class="section section-gallery scrollspy">
        <div class="container">
          <h4 class="center">
            <span class="teal-text">Foto</span> Galery
          </h4>
          <div class="row">
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beach" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?nature" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?travel" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beach, travel" alt="" class="materialboxed responsive-img">  
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?dog" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?cat" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?bird" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?eagle" alt="" class="materialboxed responsive-img">  
            </div>
          </div>
          <div class="row">
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?whale" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?bike" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?fox" alt="" class="materialboxed responsive-img">  
            </div>
            <div class="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?tiger" alt="" class="materialboxed responsive-img">  
            </div>
          </div>
        </div>
      </section>

      <!-- los carouseles 3d vienen de https://github.com/wlada/vue-carousel-3d  -->
      <!--div id="example">
        <carousel-3d @after-slide-change="onAfterSlideChange" @before-slide-change="onBeforeSlideChange" @last-slide="onLastSlide">
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <img src="@/assets/GrupoG.png">
          </slide>
        </carousel-3d>
      </div-->

      <!--div id="example">
        <carousel-3d :controls-visible="true" :clickable="false">
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <figure>
              <img src="@/assets/GrupoG.png">
              <figcaption>
                The sky is the limit only for those who aren't afraid to fly!
                          The sky is the limit only for those who aren't afraid to fly!

              </figcaption>
            </figure>
          </slide>
        </carousel-3d>
      </div-->


      <!--i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>      
      <span class="sr-only">Loading...</span-->

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
//import { Carousel3d, Slide } from 'vue-carousel-3d';
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
/*
// iniciacion de jquery para el parallax de materializecss
$(document).ready(function(){
  $('.parallax').parallax();
});
*/
// iniciacion de jquery para el slider de materializecss
$(document).ready(function(){
  $('.slider').slider();
});

// iniciacion de jquery para el carousel de materializecss
/*
$(document).ready(function(){
    $('.carousel').carousel();
  });
*/
// iniciacion de jquery para materialbox de materializecss
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
export default {
  name: 'HelloWorld',
    
  data () {
    return {
      msg: 'Welcome',
      //slides: 7
    }
  },
  /*
  methods: {
    onAfterSlideChange(index) {
      console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    onBeforeSlideChange(index) {
      console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    onLastSlide(index) {
      console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
    }
  },
  */
  /*    
  components: {
    Carousel3d,
    Slide
  }
  */
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