const SpotlightEffect = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Top spotlight */}
      <div className="absolute top-0 left-1/4 w-96 h-96">
        <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 via-primary-300/10 to-transparent blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Bottom right spotlight */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px]">
        <div className="absolute inset-0 bg-gradient-radial from-accent-400/20 via-accent-300/10 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-radial from-purple-300/10 via-blue-200/5 to-transparent blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default SpotlightEffect;
