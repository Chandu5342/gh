import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CulturalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('March 2024');

  const events = [
    {
      id: 1,
      title: 'Losar Festival',
      date: 'March 15-17, 2024',
      monastery: 'Tashilhunpo Monastery',
      type: 'Traditional Festival',
      description: 'Tibetan New Year celebration with traditional dances, prayers, and ceremonies.',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Butter Lamp Festival',
      date: 'March 25, 2024',
      monastery: 'Hemis Monastery',
      type: 'Religious Ceremony',
      description: 'Traditional lighting ceremony with thousands of butter lamps.',
      image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Morning Prayer Session',
      date: 'Daily, 6:00 AM',
      monastery: 'All Monasteries',
      type: 'Daily Practice',
      description: 'Join the monks for their daily morning prayers and meditation.',
      image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'recurring'
    },
    {
      id: 4,
      title: 'Wesak Day Celebration',
      date: 'May 23, 2024',
      monastery: 'Multiple Monasteries',
      type: 'Buddhist Holiday',
      description: "Celebration of Buddha's birth, enlightenment, and passing.",
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return <span className="badge bg-success">Upcoming</span>;
      case 'recurring':
        return <span className="badge bg-primary">Daily</span>;
      case 'past':
        return <span className="badge bg-secondary">Past</span>;
      default:
        return <span className="badge bg-light text-dark">Event</span>;
    }
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navigation */}
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to="/dashboard" className="btn btn-outline-primary">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Dashboard
          </Link>
          <Link to="/dashboard" className="navbar-brand fw-bold">
            <i className="bi bi-camera360 me-2"></i>
            Monastery360
          </Link>
        </div>
      </nav>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="h2 fw-bold mb-2">Cultural Calendar</h1>
            <p className="text-muted">Discover festivals, ceremonies, and events across monasteries</p>
          </div>
        </div>

        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Filters</h5>
                
                <div className="mb-4">
                  <label className="form-label fw-semibold">Month</label>
                  <select 
                    className="form-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="March 2024">March 2024</option>
                    <option value="April 2024">April 2024</option>
                    <option value="May 2024">May 2024</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Event Type</label>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="festivals" defaultChecked />
                    <label className="form-check-label" htmlFor="festivals">Festivals</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="ceremonies" defaultChecked />
                    <label className="form-check-label" htmlFor="ceremonies">Ceremonies</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="daily" defaultChecked />
                    <label className="form-check-label" htmlFor="daily">Daily Practices</label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Monastery</label>
                  <select className="form-select">
                    <option value="">All Monasteries</option>
                    <option value="tashilhunpo">Tashilhunpo</option>
                    <option value="hemis">Hemis</option>
                    <option value="potala">Potala Palace</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Calendar */}
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Quick Calendar</h5>
                <div className="calendar-mini">
                  <div className="text-center mb-3">
                    <strong>{selectedMonth}</strong>
                  </div>
                  <div className="row g-1 text-center small">
                    <div className="col fw-bold">S</div>
                    <div className="col fw-bold">M</div>
                    <div className="col fw-bold">T</div>
                    <div className="col fw-bold">W</div>
                    <div className="col fw-bold">T</div>
                    <div className="col fw-bold">F</div>
                    <div className="col fw-bold">S</div>
                  </div>
                  <div className="row g-1 text-center small">
                    <div className="col">1</div>
                    <div className="col">2</div>
                    <div className="col">3</div>
                    <div className="col">4</div>
                    <div className="col">5</div>
                    <div className="col">6</div>
                    <div className="col">7</div>
                  </div>
                  <div className="row g-1 text-center small">
                    <div className="col">8</div>
                    <div className="col">9</div>
                    <div className="col">10</div>
                    <div className="col">11</div>
                    <div className="col">12</div>
                    <div className="col">13</div>
                    <div className="col">14</div>
                  </div>
                  <div className="row g-1 text-center small">
                    <div className="col bg-primary text-white rounded">15</div>
                    <div className="col">16</div>
                    <div className="col">17</div>
                    <div className="col">18</div>
                    <div className="col">19</div>
                    <div className="col">20</div>
                    <div className="col">21</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold mb-0">Events & Festivals</h3>
              <div className="btn-group">
                <button className="btn btn-outline-secondary active">List View</button>
                <button className="btn btn-outline-secondary">Calendar View</button>
              </div>
            </div>

            <div className="row g-4">
              {events.map((event) => (
                <div key={event.id} className="col-12">
                  <div className="card shadow-sm border-0 hover-lift">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="img-fluid rounded-start h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                              <h5 className="card-title fw-bold mb-1">{event.title}</h5>
                              <p className="text-primary mb-1">
                                <i className="bi bi-calendar-event me-2"></i>
                                {event.date}
                              </p>
                              <p className="text-muted mb-0">
                                <i className="bi bi-geo-alt me-2"></i>
                                {event.monastery}
                              </p>
                            </div>
                            {getStatusBadge(event.status)}
                          </div>
                          
                          <p className="card-text mb-3">{event.description}</p>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-light text-dark">
                              {event.type}
                            </span>
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-primary">
                                <i className="bi bi-bookmark me-1"></i>
                                Save Event
                              </button>
                              <button className="btn btn-outline-primary">
                                <i className="bi bi-share me-1"></i>
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-outline-primary">
                <i className="bi bi-arrow-down me-2"></i>
                Load More Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;
