import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import CourseView from '../views/CourseView.vue'
import AppLayout from "@/AppLayout";

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppLayout,
    children:[
      {
        path:'/students',
        name:'students',
        component: StudentView
      },
      {
        path:'/courses',
        name:'courses',
        component: CourseView
      }
    ]
  },
  {
    path: '/students',
    name: '',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
