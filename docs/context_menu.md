Responsive Glassmorphism Hamburger Menu ReferenceThis document contains the complete HTML, CSS, and JavaScript code for a responsive, modern hamburger menu with a glassmorphism effect. This code should be used as a reference for building similar navigation components.Key FeaturesResponsive: Transitions from a mobile hamburger menu to a desktop horizontal navigation bar.Glassmorphism Effect: The mobile menu has a blurred, semi-transparent background.Pure CSS/JS: It does not rely on any external frameworks like Tailwind CSS.Animated Icon: The hamburger icon smoothly animates into an 'X' when the menu is opened.Sticky Header: The header remains at the top of the page on scroll.Complete CodeHere is the full, self-contained code for the menu.<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Glassmorphism Menu (No Tailwind)</title>
    <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
    <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
    <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap)" rel="stylesheet">
    <style>
        /* --- CSS Reset and Basic Styles --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #111827; /* Dark background */
            color: white;
            line-height: 1.6;
        }

        a {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        ul {
            list-style: none;
        }

        /* --- Header Styles --- */
        .site-header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 40;
            /* Semi-transparent background with blur for the header */
            background-color: rgba(17, 24, 39, 0.5); 
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }

        .logo {
            font-size: 1.5rem; /* Equivalent to text-2xl */
            font-weight: 700; /* Equivalent to font-bold */
        }
        
        /* --- Desktop Navigation --- */
        .desktop-nav {
            display: none; /* Hidden by default */
        }

        .desktop-nav a {
            margin-left: 1.5rem; /* Equivalent to space-x-6 */
        }

        .desktop-nav a:hover {
            color: #D1D5DB; /* Equivalent to hover:text-gray-300 */
        }

        /* --- Hamburger Button --- */
        .hamburger-button {
            z-index: 50;
            border: none;
            background: none;
            cursor: pointer;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 36px;
            height: 36px;
        }

        .hamburger-button .line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 3px;
            transition: all 0.3s ease-in-out;
        }

        /* Animation for the hamburger to 'X' */
        .hamburger-button.active .line-1 {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger-button.active .line-2 {
            opacity: 0;
        }

        .hamburger-button.active .line-3 {
            transform: rotate(-45deg) translate(8px, -8px);
        }
        
        /* --- Mobile Navigation Menu --- */
        .mobile-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: 75%;
            max-width: 320px;
            height: 100vh;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            padding-top: 80px;
        }
        
        .mobile-nav.active {
            transform: translateX(0);
        }
        
        .mobile-nav ul {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .mobile-nav li {
            margin-bottom: 2rem; /* Equivalent to space-y-8 */
        }
        
        .mobile-nav a {
            font-size: 1.25rem; /* Equivalent to text-xl */
        }

        .mobile-nav a:hover {
            color: #D1D5DB;
        }

        /* --- Glassmorphism Style --- */
        .glassmorphism {
            background-color: rgba(31, 41, 55, 0.7); 
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* --- Main Content --- */
        .main-content {
            padding: 2rem;
        }

        .main-content h1 {
            font-size: 2.25rem; /* Equivalent to text-4xl */
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .main-content p {
            max-width: 42rem; /* Equivalent to max-w-2xl */
            color: #D1D5DB; /* Equivalent to text-gray-300 */
        }
        
        .scroll-spacer {
            height: 100vh;
            margin-top: 2rem;
        }

        .scroll-spacer p {
            color: #9CA3AF; /* Equivalent to text-gray-400 */
        }

        /* --- Responsive Breakpoint --- */
        /* For screens 768px and wider (tablets/desktops) */
        @media (min-width: 768px) {
            .hamburger-button {
                display: none; /* Hide hamburger on desktop */
            }
            .mobile-nav {
                display: none; /* Hide mobile menu on desktop */
            }
            .desktop-nav {
                display: flex; /* Show desktop nav */
            }
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <header class="site-header">
        <a href="#" class="logo">Logo</a>
        
        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>

        <!-- Hamburger Menu Button -->
        <button id="hamburger-button" class="hamburger-button">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </button>
    </header>

    <!-- Mobile Navigation Menu -->
    <nav id="mobile-nav" class="mobile-nav glassmorphism">
        <ul>
            <li><a href="#" class="menu-link">Home</a></li>
            <li><a href="#" class="menu-link">About</a></li>
            <li><a href="#" class="menu-link">Services</a></li>
            <li><a href="#" class="menu-link">Contact</a></li>
        </ul>
    </nav>
    
    <!-- Dummy content to demonstrate scrolling -->
    <main class="main-content">
        <h1>Welcome to the Website</h1>
        <p>
            This is a sample page to demonstrate the responsive hamburger menu. The menu on the top right will appear on smaller screens. 
            On larger screens, you'll see a standard horizontal navigation bar. The mobile menu features a modern glassmorphism effect.
            Resize your browser window to see it in action!
        </p>
        <div class="scroll-spacer">
            <p>Scroll down to see the header's sticky behavior.</p>
        </div>
    </main>

    <script>
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
    </script>

</body>
</html>
