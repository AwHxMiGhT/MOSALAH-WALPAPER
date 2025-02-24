document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".downloadable").forEach(img => {
        img.addEventListener("click", function() {
            const imageUrl = this.src; // استخدم الرابط الفعلي للصورة
            downloadImage(imageUrl);
        });
    });
});

async function downloadImage(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "mohamed_salah.jpg"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // تحرير الذاكرة بعد التحميل
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error("فشل تحميل الصورة:", error);
    }
}