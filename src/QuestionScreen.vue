<template>
  <div>
    <h3>{{ this.question }}</h3>
    <vue-single-select
      v-model="selected"
      v-bind:options="answers"
    ></vue-single-select>
    <b-button
      variant="primary"
      v-if="!last"
      v-on:click="next"
      :disabled="!selected"
    >
      NEXT
    </b-button>
    <b-button
      variant="success"
      v-else
      v-on:click="submit"
      :disabled="!selected"
    >
      SUBMIT
    </b-button>
  </div>
</template>

<script>
import VueSingleSelect from "vue-single-select";
export default {
  components: {
    VueSingleSelect,
  },
  props: {
    question: {
      type: String,
    },
    answers: {
      type: Array,
    },
    last: {
      type: Boolean,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    next() {
      this.$emit("next", this.selected);
      this.selected = "";
    },
    submit() {
      this.$emit("submit", this.selected);
      this.selected = "";
    },
  },
};
</script>