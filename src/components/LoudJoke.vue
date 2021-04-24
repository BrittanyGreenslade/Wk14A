<template>
  <div>
    <!-- calls showLoudJoke fn on click -->
    <button id="loudJoke" @click="showLoudJoke">LOUD JOKE</button>
    <p id="loudJokeContainer"></p>
  </div>
</template>

<script>
export default {
  name: "loud-joke",
  computed: {
    //calls the getter fn loudJoke from the store
    loudJoke: function() {
      return this.$store.getters.loudJoke;
    },
  },
  methods: {
    //fn called on click of LOUD JOKE btn to put the loudJoke from the data above into the
    //loud joke container on this page
    showLoudJoke: function() {
      let loudJoke = this.loudJoke;
      document.getElementById("loudJokeContainer").innerText = `${loudJoke}`;
    },
  },
};
</script>

<style scoped></style>
