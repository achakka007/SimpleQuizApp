<template>
  <div>
    <h2 style="color: Teal" class="text-center">
      Cognito Forms Quiz - Summary
    </h2>
    <hr />
    <div v-for="i in selectedAnswers.length" :key="i">
      <h3>{{ questions[i - 1].text }}</h3>
      <p>{{ selectedAnswers[i - 1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
    },
    selectedAnswers: {
      type: Array,
    },
  },
};
</script>