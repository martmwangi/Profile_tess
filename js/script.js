$(function () {
    $('.tlt').textillate({
        in:{
            effect: 'flash',
            shuffle: 'true'
        }
    });
})
//For the slider
$(function(){
                var slider = new BeaverSlider({
                    type: "zoomer",
                    structure: {
                        container: {
                            id: "Gallery",
                            width: 640,
                            height: 500
                        },
                        controls: {
                            containerClass: "control-container",
                            elementClass: "control-element",
                            elementActiveClass: "control-element-active",
                            previewMode: true
                        }
                        
                    },
                    
                    content: {
                        images: ["Images/122-min.JPG","Images/142-min.JPG","Images/167-min.JPG"]
                    },
                    animation: {
                        effects: effectSets["zoomer: photoShow"],
                        interval: 3000,
                        initialInterval: 2000,
                        waitAllImages: true
                    }
                });
            });