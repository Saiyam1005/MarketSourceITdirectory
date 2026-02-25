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
    // Hide splash shortly after DOM is ready to improve perceived load time
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const poster = document.getElementById('poster-popup');
        if (splash) splash.classList.add('hidden');
        if (poster) poster.classList.add('show');
    }, 300);

    // Close poster
    document.getElementById('close-poster').addEventListener('click', () => {
        document.getElementById('poster-popup').classList.remove('show');
    });

});
