import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { projectStorage, projectFirestore } from '../firebase';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    const handleDelete = (doc) => {
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
                        layout
                        onClick={e =>
                            !e.target.classList.contains('delete-img')
                            &&
                            setSelectedImg(doc.url)
                        }>
                        <div div className="img-box" >
                            <motion.img
                                src={doc.url}
                                alt='Out of free bandwith for the day. Check back tomorrow.'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                            {/* <div
                                className='delete-img'
                                onClick={() => handleDelete(doc)}
                            >
                                X
                            </div> */}
                        </div>
                    </motion.div >
                );
            })}
        </div >
    )
}
export default ImageGrid;


