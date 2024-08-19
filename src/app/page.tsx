// pages/index.tsx
"use client";
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@antonz/codapi/dist/snippet.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Exemplo coda mundo</h1>
      <pre>print("Hello, World!")</pre>
      <codapi-snippet sandbox="python" editor="basic"></codapi-snippet>
    </div>
  );
};

export default Home;
