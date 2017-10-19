new Vue({
    el: '#app',
    data: {
        attachRed: false,
        colorClass: 'green',
        color:'gray',
        width: 100
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
});