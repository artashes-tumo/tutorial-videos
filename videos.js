document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    const title = document.getElementById("modalTitle");

    // Accordion
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.onclick = () => {
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);
            btn.nextElementSibling.style.display = expanded ? "none" : "flex";
            btn.querySelector(".chevron").style.transform = expanded ? "rotate(0deg)" : "rotate(180deg)";
        };
    });

    // Open Video in Modal
    document.querySelectorAll(".video-card").forEach(card => {
        card.onclick = () => {
            video.src = card.dataset.video;
            title.textContent = card.dataset.title;
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        };
    });

    // Close Modal
    document.querySelector(".close-btn").onclick = () => {
        modal.setAttribute("aria-hidden", "true");
        video.pause();
        video.src = "";
        document.body.style.overflow = "";
    };

    modal.onclick = (e) => { if (e.target === modal) document.querySelector(".close-btn").click(); };
    document.onkeydown = (e) => { if (e.key === "Escape") document.querySelector(".close-btn")?.click(); };
});