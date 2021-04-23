<template>
  <div>
    <button id="jokeBtn" @click="getJoke()">Generate Joke!</button>
    <h3 id="successMessage"></h3>
    <!-- <p>{{ newJoke }}</p> -->
  </div>
</template>

<script>
export default {
  name: "joke-button",
  computed: {
    newJoke: function() {
      return this.$store.state.newJoke;
    },
  },
  methods: {
    getJoke: function() {
      this.$store.dispatch("generateJoke");
      document.getElementById("successMessage").innerText =
        "Joke has been generated! Select how you'd like to view your joke:";
    },
  },
};
</script>

<style scoped></style>
