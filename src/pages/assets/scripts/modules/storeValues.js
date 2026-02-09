export const storeValues = () => {
    const form = document.querySelector(".form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector(".name");
        const email = document.querySelector(".email");
        const english = document.querySelector(".english");
        const purpose = document.querySelector(".purpose");
        const time = document.querySelector(".time");
        const message = document.querySelector(".message");

        sessionStorage.setItem("name", name.value);
        sessionStorage.setItem("email", email.value);
        sessionStorage.setItem("english", english.value);
        sessionStorage.setItem("purpose", purpose.value);
        sessionStorage.setItem("time", time.value);
        sessionStorage.setItem("message", message.value);

        window.location.href = "/confirm.html";
    });
};
