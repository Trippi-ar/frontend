'use client'

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

// Configura tu app de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkFT9Rg-NIknXkySakvceIUr1CeFSlwKI",
    authDomain: "activity-storage-1a571.firebaseapp.com",
    databaseURL: "https://activity-storage-1a571-default-rtdb.firebaseio.com",
    projectId: "activity-storage-1a571",
    storageBucket: "activity-storage-1a571.appspot.com",
    messagingSenderId: "375306605320",
    appId: "1:375306605320:web:953e5baac07772e62252bd"
  };

firebase.initializeApp(firebaseConfig);

// Componente para obtener URL de imágenes
function ImageComponent() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Referencia al archivo en Firebase Storage
    const storageRef = firebase.storage().ref('b621a59c-0bdf-4e58-99ff-a2d77f4a2511.jpeg');

    // Obtener URL de descarga del archivo
    storageRef.getDownloadURL()
      .then(url => {
        setImageUrl(url); // Establecer la URL en el estado
      })
      .catch(error => {
        console.error('Error al obtener la URL:', error);
      });
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Imagen desde Firebase Storage" />}
    </div>
  );
}

export default ImageComponent;