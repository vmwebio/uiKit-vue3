import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonView from '@/views/ButtonView.vue'
import TypographyView from '@/views/TypographyView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/button',
        name: 'Button',
        component: ButtonView
      },
      {
        path: '/typography',
        name: 'Typography',
        component: TypographyView
      },
    ]
})

export default router;