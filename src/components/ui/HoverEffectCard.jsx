import { useState } from 'react';
import { cn } from '../../lib/utils';

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimateCard>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${item.textColor} p-2 rounded-lg ${item.textColor.replace('text-', 'bg-')}/10`}>
                  {item.icon}
                </div>
                <CardTitle className={item.textColor}>{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </AnimateCard>
          {hoveredIndex === idx && (
            <span
              className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-2xl"
              style={{
                background:
                  'linear-gradient(120deg, rgb(59, 130, 246, 0.1) 0%, rgb(168, 85, 247, 0.1) 100%)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-6 overflow-hidden bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 group-hover:border-transparent relative z-20 transition-all duration-300 flex flex-col',
        className
      )}
    >
      <div className="relative z-50 flex-1">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn('text-slate-100 font-heading font-bold tracking-wide text-lg', className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <div
      className={cn(
        'mt-2 text-slate-300 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </div>
  );
};

const AnimateCard = ({ children }) => {
  return (
    <div className="transition-all duration-200 group-hover:scale-[1.02]">
      {children}
    </div>
  );
};
