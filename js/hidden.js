document.addEventListener("DOMContentLoaded", function() {
    const qaItems = document.querySelectorAll(".myQAContent");

    qaItems.forEach(item => {
        item.addEventListener("click", function() {
            const answerContent = this.nextElementSibling;
            const symbol = this.querySelector(".symbol");
            const isVisible = answerContent.style.display === "block";

            // Toggle the display of the answerContent
            answerContent.style.display = isVisible ? "none" : "block";

            // Toggle the + and - symbols
            symbol.textContent = isVisible ? "+" : "-";
        });
    });
});