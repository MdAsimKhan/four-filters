// snapshot
const snapButton = document.getElementById('snapshot') || document.createElement('div');

snapButton.addEventListener("click", () => {

  // Create an image from the canvas
  const planeGeometry = new THREE.PlaneGeometry(2, 2);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(planeMesh);

  // Temporarily set the camera to focus on the planeMesh
  const originalCameraPosition = camera.position.clone();
  camera.position.set(
    planeMesh.position.x,
    planeMesh.position.y,
    planeMesh.position.z + 5
  );

  camera.lookAt(planeMesh.position);

  // Render the scene
  renderer.render(scene, camera);

  // Capture the rendered image from the main renderer
  // const screenshotImage = new Image();
  const dataURL = renderer.domElement.toDataURL("image/png");

    // Take snapshot
  ZapparSharing({
    data: dataURL,
  });

  // Reset the camera and visibility of the planeMesh
  camera.position.copy(originalCameraPosition);
  camera.lookAt(0, 0, 0);
});