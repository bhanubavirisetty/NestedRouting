import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  return (
    <>
      <App />
    </>
  );
}

root.render(<Index />);
