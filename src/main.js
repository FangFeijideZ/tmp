// 入口文件
console.log('OK')
import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})