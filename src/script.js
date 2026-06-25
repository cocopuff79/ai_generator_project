function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5a6cade0fb0235906516oefa5tf3413e";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem using basic html and separate each line with a break. Make sure to follow the user instructions. Do not include a title.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Generating a French poem about ${instructionsInput.value}...`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
