const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const resetResult = () => {
  result.textContent = "";
  result.className = "hide";
};

clearButton.addEventListener("click", () => {
  userInput.value = "";
  resetResult();
});
