import "./next-button.css"
import "./index.css"

import * as THREE from 'three'

document.getElementById('loading').style.display = 'none';
document.getElementById('loaded-content').style.display = 'block';

// 3D animation by Shawn Scofield - https://codepen.io/hootstheowl/pen/xOQVQg
class CubeWebGL {
  constructor(props = {}) {
    Object.assign(this, {
      // set variable settings
      container: props.container || document.body,
      fps: props.fps || 30,
      theta: props.theta || 0.1,
      radius: props.radius || 600,
      opacity: props.opacity || 0.2,
      count: props.count || 150,
      palette: props.palette || null,
      // containers for ThreeJS animation
      then: Date.now(),
      camera: null,
      scene: null,
      renderer: null,
    });
    // let's go!
    this.init();
    this.animate();
    document.addEventListener(
      'mousedown', this.getIntersect.bind(this), false
    );
  }
  getIntersect(e) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector3();
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    // update the picking ray with the camera and mouse position	
	  raycaster.setFromCamera( mouse, this.camera );	
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( this.scene.children );
    console.log(intersects)
  }
  addCube() {
    const { palette, opacity } = this;
    if (Array.isArray(palette)) {
      const cubeColor = palette[Math.floor(
        Math.random() * palette.length
      )];
    }
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 2.5, 2.5),
      new THREE.MeshBasicMaterial({
        color: Math.random() * 0x808008 + 0x808080 + 0x808080,
        transparent: true,
        opacity,
      })
    );
    cube.position.x = this.generatePosition();
    cube.position.y = this.generatePosition();
    cube.position.z = this.generatePosition();
    cube.scale.x= cube.scale.y = cube.scale.z = Math.random() * 45;
    this.scene.add(cube);
  }
  init() {
    this.camera = new THREE.PerspectiveCamera(
      45, (this.windowWidth() / this.windowHeight()), 1, 1000
    );
    this.camera.position.set(0, 300, 500);
    this.scene = new THREE.Scene();
    for (let i = 0; i < this.count; i ++) {
      this.addCube();
    }
    this.renderer = new THREE.WebGLRenderer({
      alpha: true, antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(
      this.windowWidth(), this.windowHeight()
    );
    this.renderer.autoClear = false;
    this.container.appendChild(this.renderer.domElement);
    window.addEventListener(
      'resize', this.handleWindowResize.bind(this), false
    );
  }
  destroyInstance() {
    this.container.removeChild(this.renderer.domElement);
    this.camera = null;
    this.scene = null;
    this.renderer = null;
  }
  handleWindowResize() {
    this.camera.aspect = this.windowWidth() / this.windowHeight();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.windowWidth(), this.windowHeight()
    );
  }
  windowWidth() {
    return window.innerWidth;
  }
  windowHeight() {
    return window.innerHeight;
  }
  generatePosition() {
    return Math.random() * 800 - 400;
  }
  animate() {
    requestAnimationFrame(
      this.animate.bind(this)
    );
    const interval = 1000 / this.fps;
    const now = Date.now();
    const delta = now - this.then;
    if (delta > interval) {
      this.then = now - (delta % interval);
      this.theta = this.theta + 0.1;
      this.renderScene();
    }
  }
  renderScene() {
    const { radius, theta } = this;
    this.camera.position.x = radius * Math.sin(
      THREE.MathUtils.degToRad(theta)
    );
    this.camera.position.y = radius * Math.sin(
      THREE.MathUtils.degToRad(theta)
    );
    this.camera.position.z = radius * Math.cos(
      THREE.MathUtils.degToRad(theta)
    );
    this.camera.lookAt(this.scene.position);
    this.camera.updateMatrixWorld();
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }
}

new CubeWebGL({
  fps: 60,
  opacity: 0.33,
  count: 100,
  container: document.getElementById('canvas-wrapper')
});
