export const showCourse = () => {
    document.querySelectorAll('.panel-container').forEach(wrapper => {
        const modal = wrapper.querySelector('.panel-modal');
        const openBtn = wrapper.querySelector('.panel-header');
        const closeBtn = wrapper.querySelector('.panel-close');
        
        // Open
        openBtn.addEventListener('click', e => {
            e.preventDefault();
            modal.classList.add('show');
        });

        // Close when &times; is clicked
        closeBtn.addEventListener('click', e => {
            e.stopPropagation();
            modal.classList.remove('show');
        });

        // Close when background is clicked
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.classList.remove('show');
        });
    });
};
