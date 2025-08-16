document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("alertButton");
    button.addEventListener("click", () => {
        alert("Button was clicked! Let's prioritize wisely.");
    });

    // Enable strike-through when checkbox is checked
    document.querySelectorAll(".quadrant").forEach(quadrant => {
        quadrant.addEventListener("change", (e) => {
            if (e.target.type === "checkbox") {
                const label = e.target.nextElementSibling;
                if (e.target.checked) {
                    label.style.textDecoration = "line-through";
                } else {
                    label.style.textDecoration = "none";
                }
            }
        });
    });

    // Enable drag and drop functionality
    let draggedItem = null;

    document.querySelectorAll(".task").forEach(task => {
        task.setAttribute("draggable", true);

        task.addEventListener("dragstart", () => {
            draggedItem = task;
            setTimeout(() => task.style.display = "none", 0);
        });

        task.addEventListener("dragend", () => {
            draggedItem.style.display = "flex";
            draggedItem = null;
        });
    });

    document.querySelectorAll(".quadrant").forEach(quadrant => {
        quadrant.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        quadrant.addEventListener("drop", () => {
            if (draggedItem) {
                quadrant.appendChild(draggedItem);
            }
        });
    });
});
