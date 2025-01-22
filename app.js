document.addEventListener("DOMContentLoaded", () => {
    const dropdownHeaders = document.querySelectorAll(".dropdown-header");

    dropdownHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const dropdownContent = header.nextElementSibling;
            dropdownContent.classList.toggle("visible");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('.dropdown-header').forEach(header => {
            header.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.toggle('dark-mode');
        });
    });
});