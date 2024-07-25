import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

function DocumentEditor({ docId }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const docRef = firestore.collection('documents').doc(docId);
    const unsubscribe = docRef.onSnapshot((doc) => {
      setContent(doc.data().content);
    });

    return () => unsubscribe();
  }, [docId]);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    firestore.collection('documents').doc(docId).set({ content: newContent });
  };

  return (
    <textarea value={content} onChange={handleChange} />
  );
}

export default DocumentEditor;