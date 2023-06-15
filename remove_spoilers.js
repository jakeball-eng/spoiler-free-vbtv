function removeSpoilers() {
    var style = document.createElement('style');
    style.innerHTML = `
    .ds-seek-bar, .card-meta__duration, .time, .card-progress, .card-content__footer {
        display: none !important;
    }`;
    document.head.appendChild(style);
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", removeSpoilers);
} else {
    removeSpoilers();
}