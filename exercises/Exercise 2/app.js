new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Button clicked")
            },
            listenKey: function(event) {
                this.value = event.target.value
            }
        }
    });