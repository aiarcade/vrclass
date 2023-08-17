import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let vertices = new Float32Array([
    -1.0, -1.0, 1.0,    // vertex 1
    1.0, -1.0, 1.0,     // vertex 2
    1.0, 1.0, 1.0,      // vertex 3
]);

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)



camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	mesh.position.x += 0.01;
	mesh.position.y += 0.01;

	renderer.render( scene, camera );
}

animate();


