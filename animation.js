
AFRAME.registerComponent('clicked2', {
    init: function(){
        let el = this.el;
        this.toggleColor = function(){

            let iframeContainer1 = document.getElementById('myAnim');

            // Change the position of the existing plane
            iframeContainer1.setAttribute('animation-mixer', 'loop: once');
            iframeContainer1.setAttribute('animation-mixer','repetitions: 1');
            iframeContainer1.setAttribute('animation-mixer','clampWhenFinished: true');
         
        }
        this.el.addEventListener('click', this.toggleColor);

    },
    remove: function(){
        this.el.removeEventListener('click', this.toggleColor);
    }
})