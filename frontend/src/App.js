import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    project: '',
    github: ''
  });

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      team: '',
      project: '',
      github: ''
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const mentors = [
    { name: "Dr. Sarah Chen", title: "AI Research Director", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" },
    { name: "Marcus Rodriguez", title: "Tech Innovation Lead", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" },
    { name: "Prof. Emily Watson", title: "Machine Learning Expert", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" },
    { name: "James Liu", title: "Venture Capital Partner", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" },
    { name: "Dr. Alex Kumar", title: "AI Ethics Specialist", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" },
    { name: "Nina Patel", title: "Product Strategy Director", image: "https://images.unsplash.com/photo-1649767662275-b1c8ff96cc28" }
  ];

  const timelineItems = [
    {
      icon: "https://images.unsplash.com/photo-1619506147448-b56ba8ee11d7",
      title: "Registration Opens",
      date: "June 15, 2025",
      description: "Submit your application and team details"
    },
    {
      icon: "https://images.pexels.com/photos/3946168/pexels-photo-3946168.jpeg",
      title: "Hackathon Weekend",
      date: "July 20-22, 2025",
      description: "48 hours of intensive coding and innovation"
    },
    {
      icon: "https://images.unsplash.com/photo-1585249085702-e5ac880bc693",
      title: "Final Presentations",
      date: "July 22, 2025",
      description: "Pitch your solution to expert judges"
    },
    {
      icon: "https://images.pexels.com/photos/7563611/pexels-photo-7563611.jpeg",
      title: "Winner Announcement",
      date: "July 25, 2025",
      description: "Celebrate the winning teams and prizes"
    }
  ];

  const prizes = [
    { title: "Grand Prize", amount: "$50,000", description: "Best overall AI solution" },
    { title: "Innovation Award", amount: "$25,000", description: "Most creative approach" },
    { title: "People's Choice", amount: "$15,000", description: "Community voted favorite" },
    { title: "Technical Excellence", amount: "$10,000", description: "Best technical implementation" }
  ];

  const faqItems = [
    {
      question: "Who can participate in the Z47 Enterprise AI Hackathon?",
      answer: "The hackathon is open to developers, data scientists, designers, and entrepreneurs of all skill levels. Both individual participants and teams of up to 4 members are welcome."
    },
    {
      question: "What are the technical requirements?",
      answer: "Participants should have experience with at least one programming language and basic understanding of AI/ML concepts. All necessary development tools and cloud resources will be provided."
    },
    {
      question: "How will projects be evaluated?",
      answer: "Projects will be judged on innovation, technical implementation, business viability, and presentation quality. Our panel of expert judges includes industry leaders and technical experts."
    },
    {
      question: "What support is provided during the event?",
      answer: "Participants will have access to mentors, technical workshops, cloud resources, and 24/7 support throughout the hackathon weekend."
    },
    {
      question: "Are there any costs involved?",
      answer: "No, participation is completely free. We provide meals, accommodation options, and all necessary resources. Travel stipends may be available for selected participants."
    }
  ];

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (scrolled > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z47</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Enterprise AI Hackathon</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
              <a href="#timeline" className="text-gray-600 hover:text-orange-500 transition-colors">Timeline</a>
              <button 
                onClick={() => scrollToSection('apply')}
                className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
              >
                Apply
              </button>
              <a href="#mentors" className="text-gray-600 hover:text-orange-500 transition-colors">Mentors</a>
              <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-gray-600 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
                <a href="#timeline" className="text-gray-600 hover:text-orange-500 transition-colors">Timeline</a>
                <button 
                  onClick={() => scrollToSection('apply')}
                  className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer text-left"
                >
                  Apply
                </button>
                <a href="#mentors" className="text-gray-600 hover:text-orange-500 transition-colors">Mentors</a>
                <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1627468475746-c7dd516901e3" 
            alt="Abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Build the Future with
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"> AI Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the Z47 Enterprise AI Hackathon and compete for $100,000 in prizes while solving real-world challenges with cutting-edge artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('apply')}
              className="cta-button bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </button>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium text-lg transition-colors duration-300 flex items-center">
              Learn More 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  About Z47 Enterprise AI Hackathon
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Z47 is at the forefront of enterprise AI innovation, empowering organizations to harness the transformative power of artificial intelligence. Our hackathon brings together the brightest minds in technology to tackle real-world challenges and create solutions that will shape the future of business.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join us for an intensive 48-hour journey where innovation meets implementation. Work alongside industry experts, access cutting-edge tools, and compete for substantial prizes while building solutions that matter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-orange-700 font-semibold">48 Hours</span>
                  </div>
                  <div className="bg-yellow-100 px-4 py-2 rounded-full">
                    <span className="text-yellow-700 font-semibold">$100K Prizes</span>
                  </div>
                  <div className="bg-orange-100 px-4 py-2 rounded-full">
                    <span className="text-orange-700 font-semibold">Expert Mentors</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-3xl">
                  <img 
                    src="https://images.pexels.com/photos/10991709/pexels-photo-10991709.jpeg" 
                    alt="AI Partnership" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Prizes Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Timeline & Prizes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From registration to celebration, here's your journey through the Z47 Enterprise AI Hackathon
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-card glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{item.date}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prizes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, index) => (
                <div key={index} className="prize-card glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{prize.amount}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{prize.title}</h3>
                  <p className="text-gray-600">{prize.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-gray-600">
                Ready to join the innovation revolution? Submit your application today.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Team/Company</label>
                  <input
                    type="text"
                    name="team"
                    value={formData.team}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your team or company name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Project Description</label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project idea or what you hope to build"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">GitHub Profile (Optional)</label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="https://github.com/your-username"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="cta-button bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors & Judges */}
      <section id="mentors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Mentors & Judges
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from industry leaders and get your projects evaluated by top experts in AI and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <div key={index} className="mentor-card glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{mentor.name}</h3>
                  <p className="text-orange-500 font-semibold">{mentor.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Got questions? We've got answers. Find everything you need to know about the hackathon.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                    <svg
                      className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z47</span>
                  </div>
                  <span className="text-xl font-bold">Z47</span>
                </div>
                <p className="text-gray-400">
                  Empowering innovation through AI technology and bringing together the best minds in the industry.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About</a></li>
                  <li><a href="#timeline" className="text-gray-400 hover:text-orange-500 transition-colors">Timeline</a></li>
                  <li><a href="#apply" className="text-gray-400 hover:text-orange-500 transition-colors">Apply</a></li>
                  <li><a href="#mentors" className="text-gray-400 hover:text-orange-500 transition-colors">Mentors</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#faq" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Z47 Enterprise AI Hackathon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;