<template>
  <main class="faq">
    <h1>Frequently asked questions</h1>
    <div v-if="error" class="error">
      Problem with loading questions and answers.
    </div>
    <Loading v-if="loading" />
    <section class="list">
      <article :key="question._id" v-for="question of questions">
        <h2>{{question.title}}</h2>
        <p>{{question.content}}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      questions: [],
      error: null,
      loading: false
    }
  },
  async created() {
    this.loading = true;
    try {
      const response = await fetch('http://localhost:3000/questions')
      if (response.ok) {
        this.questions = await response.json()
      } else {
        throw new Error('error')
      }
    }
    catch (error) {
      this.error = error
    }
  this.loading = false;

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
  }
}
</script>
