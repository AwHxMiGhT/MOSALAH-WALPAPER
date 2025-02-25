document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function() {
            const imageUrl = this.getAttribute("data-url");
            openImageInNewTab(imageUrl);
        });
    });
});

function openImageInNewTab(url) {
    window.open(url, "_blank"); // يفتح الصورة في نافذة جديدة
}
