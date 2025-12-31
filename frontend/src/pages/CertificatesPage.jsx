import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, TrendingUp, Database, Shield } from 'lucide-react';

const CertificatesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const certifications = [
    { 
      name: 'Google Cloud Cybersecurity Certificate', 
      issuer: 'Google',
      icon: Shield,
      description: 'Advanced cloud security practices and implementations',
      date: '2024'
    },
    { 
      name: 'Microsoft Concepts of Cybersecurity', 
      issuer: 'Microsoft',
      icon: Shield,
      description: 'Foundational cybersecurity concepts and best practices',
      date: '2024'
    },
    { 
      name: 'Generative AI in Action', 
      issuer: 'IBM',
      icon: TrendingUp,
      description: 'Practical applications of generative AI technologies',
      date: '2024'
    },
    { 
      name: 'MongoDB and AI Fundamentals', 
      issuer: 'MongoDB',
      icon: Database,
      description: 'Database management and AI integration fundamentals',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={() => navigate('/')} variant="ghost" className="flex items-center gap-2 hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <div className="text-xl font-semibold text-black">SR</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gray-100 rounded-full mb-4 sm:mb-6 animate-fade-in-down">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-700" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Certifications
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional certifications demonstrating my commitment to continuous learning and expertise in emerging technologies
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
                      <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2 sm:mb-3">{cert.issuer}</p>
                      <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">{cert.description}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 fade-in-section">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">4+</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Professional Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">3</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Technology Domains</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-2">2024</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Recent Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">Interested in my technical skills?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Explore my skills and professional experience</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigate('/details')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 w-full sm:w-auto">
              View Skills & Experience
            </Button>
            <Button onClick={() => navigate('/')} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 transition-all hover:scale-105 w-full sm:w-auto">
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 Sathyamoorthy R. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificatesPage;