import * as THREE from "three";
import styles from "./styles.module.css";
import { useSpring } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let logoModel: THREE.Object3D;
let refElement: HTMLElement;
let refBoundingBox: DOMRect;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let mounted: boolean = false;
let isMobile: boolean = false;
let waveAmount: number = 0;
let waveInterval: number = Math.PI / 256;

const resetCamera = (
  canvas: HTMLCanvasElement,
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  boundingBox: DOMRect
) => {
  camera.aspect = boundingBox.width / boundingBox.height;
  camera.position.set(0, 0, 800);
  camera.updateProjectionMatrix();
  renderer.setSize(
    boundingBox.width * window.devicePixelRatio,
    boundingBox.height * window.devicePixelRatio
  );
  canvas.style.height = boundingBox.height + "px";
  canvas.style.width = boundingBox.width + "px";
  canvas.style.left = boundingBox.left + "px";
  canvas.style.top = boundingBox.top + "px";
};

type Props = {};

const HeroWebGlLogo: React.FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ySpring = useSpring(0.5, { stiffness: 40, damping: 10 });
  const zSpring = useSpring(0.5, { stiffness: 40, damping: 10 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    return () => {
      mounted = false;
    };
  }, []);

  // useEffect(() => {
  //   if (scene?.children.length) {
  //   }
  // }, [isReady]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const mousePosition = { x: ev.clientX, y: ev.clientY };
      ySpring.set((1 / window.innerWidth) * mousePosition.x);
      zSpring.set((1 / window.innerHeight) * mousePosition.y);
    };
    window.addEventListener("mousemove", updateMousePosition);

    function onWindowResize() {
      refElement = canvasRef.current!.parentElement.parentElement;
      refBoundingBox = refElement.getBoundingClientRect();
      resetCamera(canvasRef.current!, renderer, camera, refBoundingBox);
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", onWindowResize);
    };
  });

  useEffect(() => {
    if (!mounted) {
      if ("ontouchstart" in window) {
        isMobile = true;
      }

      refElement = canvasRef.current!.parentElement.parentElement;
      refBoundingBox = refElement.getBoundingClientRect();
      camera = new THREE.PerspectiveCamera(
        45,
        refBoundingBox.width / refBoundingBox.height,
        70,
        100000
      );

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current!
      });

      resetCamera(canvasRef.current!, renderer, camera, refBoundingBox);

      renderer.setAnimationLoop(animate);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;

      scene.background = new THREE.Color("#0a0a0a");
      renderer.setClearAlpha(0);

      const loader = new GLTFLoader();
      loader.load("/img/logo-v3.glb", function (glb) {
        const matcapTexture = new THREE.TextureLoader().load("/img/matcap.png");
        const material = new THREE.MeshMatcapMaterial({
          matcap: matcapTexture
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        logoModel = glb.scene.children[0];
        (logoModel as THREE.Mesh).material = material;
        logoModel.scale.set(7, 7, 7);
        logoModel.position.set(100, 288, 0);
        logoModel.castShadow = true;
        logoModel.receiveShadow = true;
        scene.add(logoModel);
        setIsReady(true);
      });

      mounted = true;
    }
  });

  const animate = () => {
    if (logoModel!) {
      // Mobile experience will have the logo rotating in a circular motion
      if (isMobile) {
        logoModel.rotation.z = -Math.PI / 24;
        logoModel.rotation.y =
          (Math.PI / 2) * Math.cos(Date.now() * 0.0003) * 0.3 + Math.PI / 2;
        waveAmount += waveInterval;
      } else {
        logoModel.rotation.y = Math.PI / 4 + (Math.PI / 2) * ySpring.get();
        logoModel.rotation.x = -(Math.PI / 4) + (Math.PI / 2) * zSpring.get();
      }
    }
    renderer.render(scene, camera);
  };

  const render = () => {
    return <canvas className={styles.midnightHeroCanvas} ref={canvasRef} />;
  };

  return render();
};

export default HeroWebGlLogo;
