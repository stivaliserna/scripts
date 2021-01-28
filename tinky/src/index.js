import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

let scene,
  camera,
  controls,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  renderer,
  container,
  hdrCubeRenderTarget,
  HEIGHT,
  WIDTH,
  pink,
  planet,
  bigStar,
  littleStar,
  particles;

const params = {
  color: 0x21024f,
  transmission: 0.9,
  envMapIntensity: 1,
  lightIntensity: 0.5,
  exposure: 1,
};

const spheres = [];

const createScene = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 0;
  camera.position.z = 500;
  camera.position.y = -10;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(WIDTH, HEIGHT);

  renderer.shadowMap.enabled = true;

  container = document.getElementById("canvas");
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", handleWindowResize, false);

  let loader = new GLTFLoader();
  loader.load("/pokemon.gltf", (gltf) => {
    pink = gltf.scene;
    pink.scale.set(70, 70, 70);
    pink.children.forEach((el) => {
      if (el.name === "Star") {
        bigStar = el;
        bigStar.position.y = -2;
        bigStar.position.x = -2.5;
        bigStar.position.z = 1;
        bigStar.rotation.z = -0.5;
      } else if (el.name === "Star2") {
        littleStar = el;
        littleStar.position.y = -2;
        littleStar.position.x = 2;
        littleStar.position.z = 0.7;
        littleStar.rotation.z = 1;
      } else if (el.name === "Planet") {
        planet = el;
        planet.position.y = 1.5;
        planet.position.z = 1;
      }
    });
    scene.add(pink);
  });

  controls = new OrbitControls(camera, renderer.domElement);
};

const handleWindowResize = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
};

const createLights = () => {
  const ambientLight = new THREE.AmbientLight(0xaa54f0);

  const directionalLightFront = new THREE.DirectionalLight(0xffffff, 2);
  directionalLightFront.position.set(-100, 150, 600);

  const directionalLightBack = new THREE.DirectionalLight(0xffffff, 2);
  directionalLightBack.position.set(500, 120, 50);

  // const spotLight = new THREE.SpotLight( 0x1D0F40 );
  // spotLight.position.set( 300, 1000, 300 );
  // spotLight.distance = 700;
  // // spotLight.angle = 0.3;
  // spotLight.intensity = 10;
  // spotLight.penumbra = .5;

  scene.add(ambientLight, directionalLightFront, directionalLightBack);
  // const spotLightHelper = new THREE.SpotLightHelper( spotLight );
  // scene.add( spotLightHelper );
};

const createBubbles = () => {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  hdrCubeRenderTarget = pmremGenerator.fromEquirectangular(hdrEquirect);
  hdrEquirect.dispose();
  pmremGenerator.dispose();

  const bubbleGeometry1 = new THREE.SphereBufferGeometry(170, 64, 32);
  const bubbleGeometry2 = new THREE.SphereBufferGeometry(55, 64, 32);
  const bubbleGeometry3 = new THREE.SphereBufferGeometry(30, 64, 32);
  const bubbleGeometry4 = new THREE.SphereBufferGeometry(70, 64, 32);
  const bubbleGeometry5 = new THREE.SphereBufferGeometry(10, 64, 32);

  const texture = new THREE.CanvasTexture(generateTexture());
  texture.repeat.set(1);

  const material = new THREE.MeshPhysicalMaterial({
    color: params.color,
    metalness: 0,
    roughness: 0,
    alphaMap: texture,
    alphaTest: 0.5,
    envMap: hdrCubeRenderTarget.texture,
    envMapIntensity: params.envMapIntensity,
    depthWrite: false,
    transmission: params.transmission, // use material.transmission for glass materials
    opacity: 1, // set material.opacity to 1 when material.transmission is non-zero
    transparent: true,
  });

  const material1b = new THREE.MeshPhysicalMaterial().copy(material);
  material1b.side = THREE.BackSide;

  let bubble1 = new THREE.Mesh(bubbleGeometry1, material1b);

  let bubble2 = new THREE.Mesh(bubbleGeometry2, material1b);
  bubble2.position.y = -135;
  bubble2.position.x = -170;
  bubble2.position.z = 75;

  let bubble3 = new THREE.Mesh(bubbleGeometry3, material1b);
  bubble3.position.y = -136;
  bubble3.position.x = 137;
  bubble3.position.z = 50;

  let bubble4 = new THREE.Mesh(bubbleGeometry4, material1b);
  bubble4.position.y = 100;
  bubble4.position.x = 210;
  bubble4.position.z = 70;

  for (let i = 0; i < 20; i++) {
    const mesh = new THREE.Mesh(bubbleGeometry5, material1b);

    mesh.position.x = Math.random() * 1350 - 725;
    mesh.position.y = Math.random() * 1350 - 725;
    mesh.position.z = Math.random() * 1350 - 725;

    mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

    scene.add(mesh);

    spheres.push(mesh);
  }

  scene.add(bubble1, bubble2, bubble3, bubble4);
};

const generateTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 1, 2, 1);

  return canvas;
};

const createParticles = () => {
  const particlesGeometry = new THREE.BufferGeometry();

  const count = 300;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i] = (Math.random() - 0.5) * 1000;
    colors[i] = Math.random();
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const textureLoader = new THREE.TextureLoader();
  const particlesTexture = textureLoader.load("magic_05.png");
  const particlesMaterial = new THREE.PointsMaterial({
    size: 17,
    // color: 0xF2D784,
    // sizeAttenuation: true,
    alphaMap: particlesTexture,
    transparent: true,
    // alphaTest: 0.001
    // depthTest: false
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);

  scene.add(particles);
};

const time = new THREE.Clock();

const loop = () => {
  const elapsedTime = time.getElapsedTime();
  const timer = 0.0001 * Date.now();

  controls.update();

  particles.rotation.y = elapsedTime * 0.02;

  for (let i = 0, il = spheres.length; i < il; i++) {
    const sphere = spheres[i];

    sphere.position.x = 300 * Math.cos(timer + i);
    sphere.position.y = 300 * Math.sin(timer + i * 1.1);
  }

  renderer.render(scene, camera);

  if (planet) {
    planet.rotation.y += 0.002;
    planet.rotation.z += 0.002;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2;

  requestAnimationFrame(loop);
};

const main = () => {
  createScene();
  createLights();
  createBubbles();
  createParticles();

  renderer.render(scene, camera);
  loop();
};

const hdrEquirect = new RGBELoader()
  .setDataType(THREE.UnsignedByteType)
  .load("royal_esplanade_1k.hdr", function () {
    main();
  });
