import React from 'react';

const CourseCard = ({ course }) => {
  const { 
    title, 
    description, 
    duration, 
    level, 
    price, 
    originalPrice, 
    rating, 
    students, 
    image, 
    features 
  } = course;

  // Simple star icon component
  const StarIcon = ({ filled, className }) => (
    <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  return (
    <div className="card overflow-hidden group">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {level}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            {duration}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  filled={i < Math.floor(rating)}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) 
                      ? 'text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({rating})</span>
            <span className="text-sm text-gray-500">• {students.toLocaleString()} students</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
          </div>
          <span className="text-sm text-green-600 font-medium">
            {Math.round(((parseInt(originalPrice.replace(/[^\d]/g, '')) - parseInt(price.replace(/[^\d]/g, ''))) / parseInt(originalPrice.replace(/[^\d]/g, ''))) * 100)}% OFF
          </span>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard; 