function closeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframeModal = document.getElementById('iframeModal');

    // Clear the iframe source
    iframeModal.src = '';

    // Hide the iframe container
    iframeContainer.style.display = 'none';
}