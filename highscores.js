const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Create list items using a loop
let listItems = "";
for (let score of highScores) {
  listItems += `<li class="high-score">${score.name} - ${score.score}</li>`;
}

// Set the innerHTML
highScoresList.innerHTML = listItems;
