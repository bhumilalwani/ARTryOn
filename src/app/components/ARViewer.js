// components/ARViewer.js
'use client';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

export default function ARViewer() {
  return (
    <a-scene
      mindar-image="imageTargetSrc: /assets/targets.mind"
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: true"
    >
      <a-assets>
        <img
          id="card"
          src="/assets/targets.mind"
        />
        <a-asset-item
          id="avatarModel"
          src="/assets/india/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0.5 0 0" scale="0.1 0.1 0.1" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        {/* <a-plane
          src="#card"
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        ></a-plane> */}
        <a-gltf-model
          rotation="0 0 0"
          position="0 0 0.4"
          scale="0.1 0.1 0.1"
          src="#avatarModel"

        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
}
