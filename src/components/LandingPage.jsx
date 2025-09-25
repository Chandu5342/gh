import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            <i className="bi bi-camera360 me-2"></i>
            Monastery360
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="text-white">
              <h1 className="display-2 fw-bold mb-4">
                Discover Sacred Heritage Through Immersive Experience
              </h1>
              <p className="lead mb-5 fs-4">
                Explore ancient monasteries, connect with spiritual wisdom, and preserve cultural heritage through cutting-edge 360° virtual tours and AI-powered learning.
              </p>
              <div className="d-grid d-md-flex gap-3">
                <Link 
                  to="/dashboard" 
                  className="btn btn-light btn-lg px-5 py-3 fw-semibold"
                  style={{ borderRadius: '50px' }}
                >
                  <i className="bi bi-compass me-2"></i>
                  Enter Platform
                </Link>
                <Link 
                  to="/admin" 
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                  style={{ borderRadius: '50px' }}
                >
                  <i className="bi bi-gear me-2"></i>
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sacred Monastery" 
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Platform Features</h2>
            <p className="lead text-white-50">Experience heritage like never before</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 bg-white bg-opacity-10 text-white border-0">
              <div className="card-body text-center p-4">
                <i className="bi bi-globe-americas display-4 mb-3"></i>
                <h5 className="card-title">360° Virtual Tours</h5>
                <p className="card-text">Immersive exploration of sacred spaces with interactive hotspots and audio narration.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 bg-white bg-opacity-10 text-white border-0">
              <div className="card-body text-center p-4">
                <i className="bi bi-robot display-4 mb-3"></i>
                <h5 className="card-title">AI Spiritual Guide</h5>
                <p className="card-text">Interactive chatbot providing spiritual insights and cultural knowledge.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 bg-white bg-opacity-10 text-white border-0">
              <div className="card-body text-center p-4">
                <i className="bi bi-book display-4 mb-3"></i>
                <h5 className="card-title">Digital Archives</h5>
                <p className="card-text">Searchable collection of manuscripts, murals, and historical artifacts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
