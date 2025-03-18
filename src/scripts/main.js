
document.addEventListener("DOMContentLoaded", function () {
    const trailerButton = document.querySelector(".header__button");

    if (trailerButton) {
        trailerButton.addEventListener("click", function (e) {
            e.preventDefault();
            openTrailerModal("https://www.youtube.com/embed/7OIFdWk83no");
        });
    }
});


function openTrailerModal(videoUrl) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal__overlay"></div> <!-- Background overlay -->
        <div class="modal__content">
            <span class="modal__close">&times;</span> <!-- Close button -->
            <iframe width="800" height="450" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;

    document.body.appendChild(modal);


    document.querySelector(".modal__close").addEventListener("click", function () {
        modal.remove();
    });


    document.querySelector(".modal__overlay").addEventListener("click", function () {
        modal.remove();
    });
}

