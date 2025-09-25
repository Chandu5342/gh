import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TimeTravelMode = () => {
  const [timeSlider, setTimeSlider] = useState(2024);
  const [selectedMonastery, setSelectedMonastery] = useState('tashilhunpo');

  const monasteryData = {
    'tashilhunpo': {
      name: 'Tashilhunpo Monastery',
      timeline: {
        1447: {
          image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Founded by Gendun Drup, the first Dalai Lama. Original structure was much smaller.',
          status: 'Founding'
        },
        1600: {
          image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Major expansions under the 4th Panchen Lama. Addition of the Great Assembly Hall.',
          status: 'Expansion'
        },
        1900: {
          image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Peak period with over 4,000 monks. Multiple temples and residential quarters.',
          status: 'Golden Age'
        },
        2024: {
          image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Modern restoration efforts. UNESCO heritage site with digital preservation programs.',
          status: 'Modern Era'
        }
      }
    },
    'potala': {
      name: 'Potala Palace',
      timeline: {
        1645: {
          image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Construction began under the 5th Dalai Lama on the ruins of an earlier palace.',
          status: 'Construction'
        },
        1694: {
          image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Completion of the Red Palace. The structure reaches its iconic 13-story height.',
          status: 'Completion'
        },
        1900: {
          image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Served as winter residence of Dalai Lamas. Center of Tibetan government.',
          status: 'Political Center'
        },
        2024: {
          image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Now a museum and World Heritage Site. Extensive conservation work ongoing.',
          status: 'World Heritage'
        }
      }
    }
  };

  const getCurrentTimelineData = () => {
    const monastery = monasteryData[selectedMonastery];
    const years = Object.keys(monastery.timeline).map(Number).sort((a, b) => a - b);

    let closestYear = years[0];
    for (const year of years) {
      if (year <= timeSlider) closestYear = year;
      else break;
    }

    return {
      year: closestYear,
      data: monastery.timeline[closestYear],
      monastery
    };
  };

  const timelineData = getCurrentTimelineData();

  const getTimelineMarkers = () => {
    const monastery = monasteryData[selectedMonastery];
    return Object.keys(monastery.timeline).map(Number).sort((a, b) => a - b);
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      {/* Navigation */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/dashboard" className="btn btn-outline-light">
            <i className="bi bi-arrow-left me-2"></i>
            Exit Time Travel
          </Link>
          <Link to="/dashboard" className="navbar-brand fw-bold text-white">
            <i className="bi bi-camera360 me-2"></i>
            Monastery360 - Time Travel Mode
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar Controls */}
          <div className="col-lg-3">
            <div className="card bg-dark border-secondary">
              <div className="card-body">
                <h5 className="fw-bold text-white mb-3">Time Travel Controls</h5>
                
                <div className="mb-4">
                  <label className="form-label text-white fw-semibold">Select Monastery</label>
                  <select 
                    className="form-select bg-dark text-white border-secondary"
                    value={selectedMonastery}
                    onChange={(e) => setSelectedMonastery(e.target.value)}
                  >
                    <option value="tashilhunpo">Tashilhunpo Monastery</option>
                    <option value="potala">Potala Palace</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label text-white fw-semibold">Time Period</label>
                  <div className="text-center mb-3">
                    <span className="display-6 fw-bold text-primary">{timelineData.year}</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="1400"
                    max="2024"
                    step="1"
                    value={timeSlider}
                    onChange={(e) => setTimeSlider(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between small text-muted">
                    <span>1400</span>
                    <span>2024</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-white fw-semibold">Key Periods</label>
                  <div className="d-grid gap-2">
                    {getTimelineMarkers().map((year) => (
                      <button
                        key={year}
                        className={`btn btn-sm ${timelineData.year === year ? 'btn-primary' : 'btn-outline-secondary'}`}
                        onClick={() => setTimeSlider(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="alert alert-info">
                  <div className="fw-semibold">Current Status:</div>
                  <span className="badge bg-primary">{timelineData.data.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main View */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="card bg-dark border-secondary">
                  <div className="position-relative">
                    <img 
                      src={timelineData.data.image} 
                      alt={`${timelineData.monastery.name} in ${timelineData.year}`}
                      className="card-img-top"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-90 text-white p-4">
                      <h3 className="fw-bold mb-2">{timelineData.monastery.name}</h3>
                      <h5 className="text-primary mb-2">{timelineData.year} CE</h5>
                      <p className="mb-0">{timelineData.data.description}</p>
                    </div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <div className="bg-primary bg-opacity-75 text-white px-3 py-2 rounded">
                        <i className="bi bi-clock-history me-2"></i>
                        Time Travel Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card bg-dark border-secondary">
                  <div className="card-body">
                    <h4 className="fw-bold text-white mb-3">Historical Context - {timelineData.year}</h4>
                    <p className="text-light mb-4">{timelineData.data.description}</p>
                    
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <div className="bg-primary bg-opacity-20 p-3 rounded text-center">
                          <i className="bi bi-calendar-event display-6 text-primary mb-2"></i>
                          <h6 className="fw-semibold text-white">Year</h6>
                          <p className="mb-0 text-light">{timelineData.year} CE</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="bg-success bg-opacity-20 p-3 rounded text-center">
                          <i className="bi bi-info-circle display-6 text-success mb-2"></i>
                          <h6 className="fw-semibold text-white">Status</h6>
                          <p className="mb-0 text-light">{timelineData.data.status}</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="bg-warning bg-opacity-20 p-3 rounded text-center">
                          <i className="bi bi-building display-6 text-warning mb-2"></i>
                          <h6 className="fw-semibold text-white">Location</h6>
                          <p className="mb-0 text-light">Tibet</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 d-flex gap-3">
                      <button className="btn btn-primary">
                        <i className="bi bi-camera360 me-2"></i>
                        Virtual Tour ({timelineData.year})
                      </button>
                      <button className="btn btn-outline-light">
                        <i className="bi bi-archive me-2"></i>
                        View Archives
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card bg-dark border-secondary">
                  <div className="card-body">
                    <h5 className="fw-bold text-white mb-3">Timeline Navigator</h5>
                    <div className="timeline-vertical">
                      {getTimelineMarkers().map((year) => {
                        const data = monasteryData[selectedMonastery].timeline[year];
                        const isActive = year === timelineData.year;
                        
                        return (
                          <div 
                            key={year} 
                            className={`d-flex mb-3 p-2 rounded cursor-pointer ${isActive ? 'bg-primary bg-opacity-25' : 'bg-secondary bg-opacity-10'}`}
                            onClick={() => setTimeSlider(year)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="me-3">
                              <div className={`rounded-circle d-flex align-items-center justify-content-center ${isActive ? 'bg-primary' : 'bg-secondary'}`} style={{ width: '40px', height: '40px' }}>
                                <small className="text-white fw-bold">{year.toString().slice(-2)}</small>
                              </div>
                            </div>
                            <div>
                              <div className="fw-semibold text-white">{year}</div>
                              <small className="text-muted">{data.status}</small>
                            </div>
                          </div>
                        );
                      })}
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

export default TimeTravelMode;
