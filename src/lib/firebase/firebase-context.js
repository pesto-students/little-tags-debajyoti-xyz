import { createContext } from "react";

/**
 * Mocked Firebase class object, only for auto-complete
 * @type {Firebase}
 */
const initialValue = {
  /**
   * @returns {Promise<import('firebase').default.auth.UserCredential>}
   */
  doGoogleSignIn: () => {},
  /**
   * @param {string} uid
   * @returns {import('firebase').default.database.Reference}
   */
  user: (uid) => {},
  /**
   * @returns {Promise<void>}
   */
  doSignOut: () => {},
  /**
   *
   * @param {(import('./firebase').User) => void} next
   * @param {() => void} fallback
   */
  onAuthChangeListener: (next, fallback) => {},
};

const FirebaseContext = createContext(initialValue);

export default FirebaseContext;

