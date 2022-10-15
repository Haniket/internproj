import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FileInput from './components/fileInput';
import Register from './components/regester';
import Login from './components/login';
import Dashboard from './components/dashbord';
import axios from 'axios';
function App() {
  const [image, setImage] = useState([]);

  const getAllImage = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/image');
      setImage(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllImage();
  }, []);

  return (
    <>
      <div className="app-contents">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/dashboard" />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/upload" element={<FileInput />} />
            <Route
              exact
              path="/dashboard"
              element={<Dashboard data={image} />}
            />
          </Routes>

          {console.log('image', image)}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
