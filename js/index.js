const pauli = document.getElementById("pauli");
const navController = document.getElementById("navController");
let click = 0;
pauli.addEventListener("click", () => {
  if (click == 0) {
    navController.classList.remove("close");
    navController.classList.add("open");
    click = 1;
    return;
  }
 
  if (click == 1) {
    navController.classList.remove("open");
    navController.classList.add("close");
    click = 0;
    return;
  }
});