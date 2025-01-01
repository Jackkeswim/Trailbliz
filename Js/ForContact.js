document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const contentInput = document.getElementById("content");

    // Function to show modal
    const showModal = (message, isSuccess) => {
        // Create modal container
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100vw";
        modal.style.height = "100vh";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        // Create modal content
        const modalContent = document.createElement("div");
        modalContent.style.backgroundColor = isSuccess ? "#28a745" : "#dc3545";
        modalContent.style.color = "white";
        modalContent.style.padding = "20px";
        modalContent.style.borderRadius = "8px";
        modalContent.style.position = "relative";
        modalContent.style.textAlign = "center";
        modalContent.style.width = "80%";
        modalContent.style.maxWidth = "400px";

        // Modal message
        const modalMessage = document.createElement("p");
        modalMessage.textContent = message;
        modalMessage.style.margin = "0 0 20px";

        // Close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.background = "none";
        closeButton.style.border = "none";
        closeButton.style.color = "white";
        closeButton.style.fontSize = "20px";
        closeButton.style.cursor = "pointer";

        closeButton.addEventListener("click", () => {
            document.body.removeChild(modal);
        });

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalMessage);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);
    };

    // Form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = emailInput.value.trim();
        const content = contentInput.value.trim();

        if (email && content) {
            showModal("Your message has been received!", true);
            form.reset(); // Reset form fields after success
        } else {
            showModal("You have not filled in the form completely.", false);
        }
    });
});
