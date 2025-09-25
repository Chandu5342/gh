import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overviews');

    // --- MOCK DATA ---
    const stats = {
        monasteries: 28,
        archives: 2153,
        events: 19,
        users: 4812
    };

    const monasteriesData = [
        { name: "Rumtek Monastery", location: "Gangtok, Sikkim", status: "Active", tours: 4, image: "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=60" },
        { name: "Pemayangtse Monastery", location: "Pelling, Sikkim", status: "Active", tours: 2, image: "https://images.pexels.com/photos/12833589/pexels-photo-12833589.jpeg?auto=compress&cs=tinysrgb&w=60" },
        { name: "Tashiding Monastery", location: "West Sikkim", status: "Upcoming", tours: 0, image: "https://images.pexels.com/photos/1098759/pexels-photo-1098759.jpeg?auto=compress&cs=tinysrgb&w=60" },
        { name: "Enchey Monastery", location: "Gangtok, Sikkim", status: "Active", tours: 1, image: "https://images.pexels.com/photos/712433/pexels-photo-712433.jpeg?auto=compress&cs=tinysrgb&w=60" },
    ];
    // --- END MOCK DATA ---

    return (
        <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fw-bold">
                        <i className="bi bi-camera360 me-2"></i>
                        Monastery360 Admin
                    </Link>
                    <div className="d-flex">
                        <Link to="/dashboard" className="btn btn-outline-light btn-sm me-2">
                            <i className="bi bi-eye me-1"></i> View Site
                        </Link>
                        <Link to="/" className="btn btn-danger btn-sm">
                            <i className="bi bi-box-arrow-right me-1"></i> Logout
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container-fluid my-4">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <div className="card shadow-sm border-0 bg-dark text-white">
                            <div className="card-body p-2">
                                <div className="list-group list-group-flush">
                                    <button
                                        className={`list-group-item list-group-item-action bg-dark text-white border-0 ${activeTab === 'overview' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('overview')}
                                    >
                                        <i className="bi bi-speedometer2 me-2"></i> Overview
                                    </button>
                                    <button
                                        className={`list-group-item list-group-item-action bg-dark text-white border-0 ${activeTab === 'monasteries' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('monasteries')}
                                    >
                                        <i className="bi bi-building me-2"></i> Manage Monasteries
                                    </button>
                                    <button
                                        className={`list-group-item list-group-item-action bg-dark text-white border-0 ${activeTab === 'archives' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('archives')}
                                    >
                                        <i className="bi bi-archive me-2"></i> Digital Archives
                                    </button>
                                    <button
                                        className={`list-group-item list-group-item-action bg-dark text-white border-0 ${activeTab === 'events' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('events')}
                                    >
                                        <i className="bi bi-calendar-event me-2"></i> Manage Events
                                    </button>
                                    <button
                                        className={`list-group-item list-group-item-action bg-dark text-white border-0 ${activeTab === 'analytics' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('analytics')}
                                    >
                                        <i className="bi bi-bar-chart me-2"></i> Analytics
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9">
                        {activeTab === 'overview' && (
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h2 className="fw-bold">Dashboard Overview</h2>
                                    <div className="text-muted small">
                                        <i className="bi bi-calendar me-2"></i>
                                        {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="row g-4 mb-4">
                                    <div className="col-md-3"><div className="card bg-primary text-white h-100 border-0 shadow-sm"><div className="card-body text-center"><i className="bi bi-building display-4"></i><h3 className="fw-bold my-2">{stats.monasteries}</h3><p className="mb-0">Monasteries</p></div></div></div>
                                    <div className="col-md-3"><div className="card bg-success text-white h-100 border-0 shadow-sm"><div className="card-body text-center"><i className="bi bi-archive display-4"></i><h3 className="fw-bold my-2">{stats.archives.toLocaleString()}</h3><p className="mb-0">Archives</p></div></div></div>
                                    <div className="col-md-3"><div className="card bg-warning text-white h-100 border-0 shadow-sm"><div className="card-body text-center"><i className="bi bi-calendar-event display-4"></i><h3 className="fw-bold my-2">{stats.events}</h3><p className="mb-0">Active Events</p></div></div></div>
                                    <div className="col-md-3"><div className="card bg-info text-white h-100 border-0 shadow-sm"><div className="card-body text-center"><i className="bi bi-people display-4"></i><h3 className="fw-bold my-2">{stats.users.toLocaleString()}</h3><p className="mb-0">Total Users</p></div></div></div>
                                </div>

                                {/* Quick Actions */}
                                <div className="card shadow-sm border-0">
                                    <div className="card-header bg-white border-0 py-3">
                                        <h5 className="fw-bold mb-0">Quick Actions</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-start gap-3">
                                            <button className="btn btn-lg btn-outline-primary" onClick={() => setActiveTab('monasteries')}><i className="bi bi-plus-circle me-2"></i>Add Monastery</button>
                                            <button className="btn btn-lg btn-outline-success" onClick={() => setActiveTab('archives')}><i className="bi bi-upload me-2"></i>Upload Archives</button>
                                            <button className="btn btn-lg btn-outline-warning" onClick={() => setActiveTab('events')}><i className="bi bi-calendar-plus me-2"></i>Create Event</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'monasteries' && (
                            <div className="card shadow-sm border-0">
                                <div className="card-header bg-white py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="fw-bold mb-0">Manage Monasteries</h4>
                                        <button className="btn btn-primary"><i className="bi bi-plus-circle me-2"></i>Add New Monastery</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover align-middle">
                                            <thead><tr><th>Monastery</th><th>Location</th><th>Status</th><th>Tours</th><th className="text-end">Actions</th></tr></thead>
                                            <tbody>
                                                {monasteriesData.map(m => (
                                                    <tr key={m.name}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src={m.image} alt={m.name} className="rounded-circle me-3" style={{ width: '45px', height: '45px', objectFit: 'cover' }} />
                                                                <span className="fw-semibold">{m.name}</span>
                                                            </div>
                                                        </td>
                                                        <td>{m.location}</td>
                                                        <td><span className={`badge ${m.status === 'Active' ? 'bg-success-subtle text-success-emphasis' : 'bg-warning-subtle text-warning-emphasis'}`}>{m.status}</span></td>
                                                        <td>{m.tours}</td>
                                                        <td className="text-end">
                                                            <button className="btn btn-sm btn-outline-secondary me-1"><i className="bi bi-pencil-square"></i></button>
                                                            <button className="btn btn-sm btn-outline-secondary me-1"><i className="bi bi-eye"></i></button>
                                                            <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'analytics' && (
                             <div className="card shadow-sm border-0">
                                <div className="card-header bg-white py-3">
                                     <h4 className="fw-bold mb-0">Platform Analytics</h4>
                                </div>
                                <div className="card-body p-5 text-center">
                                     <i className="bi bi-bar-chart-line text-muted" style={{fontSize: '5rem'}}></i>
                                     <h3 className="mt-3">Analytics Coming Soon</h3>
                                     <p className="text-muted">Detailed charts and user engagement data will be displayed here.</p>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;