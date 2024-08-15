document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(navItem) {
        const navLink = navItem.querySelector('.nav-link');

        if (navLink) {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Toggle hiển thị dropdown của nav-item hiện tại
                const dropdown = navItem.querySelector('.nav-item-hidden');
                
                if (dropdown) {
                    const isVisible = dropdown.style.display === 'block';
                    
                    // Ẩn tất cả các dropdown khác
                    document.querySelectorAll('.nav-item-hidden').forEach(function(item) {
                        item.style.display = 'none';
                    });

                    // Hiển thị hoặc ẩn dropdown được click
                    dropdown.style.display = isVisible ? 'none' : 'block';
                }
            });
        }
    });

    // Ẩn dropdown nếu click ngoài nó
    document.addEventListener('click', function(e) {
        navItems.forEach(function(navItem) {
            const dropdown = navItem.querySelector('.nav-item-hidden');
            if (dropdown && !navItem.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    });
});

function showContext(contextId) {
    // Ẩn tất cả các nội dung
    document.querySelectorAll('.context').forEach(context => {
        context.classList.remove('active');
    });

    // Hiển thị nội dung tương ứng nếu tồn tại
    const context = document.getElementById(contextId);
    if (context) {
        context.classList.add('active');
    }
}