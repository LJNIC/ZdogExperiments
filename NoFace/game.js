let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 4,
    dragRotate: true 
});

// add circle
let base = new Zdog.Hemisphere({
    addTo: illo,
    width: 25,
    height: 40,
    stroke: 10,
    color: 'white',
});

new Zdog.Shape({
    addTo: base,
    path: [
        { x: -2 },
        { x: 2 },
        { x: 0, y: 10},
        { x: -2 }
    ],
    translate: { z: 3, x: -5, y: -5 },
    stroke: 3,
    color: 'black'
})

function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate()

// update & render
illo.updateRenderGraph();
