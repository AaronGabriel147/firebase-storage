// Trashcan icon on each image.


import "./App.css";
import React, { useState } from 'react';
import UploadForm from "./components/UploadForm";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;



