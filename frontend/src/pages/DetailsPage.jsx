import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Database, Wrench, Briefcase } from 'lucide-react';

const DetailsPage = () => {
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

  const skills = {
    dataAI: ['Python', 'SQL', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'OpenCV'],
    tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'Google Colab', 'MongoDB'],
    design: ['CATIA', 'Siemens NX', 'AutoCAD', 'Blender']
  };

  const experience = [
    {
      title: 'Data Science Intern',
      company: 'Sangam Soft Solutions',
      duration: '2025 (3 weeks)',
      description: 'Worked on real-time data science tasks, gained hands-on experience in data preprocessing, visualization, and ML model development. Assisted in building data-driven solutions for business use cases.',
      skills: ['Python', 'Data Analysis', 'ML Models'],
      achievements: [
        'Developed data preprocessing pipelines',
        'Built ML models for business solutions',
        'Enhanced skills in data visualization'
      ]
    },
    {
      title: 'Trainee Design Engineer',
      company: 'Hirotec (MNC)',
      duration: '2023 - 2024 (1 Year)',
      description: 'Worked as a Design Engineer, designed and developed mechanical components as per company standards. Coordinated with cross-functional teams to meet project requirements.',
      skills: ['CAD Design', 'Team Coordination', 'Engineering'],
      achievements: [
        'Designed mechanical components',
        'Collaborated with cross-functional teams',
        'Learned industrial design processes'
      ]
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 sm:mb-6 animate-fade-in-up">
            Skills & Experience
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A comprehensive overview of my technical expertise and professional journey
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-sm sm:text-base text-gray-600">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Data & AI</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base">Core data science and machine learning skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.dataAI.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Tools & Technologies</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base">Development tools and platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-section bg-white group" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                    <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Design Tools</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base">CAD and 3D design software</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all hover:scale-105">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-3 sm:mb-4">Professional Experience</h2>
            <p className="text-sm sm:text-base text-gray-600">My journey in the tech industry</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 fade-in-section group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl md:text-2xl">{exp.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm sm:text-base md:text-lg text-gray-700 font-medium ml-0 sm:ml-11">
                        {exp.company} • {exp.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="ml-0 sm:ml-11">
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{exp.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-600">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary" className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-all hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 sm:mb-6">Want to see my certifications?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Explore my professional certifications and achievements</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigate('/certificates')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 w-full sm:w-auto">
              View Certifications
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

export default DetailsPage;