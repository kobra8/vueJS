import VueRouter from 'vue-router'

const Home = { template: '<div>Main page</div>'}
const About = { template: '<div>About</div>'}
const Contact = { template: '<div>Contact</div>'}
const Admin = { template: '<div>Admin</div>'}
const WildCard = { template: '<div>Not found - 404</div>'}
// const User = { template: '<div>User id: {{$route.params.userId}}</div>'}
const User = { template: '<div>User id: {{ userId }}</div>', props: ['userId']}
const UserGeneral = {
  template: `
    <div>User info:
      <router-view></router-view>
    </div>
  `
}

const isAdmin = true;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact, meta: {title: 'Contact with Us!'} },
    { path: '/kontakt', redirect: '/contact' },
    { path: '/user/:userId', component: User, props: true },
    { path: '/users', alias: '/profiles', component: UserGeneral, children: [
      { path: 'profile/:userId', component: User, props: true }
    ]},
    { path: '/administration', component: Admin, beforeEnter: (to, from, next) => {
      console.log('Is admin:', isAdmin);
        if(isAdmin) {
            next()
          }
        else {
          next('/')
          // next(false)
        }
      }
    },
    { path: '*', component: WildCard}
  ]
}) ;

// router.beforeEach((to, from, next) => {
//   if(from.meta.adminGuard) {
//     next()
//   }
//   else {
//     next('/')
//   }
// });

router.afterEach(to => {
  document.title = to.meta.title
})

export default router;
