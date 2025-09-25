import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pannellum } from 'pannellum-react'; // Import Pannellum

const ExploreMonasteries = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showStreetView, setShowStreetView] = useState(false);
  const [currentStation, setCurrentStation] = useState(0);
  const [showMonasteryGallery, setShowMonasteryGallery] = useState(false);

  const navigate = useNavigate();

  const monasteries = [
    { id: 1, name: 'Tashilhunpo Monastery', location: 'Shigatse, Tibet', image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Founded in 1447, this monastery is the traditional seat of the Panchen Lama.' },
    { id: 2, name: 'Potala Palace', location: 'Lhasa, Tibet', image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Former residence of the Dalai Lama, a masterpiece of Tibetan architecture.' },
    { id: 3, name: 'Hemis Monastery', location: 'Ladakh, India', image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'The largest and wealthiest monastery in Ladakh, known for its annual festival.' }
  ];

  // UPDATED MOCK DATA: Added 'image360' for some stations
  const routePaths = [
    {
      id: 1,
      name: 'Mountain Highway Route',
      description: 'Scenic mountain route via NH10',
      distance: '45 km',
      duration: '2.5 hours',
      difficulty: 'Easy',
      waypoints: ['NH10', 'Rangpo', 'Gangtok', 'Rumtek'],
      stations: [
        { id: 1, name: 'Railway Station', type: 'Starting Point', image: './images/img101.jpg', description: 'Your journey begins at New Jalpaiguri Railway Station', distance: '0 km' },
        { id: 2, name: 'Coronation Bridge', type: 'Landmark', image: './images/img101.jpg', description: 'Historic bridge over River Teesta', distance: '12 km' },
        { id: 3, name: 'Rangpo Border', type: 'Entry Point', image: './images/img12.jpg', description: 'Welcome to Sikkim - Entry checkpoint', distance: '28 km' },
        { id: 4, name: 'Mountain Restaurant', type: 'Rest Stop', image: './images/img105.jpg', description: 'Traditional Sikkimese cuisine stop', distance: '38 km' },
        { id: 5, name: 'Monastery Entrance', type: 'Destination', image: './images/img12.jpg', image360: './images/img12.jpg', description: 'You have arrived at the sacred monastery', distance: '45 km' }
      ]
    },
    {
      id: 2,
      name: 'Valley Scenic Route',
      description: 'Beautiful valley route via Teesta Valley',
      distance: '52 km',
      duration: '3 hours',
      difficulty: 'Moderate',
      waypoints: ['Teesta Valley', 'Singtam', 'Ranipool', 'Rumtek'],
      stations: [
        {
          id: 1,
          name: 'Railway Station',
          type: 'Starting Point',
          image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=300',
          description: 'Your journey begins at New Jalpaiguri Railway Station',
          distance: '0 km'
        },
        {
          id: 2,
          name: 'Teesta Valley Viewpoint',
          type: 'Scenic Stop',
          image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=300',
          description: 'Breathtaking views of Teesta River valley',
          distance: '15 km'
        },
        {
          id: 3,
          name: 'Singtam Market',
          type: 'Local Market',
          image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=300',
          description: 'Local market with traditional crafts',
          distance: '32 km'
        },
        {
          id: 4,
          name: 'Ranipool Junction',
          type: 'Junction',
          image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=300',
          description: 'Important road junction to various destinations',
          distance: '44 km'
        },
        {
          id: 5,
          name: 'Monastery Entrance',
          type: 'Destination',
          image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=300',
          description: 'You have arrived at the sacred monastery',
          distance: '52 km'
        }
      ]
    }
    // ... other routes
  ];

  const selectedMonasteryData = monasteries.find(m => m.id === selectedMonastery);
  const selectedRouteData = routePaths.find(r => r.id === selectedRoute);

  const getDifficultyBadge = (difficulty) => {
    const colors = {
      'Easy': 'bg-success',
      'Moderate': 'bg-warning',
      'Challenging': 'bg-danger'
    };
    return <span className={`badge ${colors[difficulty]}`}>{difficulty}</span>;
  };

  const handleRouteSelection = (routeId) => {
    setSelectedRoute(routeId);
    setShowStreetView(false);
    setCurrentStation(0);
  };

  const startStreetViewJourney = () => {
    setShowStreetView(true);
    setCurrentStation(0);
  };

  const handleStationClick = (stationIndex) => {
    if (showStreetView) {
      setCurrentStation(stationIndex);
    }
  };

  const nextStation = () => {
    if (selectedRouteData && currentStation < selectedRouteData.stations.length - 1) {
      setCurrentStation(currentStation + 1);
    }
  };

  const prevStation = () => {
    if (currentStation > 0) {
      setCurrentStation(currentStation - 1);
    }
  };
  
  const currentStationData = selectedRouteData?.stations[currentStation];

  return (
    <div className="d-flex vh-100">
      {/* Left Sidebar */}
      <div className="bg-dark text-white" style={{ width: selectedMonastery ? '320px' : '250px', overflowY: 'auto', flexShrink: 0 }}>
        <div className="p-3 border-bottom border-secondary">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left me-2"></i>
            <span className="fw-bold">Back to Dashboard</span>
          </Link>
        </div>
        {!selectedMonastery ? (
          <div className="p-3">
            <h5 className="fw-bold mb-3">Explore Monasteries</h5>
            <div className="list-group list-group-flush">
              {monasteries.map((monastery) => (
                <button key={monastery.id} className="list-group-item list-group-item-action bg-dark text-white border-secondary" onClick={() => setSelectedMonastery(monastery.id)}>
                  <div className="d-flex align-items-center"><img src={monastery.image} alt={monastery.name} className="rounded me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} /><div><div className="fw-semibold">{monastery.name}</div><small className="text-muted">{monastery.location}</small></div></div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3">
            <div className="d-flex align-items-center mb-3"><button className="btn btn-sm btn-outline-light me-2" onClick={() => { setSelectedMonastery(null); setSelectedRoute(null); setShowStreetView(false); }}><i className="bi bi-arrow-left"></i></button><div><h6 className="fw-bold mb-0">{selectedMonasteryData?.name}</h6><small className="text-muted">{selectedMonasteryData?.location}</small></div></div>
            <div className="card bg-secondary text-white mb-3"><div className="card-body p-3"><img src={selectedMonasteryData?.image} alt={selectedMonasteryData?.name} className="img-fluid rounded mb-2" /><p className="small mb-3">{selectedMonasteryData?.description}</p><div className="d-grid gap-2"><Link to={`/monastery/${selectedMonastery}`} className="btn btn-primary btn-sm"><i className="bi bi-info-circle me-2"></i>View Profile</Link><Link to={`/tour/${selectedMonastery}`} className="btn btn-success btn-sm"><i className="bi bi-camera me-2"></i>Start 360° Tour</Link></div></div></div>
            <h6 className="fw-bold mb-3">Choose Your Route Path</h6>
            <div className="d-grid gap-3">
              {routePaths.map((route) => (
                <div key={route.id} className={`card bg-secondary text-white ${selectedRoute === route.id ? 'border-primary' : 'border-0'}`} onClick={() => handleRouteSelection(route.id)} style={{ cursor: 'pointer' }}><div className="card-body p-3"><div className="d-flex justify-content-between align-items-start mb-2"><h6 className="card-title mb-0 fw-bold">{route.name}</h6>{getDifficultyBadge(route.difficulty)}</div><p className="card-text small mb-2">{route.description}</p><div className="d-flex justify-content-between small"><span><i className="bi bi-geo-alt me-1"></i>{route.distance}</span><span><i className="bi bi-clock me-1"></i>{route.duration}</span></div><div className="mt-2"><small className="text-muted">Via: {route.waypoints.join(' → ')}</small></div></div></div>
              ))}
            </div>
            {selectedRoute && !showStreetView && (<div className="mt-3"><button className="btn btn-success w-100" onClick={startStreetViewJourney}><i className="bi bi-camera-video me-2"></i>Start Virtual 360° Street View Journey</button></div>)}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        {showStreetView ? (
          // UPDATED: This whole block now uses the Pannellum 360 viewer
          <div className="flex-grow-1 position-relative bg-dark">
            <Pannellum
                key={currentStation} // This key ensures the component re-mounts when the station changes
                width="100%"
                height="100%"
                image={currentStationData?.image360 || currentStationData?.image}
                pitch={0}
                yaw={180}
                hfov={110}
                autoLoad
                showZoomCtrl={false}
                title="" // Disable default title
            >
                {/* You can add hotspots here later if you want */}
            </Pannellum>
            
            <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div><h5 className="mb-1">{currentStationData?.name}</h5><small>{currentStationData?.description}</small></div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-light btn-sm" disabled={currentStation === 0} onClick={prevStation}><i className="bi bi-arrow-left"></i> Previous</button>
                  {currentStation === (selectedRouteData?.stations.length || 1) - 1 ? (<button className="btn btn-warning btn-sm" onClick={() => navigate('/panorama')}><i className="bi bi-door-open me-2"></i>Enter Monastery</button>) : (<button className="btn btn-primary btn-sm" onClick={nextStation}>Next <i className="bi bi-arrow-right"></i></button>)}
                </div>
              </div>
              <div className="mt-2"><div className="progress" style={{ height: '4px' }}><div className="progress-bar bg-success" style={{ width: `${((currentStation + 1) / (selectedRouteData?.stations.length || 1)) * 100}%` }}></div></div><small className="text-muted">Station {currentStation + 1} of {selectedRouteData?.stations.length} • {currentStationData?.distance} from start</small></div>
            </div>
          </div>
        ) : (
          <div className="flex-grow-1 position-relative" style={{ backgroundColor: '#e9ecef' }}>
            <div className="position-absolute top-50 start-50 translate-middle text-center"><i className="bi bi-geo-alt display-1 text-primary mb-3"></i><h3>Interactive Sikkim Map</h3><p className="text-muted">Select a monastery to explore route options</p></div>
            {!selectedMonastery && (<>
                <div className="position-absolute" style={{ top: '20%', left: '30%' }}><button className="btn btn-primary rounded-circle shadow" onClick={() => setSelectedMonastery(1)}><i className="bi bi-geo-alt-fill"></i></button></div>
                <div className="position-absolute" style={{ top: '40%', left: '45%' }}><button className="btn btn-primary rounded-circle shadow" onClick={() => setSelectedMonastery(2)}><i className="bi bi-geo-alt-fill"></i></button></div>
                <div className="position-absolute" style={{ top: '60%', left: '25%' }}><button className="btn btn-primary rounded-circle shadow" onClick={() => setSelectedMonastery(3)}><i className="bi bi-geo-alt-fill"></i></button></div>
            </>)}
            <div className="position-absolute" style={{ top: '10%', left: '20%' }}><div className="bg-success rounded-circle text-white p-2 shadow"><i className="bi bi-train-front"></i></div><small className="position-absolute text-nowrap" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}>Railway Station</small></div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      {selectedRoute && selectedRouteData && (
        <div className="bg-light" style={{ width: '280px', overflowY: 'auto', flexShrink: 0 }}>
          <div className="p-3 border-bottom"><h6 className="fw-bold mb-0">Journey Stations</h6><small className="text-muted">{selectedRouteData.name}</small></div>
          <div className="p-3">
            <div className="d-flex flex-column">
              {selectedRouteData.stations.map((station, index) => (
                <div key={station.id} className="d-flex align-items-start mb-3">
                  <div className="d-flex flex-column align-items-center me-3"><div className={`rounded-circle d-flex align-items-center justify-content-center ${showStreetView && index === currentStation ? 'bg-primary text-white' : showStreetView && index < currentStation ? 'bg-success text-white' : 'bg-secondary text-white'}`} style={{ width: '30px', height: '30px', fontSize: '12px' }}>{showStreetView && index < currentStation ? <i className="bi bi-check"></i> : index + 1}</div>{index < selectedRouteData.stations.length - 1 && (<div className={`${showStreetView && index < currentStation ? 'bg-success' : 'bg-secondary'}`} style={{ width: '2px', height: '40px', marginTop: '5px' }}></div>)}</div>
                  <div className={`card flex-grow-1 ${showStreetView ? 'cursor-pointer' : ''} ${showStreetView && index === currentStation ? 'border-primary' : 'border-light'}`} onClick={() => handleStationClick(index)} style={{ cursor: showStreetView ? 'pointer' : 'default' }}><div className="row g-0"><div className="col-4"><img src={station.image} alt={station.name} className="img-fluid rounded-start" style={{ height: '60px', objectFit: 'cover' }} /></div><div className="col-8"><div className="card-body p-2"><h6 className="card-title mb-1 small fw-bold">{station.name}</h6><p className="card-text small text-muted mb-1">{station.type}</p><small className="text-primary">{station.distance}</small></div></div></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreMonasteries;