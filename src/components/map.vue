<template>  
  <div class="content">
    <div id="app" class="container-fluid">                                                
      <div class="row">      
        <!--div class="col s2">
          <v-select v-model="selectedMap" :options="basemaps"></v-select>          
        </div-->
        <div class="col s2">
          <v-select v-model="selectedMode" :options="['Consultar', 'Navegar', 'Agregar']"></v-select> 
        </div>
        <!--div class="col s2">
          <v-select v-model="selectedFigure" :options="['Puntos', 'Lineas', 'Poligonos', 'Proyectos']"></v-select> 
        </div-->
        <div class="col s4">
          <v-select v-model="selectedLibrary" label="name" :options="libraries"></v-select>          
        </div>
        <div class="col s4">
          <v-select v-model="selectedBook" label="title" :options="books"></v-select>          
        </div>
      </div>            
      <div class="row">
      <div class="col s12"><span class="flow-text">Last two textBoxes are in cascade</span></div>
      <!--div class="col s6 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div-->
    </div>
    </div> 
  </div>   
</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';

let database = firebaseInit.database().ref();

let linksRef = Firebase.database().ref('links');
let librariesRef = Firebase.database().ref('libraries').orderByChild('name');
let booksRef = Firebase.database().ref('books').orderByChild('title');

export default {
  name: 'app',
  firebase: {
    links: linksRef,
    libraries: librariesRef,
    books: booksRef
  },
  props: {

  },
  data() {
    return {
      selectedFigure: '',
      selectedMap: '',      
      selectedMode: '',      
      selectedLibrary: '',
      selectedBook: '',            
      basemaps: [
            {value: 'gray', label: 'Gris claro'},
            {value: 'dark-gray', label: 'Gris obscuro'},
            {value: 'hybrid', label: 'Hibrido'},
            {value: 'national-geographic', label: 'Nat.Geogra'},
            {value: 'oceans', label: 'Oceánico'},
            {value: 'osm', label: 'Osm'},
            {value: 'satellite', label: 'Satelital'},            
            {value: 'topo', label: 'Topografico'},
            {value: 'streets', label: 'Urbano'}                                                
      ]                  
    }            
  },
  methods: {

  },
  computed: {

  },
  ready() {
        
  },
  watch: {              
        selectedLibrary: function() {
          // Clear previously selected values          
          this.selectedBook = "";          
          let vm = this;          
          vm.$unbind('books');
          let id = this.selectedLibrary['.key'];                                                        
          // Populate list of books in the second dropdown
          if (this.selectedLibrary['.key'].length > 0) {
              console.log("entre a la funcion selectedLibrary con el Id: " + this.selectedLibrary['.key']);
              vm.$bindAsArray('books', Firebase.database().ref('books').orderByChild('library').equalTo(id));
          }
        }
    }
  }  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<style scoped>
    .page {
        width: 100%;
        padding: 2rem;
        box-shadow: 3rem 0 5rem 3rem #c1f5ff;
    }

    .content, .title {
        border-style: none;
        border-radius: 0.25rem;
        border: solid 1px lightgray;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 1.25rem;

        text-align: left;        
        margin-top: 0px;        
        box-shadow: 3rem 0 5rem 3rem #c1f5ff;
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