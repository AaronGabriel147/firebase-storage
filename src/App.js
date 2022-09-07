// import './App.css';
// import { useState } from "react";
// import { storage } from "./firebase"
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// export default function App() {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState(null);


//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
//   // console.log(image)


//   const handleSubmit = () => {
//     const imageRef = ref(storage, "image");
//     uploadBytes(imageRef, image)
//       .then(() => {
//         getDownloadURL(imageRef)
//           .then((url) => {
//             setUrl(url);
//           })
//           .catch((error) => {
//             console.log(error.message, "Error getting image url")
//           });
//         setImage(null);
//       })
//   }

//   return (
//     <div className="app">

//       <input
//         type="file"
//         onChange={handleImageChange}
//       />

//       <button onClick={handleSubmit}>Upload</button>

//       <img src={url} height="325px" width="500px" />

//     </div >
//   );
// }


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
        {imageUrls.map((url, id) => {
          console.log('yolo!!', id)
          return < img src={url} key={id} />
        })}
      </div>

    </div>
  );
}

export default App;


