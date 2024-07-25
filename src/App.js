import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DocumentEditor from './components/DocumentEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor/:docId" element={<DocumentEditor />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;