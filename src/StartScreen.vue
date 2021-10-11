<template>
  <div class="text-center">
    <h1 style="color: Teal">Cognito Forms Quiz</h1>
    <b-button variant="primary" v-on:click="start">START</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$emit("start");
    },
  },
};
</script>