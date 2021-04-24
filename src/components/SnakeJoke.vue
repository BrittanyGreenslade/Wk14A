<template>
  <div>
    <!-- calls showSnakeJoke fn on click -->
    <button id="snakeJoke" @click="showSnakeJoke">Snake_Joke</button>
    <p id="snakeJokeContainer"></p>
  </div>
</template>

<script>
export default {
  name: "snake-joke",
  computed: {
    //calls the getter fn snakeJoke from the store
    snakeJoke: function() {
      return this.$store.getters.snakeJoke;
    },
  },
  methods: {
    //fn called on click of snake_joke btn to put the snake from the data above into the
    //snake joke container on this page
    showSnakeJoke: function() {
      let snakeJoke = this.snakeJoke;
      document.getElementById("snakeJokeContainer").innerText = `${snakeJoke}`;
    },
  },
};
</script>

<style scoped></style>
