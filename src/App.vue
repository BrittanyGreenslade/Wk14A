<template>
  <!-- using components in HTML -->
  <div id="app">
    <div>
      <joke-button />
    </div>
    <div id="jokeTypes">
      <div>
        <normal-joke />
      </div>
      <div>
        <snake-joke />
      </div>
      <div>
        <loud-joke />
      </div>
    </div>
  </div>
</template>

<script>
// importing other components
import JokeButton from "./components/JokeButton.vue";
import NormalJoke from "./components/NormalJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";
import LoudJoke from "./components/LoudJoke.vue";

export default {
  name: "App",
  components: {
    //registering components
    JokeButton,
    NormalJoke,
    SnakeJoke,
    LoudJoke,
  },
};
</script>

<style>
#app {
  display: grid;
  place-items: center;
  grid-auto-flow: row;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

#jokeTypes {
  display: grid;
}
</style>
