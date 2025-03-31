import { useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  FieldValue,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const useFirestore = (collectionName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addData = async (data: unknown) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      setLoading(false);
      return docRef.id;
    } catch (err) {
      setError((err as Error).message || "Erro ao adicionar dados");
      setLoading(false);
      throw err;
    }
  };

  const updateData = async (
    id: string,
    data: { [key: string]: FieldValue | Partial<unknown> | undefined }
  ) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      setLoading(false);
      return true;
    } catch (err: unknown) {
      setError((err as Error).message || "Erro ao atualizar dados");
      setLoading(false);
      throw err;
    }
  };

  return { addData, updateData, loading, error };
};
