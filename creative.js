// script.js
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        alert("Sie öffnen ein Dokument. Viel Erfolg bei Ihrer Bewerbung!");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


