<template>
  <div id="normalJoke">
    <!-- calls showNormalJoke fn on click -->
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
      //accessing the 'newJoke' variable in the state
      return this.$store.state.newJoke;
    },
  },
  methods: {
    //fn called on click of normal joke btn to put the normalJoke from the data above
    //into the normal joke container on this page
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
