import React, { useEffect } from 'react';

export default function useComponentUnmount(handler) {
  useEffect(() => {
    return () => {
      handler();
    };
  }, []);
}
