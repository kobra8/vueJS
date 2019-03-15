export default function(resources) {
  return {
    computed: {
      remoteDataBusy() {
        return this.$data.remoteDataLoading
      },
      hasRemoteErrors() {
        return Object.keys(this.$data.remoteErrors).some(
          key => this.$data.remoteErrors[key]
        )
      }
    },
    data() {
      let initData = {
        remoteDataLoading: 0
      }

      initData.remoteErrors = {}

      for (const key in resources) {
        initData[key] = null
        initData.remoteErrors[key] = null
      }
      return initData
    },
    methods: {
      async fetchResource (key, url) {
        this.$data.remoteDataLoading++
        this.$data.remoteErrors[key] = null
        try {
          this.$data[key] =  await this.$fetch(url)
        }
        catch (error){
          console.error(error)
          this.$data.remoteErrors[key] = error
        }
        this.$data.remoteDataLoading--
      }
    },
    created() {
      for (const key in resources) {
        let url = resources[key]
        this.fetchResource(key, url)
      }
    }
  }
}
