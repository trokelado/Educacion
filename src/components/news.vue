<template>  
  <div class="content">
    <div id="news" class="container-fluid">
        <h2>University Newsletter</h2>
        <p class="flow-text dark grey-text text-darken-3">The University's External Relations and Communications Office 
            publishes a digital newsletter four times a year. The newsletter covers news around education, exchange, 
            research and campus life and is aimed at students, alumni, partner universities and the business community.</p>
        <div class="card">
            <div class="card-header">
            <h4>Subscribe to our Newsletter</h4>
            </div>
            <div class="card-body">        
            <form id="form" v-on:submit.prevent="addMember" class="form-inline">
                <div class="form-group">
                <label for="name">Name</label>
                <input
                    id="name" 
                    v-model="newMember.name"                    
                    placeholder="Name"                    
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">
                <label for="email">Email</label>
                <input
                    id="email" 
                    v-model="newMember.email"                    
                    placeholder="Email"
                    type="email"
                    class="validate"
                    required="" 
                    aria-required="true">                
                <br>
                <input type="submit" class="btn btn-success" value="Enter">
                </div>
            </form>
            </div>
        </div>
      <hr>
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
  </div>   
</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';

let database = firebaseInit.database().ref();

let newsRef = Firebase.database().ref('news');     

export default {
  name: 'news',
  firebase: {
    members: newsRef
  },
  props: {

  },
  data() {
    return {
      newMember: {
        name: "",
        email: ""        
      },            
    }            
  },
  methods: {
    addMember: function() {
      newsRef.push(this.newMember);
      this.newMember.name = '';
      this.newMember.email = '';      
    },               
  },
  computed: {

  },
  ready() {

  },
  watch: {              
        
  }
}  
</script>