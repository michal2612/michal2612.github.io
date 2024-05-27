var polishLetters = false
function AddOrRemorePolishLetters() {
    document.getElementById("full-name").innerText = polishLetters ? "Michal Domanski" : "Michał Domański";
    polishLetters = !polishLetters;
}