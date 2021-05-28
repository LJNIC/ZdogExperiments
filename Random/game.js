let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 4,
    dragRotate: true 
});

// add circle
let base = new Zdog.Shape({
    addTo: illo,
    stroke: 40,
    color: 'white',
});

let leg = new Zdog.Shape({
    addTo: base,
    path: [
        { x: 10, y: 32 },
        { x: 20, y: 32 }
    ],
    rotate: { x: 0, y: 0, z: 0 },
    closed: false,
    stroke: 5
})

function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate()

// update & render
illo.updateRenderGraph();
