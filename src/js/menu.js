document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileNav = document.getElementById('mobile-nav');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Function to toggle the menu
    const toggleMenu = () => {
        hamburgerButton.classList.toggle('active');
        mobileNav.classList.toggle('active');
    };
    
    // Event listener for the hamburger button
    hamburgerButton.addEventListener('click', toggleMenu);

    // Event listener for each menu link to close the menu on click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
