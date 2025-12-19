// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Fetch build info (CI-generated)
fetch("/build-info.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("buildInfo").innerText =
      `© 2025 Anshul • Build ${data.sha} • ${data.date}`;
  })
  .catch(() => {
    document.getElementById("buildInfo").innerText =
      "© 2025 Anshul • Build info unavailable";
  });