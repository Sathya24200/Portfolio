import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Award, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isProfileExpanded, setIsProfileExpanded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let ticking = false;
        let lastScrollY = 0;
        let currentScrollY = 0;

        const handleScroll = () => {
            currentScrollY = window.scrollY;

            if (!ticking) {
                requestAnimationFrame(() => {
                    // Smooth interpolation for even gentler movement
                    const interpolatedY = lastScrollY + (currentScrollY - lastScrollY) * 0.8;

                    setIsScrolled(currentScrollY > 50);
                    setScrollY(interpolatedY);

                    // Update CSS custom properties with interpolated value
                    document.documentElement.style.setProperty('--scroll-y', interpolatedY + 'px');

                    lastScrollY = interpolatedY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let animationFrameId;
        let mouseX = 0;
        let mouseY = 0;
        let currentMouseX = 0;
        let currentMouseY = 0;

        const handleMouseMove = (e) => {
            currentMouseX = e.clientX;
            currentMouseY = e.clientY;

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                // Smooth interpolation for mouse movement
                mouseX = mouseX + (currentMouseX - mouseX) * 0.1;
                mouseY = mouseY + (currentMouseY - mouseY) * 0.1;

                document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
                document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    useEffect(() => {
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

    const downloadResume = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Sathya Resume.pdf`; // Path to your resume PDF in the public folder
        link.download = 'Sathyamoorthy_R_Resume.pdf'; // Name for the downloaded file
        link.target = '_blank';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // For contact section, scroll to the very bottom
            if (id === 'contact') {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenuOpen(false);
        }
    };

    const personalInfo = {
        name: 'Sathyamoorthy R',
        role: 'AI & Data Science Student',
        tagline: 'Engineering Tomorrow\'s AI Solutions Today',
        email: 'sathyamoorthyr306@gmail.com',
        github: 'https://github.com/Sathya24200',
        linkedin: 'https://www.linkedin.com/in/sathyamoorthy-tech',
        location: 'Coimbatore, India'
    };

    const projects = [
        {
            title: 'Credit Card Fraud Detection',
            description: 'Built an intelligent web application using AI models to detect fraudulent credit card transactions in real-time. Features include automated alert systems and comprehensive fraud analytics dashboard.',
            technologies: ['Python', 'Machine Learning', 'MongoDB', 'HTML/CSS/JS'],
            github: 'https://github.com/Sathya24200',
            category: 'AI/ML'
        },
        {
            title: 'Smart Lane Assistant',
            description: 'Developed a CNN-based lane detection system optimized for Indian road conditions using OpenCV. The system provides real-time lane guidance for autonomous vehicle applications.',
            technologies: ['Python', 'OpenCV', 'Deep Learning', 'CNN'],
            github: 'https://github.com/Sathya24200',
            category: 'Computer Vision'
        },
        {
            title: 'IoT-Based Gas Leak Detection',
            description: 'Created an Arduino-based real-time gas leakage detection system with SMS alert capabilities and automated fan control for safety management.',
            technologies: ['Arduino', 'IoT', 'C++', 'Sensors'],
            github: 'https://github.com/Sathya24200',
            category: 'IoT'
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full blur-3xl opacity-60 parallax-bg-1"
                    style={{
                        top: '10%',
                        left: '5%'
                    }}
                />
                <div
                    className="absolute w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-60 parallax-bg-2"
                    style={{
                        bottom: '10%',
                        right: '5%'
                    }}
                />
                <div
                    className="absolute w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-full blur-2xl opacity-40 parallax-bg-3"
                    style={{
                        top: '30%',
                        right: '10%'
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <img
                            src={`${process.env.PUBLIC_URL}/Img1.jpeg`}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setIsProfileExpanded(true)}
                        />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-600 hover:text-black transition-all hover:-translate-y-0.5">About</button>
                            <button onClick={() => scrollToSection('projects')} className="text-sm text-gray-600 hover:text-black transition-all hover:-translate-y-0.5">Projects</button>
                            <button onClick={() => navigate('/details')} className="text-sm text-gray-600 hover:text-black transition-all hover:-translate-y-0.5">Skills & Experience</button>
                            <button onClick={() => navigate('/certificates')} className="text-sm text-gray-600 hover:text-black transition-all hover:-translate-y-0.5">Certifications</button>
                            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-600 hover:text-black transition-all hover:-translate-y-0.5">Contact</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in-down">
                            <div className="flex flex-col py-4 px-6 space-y-4">
                                <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-black transition-colors py-2">About</button>
                                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-600 hover:text-black transition-colors py-2">Projects</button>
                                <button onClick={() => { navigate('/details'); setMobileMenuOpen(false); }} className="text-left text-gray-600 hover:text-black transition-colors py-2">Skills & Experience</button>
                                <button onClick={() => { navigate('/certificates'); setMobileMenuOpen(false); }} className="text-left text-gray-600 hover:text-black transition-colors py-2">Certifications</button>
                                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-black transition-colors py-2">Contact</button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-32 md:pb-0 relative">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/Img.png)`,
                        opacity: 0.9,
                        zIndex: 0
                    }}
                />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 animate-fade-in-down">
                            <Sparkles className="w-4 h-4" />
                            Open to Opportunities
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-black mb-4 tracking-tight animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>
                            {personalInfo.name}
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light mb-6 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
                            {personalInfo.role}
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
                            {personalInfo.tagline}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
                        <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                            Get In Touch
                        </Button>
                        <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                            View Work
                        </Button>
                    </div>
                </div>

                {/* Animated scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-scroll-down"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 sm:mb-12 text-center fade-in-section animate-fade-in-up">About Me</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed fade-in-section animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            I'm a motivated AI & Data Science student with a strong technical foundation and hands-on experience in data analysis, machine learning, and real-world problem-solving.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed fade-in-section animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Transitioning from a Mechanical Design Engineer background, I bring precision, discipline, and an engineering mindset to AI development. My unique perspective combines mechanical engineering principles with modern AI/ML techniques.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed fade-in-section animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            I'm passionate about building intelligent solutions that solve real-world problems and eager to apply my skills to innovative industry projects.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 fade-in-section animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <Button onClick={() => navigate('/details')} size="lg" className="bg-black hover:bg-gray-800 text-white transition-all hover:scale-105 group w-full sm:w-auto">
                                View Skills & Experience
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button onClick={() => navigate('/certificates')} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 transition-all hover:scale-105 group w-full sm:w-auto">
                                <Award className="w-5 h-5 mr-2" />
                                View Certifications
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 sm:mb-12 text-center fade-in-section animate-fade-in-up">Featured Projects</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, idx) => (
                            <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group fade-in-section bg-white animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge variant="outline" className="mb-3 group-hover:bg-black group-hover:text-white transition-colors">{project.category}</Badge>
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl mb-2 group-hover:text-gray-600 transition-colors">{project.title}</CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIdx) => (
                                            <Badge key={techIdx} variant="secondary" className="text-xs bg-gray-100">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-black hover:underline group-hover:gap-3 transition-all">
                                        <Github className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 sm:mb-8 fade-in-section animate-fade-in-up">Get In Touch</h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto fade-in-section animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        I'm always open to discussing new opportunities, collaborations, or just connecting with fellow tech enthusiasts.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12 fade-in-section animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto transition-all hover:scale-105 hover:shadow-xl">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                Email Me
                            </a>
                        </Button>
                        <Button onClick={downloadResume} variant="outline" size="lg" className="border-black text-black hover:bg-gray-50 w-full sm:w-auto transition-all hover:scale-105 hover:shadow-lg">
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-6 fade-in-section animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-all hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-all hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-black transition-all hover:scale-110">
                            <Mail className="w-6 h-6" />
                        </a>
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
                        <div className="flex items-center gap-6">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Profile Picture Expansion Modal */}
            {isProfileExpanded && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setIsProfileExpanded(false)}
                >
                    <div
                        className="relative p-2 animate-in zoom-in-50 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/Img1.jpeg`}
                            alt="Profile Expanded"
                            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
                        />
                        <button
                            onClick={() => setIsProfileExpanded(false)}
                            className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 bg-black/50 rounded-full backdrop-blur-sm transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;