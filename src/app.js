new Vue({
    el: '#app',
    data: {
        invite: "Welcome to VueJS",
        name: "",
        message: "Taki tooltip malutki :)",
        seen: true,
        cars: [
            { car: 'Honda' },
            { car: 'Toyota' },
            { car: 'Suzuki' },
            { car: 'Mazda' }
        ],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        buttonName: 'Hide text',
        link: "https://www.google.pl",
        htmlLink: "<a href='http://www.tarnow.pl'>Tarnow</a>",
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0
    },
    computed: {
        output: function () {
            return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5';
        }
    },
    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 2000)
        }
    },
    methods: {
        hide: function () {
            if (this.seen === true) {
                this.seen = false;
                this.buttonName = 'Show text';
            }
            else {
                this.seen = true;
                this.buttonName = 'Hide text';
            }
        },
        changeTitle: function (event) {
            this.invite = event.target.value;
        },
        increase: function (step, event) {
            this.secondCounter += step;
        },
        result: function () {
            return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5';
        },
        updateCoordinates: function (event) {
            this.x = event.clientX
            this.y = event.clientY
        },
        alertMe: function () {
            alert('Po spacji lub Enterze');
        }
    }
})