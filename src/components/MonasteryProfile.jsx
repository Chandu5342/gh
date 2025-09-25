import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MonasteryProfile = () => {
  const { id } = useParams();

  const monastery = {
    name: 'Tashilhunpo Monastery',
    location: 'Shigatse, Tibet',
    founded: '1447',
    founder: 'Gendun Drup, 1st Dalai Lama',
    significance: 'Traditional seat of the Panchen Lama',
    architecture: 'Tibetan Buddhist',
    visitors: '50,000+ annually',
    image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navigation */}
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to="/explore" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Explore
          </Link>
          <Link to="/dashboard" className="navbar-brand fw-bold">
            <i className="bi bi-camera360 me-2"></i>
            Monastery360
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="position-relative">
        <img 
          src={monastery.image} 
          alt={monastery.name}
          className="w-100"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-4">
          <div className="container">
            <h1 className="display-4 fw-bold mb-2">{monastery.name}</h1>
            <p className="lead mb-0">
              <i className="bi bi-geo-alt me-2"></i>
              {monastery.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            {/* Overview */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Overview</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-calendar text-primary me-3 fs-4"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">Founded</h6>
                        <p className="mb-0 text-muted">{monastery.founded}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-person text-primary me-3 fs-4"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">Founder</h6>
                        <p className="mb-0 text-muted">{monastery.founder}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-building text-primary me-3 fs-4"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">Architecture</h6>
                        <p className="mb-0 text-muted">{monastery.architecture}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-people text-primary me-3 fs-4"></i>
                      <div>
                        <h6 className="mb-0 fw-semibold">Annual Visitors</h6>
                        <p className="mb-0 text-muted">{monastery.visitors}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="fw-semibold mb-2">Significance</h6>
                  <p className="text-muted mb-0">{monastery.significance}</p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Photo Gallery</h3>
                <div className="row g-3">
                  {monastery.gallery.map((image, index) => (
                    <div key={index} className="col-md-4">
                      <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`}
                        className="img-fluid rounded shadow-sm"
                        style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Actions */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Experience Options</h5>
                <div className="d-grid gap-3">
                  <Link 
                    to={`/tour/${id}`} 
                    className="btn btn-primary btn-lg"
                  >
                    <i className="bi bi-camera360 me-2"></i>
                    Start 360° Virtual Tour
                  </Link>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-images me-2"></i>
                    View Outside 360°
                  </button>
                  <button className="btn btn-outline-success">
                    <i className="bi bi-download me-2"></i>
                    Download Audio Guide
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Quick Facts</h5>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Elevation:</span>
                    <span className="fw-semibold">3,840m</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Area:</span>
                    <span className="fw-semibold">300,000 sq ft</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Monks:</span>
                    <span className="fw-semibold">~600</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Best Season:</span>
                    <span className="fw-semibold">April - October</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Explore Related</h5>
                <div className="d-grid gap-2">
                  <Link to="/archives" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-archive me-2"></i>
                    View Archives
                  </Link>
                  <Link to="/calendar" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-calendar-event me-2"></i>
                    Upcoming Events
                  </Link>
                  <Link to="/tourism" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-compass me-2"></i>
                    Tourism Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonasteryProfile;
