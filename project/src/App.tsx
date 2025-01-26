import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Visualizations } from './components/Visualizations';
import { Explorer } from './components/Explorer';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualizations" element={<Visualizations />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;