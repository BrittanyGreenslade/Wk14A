import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newJoke: "",
  },
  mutations: {
    updateJoke: function(state, data) {
      state.newJoke = data;
    },
  },
  actions: {
    generateJoke: function(context) {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET",
        })
        .then((res) => {
          let newJoke = res.data.joke;
          context.commit("updateJoke", newJoke);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    loudJoke: function(state) {
      let loudJoke = state.newJoke.toUpperCase();
      return loudJoke;
    },
  },
});
