import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TourismInfo = () => {
  const [activeCategory, setActiveCategory] = useState('homestays');

  const tourismData = {
    homestays: [
      {
        id: 1,
        name: 'Tenzin Family Homestay',
        location: 'Near Tashilhunpo Monastery',
        price: '$25/night',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Traditional Meals', 'Mountain View', 'Cultural Experience']
      },
      {
        id: 2,
        name: 'Himalayan Heritage Home',
        location: 'Shigatse Old Town',
        price: '$35/night',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['WiFi', 'Hot Water', 'Local Guide']
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Yak Palace Restaurant',
        location: 'Shigatse Center',
        cuisine: 'Traditional Tibetan',
        price: '$$',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
        specialties: ['Momos', 'Thukpa', 'Butter Tea']
      },
      {
        id: 2,
        name: 'Monastery View Cafe',
        location: 'Near Potala Palace',
        cuisine: 'Fusion & Local',
        price: '$$$',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
        specialties: ['Yak Meat', 'Highland Barley', 'Local Vegetables']
      }
    ],
    transport: [
      {
        id: 1,
        name: 'Tibet Highland Taxi',
        type: 'Local Taxi Service',
        contact: '+86 123 456 7890',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['Airport Transfer', 'Monastery Tours', 'City Rides']
      },
      {
        id: 2,
        name: 'Sacred Journey Tours',
        type: 'Tour Operator',
        contact: '+86 987 654 3210',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['Private Tours', 'Group Travel', 'Cultural Experiences']
      }
    ]
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="d-flex align-items-center">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="bi bi-star-fill text-warning"></i>
        ))}
        {hasHalfStar && <i className="bi bi-star-half text-warning"></i>}
        <span className="ms-2 small text-muted">({rating})</span>
      </div>
    );
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
            <h1 className="h2 fw-bold mb-2">Tourism Information</h1>
            <p className="text-muted">Find local accommodations, dining, and transportation options</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'homestays' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('homestays')}
                >
                  <i className="bi bi-house me-2"></i>
                  Homestays
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'restaurants' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('restaurants')}
                >
                  <i className="bi bi-cup-hot me-2"></i>
                  Restaurants
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'transport' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('transport')}
                >
                  <i className="bi bi-car-front me-2"></i>
                  Transportation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="row g-4">
          {activeCategory === 'homestays' && tourismData.homestays.map((homestay) => (
            <div key={homestay.id} className="col-lg-6">
              <div className="card shadow-sm border-0 h-100 hover-lift">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={homestay.image}
                      alt={homestay.name}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-1">{homestay.name}</h5>
                        <span className="badge bg-success fs-6">{homestay.price}</span>
                      </div>
                      <p className="text-muted mb-2">
                        <i className="bi bi-geo-alt me-1"></i>
                        {homestay.location}
                      </p>
                      {renderStars(homestay.rating)}
                      <div className="mt-3">
                        {homestay.features.map((feature, index) => (
                          <span key={index} className="badge bg-light text-dark me-1 mb-1">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn btn-primary btn-sm mt-3">
                        <i className="bi bi-calendar-check me-2"></i>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {activeCategory === 'restaurants' && tourismData.restaurants.map((restaurant) => (
            <div key={restaurant.id} className="col-lg-6">
              <div className="card shadow-sm border-0 h-100 hover-lift">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-1">{restaurant.name}</h5>
                        <span className="badge bg-warning fs-6">{restaurant.price}</span>
                      </div>
                      <p className="text-muted mb-1">{restaurant.cuisine}</p>
                      <p className="text-muted mb-2">
                        <i className="bi bi-geo-alt me-1"></i>
                        {restaurant.location}
                      </p>
                      {renderStars(restaurant.rating)}
                      <div className="mt-3">
                        <strong className="small">Specialties:</strong>
                        <div className="mt-1">
                          {restaurant.specialties.map((specialty, index) => (
                            <span key={index} className="badge bg-light text-dark me-1 mb-1">{specialty}</span>
                          ))}
                        </div>
                      </div>
                      <button className="btn btn-primary btn-sm mt-3">
                        <i className="bi bi-telephone me-2"></i>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {activeCategory === 'transport' && tourismData.transport.map((transport) => (
            <div key={transport.id} className="col-lg-6">
              <div className="card shadow-sm border-0 h-100 hover-lift">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={transport.image}
                      alt={transport.name}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-1">{transport.name}</h5>
                      <p className="text-muted mb-2">{transport.type}</p>
                      <p className="mb-2">
                        <i className="bi bi-telephone me-2"></i>
                        <span className="fw-semibold">{transport.contact}</span>
                      </p>
                      {renderStars(transport.rating)}
                      <div className="mt-3">
                        <strong className="small">Services:</strong>
                        <div className="mt-1">
                          {transport.services.map((service, index) => (
                            <span key={index} className="badge bg-light text-dark me-1 mb-1">{service}</span>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-primary btn-sm">
                          <i className="bi bi-telephone me-1"></i>
                          Call
                        </button>
                        <button className="btn btn-outline-primary btn-sm">
                          <i className="bi bi-info-circle me-1"></i>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card bg-primary text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-info-circle display-4 mb-3"></i>
                <h5 className="fw-bold">Travel Tips</h5>
                <p className="mb-0">Best season to visit: April to October. Carry warm clothing and altitude sickness medication.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-shield-check display-4 mb-3"></i>
                <h5 className="fw-bold">Safety Guidelines</h5>
                <p className="mb-0">Respect local customs, dress modestly at monasteries, and follow your guide's instructions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-currency-exchange display-4 mb-3"></i>
                <h5 className="fw-bold">Currency & Payment</h5>
                <p className="mb-0">Local currency is preferred. Some places accept cards, but carry cash for smaller vendors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismInfo;
