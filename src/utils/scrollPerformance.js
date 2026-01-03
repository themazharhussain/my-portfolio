// Scroll Performance Monitor
// Detects fast scrolling and optimizes performance

let lastScrollTime = Date.now();
let lastScrollY = window.scrollY;
let scrollVelocity = 0;
let fastScrolling = false;
let rafId = null;

const FAST_SCROLL_THRESHOLD = 50; // pixels per frame
const VELOCITY_SAMPLES = [];
const MAX_SAMPLES = 3;

export function initScrollPerformance() {
  let ticking = false;

  const measureScroll = () => {
    const now = Date.now();
    const currentY = window.scrollY;
    const deltaTime = now - lastScrollTime;
    const deltaY = Math.abs(currentY - lastScrollY);

    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
      const velocity = deltaY / deltaTime;

      // Keep rolling average of velocities
      VELOCITY_SAMPLES.push(velocity);
      if (VELOCITY_SAMPLES.length > MAX_SAMPLES) {
        VELOCITY_SAMPLES.shift();
      }

      // Average velocity
      scrollVelocity = VELOCITY_SAMPLES.reduce((a, b) => a + b, 0) / VELOCITY_SAMPLES.length;

      // Detect fast scrolling
      const isFastScroll = scrollVelocity > (FAST_SCROLL_THRESHOLD / 16);

      if (isFastScroll !== fastScrolling) {
        fastScrolling = isFastScroll;
        document.documentElement.classList.toggle('fast-scroll', fastScrolling);

        // Dispatch custom event
        window.dispatchEvent(
          new CustomEvent('scrollspeed', {
            detail: { fast: fastScrolling, velocity: scrollVelocity }
          })
        );
      }
    }

    lastScrollTime = now;
    lastScrollY = currentY;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(measureScroll);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
}

export function isFastScrolling() {
  return fastScrolling;
}

export function getScrollVelocity() {
  return scrollVelocity;
}
