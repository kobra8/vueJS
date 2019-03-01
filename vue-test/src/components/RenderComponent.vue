<script>
export default {
  name: 'RenderComponent',
  render(createElement) {
    return createElement(
      this.tag,
      {
        attrs: {
          title: 'Dynamic atribute'
        },
        props: {
           foo: 'bar'
        },
        domProps: {
          innerText: 'New text'
        },
        on: {
          click: this.changeStyle
        },
        slot: 'exampleSlot',
        ref: 'exampleRef',
        class: ['dynamic-class', { 'bolder': true }],
        style: { backgroundColor: 'yellow'}
      },
     this.$slots.default);
  },
  data() {
    return {
      tag: 'h4'
    }
  },
  methods: {
    changeStyle() {
      console.log('Style changed');
    }
  }
}

</script>
