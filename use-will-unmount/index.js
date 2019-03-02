import React, { useEffect } from 'react';

export default function useWillUnmount(handler) {
  useEffect(() => {
    return () => {
      handler();
    };
  }, []);
}
