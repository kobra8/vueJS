new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    customClasses: [
      'shadow', 'header', 'container'
    ],
    inputClass: '',
    inputClasses: [''],
    userClass:'',
    userBoolean: false,
    color: 'white',
    barWidth: 0
  },
  methods: {
    startEffect: function () {
      this.effectClass = "highlight";
      setTimeout(() => {
        this.effectClass = "shrink";
      }, 2000)
    },
    attachClass: function () {
      this.inputClasses.push(this.inputClass);
    },
    startProgress: function () {
     let interval = setInterval(()=> {
        this.barWidth = this.barWidth + 2;
        if (this.barWidth > 500) {
          clearInterval(interval)
        }
      }, 500);
    }
  }
});
