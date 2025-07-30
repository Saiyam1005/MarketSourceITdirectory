document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const links = document.getElementById('nav-links');

    // Toggle menu on button click
    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent it from bubbling to document
        links.classList.toggle('show');
    });

    // Prevent clicks inside menu from closing it
    links.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Click outside = close menu
    document.addEventListener('click', () => {
        links.classList.remove('show');
    });
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('splash-screen').classList.add('hidden');
            document.getElementById('poster-popup').classList.add('show');
        }, 1000);
    });

    // Close poster
    document.getElementById('close-poster').addEventListener('click', () => {
        document.getElementById('poster-popup').classList.remove('show');
    });

});
