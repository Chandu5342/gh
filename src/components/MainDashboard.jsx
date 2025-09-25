import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const sidebarItems = [
    { path: '/explore', icon: 'bi-map', label: 'Explore Monasteries' },
    { path: '/calendar', icon: 'bi-calendar-event', label: 'Cultural Calendar' },
    { path: '/tourism', icon: 'bi-compass', label: 'Tourism Info' },
    { path: '/archives', icon: 'bi-archive', label: 'Digital Archives' },
    { path: '/ai-companion', icon: 'bi-robot', label: 'AI Spiritual Companion' },
    { path: '/learning', icon: 'bi-mortarboard', label: 'Learning Hub' },
    { path: '/timetravel', icon: 'bi-clock-history', label: 'Time Travel Mode' },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div 
        className={`bg-dark text-white p-0 ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
        style={{ 
          width: sidebarOpen ? '280px' : '60px',
          transition: 'width 0.3s ease',
          minHeight: '100vh'
        }}
      >
        <div className="p-3 border-bottom border-secondary">
          <div className="d-flex align-items-center">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-camera360 fs-4 me-2"></i>
              {sidebarOpen && <span className="fw-bold">Monastery360</span>}
            </Link>
          </div>
        </div>
        <nav className="mt-3">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`d-block text-white text-decoration-none p-3 sidebar-item ${
                location.pathname === item.path ? 'bg-primary' : ''
              }`}
              style={{ 
                borderLeft: location.pathname === item.path ? '4px solid #0d6efd' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <i className={`${item.icon} me-3`}></i>
              {sidebarOpen && item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4">
          <button
            className="btn btn-outline-secondary me-3"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="d-flex align-items-center ms-auto">
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle me-2"></i>
                Explorer
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-4">
                <h1 className="h2 fw-bold text-dark">Welcome to Monastery360</h1>
                <p className="text-muted">Discover the spiritual and cultural heritage of ancient monasteries</p>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <Link to="/explore" className="text-decoration-none">
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-map text-primary display-4 mb-3"></i>
                      <h5 className="card-title text-dark">Start Exploring</h5>
                      <p className="card-text text-muted">Begin your journey through sacred spaces</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/learning" className="text-decoration-none">
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-mortarboard text-success display-4 mb-3"></i>
                      <h5 className="card-title text-dark">Learn & Discover</h5>
                      <p className="card-text text-muted">Access curated educational content</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/ai-companion" className="text-decoration-none">
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-robot text-warning display-4 mb-3"></i>
                      <h5 className="card-title text-dark">Ask AI Guide</h5>
                      <p className="card-text text-muted">Get spiritual insights and guidance</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="row">
              <div className="col-12">
                <div className="card shadow-sm border-0">
                  <div className="card-header bg-white border-0 py-3">
                    <h5 className="card-title mb-0">Recent Activity</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-camera360 text-primary me-3"></i>
                      <div>
                        <p className="mb-1">Completed virtual tour of Tashilhunpo Monastery</p>
                        <small className="text-muted">2 hours ago</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-book text-success me-3"></i>
                      <div>
                        <p className="mb-1">Added manuscript to favorites in Digital Archives</p>
                        <small className="text-muted">1 day ago</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar-event text-warning me-3"></i>
                      <div>
                        <p className="mb-1">Bookmarked Losar Festival event</p>
                        <small className="text-muted">3 days ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MainDashboard;
