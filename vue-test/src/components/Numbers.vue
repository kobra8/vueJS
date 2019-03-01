<script>
export default {
  name: 'Numbers',
  template: `
  <div>
    <h4>Numbers component:</h4>
    <p :style="style">{{evenNumbers}} Props colour: {{colour}}</p>
  </div>
  `,
  data() {
    return {
      numbers: [1,2,3,4,5,6]
    }
  },
  props: {
    'colour': {
      type: String,
      required: true
    },
    'fontSize': {
      type: String,
      default: '22'
      }
    },
  computed: {
    style() {
      return { color: this.colour, fontSize: this.fontSize + 'px' };
    },
    evenNumbers() {
      return this.numbers.filter( x => x % 2 === 0);
    }
  }
}
</script>

