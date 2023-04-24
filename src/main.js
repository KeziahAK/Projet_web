import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import MyAccueil from "./components/Accueil.vue"
import BookGalleryTrend from "./components/BookGalleryTrend.vue"
import BookGalleryLove from "./components//BookGalleryLove.vue"
import BookGalleryAction from "./components//BookGalleryAction.vue"
import BookGalleryAnimal from "./components//BookGalleryAnimal.vue"
import BookGalleryFantastic from "./components//BookGalleryFantastic.vue"
import AuthorGalleryLove from "./components//AuthorGalleryLove.vue"
import AuthorGalleryAction from "./components//AuthorGalleryAction.vue"
import AuthorGalleryAnimal from "./components//AuthorGalleryAnimal.vue"
import AuthorGalleryFantastic from "./components//AuthorGalleryFantastic.vue"

import App from './App.vue'

const routes = [
    {path: '/', component : MyAccueil, name:"MyAccueil"},
    {path: '/Tendances', component : BookGalleryTrend, name:"BookGalleryTrend"},
    {path: '/ParcourirLivres/Romance', component : BookGalleryLove, name:"BookGalleryLove"},
    {path: '/ParcourirLivres/Action', component : BookGalleryAction, name:"BookGalleryAction"},
    {path: '/ParcourirLivres/Animaux', component : BookGalleryAnimal, name:"BookGalleryAnimal"},
    {path: '/ParcourirLivres/Fantastique', component : BookGalleryFantastic, name:"BookGalleryFantastic"},
    {path: '/ParcourirAuteurs/Romance', component : AuthorGalleryLove, name:"AuthorGalleryLove"},
    {path: '/ParcourirAuteurs/Action', component : AuthorGalleryAction, name:"AuthorGalleryAction"},
    {path: '/ParcourirAuteurs/Animaux', component : AuthorGalleryAnimal, name:"AuthorGalleryAnimal"},
    {path: '/ParcourirAuteurs/Fantastique', component : AuthorGalleryFantastic, name:"AuthorGalleryFantastic"},
    // { path: '*', redirect: '/'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')


