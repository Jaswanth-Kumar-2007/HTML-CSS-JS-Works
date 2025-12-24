document.getElementById("display").style.display = "none"

setTimeout(() => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("display").style.display = "block";
}, 4000);
