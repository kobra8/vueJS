new Vue( {
    el: '#exercise',
    data: {
        name: "Jerzy",
        age: 42,
        imageLink: "http://cdn.natemat.pl/03a702c3292213c6d71007e1fbbd7530,640,0,0,0.jpg"
    },
    methods: {
        random() {
            return Math.random();
        }
    }
})