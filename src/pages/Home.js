import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const featuredCourses = courses.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Placement Rate" },
    { number: "24/7", label: "Doubt Support" },
    { number: "500+", label: "Companies" },
    { number: "₹15LPA", label: "Avg Package" }
  ];

  const features = [
    "Live Interactive Classes",
    "Industry Expert Instructors", 
    "Doubt Support 24/7",
    "Certificate of Completion",
    "Placement Assistance",
    "Lifetime Access to Content",
    "Project-Based Learning",
    "Mock Interviews"
  ];

  // Simple icon components
  const PlayIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Master Coding Skills with{' '}
                <span className="text-yellow-400">Coding Ninjas</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Join 50,000+ students who have transformed their careers with our 
                comprehensive coding courses and placement assistance. Learn from industry experts!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/courses"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Explore Courses
                </Link>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center">
                  <PlayIcon />
                  <span className="ml-2">Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                  alt="Students learning coding"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>Live Class in Progress</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Coding Ninjas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best learning experience with industry-relevant curriculum, 
              expert instructors, and comprehensive support.
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {features.map((feature, index) => (
               <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                   <CheckCircleIcon />
                 </div>
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                 <p className="text-gray-600 text-sm">
                   Get the best learning experience with our comprehensive features designed for your success.
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your coding journey with our most popular courses designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="btn-primary inline-flex items-center"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who have transformed their careers with Coding Ninjas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

             {/* CTA Section */}
       <section className="section-padding bg-primary-600 text-white">
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Ready to Start Your Coding Journey?
           </h2>
           <p className="text-xl text-primary-100 mb-8">
             Join thousands of students who have already transformed their careers with our courses. 
             Get placement assistance and lifetime access to content!
           </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 