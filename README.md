# off-the-hook

> https://reactjs.org/docs/hooks-custom.html

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. This package is a set of custom hooks that I use in my personal projects.

## Hooks

#### ![`useEventListener`](#useeventlistener)

You can also specify the target just passing it as the third argument (default is `window`).

```jsx
import React from 'react';
import { useEventListener, useState } from 'off-the-hook';

function App() {
  const [ content, setContent ] = useState('Is not scrolling');
  
  useEventListener('scroll', () => setContent('Scrolling...'));
  return <p>{content}</p>;
};
```

#### ![`useOffline`](#useoffline)

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
