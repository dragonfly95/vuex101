// vue-route
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import List from '@/components/board/List';
import Write from '@/components/board/Write';

Vue.use(Router);


export default new Router({
routes:[
  {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
  },
  {
    path: '/board/list',
    name: 'List',
    component: List
  },
  {
      path: '/board/write',
      name: 'Write',
      component: Write
  }
    ]
});





