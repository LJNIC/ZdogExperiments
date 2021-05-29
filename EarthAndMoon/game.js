let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 4,
});

// add circle
let base = new Zdog.Shape({
    addTo: illo,
    stroke: 40,
    color: '#4651ea',
    dragRotate: true 
});

let leg = new Zdog.Shape({
    addTo: base,
    path: [
        { x: 10, y: 32 }
    ],
    rotate: { x: 0, y: 0, z: 0 },
    closed: false,
    stroke: 5,
    color: 'grey'
})

let button = new Zdog.RoundedRect({
    addTo: illo,
    width: 20,
    height: 10,
    stroke: 5,
    translate: { x: -45, y: 50 }
})

var dt = 0.05
function animate() {
    illo.updateRenderGraph();
    leg.rotate.x += dt
    leg.rotate.y += dt
    //leg.rotate.z += dt
    requestAnimationFrame( animate );
}

animate()
