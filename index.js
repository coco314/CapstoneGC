import { header, nav, main, footer } from "./components";

import * as store from "./store";

import Navigo from "navigo";

import { camelCase } from "lodash";

import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
  router.updatePageLinks();
}

// adding one route
router.hooks({
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    done();
    // Add a switch case statement to handle multiple routes
    // switch (view) {
    //   case "pizza":
    //     axios
    //       .get(`https://sc-pizza-api.onrender.com/pizzas`)
    //       .then((response) => {
    //         // Storing retrieved data in state
    //         // The dot chain variable access represents the following {storeFolder.stateFileViewName.objectAttribute}
    //         store.pizza.pizzas = response.data;
    //         done();
    //       })
    //       .catch((error) => {
    //         console.log("It puked", error);
    //         done();
    //       });
    //     break;
    //   default:
    //     done();
    // }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });

    if (view === "home") {
      document.querySelector("#quote-btn").addEventListener("click", () => {
        console.log("I was clicked !");
        axios
          .get("https://api.kanye.rest/")
          .then((response) => {
            // Handle the response
            store.home.quote = response.data.quote;
            console.log("Kanye says: ", response.data.quote);
            router.navigate("/home");
          })
          .catch((error) => {
            // Handle the error
            console.error("Error fetching data:", error);
          });
      });
    }
  },
});
router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": (match) => {
      console.info("view callback called");

      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      // Determine if the view name key exists in the store object
      if (view in store) {
        console.info("Render in view callback called");

        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();

function calculateResult() {
  // Get all form elements
  const form = document.getElementById("quizForm");

  // Store answers in an object
  const answers = {
    Mario: 0,
    Yoshi: 0,
    Boo: 0,
    Bowser: 0,
    "Donkey Kong": 0,
  };

  // Get the selected answers
  const formData = new FormData(form);

  // Loop through each entry and count each answer
  for (let entry of formData.values()) {
    if (answers[entry] !== undefined) {
      answers[entry]++;
    }
  }

  // Find the character with the most selections
  let result = Object.keys(answers).reduce((a, b) =>
    answers[a] > answers[b] ? a : b
  );

  // Display the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h2>You align most with: ${result}!</h2>`;
}
