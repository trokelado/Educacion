<template>  
  <div class="content">
    <div id="page" class="container-fluid">
        <h2>Application Form</h2>
        <div class="card">
            <div class="card-header">
            <h4>New Student Details</h4>
            </div>
            <div class="card-body">        
            <form id="form" v-on:submit.prevent="addStudent" class="form-inline">
                <div class="form-group">
                <label for="family">Family Name</label>
                <input
                    id="family" 
                    v-model="newStudent.familyName"                    
                    placeholder="Family Name"                    
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">
                <label for="given">Given Name</label>
                <input
                    id="given" 
                    v-model="newStudent.givenName"                    
                    placeholder="Given Name"
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">
                <label for="birth">Date of Birth</label>
                <input
                    id="birth" 
                    v-model="newStudent.birthDay"                    
                    placeholder="Date of Birth"
                    type="date"
                    class="validate datepicker"
                    required="" 
                    aria-required="true">                    
                <label for="gender">Gender</label>
                <div class="col s2">
                    <v-select 
                      id="gender" 
                      v-model="newStudent.gender" 
                      :options="['Male', 'Female', 'Unknown']"                       
                      placeholder="Gender"
                      class="validate"
                      required="" 
                      aria-required="true">
                    </v-select> 
                </div>
                <label for="national">Nationality</label>
                <div class="col s2">
                    <v-select 
                      id="national" 
                      v-model="newStudent.nationality" 
                      :options="['Canada', 'China PRC', 'Mexico', 'United States', 'United Kingdom']"
                      placeholder="Nationality"
                      class="validate"
                      required="" 
                      aria-required="true">
                    </v-select> 
                </div>
                <label for="passport">Passport Number</label>
                <input
                    id="passport" 
                    v-model="newStudent.passport"
                    class="form-control"
                    placeholder="Passport Number"
                    type="text">
                <label for="passexpiry">Passport Expiry Date</label>
                <input
                    id="passexpiry" 
                    v-model="newStudent.passportExpire"
                    class="datepicker"
                    placeholder="Passport Expiry Date"
                    type="date">
                <label for="address">Home Address</label>
                <input
                    id="address" 
                    v-model="newStudent.address"                    
                    placeholder="Home Address"
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">                                                                                
                <label for="city">City</label>
                <input
                    id="city" 
                    v-model="newStudent.city"                    
                    placeholder="City"
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">
                <label for="postal">Postal Code</label>
                <input
                    id="postal" 
                    v-model="newStudent.postalCode"                    
                    placeholder="Postal Code"
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">    
                 <label for="homenumber">Home phone number</label>
                <input
                    id="homenumber" 
                    v-model="newStudent.homeNumber"                    
                    placeholder="Home phone number"
                    type="text"
                    class="validate"
                    required="" 
                    aria-required="true">
                <label for="mobilnumber">Mobil phone number</label>
                <input
                    id="mobilnumber" 
                    v-model="newStudent.mobilNumber"
                    class="form-control"
                    placeholder="Mobil phone number"
                    type="text">   
                    <div class="col s2">
                        <label>I agree that the data provided may be shared with relevant local agents 
                            for the purpose that they can contact me to provide further information and guidance. 
                            I understand that I can withdraw my consent at any time by contacting the agent.</label>
                        <div class="switch">
                            <label>
                            No
                            <input type="checkbox" v-model="newStudent.sharing">
                            <span class="lever"></span>
                            Yes
                            </label>
                        </div>                                                                                                     
                    </div>
                    <div class="col s2">
                        <label>Select yes or no below if you would like to receive further marketing communications from us.
                            You can unsubscribe at any time and your e-mail remains confidential. 
                            For more information please see our&nbsp;<span><strong><a href="/global/privacy-policy">privacy policy</a>
                            </strong></span>.&nbsp;</label>
                        <div class="switch">
                            <label>
                            No
                            <input type="checkbox" v-model="newStudent.subscribe">
                            <span class="lever"></span>
                            Yes
                            </label>
                        </div>                                                                                                     
                    </div>                     
                    <!--div class="col s2">
                        <label>I agree that the data provided may be shared with relevant local agents 
                            for the purpose that they can contact me to provide further information and guidance. 
                            I understand that I can withdraw my consent at any time by contacting the agent.</label>
                            <br>                         
                            <p>
                                <input name="group1" type="radio" id="test1" value="Yes" v-model="newStudent.sharing" />
                                <label for="test1">Yes / </label>                            
                                <input name="group1" type="radio" id="test2" value="No" v-model="newStudent.sharing" />
                                <label for="test2">No</label>
                            </p>                            
                            <span>Picked: {{ newStudent.sharing }}</span>                    
                    </div-->

                <br>
                <input type="submit" class="btn btn-success" value="add a member">
                </div>
            </form>
            </div>
        </div>

      <hr>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title"> Students List</h3>
        </div>
        <div class="card-body">        
          <table class="table table-striped">
            <thead>
              <tr>              
                <th>Family Name</th>
                <th>Given Name</th>
                <th>Status</th>
                <th>Resolve</th>
                <th>Delete</th>                
              </tr>
            </thead>
            <tbody>								
              <tr v-for="item in students">									
                <td>
                  {{ item.familyName }}
                </td>
                <td>
                  {{ item.givenName}}
                </td>
                <td>
                  {{ item.status}}
                </td>                
                <td v-if="item.status === 'Unapproved'">                  
                    <button
                      v-on:click="updateStudent(item, 'Approved')"											
                      class="btn btn-flat white">                                        
                      <i class="material-icons" style="font-size:40px;color:green;">thumb_up</i>																					
                    </button>                                                                     
                </td>
                <td v-if="item.status === 'Approved'">                  
                    <button
                      v-on:click="updateStudent(item, 'Unapproved')"											
                      class="btn btn-flat white">                                        
                      <i class="material-icons" style="font-size:40px;color:red;">thumb_down</i>																					
                    </button>                                                                     
                </td>
                <td>
                  <button
                    v-on:click="deleteStudent(item)"											
                    class="btn btn-flat white">                    
                    <i class="material-icons" style="font-size:40px;color:red;">delete_forever</i>                    																					
                  </button>                  
                </td>																			
              </tr>								
            </tbody>    
          </table>  
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
  </div>   
