<script>
export default {
  name: 'Name',
  template: `
  <div>
    <input type="text" :value="value" @input="onNameAction">
  </div>
  `,
  props: {
    'value': {
      type: String,
      required: true
    }
  },
methods: {
  onNameAction(e) {
      const result = e.target.value.toUpperCase();
      if ( result !== e.target.value) {
        e.target.value = result;
      }
      this.$emit('input', result);
    }
  }
}
</script>

