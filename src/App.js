import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';

function App() {
  console.log(
    'Hello! for more info about this website email us at hawajesaqswar AT gmail DOT com'
  );
  return <RouterProvider router={router} />;
}

export default App;
