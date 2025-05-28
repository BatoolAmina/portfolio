
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "🌙";
    } else {
        modeToggle.textContent = "🌗";
    }
});

document.body.classList.add("light-mode");
