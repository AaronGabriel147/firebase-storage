import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

import { projectStorage, projectFirestore } from '../firebase';

// console.log(docs[0].id);
// const removeQuote = id => deleteDoc(doc(projectFirestore, "images", id))
// {/* {console.log(docs)} */}
// {/* <button onClick={() => removeQuote(doc.id)}>Remove</button> */}


{/* <div className="img-cont">
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
    </motion.div>
))
}
</div > */}

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');


    const handleDelete = doc => {
        projectFirestore
            .collection('images')
            .doc(doc.id)
            .delete();
        projectStorage
            .ref('images')
            .child(doc.filename)
            .delete();
    };


    return (
        <div className="img-cont">

            {docs && docs.map(doc => {
                return (
                    <motion.div key={doc.id}
                        whileHover={{ opacity: 1 }}
                        layout
                    // onClick={e =>
                    // !e.target.classList.contains('delete-img')
                    // &&
                    // setSelectedImage(doc.url)
                    // }
                    // onClick={() => setSelectedImg(doc.url)}
                    >

                        <div className="img-box">

                            <motion.img
                                src={doc.url}
                                alt='Image'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                            <div
                                className='delete-img'
                                onClick={() => handleDelete(doc)}
                            >
                                🗑️
                            </div>
                        </div>


                    </motion.div>
                );
            })}

        </div>
    )
}

export default ImageGrid;


