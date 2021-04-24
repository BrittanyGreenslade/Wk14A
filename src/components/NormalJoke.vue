<template>
  <div id="normalJoke">
    <button id="normalJokeBtn" @click="showNormalJoke()">
      Normal Joke
    </button>
    <p id="normalJokeContainer"></p>
  </div>
</template>

<script>
export default {
  name: "normal-joke",
  computed: {
    normalJoke: function() {
      return this.$store.state.newJoke;
    },
  },
  methods: {
    showNormalJoke: function() {
      let normalJoke = this.normalJoke;
      document.getElementById(
        "normalJokeContainer"
      ).innerText = `${normalJoke}`;
    },
  },
};
</script>

<style scoped></style>
