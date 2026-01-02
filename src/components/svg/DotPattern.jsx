const DotPattern = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="rgba(59, 130, 246, 0.3)" />
          </pattern>
          <radialGradient id="dot-gradient">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        <rect width="100%" height="100%" fill="url(#dot-gradient)" />
      </svg>
    </div>
  );
};

export default DotPattern;
