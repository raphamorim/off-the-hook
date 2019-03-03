# off-the-hook

> https://reactjs.org/docs/hooks-custom.html

When we want to share logic between two JavaScript functions, we extract it to a third function. Both components and Hooks are functions, so this works for them too!

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. This package is a set of custom hooks that I use in my personal projects.

## Hooks

#### [`useEventListener`](#useeventlistener)

You can also specify the target just passing it as the third argument (default is `window`). It can be used to listen events of refs, e.g: check if the image is loaded, listen a custom Event [...]

```jsx
import React from 'react';
import { useEventListener, useRef, useState } from 'off-the-hook';

function App() {
  const [ content, setContent ] = useState('Is not scrolling');
  const elementRef = useRef(null);

  // listen to scroll events on window  
  useEventListener('scroll', () => setContent('Scrolling...'));

  // listen to resize events on document
  useEventListener('resize', () => setContent('Resizing...'), document);

  // Listen to click events on `elementRef`
  useEventListener('click', () => setContent('Clicked!'), elementRef);

  return <div ref={elementRef}>{content}</div>;
};
```

#### [`useFetch`](#usefetch)

```jsx
import React from 'react';
import { useFetch } from 'off-the-hook';

function App() {
  const { error, data, loading } = useFetch('https://myapi.com/user/123');
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{data.user}</div>;
};
```

#### [`useError`](#useError)

Hook that creates a dispatcher for errors, that can be caught with error boundaries.

```jsx
import React from 'react';
import { useError } from 'off-the-hook';

const Demo = () => {
  const [ raiseError ] = useError();

  useEffect(() => {
    raiseError(
      new Error(
        "Could not work with setTimeout for some reason!"
      )
    )
  });

  return <div>Noice</div>;
};
```

#### [`useWindow`](#usewindow)

You can just check window properties.

```jsx
import React from 'react';
import { useWindow } from 'off-the-hook';

const Demo = () => {
  const { width, height, screen } = useWindow();

  return <p>{ width }px, { height }px</p>
};
```

Also listen for specific properties changes

```jsx
import React from 'react';
import { useWindow, useState } from 'off-the-hook';

const Demo = () => {
  const [ status, setStatus ] = useState('');
  const { navigator: { connection } } = useWindow(
    () => { setStatus('updating...') },
    ['navigator.connection']
  );

  return (
    <p>Your downlink is: { connection.downlink }</p>
    <p>{ status }</p>
};
```

#### [`useDebounce`](#usedebounce)

Inspired API by [react-use's useDebounce](https://github.com/streamich/react-use/blob/master/docs/useDebounce.md).

The debounce timeout will start when one of the values in third argument changes.

```jsx
import React from 'react';
import { useDebounce, useState } from 'off-the-hook';

const Demo = () => {
  const [ content, setContent ] = useState('Content Placeholder');

  useDebounce(() => setContent('Content Placeholder'), 1000, [ content ]);
  return (
    <div onClick={() => { setContent('Clicked') }}>
      { content }
    </div>
  );
};
```

#### [`useWillUnmount`](#usewillunmount)

Similar to `componentWillUnmount`. Dispatchs a handler when the component will unmount.

```jsx
import React from 'react';
import { useWillUnmount } from 'off-the-hook';

function App() {  
  useWillUnmount(() => alert('componentWillUnmount'));
  return <div>Noice</div>;
};
```

#### [`useDidUpdate`](#usecomponentunmount)

Similar to `componentDidUpdate`. Dispatchs a handler when the component just updated.

```jsx
import React from 'react';
import { useDidUpdate, useState } from 'off-the-hook';

function App() {
  const [count, setCount] = useState(0);

  useDidUpdate(() => alert('componentDidUpdate'));
  
  return (
    <React.Fragment>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1); }} >
        Click Me!
      </button>
    </React.Fragment>
  );
};
```

#### [`useOffline`](#useoffline)

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
