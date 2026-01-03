import { useState, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  return (
    <div className={cn("md:hidden", className)}>
      <div className="flex gap-4 justify-center">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-emerald-500/50 group"
            aria-label={item.title}
          >
            <span className="text-slate-400 group-hover:text-emerald-400 transition-colors">
              {item.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={cn("hidden md:block", className)}>
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex items-end gap-4 px-4 pb-3"
      >
        {items.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);

  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  const heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 28, 20]);

  const width = useSpring(widthTransform, {
    stiffness: 300,
    damping: 30,
  });
  const height = useSpring(heightTransform, {
    stiffness: 300,
    damping: 30,
  });

  const widthIcon = useSpring(widthIconTransform, {
    stiffness: 300,
    damping: 30,
  });
  const heightIcon = useSpring(heightIconTransform, {
    stiffness: 300,
    damping: 30,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center relative border border-slate-700 hover:border-emerald-500/50 transition-colors"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
        >
          {icon}
        </motion.div>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-slate-900 border border-slate-700 text-slate-200 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </a>
  );
}
