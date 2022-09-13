import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        // Upload file to storage reference.
        // Whenever the file changes, it will upload the file to the storage reference.

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
            // If there is an err with the upload, it will set the error state.
        }, (err) => {
            setError(err);
            // When the upload is fully complete, it will set the url state.
        }, async () => {
            const url = await storageRef.getDownloadURL();
            // Adding the url and createdAt to the collection reference.
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;