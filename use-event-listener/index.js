import React, { useState, useEffect } from 'react';

export default function useEventListener(eventName, eventHandler, target = 'window') {
  useEffect(() => {
    window.addEventListener(eventName, eventHandler);

    return () => {
      window.removeEventListener(eventName, eventHandler);
    };
  }, []);

  return isOffline;
}
