if (typeof document !== "undefined") {
  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeBtn.textContent = "Light Theme";
    } else {
      themeBtn.textContent = "Dark Theme";
    }
  });
}