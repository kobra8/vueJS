<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="hour < 12"> This is morning {{userName}}.</h2>
    <h2 v-else-if=" hour >=12 && hour < 18"> This is afternoon {{userName}}.</h2>
    <h2 v-else>This is afternoon {{userName}}.</h2>
    <p v-show="true">V-show directive use display css property to show/hide element</p>
    <p v-changeTextColor="2000">{{cars[1]}}</p>
    <ul>
      <li v-for="(car, index) in cars" :key="index">{{car}}</li>
    </ul>
    <ul>
      <li v-for="(n, index) in 10" :key="index">{{n}}</li>
    </ul>
    <ul>
      <li v-for="(colorPl, colorEn, index) in colors" :key="index">Color {{colorEn}} is {{colorPl}} in Polish.</li>
    </ul>
    <input :type="inputType">
    Set username: <input type="text" v-model="userName">
    <p>You are visiting this site from {{seconds}} seconds.</p>
    <p>Display array value - numbers[1]: {{numbers[1]}}<p/>
    <p>Sum of array numbers values: {{ sumValues }}</p>
    <div v-html="htmlCode"></div>
    <p>{{ setHelloParagraph() }}</p>
    <p>Product cost: {{ cost | currencyFormat('PLN') }} <input type="checkbox" ref="currChange"></p>
    <button @click="increase">Click me</button> <span>Button clicked {{clicks}} times.</span>
    <div>
      <button @click="show = !show">Show / Hide</button>
      <transition name="show">
        <p v-if="show">Text to show and hide.</p>
      </transition>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
const helloMixin = {
  created() {
    console.log('Hello from Mixin');
  },
  methods: {
    helloTest() {
      console.log('Hello from Test method');
    }
  }
}
export default {
  name: 'HelloWorld',
  mixins: [helloMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hour: new Date().getHours(),
      seconds: 0,
      cost: 12545,
      clicks: 0,
      userName: 'Jerzy',
      cars: [
        'BMW', 'Audi', 'Mercedes'
      ],
      colors: {
        red: 'czerwony',
        green: 'zielony',
        blue: 'niebieski'
      },
      inputType: 'password',
      numbers: [1,2,3,4],
      htmlCode: '<i>Dangerous injection v-html directive</i>',
      show: true
    }
  },
    created() {
      Vue.set(this.cars, 1, 'Zastava 1100 p');
      setInterval(()=> {
        this.seconds++ ;
      }, 1000);
      this.hello();
      this.helloTest();
    },
    mounted(){
      Vue.nextTick(()=> {
        // All DOM elements loading finished
        this.$refs.currChange.checked = true;
      })
    },
    methods: {
      setHelloParagraph() {
        return `Hello from function ${this.userName}!`
      },
      increase() {
        this.clicks++;
      },
       hello() {
        console.log('Hello from Component');
      }
    },
    computed: {
      sumValues() {
        return this.numbers.reduce((sum, val) => sum + val);
      }
    },
    filters: {
      currencyFormat(value, symbol){
        return `${value.toFixed(2)} ${symbol}`
      }
    },
    watch: {
      cars(){
        console.log('Changed');
      }
    },
    directives: {
      changeTextColor: {
        bind(el, time) {
          let redColor = true;
          setInterval(() => {
            redColor = !redColor;
            el.style.color = redColor ? 'red' : 'blue';
          }, time.value || 1000)
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$li-color: #42b983;
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $li-color;
}

.show-enter-active {
  animation:  showHide .5s;
}
.show-leave-active {
  animation:  showHide .5s reverse;
}
@keyframes showHide {
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }

}
</style>
