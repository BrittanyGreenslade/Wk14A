import Vue from "vue";
import Vuex from "vuex";
//imported axios library
import axios from "axios";
//imported npm that I installed for snake case for funzies/tryzies
// import jsConvert from "js-convert-case";
//https://www.npmjs.com/package/js-convert-case#tosnakecase
// console.log(jsConvert.toSnakeCase);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //creating an empty variable for the joke so it can be updated
    newJoke: "",
  },
  mutations: {
    //function called in the action below that updates the newJoke variable with the data
    //grabbedJoke here is what is 'committed' to this function when it's mutated
    updateJoke: function(state, grabbedJoke) {
      state.newJoke = grabbedJoke;
    },
  },
  actions: {
    //use action to make an axios call, because it's asynchronous (calls the 'udpate joke'
    //function before sending the res.data.joke data up to the updateJoke function)
    //'context' here is the entire 'store' objcet - presumably because it needs to access
    //every thing in the object since it's asynchronous
    generateJoke: function(context) {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET",
        })
        //grabbedJoke is what's grabbed from the API
        .then((res) => {
          let grabbedJoke = res.data.joke;
          context.commit("updateJoke", grabbedJoke);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    //getters used here because I need to modify the value in the state but not update it
    //(if wanted it to be snake and loud at the same time, you can mutate it)
    //just wanted it to change from the OG to each case each time tho
    //fn for the loud joke. grabbed the new joke from the state and used built-in to make
    //it LOUD AF
    loudJoke: function(state) {
      let loudJoke = state.newJoke.toUpperCase();
      return loudJoke;
    },
    //Ok I did the snake joke like this first but I wanted to try and use an npm too
    snakeJoke: function(state) {
      let snakeJoke = state.newJoke.replaceAll(" ", "_");
      return snakeJoke;
    },
    //here I called the npm how it said to in the docs
    // snakeJoke: function(state) {
    //   let snakeJoke = jsConvert.toSnakeCase(state.newJoke);
    //   return snakeJoke;
    // },
  },
});
//this is the function for toSnakeCase from the npm. I didn't use it because it replaces
//everything other than alphanumeric characters, not just spaces, and some jokes contained
// *~ fun punctuation, npm fun and I learned a thing :D

// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// function toSnakeCase(str) {
//     if (str === void 0) { str = ''; }
//     if (!str)
//         return '';
//     return String(str)
//         .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
//         .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + '_' + b.toLowerCase(); })
//         .replace(/[^A-Za-z0-9]+|_+/g, '_')
//         .toLowerCase();
// }
// exports.default = toSnakeCase;
