<template>
  <div id="app">
    <div>
      <joke-button />
    </div>
    <div id="jokeTypes">
      <normal-joke />
      <!-- <snake-joke />
      <loud-joke /> -->
    </div>
  </div>
</template>

<script>
import JokeButton from "./components/JokeButton.vue";
import NormalJoke from "./components/NormalJoke.vue";
// import SnakeJoke from "./components/SnakeJoke.vue";
// import LoudJoke from "./components/LoudJoke.vue";

export default {
  name: "App",
  components: {
    JokeButton,
    NormalJoke,
    // SnakeJoke,
    // LoudJoke,
  },
};
</script>

<style>
#app {
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 3fr;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#jokeTypes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
