import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

// import { deleteDoc, doc } from "firebase/firestore";
import { doc, deleteField } from "firebase/firestore";
import { projectFirestore } from '../firebase';



const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    console.log(docs[0].id);


    // const removeQuote = id => deleteDoc(doc(projectFirestore, "images", id))

    return (
        <div className="img-cont">
            {console.log(docs)}
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} s
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                    {/* <button onClick={() => removeQuote(doc.id)}>Remove</button> */}



                </motion.div>


            ))
            }
        </div >
    )
}

export default ImageGrid;