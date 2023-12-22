import "./next-button.css"
import "./style.css"
import "./index.css"

import * as THREE from 'three'

const canvas = document.querySelector('#canvas');
// Create a scene
const scene = new THREE.Scene();

// Create a plane geometry for the ocean surface
const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
// Iterate through all the vertices of the geometry
for (let i = 0; i < geometry.vertices.length; i++) {
  const vertex = geometry.vertices[i];
  console.log(`Vertex ${i + 1}: x=${vertex.x}, y=${vertex.y}, z=${vertex.z}`);

  // Create a sphere geometry for the vertex
  const sphereGeometry = new THREE.SphereGeometry(0.1);
  
  // Create a material for the vertex
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  
  // Create a mesh for the vertex
  const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  
  // Set the position of the mesh to the vertex position
  sphereMesh.position.copy(vertex);
  
  // Add the mesh to the scene
  scene.add(sphereMesh);
}
// Create a material
const material = new THREE.MeshBasicMaterial({color: 0x1e90ff, side: THREE.DoubleSide});

// Create a plane
const plane = new THREE.Mesh(geometry, material);

// Rotate the plane to make it horizontal
plane.rotation.x = Math.PI / 2;

// Add the plane to the scene
scene.add(plane);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Position the camera
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});

// Create a directional light
const light = new THREE.DirectionalLight(0xffffff, 1);

// Set the position of the light
light.position.set(0, 1, 0);

// Add the light to the scene
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Get the position attribute
  const positions = geometry.attributes.position.array;

  // Update the z-coordinate to create the wave animation
  for (let i = 2; i < positions.length; i += 3) {
    positions[i] = 5 * Math.sin(i / 5 + Date.now() / 1000);
  }

  // Tell Three.js that the geometry needs to be updated
  geometry.attributes.position.needsUpdate = true;

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();