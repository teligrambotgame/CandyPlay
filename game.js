const candies = ["🍬", "🍭", "🍫", "🍓", "🍇"];
const gridSize = 8;
let score = 0;
let currentLevel = 0;

const levels = [
  { goalCandy: "🍬", goalCount: 10 },
  { goalCandy: "🍭", goalCount: 12 },
  { goalCandy: "🍫", goalCount: 15 },
  { goalCandy: "🍓", goalCount: 18 },
  { goalCandy: "🍇", goalCount: 20 },
  { goalCandy: "🍬", goalCount: 22 },
  { goalCandy: "🍭", goalCount: 25 },
  { goalCandy: "🍫", goalCount: 28 },
  { goalCandy: "🍓", goalCount: 30 },
  { goalCandy: "🍇", goalCount: 35 }
];

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const candy = candies[Math.floor(Math.random() * candies.length)];
    cell.textContent = candy;
    cell.addEventListener("click", () => handleClick(cell, candy));
    grid.appendChild(cell);
  }
}

function handleClick(cell, candy) {
  const goal = levels[currentLevel].goalCandy;
  if (candy === goal) {
    score++;
    cell.textContent = candies[Math.floor(Math.random() * candies.length)];
    document.getElementById("score").textContent = `Score: ${score}`;
    if (score >= levels[currentLevel].goalCount) {
      document.getElementById("nextLevel").style.display = "inline-block";
    }
  }
}

document.getElementById("nextLevel").addEventListener("click", () => {
  currentLevel++;
  if (currentLevel >= levels.length) {
    alert("🎉 All levels complete! You’re a Candy Master!");
    return;
  }
  score = 0;
  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("nextLevel").style.display = "none";
  const level = levels[currentLevel];
  document.getElementById("levelInfo").textContent = `Level ${currentLevel + 1} — Goal: ${level.goalCandy} x${level.goalCount}`;
  createGrid();
});

createGrid();
