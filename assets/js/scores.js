// the clear button
const CLEAR_BUTTON = document.querySelector("#clear-scores");

// parse highScores from local storage into an array
let highScores = JSON.parse(localStorage.getItem("highScores"));

// printing the high scores to the page
function printHighscores() {

  highScores.sort(function compareFn(a,b) {
    return b.score - a.score;
  })

  highScores.forEach(function(highScores) {
    // make list items out of high scores in local storage
    let listScore = document.createElement("li");
    listScore.textContent = highScores.score + " - " + highScores.name;

    // make a list out of the list items
    let scoreList = document.querySelector("#high-scores");
    scoreList.appendChild(listScore);
  });

}

// clear local storage
function clearHighscoreList() {
  localStorage.removeItem("highScores");
  location.reload();
}

CLEAR_BUTTON.addEventListener("click", clearHighscoreList);

printHighscores();