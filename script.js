fetch("build-info.json")
  .then(response => response.json())
  .then(info => {
    document.getElementById("build-info").innerText =
      `Build ${info.short_commit} • ${info.branch} • ${info.build_time}`;
  })
  .catch(() => {
    document.getElementById("build-info").innerText =
      "Build info unavailable";
  });
