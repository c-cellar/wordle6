import {
  getDocs,
  collection,
  query,
  where,
  limit,
} from 'firebase/firestore/lite';
import { getDb } from './firebase';

const collection_name = 'wordlist';

export const findById = async () => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, where('id', '==', '00pucnusd9COYCFrno1t'));
  const doc_refs = await getDocs(q);

  return doc_refs;
};

export const getCollection = async () => {
  const doc_refs = await getDocs(query(collection(getDb(), collection_name)));
  return doc_refs;
};

export const getWordsFromDatabase = async () => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, limit(10));
  const doc_refs = await getDocs(q);

  const res = [];

  doc_refs.forEach((word) => {
    res.push(word._document.data.value.mapValue.fields.word.stringValue);
  });

  return res;
};
