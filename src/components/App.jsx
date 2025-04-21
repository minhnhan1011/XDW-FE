import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Đảm bảo import GoogleOAuthProvider

import Home from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Booking from './Bookingj';
import Profile from './Profile';
import Blog from './Blog';
import Contact from './Contact';




function App() {
  return (
    <GoogleOAuthProvider clientId="109083504495-vcpk6rfke4t6q9g9cu6al02o8bi5g6vn.apps.googleusercontent.com"> {/* Thêm GoogleOAuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
