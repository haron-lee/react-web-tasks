import { Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn.jsx';
import Nav from './Components/Nav.jsx';
import { GlobalStyle } from './GlobalStyle.jsx';

function App() {
  const [isCertified, setIsCertified] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Nav isCertified={isCertified} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LogIn setIsCertified={setIsCertified} />}
        />
        <Route path="/singup" element={<LogIn />} />
      </Routes>
    </>
  );
}
export default App;
