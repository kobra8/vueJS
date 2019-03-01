<script>
export default {
  name: 'CustomButton',
  template: `
    <button v-on:click="increaseCount">
    <slot><span>Default text</span></slot>
    <slot name="slot2"><span>{{ count }}</span></slot>
    </button>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increaseCount(){
      this.count++;
      this.$emit('increase');
    }
  }
}
</script>
