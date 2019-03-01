<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/" tag="li">Main page</router-link></li>
      <li><router-link to="/about" @click.native="test">About us</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <router-view></router-view>
    <HelloWorld/>
    <my-local-component></my-local-component>
    <time-used :time="time" :timeIncreased.sync="seconds"></time-used>
    <!-- <time-used :timeIncreased="seconds" @update:timeIncreased="val => seconds = val"> -->
    <numbers colour='green' font-size='28'></numbers>
    <name v-model="name" />
    <p>{{all}}</p>
    <custom-button v-on:increase="increaseAll" slot="slot2">Naciśnij mnie</custom-button>
    <custom-button v-on:increase="increaseAll" slot="slot2">Naciśnij mnie</custom-button>
    <render-component></render-component>
    <counter-with-store></counter-with-store>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import Numbers from './components/Numbers'
import TimeUsed from './components/TimeUsed';
import Name from './components/Name';
import CustomButton from './components/CustomButton';
import RenderComponentVue from './components/RenderComponent';
import ButtonWithStore from './components/ButtonWithStore'

//Globaly definied component
 Vue.component('numbers', Numbers)
 Vue.component('time-used', TimeUsed)
 Vue.component('name', Name)
 Vue.component('custom-button', CustomButton)
 Vue.component('render-component', RenderComponentVue)
 Vue.component('counter-with-store', ButtonWithStore)

//Locally definied component
const MyLocalComponent = {
  template: '<h3>My local component</h3>'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyLocalComponent
  },
    data() {
    return {
      time: 0,
      seconds: 0,
      name: 'Jerzy',
      all: 0
    }
  },
    created() {
    setInterval(() => {
      this.time++
    }, 1000);
  },
  methods: {
    increaseAll() {
      this.all++;
    },
    test() {
      this.$router.push('./contact');
     // this.$router.replace('./contact');
     // this.$router.go(-1);
     // this.$router.go(2);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 100px;
}
ul {
  display: inline-block;
  list-style-type: none;
}

</style>
