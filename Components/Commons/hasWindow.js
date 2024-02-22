import { useState, useEffect } from 'react';

const useWindow = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return { hasWindow };
};
export default useWindow;