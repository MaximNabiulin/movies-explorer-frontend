import React from 'react';

const getWidth = () => window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

export function useResize() {
  let [width, setWidth] = React.useState(getWidth());

  React.useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};