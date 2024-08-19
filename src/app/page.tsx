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
    <div className="snippet-container">
      <h1>Bem-vindo ao meu projeto Next.js!</h1>
      <pre>print(&quot;Hello, World!&quot;)</pre>
      <codapi-snippet sandbox="python" editor="basic"></codapi-snippet>
    </div>
  );
};

export default Home;