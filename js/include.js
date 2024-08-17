function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

window.onload = function() {
    loadContent('/includes/banner.html', 'banner');
    loadContent('/includes/footer.html', 'footer');
};