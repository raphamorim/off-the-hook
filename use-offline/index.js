// https://www.robinwieruch.de/react-hooks/
import React, { useState, useEffect } from 'react';

export default function useOffline() {
  const [isOffline, setIsOffline] = useState(false);

  function onOffline() {
    setIsOffline(true);
  }

  function onOnline() {
    setIsOffline(false);
  }

  useEffect(() => {
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    };
  }, []);

  return isOffline;
}
