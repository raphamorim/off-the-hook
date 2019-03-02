import React, { useRef, useLayoutEffect } from 'react';

export default function useDidUpdate(handler) {
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    handler();
  });
}
