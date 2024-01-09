/*AFRAME.registerComponent('clicked1', {
    init: function(){
        let el = this.el;
        this.toggleColor = function(){
            alert('clicked');
            
        }
        this.el.addEventListener('click', this.toggleColor);

    },
    remove: function(){
        this.el.removeEventListener('click', this.toggleColor);
    }
})
*/


AFRAME.registerComponent('clicked1', {
    init: function(){
        let el = this.el;
        this.toggleColor = function(){
            const iframeContainer = document.getElementById('iframeContainer');
            const iframeModal = document.getElementById('iframeModal');

            // Set the iframe source to the desired website
            iframeModal.src = 'https://mtn-finance-help-desk.vercel.app/';

            // Display the iframe container
            iframeContainer.style.display = 'flex';
        }
        this.el.addEventListener('click', this.toggleColor);

    },
    remove: function(){
        this.el.removeEventListener('click', this.toggleColor);
    }
})