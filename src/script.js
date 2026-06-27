function displaygame(response) {
  new Typewriter("#game", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generategame(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5a6cade0fb0235906516oefa5tf3413e";
  let prompt = `User instructions: Generate a list of the top 5 ${instructionsInput.value} video games. Return only the game titles.
  `;
  let context =
    "You are a video game expert. Always respond ONLY with a numbered list of video games titles in HTML format. Each item must be on its own line, . Do not include any extra text, explanations, or formatting.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let gameElement = document.querySelector("#game");
  gameElement.classList.remove("hidden");
  gameElement.innerHTML = `<span class="blink">⌛ Generating a list of ${instructionsInput.value} video games...</span>`;

  axios.get(apiURL).then(displaygame);
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generategame);
