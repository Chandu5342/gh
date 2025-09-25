import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AICompanion = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome! I'm your AI Spiritual Companion. I'm here to help you explore Buddhist wisdom, meditation practices, and the cultural heritage of monasteries. What would you like to learn about today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedQuestions = [
    "What is the significance of prayer wheels?",
    "How do I start meditation as a beginner?",
    "Tell me about Buddhist festivals",
    "What are the main teachings of Buddhism?",
    "How can I find inner peace?"
  ];

  const aiResponses = {
    "prayer wheels": "Prayer wheels are sacred devices used in Tibetan Buddhism. When spun, they are believed to spread spiritual blessings and purify negative karma. Each rotation is equivalent to orally reciting the prayers and mantras inscribed on the wheel.",
    "meditation": "To start meditation, find a quiet space and sit comfortably with your back straight. Focus on your breath, observing each inhale and exhale. When your mind wanders, gently return attention to your breath. Start with just 5-10 minutes daily.",
    "festivals": "Buddhist festivals celebrate important events in Buddha's life and Buddhist teachings. Major festivals include Vesak Day (Buddha's birth, enlightenment, and passing), Losar (Tibetan New Year), and various monastery-specific celebrations throughout the year.",
    "teachings": "The core Buddhist teachings include the Four Noble Truths (existence of suffering, its cause, its cessation, and the path to end it) and the Eightfold Path (right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration).",
    "peace": "Inner peace comes from understanding the impermanent nature of all things, practicing mindfulness, cultivating compassion for yourself and others, and letting go of attachments. Regular meditation and following Buddhist principles can help develop this peace."
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const lowerInput = inputMessage.toLowerCase();
    let aiResponse = "That's a wonderful question about spiritual practice. While I have knowledge about Buddhist teachings and monastery traditions, I'd recommend exploring our Digital Archives or speaking with a monastery guide for more detailed information about specific practices.";

    Object.keys(aiResponses).forEach(keyword => {
      if (lowerInput.includes(keyword)) {
        aiResponse = aiResponses[keyword];
      }
    });

    const aiMessage = {
      id: messages.length + 2,
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInputMessage('');
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
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

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              {/* Chat Header */}
              <div className="card-header bg-primary text-white p-4">
                <div className="d-flex align-items-center">
                  <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                    <i className="bi bi-robot fs-3"></i>
                  </div>
                  <div>
                    <h4 className="mb-1 fw-bold">AI Spiritual Companion</h4>
                    <p className="mb-0 opacity-75">Your guide to Buddhist wisdom and monastery culture</p>
                  </div>
                  <div className="ms-auto">
                    <span className="badge bg-success">
                      <i className="bi bi-circle-fill me-1"></i>
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="card-body p-0" style={{ height: '500px', overflowY: 'auto' }}>
                <div className="p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`d-flex mb-4 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                    >
                      {message.sender === 'ai' && (
                        <div className="me-3">
                          <div className="bg-primary rounded-circle text-white p-2">
                            <i className="bi bi-robot"></i>
                          </div>
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-light'
                        }`}
                        style={{ maxWidth: '70%' }}
                      >
                        <p className="mb-1">{message.text}</p>
                        <small className={`${message.sender === 'user' ? 'text-white-50' : 'text-muted'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </small>
                      </div>
                      {message.sender === 'user' && (
                        <div className="ms-3">
                          <div className="bg-secondary rounded-circle text-white p-2">
                            <i className="bi bi-person-fill"></i>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Questions */}
              <div className="border-top p-3">
                <p className="small text-muted mb-2">Quick questions:</p>
                <div className="d-flex flex-wrap gap-2">
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="card-footer p-3">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Ask about Buddhist teachings, meditation, or monastery culture..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button 
                    className="btn btn-primary"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                  >
                    <i className="bi bi-send"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card border-0 bg-transparent">
                  <div className="card-body text-center">
                    <i className="bi bi-lightbulb text-warning display-4 mb-2"></i>
                    <h6 className="fw-semibold">Spiritual Guidance</h6>
                    <small className="text-muted">Insights on meditation and Buddhist practices</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-transparent">
                  <div className="card-body text-center">
                    <i className="bi bi-book text-primary display-4 mb-2"></i>
                    <h6 className="fw-semibold">Cultural Knowledge</h6>
                    <small className="text-muted">Learn about monastery traditions and history</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-transparent">
                  <div className="card-body text-center">
                    <i className="bi bi-heart text-danger display-4 mb-2"></i>
                    <h6 className="fw-semibold">Mindfulness</h6>
                    <small className="text-muted">Guidance for daily mindfulness practices</small>
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

export default AICompanion;
