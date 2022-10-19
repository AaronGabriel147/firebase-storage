import "./App.css";
import React, { useState } from 'react';
import UploadForm from "./components/UploadForm";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Footer from "./components/Footer";


export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <p id="subtitle">Feel free to upload & delete anything</p>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
}