<template>
  <div class="container">
    <br />
    <startscreen v-if="quizScreen == 1" @start="start()"></startscreen>

    <questionscreen
      v-else-if="quizScreen == 2"
      :question="questions[index].text"
      :answers="questions[index].answers"
      :last="this.last"
      @next="next($event)"
      @submit="submit($event)"
    ></questionscreen>

    <finalscreen
      v-else
      :questions="this.questions"
      :selectedAnswers="this.selectedAnswers"
    ></finalscreen>
  </div>
</template>

<script>
import startscreen from "./StartScreen.vue";
import finalscreen from "./FinalScreen.vue";
import questionscreen from "./QuestionScreen.vue";
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  components: {
    questionscreen,
    finalscreen,
    startscreen,
  },
  data() {
    return {
      index: 0,
      selectedAnswers: [],
      quizScreen: 1,
      last: false,
    };
  },
  methods: {
    start() {
      // Change screen
      this.quizScreen++;
    },
    next(selected) {
      // Increment index
      this.index = this.index + 1;
      // Push the selected answer into selected answers
      this.selectedAnswers.push(selected);
      // Check if last answer
      if (this.index === this.$props.questions.length - 1) {
        this.last = true;
      }
    },
    submit(selected) {
      // Push the selected answer into selected answers
      this.selectedAnswers.push(selected);
      // Change screen
      this.quizScreen++;
    },
  },
};
</script>