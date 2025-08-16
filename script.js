document.addEventListener("DOMContentLoaded", () => {
  // Existing demo alert
  const button = document.getElementById("alertButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("Button was clicked! Let's prioritize wisely.");
    });
  }

  // ----- Strike-through on complete (event delegation) -----
  const matrix = document.querySelector(".matrix");
  if (matrix) {
    matrix.addEventListener("change", (e) => {
      const target = e.target;
      if (target && target.matches('input[type="checkbox"]')) {
        const task = target.closest(".task");
        const label = task ? task.querySelector("span") : null;
        if (label) {
          label.style.textDecoration = target.checked ? "line-through" : "none";
        }
      }
    });
  }

  // ----- Drag & drop -----
  function initTask(task) {
    if (!task || task.dataset.draggableInit === "true") return;
    task.dataset.draggableInit = "true";
    task.setAttribute("draggable", "true");

    task.addEventListener("dragstart", () => {
      task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });
  }

  // Initialize existing tasks
  document.querySelectorAll(".task").forEach(initTask);

  // Accept drops on quadrants
  document.querySelectorAll(".quadrant").forEach((quadrant) => {
    quadrant.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    quadrant.addEventListener("drop", (e) => {
      e.preventDefault();
      const dragged = document.querySelector(".task.dragging");
      if (dragged) {
        quadrant.appendChild(dragged);
      }
    });
  });
});
