import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DigitalArchives = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const archives = [
    {
      id: 1,
      title: 'Ancient Buddhist Manuscript - Lotus Sutra',
      category: 'Manuscripts',
      monastery: 'Tashilhunpo Monastery',
      date: '15th Century',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Hand-written Buddhist scripture on palm leaves, containing essential Buddhist teachings.',
      type: 'Art'
    },
    {
      id: 2,
      title: 'Mandala Wall Painting',
      category: 'Murals',
      monastery: 'Potala Palace',
      date: '17th Century',
      image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intricate mandala painting representing the Buddhist universe and spiritual journey.',
      type: 'Art'
    },
    {
      id: 3,
      title: 'Prayer Flag Ceremony Documentation',
      category: 'Rituals',
      monastery: 'Hemis Monastery',
      date: '2020',
      image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Video documentation of traditional prayer flag blessing ceremony.',
      type: 'Rituals'
    },
    {
      id: 4,
      title: 'Losar Festival Historical Records',
      category: 'Festivals',
      monastery: 'Multiple',
      date: '18th-20th Century',
      image: 'https://images.pexels.com/photos/6913988/pexels-photo-6913988.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Collection of documents and photographs showing the evolution of Tibetan New Year celebrations.',
      type: 'Festivals'
    },
    {
      id: 5,
      title: 'Biography of Gendun Drup',
      category: 'History',
      monastery: 'Tashilhunpo Monastery',
      date: '16th Century',
      image: 'https://images.pexels.com/photos/2850028/pexels-photo-2850028.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Historical account of the first Dalai Lama and founder of Tashilhunpo Monastery.',
      type: 'History'
    },
    {
      id: 6,
      title: 'Traditional Medicine Texts',
      category: 'Manuscripts',
      monastery: 'Multiple',
      date: '14th-18th Century',
      image: 'https://images.pexels.com/photos/3109673/pexels-photo-3109673.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ancient Tibetan medical texts and healing practices preserved through generations.',
      type: 'History'
    }
  ];

  const categories = ['all', 'Art', 'History', 'Rituals', 'Festivals'];

  const filteredArchives = archives.filter(archive => {
    const matchesCategory = selectedCategory === 'all' || archive.type === selectedCategory;
    const matchesSearch = archive.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         archive.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="h2 fw-bold mb-2">Digital Archives</h1>
            <p className="text-muted">Explore our collection of manuscripts, murals, and cultural artifacts</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="row g-3 align-items-end">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Search Archives</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search manuscripts, murals, or artifacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Category</label>
                    <select 
                      className="form-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-primary w-100">
                      <i className="bi bi-funnel me-2"></i>
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-primary text-white border-0">
              <div className="card-body text-center">
                <h4 className="fw-bold">{archives.length}</h4>
                <p className="mb-0">Total Items in Archives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills">
              {categories.map(category => (
                <li key={category} className="nav-item">
                  <button
                    className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'All Items' : category}
                    <span className="ms-2 badge bg-light text-dark">
                      {category === 'all' 
                        ? archives.length 
                        : archives.filter(a => a.type === category).length
                      }
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Archives Grid */}
        <div className="row g-4">
          {filteredArchives.map((archive) => (
            <div key={archive.id} className="col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 h-100 hover-lift">
                <div className="position-relative">
                  <img 
                    src={archive.image} 
                    alt={archive.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 m-3 badge bg-primary">
                    {archive.type}
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-2">{archive.title}</h5>
                  <p className="text-muted mb-2">
                    <i className="bi bi-building me-2"></i>
                    {archive.monastery}
                  </p>
                  <p className="text-muted mb-2">
                    <i className="bi bi-calendar me-2"></i>
                    {archive.date}
                  </p>
                  <p className="card-text flex-grow-1 mb-3">{archive.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-light text-dark">{archive.category}</span>
                    <div className="btn-group btn-group-sm">
                      <button 
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal-${archive.id}`}
                      >
                        <i className="bi bi-eye me-1"></i>
                        View
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-heart me-1"></i>
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id={`modal-${archive.id}`} tabIndex={-1}>
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title fw-bold">{archive.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <img 
                              src={archive.image} 
                              alt={archive.title}
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3"><strong>Category:</strong> {archive.category}</div>
                            <div className="mb-3"><strong>Monastery:</strong> {archive.monastery}</div>
                            <div className="mb-3"><strong>Period:</strong> {archive.date}</div>
                            <div className="mb-3"><strong>Type:</strong> <span className="badge bg-primary">{archive.type}</span></div>
                            <div>
                              <strong>Description:</strong>
                              <p className="mt-2">{archive.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-success">
                          <i className="bi bi-download me-2"></i>
                          Download High-Res
                        </button>
                        <button className="btn btn-primary">
                          <i className="bi bi-share me-2"></i>
                          Share
                        </button>
                        <button className="btn btn-outline-primary">
                          <i className="bi bi-heart me-2"></i>
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredArchives.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-search display-1 text-muted mb-3"></i>
            <h3>No Archives Found</h3>
            <p className="text-muted">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {filteredArchives.length > 0 && (
          <div className="text-center mt-5">
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-down me-2"></i>
              Load More Archives
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DigitalArchives;
