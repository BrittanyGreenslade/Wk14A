<template>
  <div>
    <button id="jokeBtn" @click="getJoke()">Generate Joke!</button>
    <h3 id="successMessage"></h3>
    <!-- I don't want the joke to show up here so I commented this out but I wasn't sure if 
    you wanted us to do it for the assignment so I left it here -->
    <!-- <p>{{ newJoke }}</p> -->
  </div>
</template>

<script>
export default {
  name: "joke-button",
  computed: {
    //accessing the 'newJoke' variable in the state
    newJoke: function() {
      return this.$store.state.newJoke;
    },
  },
  methods: {
    //function to invoke the action "generateJoke" and put a success message on the page when
    //the joke has been generated
    getJoke: function() {
      this.$store.dispatch("generateJoke");
      document.getElementById("successMessage").innerText =
        "Joke has been generated! Select how you'd like to view your joke:";
    },
  },
};
</script>

<style scoped></style>
