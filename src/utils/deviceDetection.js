// Device Detection Utility
// Determines if the user is on a mobile/tablet device or desktop

export const isMobileDevice = () => {
  // Check user agent
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  // Check screen size (consider tablets as mobile for performance)
  const isSmallScreen = window.innerWidth <= 1024;

  // Check touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return mobileRegex.test(userAgent) || (isSmallScreen && isTouchDevice);
};

export const isTablet = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /iPad|Android/i.test(userAgent) && window.innerWidth >= 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
  return !isMobileDevice();
};

// Get device type
export const getDeviceType = () => {
  if (isMobileDevice()) {
    return isTablet() ? 'tablet' : 'mobile';
  }
  return 'desktop';
};

// Hook for React components
import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(() => getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

export const useIsMobile = () => {
  const deviceType = useDeviceType();
  return deviceType === 'mobile' || deviceType === 'tablet';
};
