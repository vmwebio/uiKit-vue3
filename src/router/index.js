import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonView from '@/views/ButtonView.vue'
import TypographyView from '@/views/TypographyView.vue'
import CheckboxView from '@/views/CheckboxView.vue'

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
      {
        path: '/checkbox',
        name: 'Checkbox',
        component: CheckboxView
      },
    ]
})

export default router;