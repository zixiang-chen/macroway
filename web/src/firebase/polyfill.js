import { db } from "./core";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";


const writePolyfill = async (name, polyfill) => {
  try {
    const collectionRef = collection(db, 'polyfill');
    const documentRef = doc(collectionRef, name);
    await setDoc(documentRef, { ...polyfill, name });
    return true;
  } catch (error) {
    return false;
  }
};

const readPolyfill = async (name) => {
  const collectionRef = collection(db, 'polyfill');
  const documentRef = doc(collectionRef, name);
  const documentShot = await getDoc(documentRef);
  return documentShot.data(); // data object or undefined
};

export { writePolyfill, readPolyfill };