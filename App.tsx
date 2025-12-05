import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Intro } from './pages/Intro';
import { Home } from './pages/Home';
import { Work } from './pages/Missions';
import { About } from './pages/Profile';
import { Contact } from './pages/Comms';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Allow browser to handle scroll restoration naturally or force top
    if (loading) {
        window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Intro onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
          <Layout>
             <Home />
             <Work />
             <About />
             <Contact />
          </Layout>
      )}
    </>
  );
};

export default App;