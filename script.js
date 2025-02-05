const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");

const resetResult = () => {
  result.textContent = "";
  result.className = "hide";
};

clearButton.addEventListener("click", () => {
  userInput.value = "";
  resetResult();
});

checkButton.addEventListener("click", () => {
  const phoneUsRegex = /(?:1\s*)?/;
  const value = userInput.value;
  console.log(phoneUsRegex.test(value));
});
