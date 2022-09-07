// Apply database to allow for order, delete, and maybe even full size image on click
// Add progress bar
// MAke image upload busson, 1 button rather than 2!


// _____________________________________________________________________




import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  // console.log('@@@', imageUrls)

  return (
    <div className="app">

      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />

      <button onClick={uploadFile}>Submit Upload</button>

      <div className="img-cont">
        {imageUrls.reverse().map((url, id) => {
          console.log('yolo!!', url)
          return < img src={url} key={id} />
        })}
      </div>

    </div>
  );
}

export default App;


