function hideText() {
  const text = document.getElementById("text");
  text.hidden = !text.hidden;  
}

function toggleText() {
  const button = document.getElementsByClassName("toggle-text-button")[0];
  button.addEventListener("click", hideText);
}