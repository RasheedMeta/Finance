function closeIframe() {
    const iframeContainer3 = document.getElementById('iframeContainer');
    const iframeModal3 = document.getElementById('iframeModal');



    // Clear the iframe source
    iframeModal3.src = '';

    // Hide the iframe container
    iframeContainer3.style.display = 'none';
}

function closeIframe1() {
    const modalContainer = document.getElementById('modalContainer');
    const modalContent = document.getElementById('modalContent');
    
    
    
    // Clear the iframe source
    modalContent.src = '';
    
    // Hide the iframe container
    modalContainer.style.display = 'none';
    }