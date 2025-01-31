import React, { useState, useEffect } from 'react';
import Home from './pages/Home'; // Make sure this path is correct
import Preloader from '../components/Preloader'; // Make sure this path is correct

function App() {
  const [loading, setLoading] = useState(true);

  // Show preloader for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader will be shown for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {loading ? <Preloader /> : <Home />}
    </div>
  );
}

export default App;
