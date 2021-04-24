<template>
  <div>
    <button id="loudJoke" @click="showLoudJoke">LOUD JOKE</button>
    <p id="loudJokeContainer"></p>
  </div>
</template>

<script>
export default {
  name: "loud-joke",
  computed: {
    loudJoke: function() {
      return this.$store.getters.loudJoke;
    },
  },
  methods: {
    showLoudJoke: function() {
      let loudJoke = this.loudJoke;
      document.getElementById("loudJokeContainer").innerText = `${loudJoke}`;
    },
  },
};
</script>

<style scoped></style>
