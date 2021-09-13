import { db } from "./core";
import {
  collection, doc,
  addDoc, getDoc, deleteDoc, updateDoc,
  Timestamp
} from "firebase/firestore";

export const fetchArticle = async (id) => {
  const docRef = doc(db, 'articles', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export const addArticle = (article) => {
  console.log(article);
  return addDoc(
    collection(db, 'articles'),
    { ...article, createdAt: Timestamp.now() }
  );
}

export const deleteArticle = (id) => {
  return deleteDoc(doc(db, 'articles', id));
}

export const writePolyfill = async (name, polyfill) => {
  try {
    const collectionRef = collection(db, 'polyfill');
    const documentRef = doc(collectionRef, name);
    await updateDoc(documentRef, { ...polyfill, name });
    return true;
  } catch (error) {
    return false;
  }
};

export const readPolyfill = async (name) => {
  const collectionRef = collection(db, 'polyfill');
  const documentRef = doc(collectionRef, name);
  const documentShot = await getDoc(documentRef);
  return documentShot.data(); // data object or undefined
};
