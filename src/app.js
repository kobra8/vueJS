var vueApp = new Vue({
    el: '#app',
    data: {
        invite:"Welcome to VueJS",
        name:"",
        message:"Taki tooltip malutki :)",
        seen: true,
        cars: [
          {car: 'Honda'},
          {car: 'Toyota'},
          {car: 'Suzuki'},
          {car: 'Mazda'}
        ],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        buttonName: 'Hide text'
    },
    methods: {
        hide: function() {
            if(this.seen === true) {
            this.seen = false;
            this.buttonName='Show text';
            }
            else {
                this.seen = true;
                this.buttonName='Hide text';
            }
        },
        changeTitle: function(event) {
            this.invite = event.target.value;
        }
    }
})