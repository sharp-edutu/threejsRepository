console.log(THREE);

// 创建场景
const scene = new THREE.Scene();
// 几何形状
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 材质
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// size
const size = {
  width: 800,
  height: 600,
};
// 透视相机
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
// 相机位置
camera.position.z = 3;
camera.position.x = 2;
scene.add(camera);

// renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(size.width, size.height);
// 渲染场景
renderer.render(scene, camera);
