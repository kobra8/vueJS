<template>
  <main class="faq">
    <h1>Frequently asked questions</h1>
    <div v-if="hasRemoteErrors" class="error">
      Problem with loading questions and answers.
    </div>
    <Loading v-if="remoteDataBusy" />
    <section class="list">
      <article :key="question._id" v-for="question of questionList">
        <h2>{{question.title}}</h2>
        <p>{{question.content}}</p>
      </article>
    </section>
  </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'
export default {
  mixins: [
    RemoteData({
      questionList: 'questions'
    })
  ],
  // Migrated to mixin RemoteData
  // data(){
  //   return {
  //     questions: [],
  //     error: null,
  //     loading: false
  //   }
  // },
  // async created() {
  //   this.loading = true;
  //   try {
  //      this.questions = await this.$fetch('questions')
  //     }
  //   catch (error) {
  //     this.error = error
  //     }
  // this.loading = false;

  // This method changed for async
    // fetch('http://localhost:3000/questions').then( response => {
    //   if(response.ok) {
    //     return response.json()
    //   } else {
    //     return Promise.reject('error')
    //   }
    // }).then( result => {
    //   this.questions = result
    // }).catch( error => {
    //   this.error = error
    // })
 // }
}
</script>
