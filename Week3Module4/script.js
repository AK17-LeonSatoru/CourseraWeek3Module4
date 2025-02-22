document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded, script running...");

    const thumbnails = document.querySelectorAll(".thumb");
    const mainText = document.getElementById("main-text");

    thumbnails.forEach((img, index) => {
        img.setAttribute("tabindex", "0"); // Dynamically add tabindex

        img.addEventListener("mouseover", function () {
            mainText.textContent = img.alt;
            console.log(`Hovered over image: ${img.alt}`);
        });

        img.addEventListener("mouseleave", function () {
            mainText.textContent = "Hover over an image to see details.";
            console.log(`Mouse left image: ${img.alt}`);
        });

        img.addEventListener("focus", function () {
            mainText.textContent = img.alt;
            console.log(`Focused on image: ${img.alt}`);
        });

        img.addEventListener("blur", function () {
            mainText.textContent = "Hover over an image to see details.";
            console.log(`Blurred from image: ${img.alt}`);
        });
    });
});
