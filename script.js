const clearButton = document.getElementById("clear-btn");

const toggleResultVisibility = () => {
  const result = document.getElementById("results-div");
  result.className = result.className === "hide" ? "" : "hide";
};

clearButton.addEventListener("click", toggleResultVisibility);
