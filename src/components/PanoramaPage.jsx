// PanoramaPage.jsx
import React, { useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, useTexture } from "@react-three/drei";
import { useSpring } from "@react-spring/three";

// 🔥 Hotspot button in 3D space
function Hotspot({ position, label, onClick, debug = false }) {
  return (
    <>
      {debug && (
        <mesh position={position}>
          <sphereGeometry args={[5, 16, 16]} />
          <meshBasicMaterial color="red" />
        </mesh>
      )}

      <Html position={position}>
        <button
          onClick={onClick}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
        >
          {label}
        </button>
      </Html>
    </>
  );
}

// 🌐 Panorama sphere with hotspots
function PanoramaScene({ image, hotspots, onAction, debug }) {
  const texture = useTexture(image);
  return (
    <>
      <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} side={2} />
      </Sphere>

      {hotspots.map((h, i) => (
        <Hotspot
          key={i}
          position={h.position}
          label={h.label}
          onClick={() => onAction(h)}
          debug={debug}
        />
      ))}
    </>
  );
}

// 🎥 Camera zoom controller
function CameraZoom({ zoom }) {
  const { camera } = useThree();

  const { fov } = useSpring({
    fov: zoom ? 30 : 75,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    camera.fov = fov.get();
    camera.updateProjectionMatrix();
  });

  return null;
}

// 🚀 Main Panorama Page
export default function PanoramaPage() {
  const [zoomTarget, setZoomTarget] = useState(false);
  const [selectedStatue, setSelectedStatue] = useState(null);
  const [currentScene, setCurrentScene] = useState("monasteryGround");

  const scenes = {
    monasteryGround: {
      image: "/images/img16.png",
      hotspots: [
        { position: [90, -50, -85], label: "View Statue", type: "zoom", info: "Tathagata is just one of the titles of a buddha, but was the one most frequently employed by Siddhartha Gautama, and the generally adopted interpretation is one who has thus  arrived " },
        { position: [-150, -50, 50], label: "Go Upstairs", to: "monasteryFirst", type: "navigate" },
        { position: [50, -20, 50], label: "View Artifact", type: "zoom", info: "Tathagata is just one of the titles of a buddha, but was the one most frequently employed by Siddhartha Gautama, and the generally adopted interpretation is one who has thus  arrived " }
      ],
    },
    monasteryFirst: {
      image: "/images/kremikovci-monastery-old-church-entry-room-PN3463.jpg",
      hotspots: [
        { position: [-100, 0, 50], label: "Back Downstairs", to: "monasteryGround", type: "navigate" },
      ],
    },
  };

  const handleAction = (hotspot) => {
    if (hotspot.type === "zoom") {
      if (selectedStatue && selectedStatue.label === hotspot.label) {
        setZoomTarget(false);
        setSelectedStatue(null);
      } else {
        setZoomTarget(true);
        setSelectedStatue(hotspot);
      }
    } else if (hotspot.type === "navigate") {
      setCurrentScene(hotspot.to);
      setZoomTarget(false);
      setSelectedStatue(null);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <OrbitControls enableZoom enablePan />
        <CameraZoom zoom={zoomTarget} />
        <PanoramaScene
          image={scenes[currentScene].image}
          hotspots={scenes[currentScene].hotspots}
          onAction={handleAction}
          debug={false}
        />
      </Canvas>

      {/* Statue Info Panel */}
      {selectedStatue && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 20px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            maxWidth: "300px",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <h2>{selectedStatue.label}</h2>
          <p>{selectedStatue.info || "Description about the item..."}</p>
          <button
            onClick={() => {
              const utterance = new SpeechSynthesisUtterance(
                selectedStatue.info || selectedStatue.label
              );
              speechSynthesis.speak(utterance);
            }}
            style={{
              marginTop: "8px",
              padding: "6px 12px",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Play Narration
          </button>
          <button
            onClick={() => {
              setZoomTarget(false);
              setSelectedStatue(null);
            }}
            style={{
              marginTop: "8px",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "rgba(255,0,0,0.6)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
