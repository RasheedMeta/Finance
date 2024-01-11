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
    init: function () {
        let entity = this.el;

        this.changeColor = function () {
            const containerElement = document.getElementById('iframeContainer');
            const modalElement = document.getElementById('iframeModal');

            modalElement.src = 'https://mtn-finance-help-desk.vercel.app/';
            containerElement.style.display = 'flex';
        }

        // Use the cursor component for interaction
        entity.setAttribute('cursor-listener', {});

        // Listen for the click event triggered by the cursor component
        entity.addEventListener('click', this.changeColor);
    },

    remove: function () {
        this.el.removeEventListener('click', this.changeColor);
    }
});
