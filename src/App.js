
import React from 'react';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <div className="content">
        {/* Your main content goes here */}
        <h1>Welcome to V-Academy</h1>
        <p>Start learning with our courses.</p>
      </div>
    </Layout>
  );
}

export default App;
