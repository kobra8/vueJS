<script>
export default {
  name: 'TimeUsed',
  template: `
  <div>
    <h4>Time used component:</h4>
    <p :time="time">You visited this site from {{time}} seconds.</p>
    <p class="orange">You visited this site from {{timeIncreased}} seconds + 10.</p>
  </div>
  `,
  props: {
    'time': {
      type: Number
    },
    'timeIncreased': {
      type: Number
    }
  },
  computed: {
    temporaryTime: {
      get() {
        return this.timeIncreased;
      },
      set(value) {
        this.$emit('update:timeIncreased', value);
      }
    }
  },
  mounted() {
    setInterval(()=> {
    //  this.$emit('update:timeIncreased', this.timeIncreased + 10)
    this.temporaryTime = this.temporaryTime + 10;
    }, 2000)
  }
}
</script>
<style>
  .orange {
    color: orange;
  }
</style>
