// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './component/stylesheet/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Navbar from './component/Navbar';
import RegistrationForm from './component/RegistrationForm';
import UserTable from './component/UserTable';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import ChessProfile from './component/ChessProfile';

import ChessResultsTable from './component/ChessResultsTable';  // New ChessResultsTable component
import TournamentsTabs from './component/other_comp/Tabs';  // New ChessResultsTable component

function App() {
  const [users, setUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchUsers = async () => {
    try {
      let response = await fetch("https://chesscheckmate.onrender.com/users");
      let data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const onSubmit = async (data, resetForm) => {
    setIsSubmitting(true);
    try {
      let r = await fetch("https://chesscheckmate.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      if (r.ok) {
        fetchUsers();
        resetForm();  // Reset the form fields
      } else {
        console.error("Error saving user data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Router>
      <>
          <Navbar />
        <div className="container allpages">
          {/* <ChessResultsTable/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration-form" element={<RegistrationForm onSubmit={onSubmit} isSubmitting={isSubmitting} />} />
            <Route path="/register-users" element={<UserTable users={users} />} />
            <Route path="/chess-results" element={<ChessResultsTable />} />
            <Route path="/about" element={<About />} />
            <Route path="/tournaments" element={<TournamentsTabs />} />
            <Route path="/chess-profile" element={<ChessProfile />} />
        
        
          </Routes>

        </div>
        <Footer/>
      </>
    </Router>
  );
}

export default App;





