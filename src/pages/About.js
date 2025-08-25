import React from 'react';

const About = () => {
  const stats = [
    { number: "50,000+", label: "Students Enrolled" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Placement Rate" },
    { number: "24/7", label: "Doubt Support" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from course content to student support."
    },
    {
      title: "Innovation",
      description: "We continuously innovate our teaching methods and curriculum to stay ahead of industry trends."
    },
    {
      title: "Student Success",
      description: "Our primary goal is the success of our students in their careers and personal growth."
    },
    {
      title: "Community",
      description: "We build a supportive community where students can learn, grow, and network together."
    }
  ];

  const team = [
    {
      name: "Ankush Singla",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Former software engineer at Google with a passion for education and technology."
    },
    {
      name: "Kushal Goel",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Ex-Amazon engineer with expertise in building scalable educational platforms."
    },
    {
      name: "Priya Sharma",
      role: "Head of Academics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Former Microsoft engineer with 10+ years of experience in curriculum development."
    }
  ];

  // Simple icon components
  const CheckCircleIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Coding Ninjas
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              We are on a mission to democratize quality coding education and help students 
              become industry-ready developers through comprehensive courses and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide world-class coding education that is accessible, affordable, and 
                industry-relevant. We believe that everyone deserves the opportunity to learn 
                programming and build a successful career in technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive curriculum, expert instructors, and hands-on projects ensure 
                that students not only learn theoretical concepts but also gain practical 
                experience needed in the real world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading platform for coding education in India and globally, 
                empowering millions of students to achieve their dreams in the tech industry.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <CheckCircleIcon />
                  <span className="text-gray-700 ml-3">Industry-aligned curriculum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon />
                  <span className="text-gray-700 ml-3">Expert-led instruction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon />
                  <span className="text-gray-700 ml-3">Comprehensive support system</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon />
                  <span className="text-gray-700 ml-3">Proven placement assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape the learning experience we provide to our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of industry professionals is dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Coding Ninjas was founded in 2016 by Ankush Singla and Kushal Goel, 
              two former software engineers at Google and Amazon respectively. 
              They recognized the gap between traditional education and industry requirements 
              and decided to bridge it.
            </p>
            <p>
              What started as a small initiative to help a few students has now grown into 
              one of India's leading coding education platforms, helping thousands of students 
              achieve their career goals in technology.
            </p>
            <p>
              Today, we continue to innovate and expand our offerings, always keeping our 
              students' success at the heart of everything we do. Our commitment to quality 
              education and industry relevance remains unwavering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Be part of our mission to democratize coding education and transform careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 