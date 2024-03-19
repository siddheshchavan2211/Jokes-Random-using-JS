let jokes = document.querySelector("#joke");
let changejoke = document.querySelector("#btn");
let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let fun = () => {
  jokes.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokes.textContent = `${data.joke}`;
    });
};
changejoke.addEventListener("click", fun);
fun();
