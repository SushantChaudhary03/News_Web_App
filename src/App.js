import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Service from './Components/Service'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='red'
          progress={progress}
        />
        <Routes>
          <Route exet path="/about" element={<About/>} />
          <Route exet path="/service" element={<Service/>} />
          <Route exet path="/" element={<News setProgress={setProgress} key="all" apiKey={apiKey} pageSize={pageSize} country="in" category="" />} />
          <Route exet path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} />
          <Route exet path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exet path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route exet path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} />
          <Route exet path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} />
          <Route exet path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} />
          <Route exet path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} />

        </Routes>
      </Router>
      </>
  )
}

export default App
