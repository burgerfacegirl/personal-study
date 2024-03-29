import * as THREE from "three";

// ----- 주제 : 기본 장면

export default function example() {
  // Renderer
  const canvas = document.querySelector("#three-canvas");
  // const renderer = new THREE.WebGLRenderer({canvas : canvas});
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // setPixelRatio three.js에서 고해상도로 표현해줄 때 쓸 수 있는 메서드
  // console.log(window.devicePixelRatio);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // Scene
  const scene = new THREE.Scene();

  // Camera
  // Perspective Camera(원근 카메라)
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각 (field of view)
    window.innerWidth / window.innerHeight, // 종횡비(aspect)
    0.1, // near
    1000 // far
  );

  // camera 위치를 설정안했으면 기본적으로 x 0, y 0, z 0
  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  // Orthographic Camera(직교 카메라)
  // const camera = new THREE.OrthographicCamera(
  //   -(window.innerWidth / window.innerHeight), // left
  //   window.innerWidth / window.innerHeight, // right
  //   1, // top
  //   -1, //bottom
  //   0.1, //near
  //   1000 // far
  // );

  // camera.position.x = 1;
  // camera.position.y = 2;
  // camera.position.z = 5;
  // camera.lookAt(0, 0, 0);
  // camera.zoom = 0.5;
  // camera.updateProjectionMatrix();

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    // color: 0xff0000
    color: "red",
  });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  // 그리기
  renderer.render(scene, camera);

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
