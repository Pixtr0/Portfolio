import './style.css'
import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const scene = new THREE.Scene()
//scene.background = new THREE.TextureLoader().load('https://sbcode.net/img/grid.png')

const light = new THREE.PointLight(0xffffff, 50)
light.position.set(0.8, 1.4, 1.0)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
camera.position.y = 6
camera.rotation.x = -(Math.PI * 2)/16



const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true
// controls.target.set(0, 1, 0)

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshNormalMaterial({ wireframe: false })

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

const stats = new Stats()
document.body.appendChild(stats.dom)

// const gui = new GUI()

// const cameraFolder = gui.addFolder('Camera')
// cameraFolder.add(camera.position, 'z', -10, 10)
// cameraFolder.add(camera.position, 'y', -10, 10)

// let camRot = new THREE.Vector3(0,0,0)
// cameraFolder.add(camRot, 'x', 0, 360)


// cameraFolder.open()

let cedric
const loader = new GLTFLoader()
loader.load('./models/Cedric/cedricModel.gltf', (gltf) => {
  gltf.scene.traverse(c => c.castShadow = true)
  cedric = gltf.scene
  scene.add(gltf.scene)
})





// frame independant type shi
const clock = new THREE.Clock()
let deltaTime
function render(){
  renderer.render(scene, camera)
}


function animate() {
  requestAnimationFrame(animate)

  deltaTime = clock.getDelta()
//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01
  cedric.rotation.y += 0.01

  render()

  stats.update()
}

animate()
