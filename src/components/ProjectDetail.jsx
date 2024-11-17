import React, { useEffect, useRef, useState } from 'react';

const DiagonalPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef();
  const previousScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  const portfolioItems = [
    { id: 1, title: 'Project 1', imageUrl: '/api/placeholder/400/300', category: 'Branding' },
    { id: 2, title: 'Project 2', imageUrl: '/api/placeholder/400/300', category: 'Web Design' },
    { id: 3, title: 'Project 3', imageUrl: '/api/placeholder/400/300', category: 'Mobile App' },
    { id: 4, title: 'Project 4', imageUrl: '/api/placeholder/400/300', category: 'UI/UX' },
    { id: 5, title: 'Project 5', imageUrl: '/api/placeholder/400/300', category: 'Branding' },
    { id: 6, title: 'Project 6', imageUrl: '/api/placeholder/400/300', category: 'Web Design' },
  ];

  // Smooth scrolling animation
  const smoothScroll = () => {
    currentScrollRef.current = window.scrollY;
    const scrollDiff = currentScrollRef.current - previousScrollRef.current;

    // Lerp (Linear interpolation) for smooth scrolling
    previousScrollRef.current += scrollDiff * 0.1;

    setScrollY(previousScrollRef.current);
    requestRef.current = requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const getTransform = (index) => {
    const baseSpeed = 0.100;
    const individualSpeed = 0.01;
    const maxOffset = 300;

    const baseOffset = Math.min(scrollY * baseSpeed, maxOffset);
    const individualOffset = Math.min(index * scrollY * individualSpeed, maxOffset);
    const totalOffset = baseOffset + individualOffset;

    const x = totalOffset;
    const y = totalOffset * 0.10;

    return `translate3d(${x}px, ${y}px, 0) rotate(${totalOffset * 0.01}deg)`;
  };

  return (
    <div className="min-h-screen w-full overflow-hidden py-16 perspective-1000">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(({ id, title, imageUrl, category }, index) => (
            <div
              key={id}
              className="group relative transform-gpu will-change-transform"
              style={{
                transform: getTransform(index),
                transition: 'transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-2xl transition-all duration-300 ease-out">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-64 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 
                           transition-all duration-300 ease-out flex items-center justify-center 
                           opacity-0 group-hover:opacity-100"
                >
                  <div 
                    className="text-center text-white p-4 transform translate-y-8 
                             group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagonalPortfolio;
