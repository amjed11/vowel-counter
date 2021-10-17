const button = document.querySelector(".button");
const input = document.querySelector(".input");
const span = document.querySelector("span");

button.onclick = () => {
  if (input.value.length > 0) {
    let vowelCounter = (str) =>
      str.split("").filter((v) => /[aeuoi]/gi.test(v)).length;

    // let vowelCounter = (str, vowels = "aeuio") =>
    //   str.split("").filter((v) => vowels.indexOf(v) !== -1).length;

    span.innerText = ` number of vowels is : ${vowelCounter(input.value)}`;
    input.value = "";
  } else {
    span.innerText = "please enter a text";
  }
};
