import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      {/* Logo/Name */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          MH
        </h1>
        <p className="mt-2 text-slate-400 text-sm">Full Stack Developer</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <p className="mt-4 text-emerald-400 text-sm font-mono">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
