const GridPattern = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade-mask)" />
        <mask id="fade-mask">
          <rect width="100%" height="100%" fill="url(#fade)" />
        </mask>
      </svg>
    </div>
  );
};

export default GridPattern;