</template>

<script>
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';

let database = firebaseInit.database().ref();

let studentsRef = Firebase.database().ref('students');     

export default {
  name: 'page',
  firebase: {
    students: studentsRef
  },
  props: {

  },
  data() {
    return {
      newStudent: {
        familyName: "",
        givenName: "",
        birthDay: "",
        gender: "",
        nationality: "",
        passport: "",
        passportExpire: "",
        address: "",
        city: "",
        postalCode: "",
        homeNumber: "",
        mobilNumber: "",
        sharing: false,
        subscribe: false,
        status: "Unapproved"
      },            
    }            
  },
  methods: {
    addStudent: function() {
      studentsRef.push(this.newStudent);
      this.newStudent.familyName = '';
      this.newStudent.givenName = '';
      this.newStudent.birthDay = '';
      this.newStudent.gender = '';
      this.newStudent.nationality = '';
      this.newStudent.passport = '';
      this.newStudent.passportExpire = '';
      this.newStudent.address = '';
      this.newStudent.city = '';
      this.newStudent.postalCode = '';
      this.newStudent.homeNumber = '';
      this.newStudent.mobilNumber = '';
      this.newStudent.sharing = false;
      this.newStudent.subscribe = false;
      this.newStudent.status = 'Unapproved';
    },    
    deleteStudent: function(item) {
      studentsRef.child(item['.key']).remove();
    },
    updateStudent: function(item, newText) {
      studentsRef.child(item['.key']).child('status').set(newText);
    },       
  },
  computed: {

  },
  ready() {
        //this.$bindAsArray('foo', db.ref('foo').orderByChild('bar').equalTo('baz');
        //this.$bindAsArray('pendingBooks', Firebase.database().ref('books').child(id));
  },
  watch: {              
        
    }
  }  
</script>