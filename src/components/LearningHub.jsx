import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LearningHub = () => {
  const [selectedPathway, setSelectedPathway] = useState(null);

  const learningPathways = [
    {
      id: 'buddhism-in-art',
      title: 'Buddhism in Art',
      description: 'Explore how Buddhist philosophy is expressed through visual arts, sculptures, and architecture.',
      duration: '6 modules • 4 hours',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: [
        'Introduction to Buddhist Art',
        'Symbolism in Buddhist Sculptures',
        'Sacred Architecture and Mandala Designs',
        'Thangka Paintings and Their Meanings',
        'Modern Buddhist Art Expressions',
        'Creating Your Own Buddhist Art'
      ]
    },
    {
      id: 'healing-rituals',
      title: 'Healing Rituals',
      description: 'Learn about traditional Tibetan healing practices, meditation techniques, and spiritual wellness.',
      duration: '8 modules • 6 hours',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: [
        'Foundations of Tibetan Medicine',
        'Chakra Balancing and Energy Work',
        'Sound Healing with Singing Bowls',
        'Herbal Remedies and Preparations',
        'Meditation for Physical Healing',
        'Ritual Purification Practices',
        'Breathing Techniques and Pranayama',
        'Integration into Daily Life'
      ]
    },
    {
      id: 'women-in-history',
      title: 'Women in Buddhist History',
      description: 'Discover the contributions of women in Buddhist traditions, from ancient times to the present.',
      duration: '5 modules • 3 hours',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: [
        'Female Buddha Figures and Bodhisattvas',
        'Historical Buddhist Nuns and Teachers',
        'Women in Tibetan Buddhism',
        'Contemporary Female Buddhist Leaders',
        'Feminine Wisdom in Buddhist Philosophy'
      ]
    },
    {
      id: 'meditation-tutorials',
      title: 'Meditation Mastery',
      description: 'Progressive meditation course from basic mindfulness to advanced techniques.',
      duration: '10 modules • 8 hours',
      difficulty: 'All Levels',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: [
        'What is Meditation? - Foundations',
        'Basic Mindfulness Techniques',
        'Breathing Meditation Practices',
        'Walking Meditation',
        'Loving-Kindness Meditation',
        'Visualization Techniques',
        'Advanced Concentration Practices',
        'Insight Meditation (Vipassana)',
        'Integration into Daily Life',
        'Building a Regular Practice'
      ]
    }
  ];

  const getDifficultyBadge = (difficulty) => {
    const colors = {
      'Beginner': 'bg-success',
      'Intermediate': 'bg-warning',
      'Advanced': 'bg-danger',
      'All Levels': 'bg-primary'
    };
    return <span className={`badge ${colors[difficulty] || 'bg-secondary'}`}>{difficulty}</span>;
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
            <h1 className="h2 fw-bold mb-2">Learning Hub</h1>
            <p className="text-muted">Curated educational pathways to deepen your understanding of Buddhist culture and practices</p>
          </div>
        </div>

        {/* Learning Pathways Grid */}
        <div className="row g-4 mb-5">
          {learningPathways.map((pathway) => (
            <div key={pathway.id} className="col-lg-6">
              <div className="card shadow-sm border-0 h-100 hover-lift">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img 
                      src={pathway.image} 
                      alt={pathway.title}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column h-100">
                      <div>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title fw-bold mb-1">{pathway.title}</h5>
                          {getDifficultyBadge(pathway.difficulty)}
                        </div>
                        <p className="card-text text-muted mb-3">{pathway.description}</p>
                        <div className="mb-3">
                          <small className="text-muted">
                            <i className="bi bi-clock me-2"></i>
                            {pathway.duration}
                          </small>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button 
                          className="btn btn-primary me-2"
                          onClick={() => setSelectedPathway(pathway.id)}
                          data-bs-toggle="modal"
                          data-bs-target="#pathwayModal"
                        >
                          <i className="bi bi-play-circle me-2"></i>
                          Start Learning
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-bookmark me-2"></i>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="row">
          <div className="col-12 mb-4">
            <h3 className="fw-bold">Featured Learning Resources</h3>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-book display-4 mb-3"></i>
                <h5 className="fw-bold">Digital Library</h5>
                <p className="mb-3">Access over 500 Buddhist texts and scholarly articles</p>
                <Link to="/archives" className="btn btn-light">
                  Explore Library
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-camera-video display-4 mb-3"></i>
                <h5 className="fw-bold">Virtual Classes</h5>
                <p className="mb-3">Join live meditation sessions and dharma talks</p>
                <button className="btn btn-light">
                  Schedule Available
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning text-white border-0">
              <div className="card-body text-center">
                <i className="bi bi-people display-4 mb-3"></i>
                <h5 className="fw-bold">Study Groups</h5>
                <p className="mb-3">Connect with fellow learners in discussion groups</p>
                <button className="btn btn-light">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pathway Detail Modal */}
      <div className="modal fade" id="pathwayModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {selectedPathway && (() => {
              const pathway = learningPathways.find(p => p.id === selectedPathway);
              return pathway ? (
                <>
                  <div className="modal-header">
                    <div>
                      <h4 className="modal-title fw-bold">{pathway.title}</h4>
                      <div className="d-flex align-items-center mt-2">
                        {getDifficultyBadge(pathway.difficulty)}
                        <span className="ms-3 text-muted">
                          <i className="bi bi-clock me-1"></i>
                          {pathway.duration}
                        </span>
                      </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img 
                          src={pathway.image} 
                          alt={pathway.title}
                          className="img-fluid rounded mb-3"
                        />
                      </div>
                      <div className="col-md-8">
                        <p className="lead">{pathway.description}</p>
                        <h6 className="fw-bold mt-4 mb-3">Course Modules:</h6>
                        <div className="list-group">
                          {pathway.modules.map((module, index) => (
                            <div key={index} className="list-group-item d-flex align-items-center">
                              <div className="me-3">
                                <span className="badge bg-primary rounded-pill">{index + 1}</span>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-semibold">{module}</div>
                              </div>
                              <div>
                                <i className="bi bi-play-circle text-primary"></i>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success btn-lg">
                      <i className="bi bi-play-circle me-2"></i>
                      Start Course
                    </button>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-bookmark me-2"></i>
                      Add to My Learning
                    </button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
