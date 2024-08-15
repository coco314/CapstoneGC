const formIn = document.getElementById("form");
console.log(formIn);
formIn.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = event.target.elements;
  for (let input of inputs) {
    console.log(input.id, input.value);
  }
  // const formData = new FormData(event.target);

  //   const params = {};

  //   formData.forEach((value, key) => {
  //     params[key] = value; // Store key-value pairs in an object
  //   });

  //   console.log(params);
});
