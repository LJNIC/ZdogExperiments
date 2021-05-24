let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

// add circle
let circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#000',
});

let holdingLeft = false
let holdingRight = false

document.addEventListener('keydown', event => {
    if (event.keyCode == 37) {
        holdingLeft = true
    }

    if (event.keyCode == 39) {
        holdingRight = true
    }
})

document.addEventListener('keyup', event => {
    if (event.keyCode == 37) {
        holdingLeft = false
    }

    if (event.keyCode == 39) {
        holdingRight = false
    }
})

function animate() {
  // rotate illo each frame
  if (holdingLeft) {
      circle.rotate.y += 0.1;
  } else if (holdingRight) {
      circle.rotate.y -= 0.1;
  }
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}

animate()

// update & render
illo.updateRenderGraph();
