'use client';
/* oxlint-disable next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Layers3, RotateCcw } from 'lucide-react';
export default function BusinessScene() {
  const host = useRef<HTMLDivElement>(null);
  const mode = useRef(false);
  const paused = useRef(false);
  const [separate, setSeparate] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    async function init() {
      try {
        const [THREE, { RoomEnvironment }, { OrbitControls }] =
          await Promise.all([
            import('three'),
            import('three/addons/environments/RoomEnvironment.js'),
            import('three/addons/controls/OrbitControls.js'),
          ]);
        if (disposed || !host.current) return;
        const el = host.current;
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setClearColor(0, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        el.appendChild(renderer.domElement);
        renderer.domElement.setAttribute(
          'aria-label',
          'Interactive three-dimensional AAI mark connecting leads, sales, people and insights',
        );
        renderer.domElement.setAttribute('role', 'img');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
        camera.position.set(0, 0.25, 9.4);
        const generator = new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        const env = generator.fromScene(room, 0.04);
        scene.environment = env.texture;
        room.dispose();
        generator.dispose();
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.minPolarAngle = Math.PI * 0.32;
        controls.maxPolarAngle = Math.PI * 0.67;
        controls.minAzimuthAngle = -0.65;
        controls.maxAzimuthAngle = 0.65;
        controls.target.set(0, 0, 0);
        const group = new THREE.Group();
        scene.add(group);
        group.rotation.y = -0.22;
        group.rotation.x = 0.06;
        group.scale.setScalar(1.2);
        const shape = new THREE.Shape();
        shape.moveTo(-1.25, -1.25);
        shape.lineTo(-0.36, 1.3);
        shape.lineTo(0.36, 1.3);
        shape.lineTo(1.25, -1.25);
        shape.lineTo(0.56, -1.25);
        shape.lineTo(0.29, -0.46);
        shape.lineTo(-0.29, -0.46);
        shape.lineTo(-0.56, -1.25);
        shape.closePath();
        const hole = new THREE.Path();
        hole.moveTo(-0.17, 0.03);
        hole.lineTo(0, 0.62);
        hole.lineTo(0.17, 0.03);
        hole.closePath();
        shape.holes.push(hole);
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 0.13,
          bevelEnabled: true,
          bevelSegments: 4,
          steps: 1,
          bevelSize: 0.045,
          bevelThickness: 0.045,
          curveSegments: 16,
        });
        geometry.center();
        const colors = [0x829ab6, 0x3171ff, 0xbed2f2];
        const plates = colors.map((color, i) => {
          const material = new THREE.MeshPhysicalMaterial({
            color,
            metalness: i === 1 ? 0.4 : 0.94,
            roughness: i === 1 ? 0.13 : 0.21,
            clearcoat: 1,
            clearcoatRoughness: 0.12,
            emissive: i === 1 ? 0x1645bd : 0x000000,
            emissiveIntensity: 0.26,
          });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.z = (i - 1) * 0.24;
          group.add(mesh);
          return mesh;
        });
        const orbital = new THREE.Group();
        scene.add(orbital);
        orbital.rotation.set(1.22, -0.16, -0.15);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(2.35, 0.008, 8, 150),
          new THREE.MeshStandardMaterial({
            color: 0x8da7e3,
            metalness: 0.5,
            roughness: 0.2,
            transparent: true,
            opacity: 0.55,
          }),
        );
        orbital.add(ring);
        const dots: Array<InstanceType<typeof THREE.Mesh>> = [];
        for (let i = 0; i < 4; i++) {
          const dot = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.075, 2),
            new THREE.MeshPhysicalMaterial({
              color: i === 0 ? 0x3065ff : 0xbbc7dc,
              metalness: 0.7,
              roughness: 0.13,
              emissive: i === 0 ? 0x164bff : 0,
              emissiveIntensity: 0.4,
            }),
          );
          dots.push(dot);
          orbital.add(dot);
        }
        const fill = new THREE.DirectionalLight(0x7aa8ff, 5);
        fill.position.set(-3, 2, 4);
        scene.add(fill);
        const light = new THREE.DirectionalLight(0xffffff, 5);
        light.position.set(3, 4, 2);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0xffffff, 1.1));
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        paused.current = mq.matches;
        setPlaying(!mq.matches);
        const reduced = () => {
          paused.current = mq.matches;
          setPlaying(!mq.matches);
        };
        mq.addEventListener('change', reduced);
        let visible = true;
        const observer = new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting;
          },
          { rootMargin: '80px' },
        );
        observer.observe(el);
        const resize = () => {
          const w = el.clientWidth,
            h = el.clientHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.position.z = w < 550 ? 8.4 : 8.7;
          camera.updateProjectionMatrix();
        };
        const ro = new ResizeObserver(resize);
        ro.observe(el);
        resize();
        let frame = 0;
        let clock = 0;
        let previous = performance.now();
        const animate = (now: number) => {
          if (disposed) return;
          frame = requestAnimationFrame(animate);
          const dt = Math.min((now - previous) / 1000, 0.05);
          previous = now;
          if (!visible || document.hidden) return;
          if (!paused.current) clock += dt;
          const target = mode.current ? 1 : 0;
          plates.forEach((plate, i) => {
            plate.position.z = THREE.MathUtils.lerp(
              plate.position.z,
              (i - 1) * (0.24 + target * 0.72),
              mq.matches ? 1 : 0.065,
            );
            plate.position.x = THREE.MathUtils.lerp(
              plate.position.x,
              (i - 1) * target * 0.52,
              mq.matches ? 1 : 0.065,
            );
          });
          if (!paused.current) {
            group.rotation.y = -0.22 + Math.sin(clock * 0.32) * 0.18;
            group.position.y = Math.sin(clock * 0.65) * 0.06;
          }
          dots.forEach((dot, i) => {
            const a = (i * Math.PI) / 2 + clock * 0.09;
            dot.position.set(Math.cos(a) * 2.35, Math.sin(a) * 2.35, 0);
          });
          controls.update();
          renderer.render(scene, camera);
        };
        frame = requestAnimationFrame(animate);
        setReady(true);
        const lost = (event: Event) => {
          event.preventDefault();
          cancelAnimationFrame(frame);
          setReady(false);
          setFailed(true);
        };
        renderer.domElement.addEventListener('webglcontextlost', lost);
        cleanup = () => {
          cancelAnimationFrame(frame);
          ro.disconnect();
          observer.disconnect();
          mq.removeEventListener('change', reduced);
          controls.dispose();
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              const mats = Array.isArray(object.material)
                ? object.material
                : [object.material];
              mats.forEach((m) => m.dispose());
            }
          });
          env.dispose();
          renderer.dispose();
          renderer.domElement.removeEventListener('webglcontextlost', lost);
          renderer.domElement.remove();
        };
      } catch {
        if (!disposed) {
          setFailed(true);
          setReady(false);
        }
      }
    }
    void init();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);
  return (
    <div className={`scene-shell ${ready ? 'scene-ready' : ''}`}>
      <div className="scene-fallback" aria-hidden={ready}>
        <img
          src="/aai-sculpture.png"
          alt="Silver and blue AAI monogram"
          width={1536}
          height={1024}
        />
      </div>
      <div className="scene-canvas" ref={host} />
      <div className="scene-label label-one">
        <span /> Leads
      </div>
      <div className="scene-label label-two">
        <span /> Sales
      </div>
      <div className="scene-label label-three">
        <span /> People
      </div>
      <div className="scene-label label-four">
        <span /> Intelligence
      </div>
      <div className="scene-bottom">
        <span>
          {failed
            ? 'HUMAN EXPERTISE. CONNECTED BY AI.'
            : 'DRAG TO EXPLORE YOUR NEXT CHAPTER'}
        </span>
        {ready && (
          <div className="scene-controls">
            <button
              onClick={() => {
                mode.current = !separate;
                setSeparate(!separate);
              }}
              aria-pressed={separate}
            >
              {separate ? <RotateCcw size={15} /> : <Layers3 size={15} />}{' '}
              {separate ? 'Bring it together' : 'Explore the layers'}
            </button>
            <button
              aria-label={playing ? 'Pause animation' : 'Play animation'}
              onClick={() => {
                paused.current = playing;
                setPlaying(!playing);
              }}
            >
              {playing ? <Pause size={15} /> : <Play size={15} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
