export const displayValues = () => {
    const confirmSection = document.querySelector(".confirm");
    const thanksSection = document.querySelector(".thank-you");
    if (!confirmSection && !thanksSection) return;

    document.querySelector(".confirm-name").textContent = sessionStorage.getItem("name");
    document.querySelector(".confirm-email").textContent = sessionStorage.getItem("email");
    document.querySelector(".confirm-level").textContent = sessionStorage.getItem("english") || "-";
    document.querySelector(".confirm-purpose").textContent = sessionStorage.getItem("purpose") || "-";
    document.querySelector(".confirm-time").textContent = sessionStorage.getItem("time") || "-";
    document.querySelector(".confirm-message").textContent = sessionStorage.getItem("message") || "-";

    document.querySelector(".confirm-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "/thanks.html";
    });

    if (thanksSection) {
        const name = sessionStorage.getItem("name");
        if (name) {
            document.querySelector(".thank-you-name").textContent = `Thank you, ${name}!`;
        }
    }
};
