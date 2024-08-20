function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

window.onload = function() {
    loadContent('/Tapchikhoahoc/includes/banner.html', 'banner');
    loadContent('/Tapchikhoahoc/includes/footer.html', 'footer');
}
