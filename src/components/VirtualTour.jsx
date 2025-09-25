import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const VirtualTour = () => {
  const { id } = useParams();
  const [currentScene, setCurrentScene] = useState('main-hall');

  const scenes = {
    'main-hall': {
      name: 'Main Prayer Hall',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The heart of the monastery where daily prayers and ceremonies take place.',
      hotspots: [
        { x: 30, y: 60, label: 'Buddha Statue', info: 'Ancient bronze Buddha statue from 15th century' },
        { x: 70, y: 40, label: 'Prayer Wheels', info: 'Traditional Tibetan prayer wheels' },
        { x: 50, y: 20, label: 'Ceiling Art', info: 'Intricate mandala paintings on the ceiling' }
      ]
    },
    'courtyard': {
      name: 'Central Courtyard',
      image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The gathering place for monks and visitors during festivals.',
      hotspots: [
        { x: 40, y: 70, label: 'Stupa', info: 'Sacred monument containing relics' },
        { x: 80, y: 30, label: 'Bell Tower', info: 'Traditional monastery bell for ceremonies' }
      ]
    },
    'library': {
      name: 'Ancient Library',
      image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Repository of ancient Buddhist texts and manuscripts.',
      hotspots: [
        { x: 25, y: 50, label: 'Manuscripts', info: 'Hand-written Buddhist scriptures' },
        { x: 75, y: 35, label: 'Reading Area', info: 'Where monks study sacred texts' }
      ]
    }
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div className="vh-100 d-flex flex-column bg-dark">
      {/* Top Navigation */}
      <nav className="navbar navbar-dark bg-black px-4 py-2">
        <div className="d-flex align-items-center">
          <Link to={`/monastery/${id}`} className="btn btn-outline-light btn-sm me-3">
            <i className="bi bi-arrow-left me-2"></i>
            Exit Tour
          </Link>
          <h5 className="text-white mb-0">360° Virtual Tour - Tashilhunpo Monastery</h5>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-light btn-sm me-2">
            <i className="bi bi-volume-up"></i>
          </button>
          <button className="btn btn-outline-light btn-sm">
            <i className="bi bi-fullscreen"></i>
          </button>
        </div>
      </nav>

      {/* Main Tour View */}
      <div className="flex-grow-1 position-relative">
        <img 
          src={currentSceneData.image} 
          alt={currentSceneData.name}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
        
        {/* 360° Indicator */}
        <div className="position-absolute top-0 start-50 translate-middle-x mt-3">
          <div className="bg-dark bg-opacity-75 text-white px-3 py-2 rounded">
            <i className="bi bi-camera360 me-2"></i>
            360° View - Click and drag to explore
          </div>
        </div>

        {/* Hotspots */}
        {currentSceneData.hotspots.map((hotspot, index) => (
          <button
            key={index}
            className="btn btn-primary rounded-circle position-absolute"
            style={{ 
              left: `${hotspot.x}%`, 
              top: `${hotspot.y}%`,
              width: '40px',
              height: '40px',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
            data-bs-toggle="tooltip"
            title={hotspot.info}
          >
            <i className="bi bi-info-circle-fill"></i>
          </button>
        ))}

        {/* Scene Info */}
        <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-90 text-white p-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4 className="fw-bold mb-2">{currentSceneData.name}</h4>
              <p className="mb-0">{currentSceneData.description}</p>
            </div>
            <div className="col-md-4">
              <div className="d-flex gap-2 justify-content-md-end">
                <button className="btn btn-success">
                  <i className="bi bi-play-circle me-2"></i>
                  Audio Guide
                </button>
                <button className="btn btn-info">
                  <i className="bi bi-camera me-2"></i>
                  Capture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scene Navigation */}
      <div className="bg-dark border-top border-secondary p-3">
        <div className="container-fluid">
          <div className="row g-3">
            {Object.entries(scenes).map(([sceneKey, scene]) => (
              <div key={sceneKey} className="col-md-4">
                <button
                  className={`card text-start w-100 border-0 ${
                    currentScene === sceneKey ? 'bg-primary text-white' : 'bg-secondary text-white'
                  }`}
                  onClick={() => setCurrentScene(sceneKey)}
                >
                  <div className="row g-0">
                    <div className="col-4">
                      <img 
                        src={scene.image} 
                        alt={scene.name}
                        className="img-fluid rounded-start"
                        style={{ height: '80px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body p-2">
                        <h6 className="card-title mb-1 fw-semibold">{scene.name}</h6>
                        <small className="card-text">{scene.description.substring(0, 50)}...</small>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
