import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import ButtonView from '@/views/ButtonView.vue'
import TypographyView from '@/views/TypographyView.vue'
import CheckboxView from '@/views/CheckboxView.vue'
import RadiobuttonView from '@/views/RadiobuttonView.vue'
import ProgressView from '@/views/ProgressView.vue'
import InputView from '@/views/InputView.vue'
import TabsView from '@/views/TabsView.vue'

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
      {
        path: '/radiobutton',
        name: 'Radiobutton',
        component: RadiobuttonView
      },
      {
        path: '/progress',
        name: 'Progress',
        component: ProgressView
      },
      {
        path: '/input',
        name: 'Input',
        component: InputView
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: TabsView
      },
    ]
})

export default router;