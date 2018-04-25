import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MyMap from '@/components/map';
import MyPage from '@/components/page';
import MyCourse from '@/components/course';
import Login from '@/components/login';
import Register from '@/components/register';
import MyNews from '@/components/news';
import MyAbout from '@/components/about';
import Firebase from 'firebase';

Vue.use(Router)

let router = new Router({ //aqui metio la ruta en una variable para poder manipularlo
//export default new Router({ asi estaba antes 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true  
      }      
    },
    {
      path: '/map',
      name: 'map',
      component: MyMap,
      meta: {
        requiresAuth: true  
      }
    },
    {
      path: '/page',
      name: 'page',
      component: MyPage,
      meta: {
        requiresAuth: true  
      }
    },
    {
      path: '/course',
      name: 'course',
      component: MyCourse,
      meta: {
        requiresAuth: true  
      }
    },
    {
      path: '/news',
      name: 'news',
      component: MyNews,
      meta: {
        requiresAuth: true  
      }
    },
    {
      path: '/about',
      name: 'about',
      component: MyAbout,
      meta: {
        requiresAuth: true  
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true  
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true  
      }
    }
  ]
});

//nav Guards

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //check if NOT logged in
    if(!Firebase.auth().currentUser) {
      //o to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath 
        }
      });
    } else {
      //procede to route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    if(Firebase.auth().currentUser) {
      //o to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath 
        }
      });
    } else {
      //procede to route
      next();
    }
  } else {
    //procede to route
      next();
  }
});

export default router;
