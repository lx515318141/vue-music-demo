import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Artists from '../pages/Artists'
import Mine from '../pages/Mine'
import Search from '../pages/Search'
import SongList from '../pages/SongList'
import Top from '../pages/Top'
import Player from '../pages/Player'
import More from '../pages/More'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/artists',
      component: Artists
    },
    {
      path: '/search',
      name:'Search',
      component: Search
    },
    {
      path: '/top',
      name:'Top',
      component: Top
    },
    {
      path: '/songList',
      component: SongList
    },
    {
      path: '/player/:id',
      name:'Player',
      component: Player
    },
    {
      path: '/more/:type',
      name:'More',
      component: More
    },
  ]
})
