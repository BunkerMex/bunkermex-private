document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("applyForm").style.display = "none";
  document.getElementById("response").classList.remove("hidden");
});
