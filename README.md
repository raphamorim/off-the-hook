# off-the-hook

> https://reactjs.org/docs/hooks-custom.html

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. This package is a set of custom hooks that I use in my personal projects.

## Hooks

#### `useOffline`

```jsx
import React from 'react';
import { useOffline } from 'off-the-hook';

const App = () => (
  useOffline() ?
    <span>Offline!</span> :
    <span>Online!</span>
);
```

> Raphael Amorim 2019
