// https://github.com/streamich/react-use/issues/64
import React, { useState } from 'react';

export default function useError() => {
  const [err, raise] = useState();

  if (err) {
    throw err;
  }

  return raise;
};
