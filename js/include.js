function loadContent(url, elementId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                if (callback) callback(); // Gọi hàm callback nếu có
            } else {
                console.error('Element with ID "' + elementId + '" does not exist.');
            }
        })
        .catch(error => console.error('Error loading content:', error));
}
document.addEventListener('DOMContentLoaded', function() {
    // Mã của bạn ở đây
    loadContent('/includes/banner.html', 'banner', initializeBanner);
    loadContent('/includes/footer.html', 'footer', initializeFooter);
    loadContent('/includes/ad_banner.html','ad_banner',initializeFooter)
});



function initializeBanner() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(navItem) {
        const navLink = navItem.querySelector('.nav-link');

        if (navLink) {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                const dropdown = navItem.querySelector('.nav-item-hidden');
                
                if (dropdown) {
                    const isVisible = dropdown.style.display === 'block';
                    
                    document.querySelectorAll('.nav-item-hidden').forEach(function(item) {
                        item.style.display = 'none';
                    });

                    dropdown.style.display = isVisible ? 'none' : 'block';
                }
            });
        }
    });

    document.addEventListener('click', function(e) {
        navItems.forEach(function(navItem) {
            const dropdown = navItem.querySelector('.nav-item-hidden');
            if (dropdown && !navItem.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    });
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('menu-open');
        });
    }
    
}

function initializeFooter() {
    
}