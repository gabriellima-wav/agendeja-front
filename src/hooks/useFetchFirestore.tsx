import { useState } from "react";
import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  Query,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const useFetchFirestore = (collectionName: string) => {
  const [data, setData] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (
    filters?: { field: string; operator: WhereFilterOp; value: unknown }[]
  ) => {
    setLoading(true);
    setError(null);

    try {
      let firestoreQuery:
        | Query<DocumentData>
        | CollectionReference<DocumentData> = collection(db, collectionName);

      if (filters && filters.length > 0) {
        firestoreQuery = query(
          firestoreQuery,
          ...filters.map((filter) =>
            where(filter.field, filter.operator, filter.value)
          )
        );
      }

      const querySnapshot = await getDocs(firestoreQuery);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(fetchedData);
      setLoading(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao buscar dados");
      setLoading(false);
    }
  };

  return { data, fetchData, loading, error };
};
