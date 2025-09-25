import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainDashboard from './components/MainDashboard';
import AdminDashboard from './components/AdminDashboard';
import ExploreMonasteries from './components/ExploreMonasteries';
import MonasteryProfile from './components/MonasteryProfile';
import VirtualTour from './components/VirtualTour';
import CulturalCalendar from './components/CulturalCalendar';
import TourismInfo from './components/TourismInfo';
import DigitalArchives from './components/DigitalArchives';
import AICompanion from './components/AICompanion';
import LearningHub from './components/LearningHub';
import TimeTravelMode from './components/TimeTravelMode';
import PanoramaPage from './components/PanoramaPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/explore" element={<ExploreMonasteries />} />
        <Route path="/monastery/:id" element={<MonasteryProfile />} />
        <Route path="/tour/:id" element={<VirtualTour />} />
        <Route path="/calendar" element={<CulturalCalendar />} />
        <Route path="/tourism" element={<TourismInfo />} />
        <Route path="/archives" element={<DigitalArchives />} />
        <Route path="/ai-companion" element={<AICompanion />} />
        <Route path="/learning" element={<LearningHub />} />
        <Route path="/timetravel" element={<TimeTravelMode />} />
        <Route path='/panorama' element={<PanoramaPage />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
