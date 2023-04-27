import * as THREE from "three";

// ----- 주제 : Fog(안개)

export default function example() {
  // Renderer
  const canvas = document.querySelector("#three-canvas");
  // const renderer = new THREE.WebGLRenderer({canvas : canvas});
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    // 투명 여부
    // alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // setPixelRatio three.js에서 고해상도로 표현해줄 때 쓸 수 있는 메서드
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  // renderer.setClearColor(0x00ff00);
  // 0부터 1까지 배경 불투명도 설정
  // renderer.setClearAlpha(0.5);

  // Scene
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color("blue");
  scene.fog = new THREE.Fog("black", 3, 7);

  // Camera
  // Perspective Camera(원근 카메라)
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각 (field of view)
    window.innerWidth / window.innerHeight, // 종횡비(aspect)
    0.1, // near
    1000 // far
  );

  // camera 위치를 설정안했으면 기본적으로 x 0, y 0, z 0
  // camera.position.x = 2;
  camera.position.y = 1;
  camera.position.z = 5;
  scene.add(camera);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 50);
  light.position.x = 1;
  light.position.y = 5;
  light.position.z = 10;
  scene.add(light);

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    // color: 0xff0000
    color: "red",
  });

  const meshes = [];
  let mesh;
  for (let i = 0; i < 10; i++) {
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = Math.random() * 5 - 2.5;
    mesh.position.z = Math.random() * 5 - 2.5;
    scene.add(mesh);
    meshes.push(mesh);
  }

  scene.add(mesh);

  // 그리기
  let time = Date.now();
  function draw() {
    const newTime = Date.now();
    const deltaTime = newTime - time;
    time = newTime;

    meshes.forEach((item) => {
      item.rotation.y += deltaTime * 0.001;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw);
  }
  draw();
  // window.reender(scene, camera);

  function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight;
    // updateProjectionMatrix 카메라 투영에 관련된 값에 변화가 있을 경우 실행해야 함
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  // 이벤트
  window.addEventListener("resize", setSize);
}
