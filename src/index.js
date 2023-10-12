function toggleModal() {
  const modal = document.getElementById("modal");
  const emojisContainer = document.getElementById("emojis");
  const arrow = document.getElementById("arrow");

  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    emojisContainer.classList.add("hidden");
    arrow.classList.add("hidden");
  } else {
    modal.classList.add("hidden");
    emojisContainer.classList.remove("hidden");
    arrow.classList.remove("hidden");
  }
}
