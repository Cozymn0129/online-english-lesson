export const showDetails = () => {
    const hero = document.querySelector('.hero');
    const btn = document.querySelector('.toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        hero.classList.toggle('is-open');
    });
};
