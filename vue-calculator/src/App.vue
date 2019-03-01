<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col screen">
          <span> {{ screen }}</span>
        </div>
      </div>
      <div class="row">
        <button @click="clearAll" class="btn btn-primary col">C</button>
        <span class="col"></span>
        <button @click="setNumber('.')" class="btn btn-secondary col">.</button>
        <button @click="operator = '+'" class="btn btn-secondary col">+</button>
      </div>
      <div class="row">
        <button @click="setNumber('7')"  class="btn btn-secondary col">7</button>
        <button @click="setNumber('8')"  class="btn btn-secondary col">8</button>
        <button @click="setNumber('9')"  class="btn btn-secondary col">9</button>
        <button @click="operator = '-'" class="btn btn-secondary col">-</button>
      </div>
      <div class="row">
        <button @click="setNumber('4')"  class="btn btn-secondary col">4</button>
        <button @click="setNumber('5')"  class="btn btn-secondary col">5</button>
        <button @click="setNumber('6')"  class="btn btn-secondary col">6</button>
        <button @click="operator = '*'" class="btn btn-secondary col">*</button>
      </div>
      <div class="row">
        <button @click="setNumber('1')"  class="btn btn-secondary col">1</button>
        <button @click="setNumber('2')"  class="btn btn-secondary col">2</button>
        <button @click="setNumber('3')"  class="btn btn-secondary col">3</button>
        <button @click="operator = '/'" class="btn btn-secondary col">/</button>
      </div>
      <div class="row">
        <button @click="setNumber('0')"  class="btn btn-secondary col-9">0</button>
        <button @click="getResult"  class="btn btn-primary col">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      a: '',
      b: '',
      result: 0,
      screen: 0,
      operator: null
    }
  },
  methods: {
    setNumber(number) {
      if (this.operator === null) {
        this.a += number;
        this.screen = this.a;
      } else {
        this.b += number;
        this.screen = this.b
      }
    },
    getResult() {
      switch (this.operator) {
        case '+':
        this.result = parseFloat(this.a) + parseFloat(this.b);
        break;
        case '-':
        this.result = parseFloat(this.a) - parseFloat(this.b);
        break;
        case '*':
        this.result = parseFloat(this.a) * parseFloat(this.b);
        break;
        case '/':
        this.result = parseFloat(this.a) / parseFloat(this.b);
        break;
      }
      this.screen = this.result;
      this.a = '' + this.result + '';
      this.b = '';
      this.operator = null;
    },
    clearAll() {
      this.a = '';
      this.b = '';
      this.result = 0;
      this.screen = 0;
      this.operator = null;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bungee+Hairline');

body {
  font-family: 'Bungee Hairline', cursive;
  background-color: black!important;
  color: white!important;
}
.container {
  width: 33%;
  margin: 10%;
  padding: 0 20%;
}
.screen {
  text-align: right;
  font-size: 36px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 10px;
}
button{
  margin: 2px!important;
}
  @media (min-width: 768px) {
    .container {
     max-width: 300px!important;
    }
  }
</style>
