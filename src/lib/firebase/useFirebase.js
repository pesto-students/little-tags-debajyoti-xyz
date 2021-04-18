import { useContext } from "react";
import FirebaseContext from "./firebase-context";

const useFirebase = () => {
  const firebase = useContext(FirebaseContext.Provider);
  return firebase;
};

export default useFirebase;
